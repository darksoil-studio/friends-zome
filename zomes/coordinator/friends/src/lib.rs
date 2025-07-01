use hc_zome_traits::implemented_zome_traits;
use hdk::prelude::*;
use notifications::FriendsNotifications;
use notifications_zome_trait::NotificationsZomeTrait;
use private_event_sourcing::EventHistory;

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
        "query_event_history".into(),
        None,
        (),
    )?;

    let ZomeCallResponse::Ok(result) = response else {
        return Err(wasm_error!(
            "Error quering the old private event entries: {:?}.",
            response
        ));
    };
    let event_history: EventHistory = result.decode().map_err(|err| wasm_error!(err))?;

    private_event_sourcing::import_event_history(event_history)?;

    Ok(())
}
