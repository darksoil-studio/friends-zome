use hc_zome_traits::{implement_zome_trait_as_externs, implemented_zome_traits};
use hdk::prelude::*;
use migration_zome_trait::MigrationZomeTrait;
use notifications::FriendsNotifications;
use notifications_zome_trait::NotificationsZomeTrait;
use private_event_sourcing::EventHistory;
use profiles_provider::FriendsProfilesProvider;
use profiles_provider_zome_trait::ProfilesProviderZomeTrait;

mod notifications;
mod private_event;
mod profiles_provider;

mod all_friends;
mod friend_request;
mod profile;

#[implemented_zome_traits]
pub enum ZomeTraits {
    Notifications(FriendsNotifications),
    ProfilesProvider(FriendsProfilesProvider),
    Migration(FriendsMigration),
}

struct FriendsMigration;

#[implement_zome_trait_as_externs]
impl MigrationZomeTrait for FriendsMigration {
    fn migrate(old_cell_id: CellId) -> ExternResult<()> {
        let response = call(
            CallTargetCell::OtherCell(old_cell_id),
            zome_info()?.name,
            "export_event_history".into(),
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
}
