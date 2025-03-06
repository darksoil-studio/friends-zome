use hc_zome_trait_notifications::NotificationsZomeTrait;
use hc_zome_traits::implemented_zome_traits;
use hdk::prelude::*;
use notifications::FriendsNotifications;

mod notifications;
mod private_event;

mod all_friends;
mod friend_request;
mod profile;

#[implemented_zome_traits]
pub enum ZomeTraits {
    Notifications(FriendsNotifications),
}
