use std::collections::BTreeMap;

use hc_zome_trait_notifications::NotificationsZomeTrait;
use hc_zome_traits::implemented_zome_traits;
use hdk::prelude::*;
use notifications::FriendsNotifications;
use private_event_sourcing::PrivateEventEntry;

mod notifications;
mod private_event;

mod all_friends;
mod friend_request;
mod profile;

#[implemented_zome_traits]
pub enum ZomeTraits {
    Notifications(FriendsNotifications),
}

#[hdk_extern]
pub fn migrate_from_old_cell(old_cell: CellId) -> ExternResult<()> {
    let response = call(
        CallTargetCell::OtherCell(old_cell),
        zome_info()?.name,
        "query_private_event_entries".into(),
        None,
        (),
    )?;

    let ZomeCallResponse::Ok(result) = response else {
        return Err(wasm_error!(
            "Error quering the old private event entries: {:?}.",
            response
        ));
    };
    let private_event_entries: BTreeMap<EntryHashB64, PrivateEventEntry> =
        result.decode().map_err(|err| wasm_error!(err))?;

    private_event_sourcing::import_events(private_event_entries)?;

    Ok(())
}
