use private_event_sourcing::call_local_zome;
use serde::de::DeserializeOwned;
use std::collections::BTreeMap;
use xliff::t::T;

use hc_zome_trait_notifications::*;
use hc_zome_traits::*;
use hdk::prelude::*;
use notifications_types::SendNotificationInput;

pub fn notifications_zome_name() -> Option<ZomeName> {
    match std::option_env!("NOTIFICATIONS_COORDINATOR_ZOME_NAME") {
        Some(zome_name) => Some(zome_name.into()),
        None => None,
    }
}

pub struct FriendsNotifications;

#[derive(Serialize, Deserialize, Debug, SerializedBytes)]
#[serde(tag = "type")]
pub enum FriendsNotification {
    NewFriendRequest {
        from_name: String,
        friend_request_hash: EntryHash,
    },
    AcceptedFriendRequest {
        name: String,
        friend_request_hash: EntryHash,
    },
    RejectedFriendRequest {
        name: String,
        friend_request_hash: EntryHash,
    },
    CancelledFriendRequest {
        name: String,
        friend_request_hash: EntryHash,
    },
    RemovedYouAsFriend {
        name: String,
        friend: BTreeSet<AgentPubKey>,
    },
}
impl FriendsNotification {
    fn notification_type(&self) -> String {
        match self {
            Self::NewFriendRequest { .. } => format!("NewFriendRequest"),
            Self::AcceptedFriendRequest { .. } => format!("AcceptedFriendRequest"),
            Self::RejectedFriendRequest { .. } => format!("RejectedFriendRequest"),
            Self::CancelledFriendRequest { .. } => format!("CancelledFriendRequest"),
            Self::RemovedYouAsFriend { .. } => format!("RemovedYouAsFriend"),
        }
    }
    fn notification_group(&self) -> String {
        match self {
            Self::NewFriendRequest {
                friend_request_hash,
                ..
            } => format!("{friend_request_hash}"),
            Self::AcceptedFriendRequest {
                friend_request_hash,
                ..
            } => format!("{friend_request_hash}"),
            Self::RejectedFriendRequest {
                friend_request_hash,
                ..
            } => format!("{friend_request_hash}"),
            Self::CancelledFriendRequest {
                friend_request_hash,
                ..
            } => format!("{friend_request_hash}"),
            Self::RemovedYouAsFriend { friend, .. } => format!("{friend:?}"),
        }
    }
}

#[implement_zome_trait_as_externs]
impl NotificationsZomeTrait for FriendsNotifications {
    fn get_notifications_types(locale: String) -> ExternResult<BTreeMap<String, NotificationType>> {
        let mut types: BTreeMap<String, NotificationType> = BTreeMap::new();

        types.insert(
            "NewFriendRequest".into(),
            NotificationType {
                name: t(&locale, "New friend request"),
                description: t(&locale, "You received a new friend request."),
            },
        );

        types.insert(
            "AcceptedFriendRequest".into(),
            NotificationType {
                name: t(&locale, "Accepted friend request"),
                description: t(&locale, "Your friend request was accepted."),
            },
        );

        types.insert(
            "RejectedFriendRequest".into(),
            NotificationType {
                name: t(&locale, "Rejected friend request"),
                description: t(&locale, "Your friend request was rejected."),
            },
        );

        types.insert(
            "CancelledFriendRequest".into(),
            NotificationType {
                name: t(&locale, "Cancelled friend request"),
                description: t(&locale, "A friend request you received was cancelled."),
            },
        );

        types.insert(
            "RemovedYouAsFriend".into(),
            NotificationType {
                name: t(&locale, "You were removed as a friend"),
                description: t(
                    &locale,
                    "One of your friends removed you from their friends.",
                ),
            },
        );

        Ok(types)
    }

    fn get_notification_contents(
        input: GetNotificationContentsInput,
    ) -> ExternResult<NotificationContents> {
        let notification = FriendsNotification::try_from(input.notification.content)
            .map_err(|err| wasm_error!(err))?;

        match notification {
            FriendsNotification::NewFriendRequest { from_name, .. } => Ok(NotificationContents {
                title: t(&input.locale, "New friend request."),
                body: format!(
                    "{} {}.",
                    from_name,
                    t(&input.locale, "sent you a friend request"),
                ),
                icon_src: format!(
                    "data:image/svg+xml;charset=utf-8,{}",
                    md_icons::filled::ICON_PERSON_ADD
                ),
                url_path_to_navigate_to_on_click: Some(String::from("/friend-requests")),
            }),
            FriendsNotification::AcceptedFriendRequest { name, .. } => Ok(NotificationContents {
                title: t(&input.locale, "Friend request was accepted."),
                body: format!(
                    "{} {} {}.",
                    t(&input.locale, "Your friend request for"),
                    name,
                    t(&input.locale, "was accepted"),
                ),
                icon_src: format!(
                    "data:image/svg+xml;charset=utf-8,{}",
                    md_icons::filled::ICON_HOW_TO_REG
                ),
                url_path_to_navigate_to_on_click: None,
            }),
            FriendsNotification::RejectedFriendRequest { name, .. } => Ok(NotificationContents {
                title: t(&input.locale, "Friend request was rejected."),
                body: format!(
                    "{} {} {}.",
                    t(&input.locale, "Your friend request for"),
                    name,
                    t(&input.locale, "was rejected"),
                ),
                icon_src: format!(
                    "data:image/svg+xml;charset=utf-8,{}",
                    md_icons::filled::ICON_PERSON_REMOVE_ALT_1
                ),
                url_path_to_navigate_to_on_click: None,
            }),
            FriendsNotification::CancelledFriendRequest { name, .. } => Ok(NotificationContents {
                title: t(&input.locale, "Friend request was cancelled."),
                body: format!(
                    "{} {} {}.",
                    t(&input.locale, "Friend request from"),
                    name,
                    t(&input.locale, "was cancelled"),
                ),
                icon_src: format!(
                    "data:image/svg+xml;charset=utf-8,{}",
                    md_icons::filled::ICON_PERSON_REMOVE_ALT_1
                ),
                url_path_to_navigate_to_on_click: None,
            }),
            FriendsNotification::RemovedYouAsFriend { name, .. } => Ok(NotificationContents {
                title: t(&input.locale, "One of your friends removed you."),
                body: format!(
                    "{} {}.",
                    name,
                    t(&input.locale, "removed you from their friends"),
                ),
                icon_src: format!(
                    "data:image/svg+xml;charset=utf-8,{}",
                    md_icons::filled::ICON_PERSON_REMOVE_ALT_1
                ),
                url_path_to_navigate_to_on_click: None,
            }),
        }
    }
}

fn t(locale: &String, source: &str) -> String {
    match locale.as_str() {
        // "sv" => t_from_xliff(include_str!("../../../../ui/xliff/sv.xlf"), source),
        "en" => source.to_string(),
        _ => source.to_string(),
    }
}

fn t_from_xliff(xliff_str: &str, source: &str) -> String {
    let t = T::load_str(xliff_str);
    let unit = t.t_source(None, source);
    if let Some(unit) = unit {
        if let Some(t) = unit.target_text() {
            return t.clone();
        }
    }
    source.to_string()
}

// Call the notifications zome, if it exists
// If the notifications zome does not exist, it will return None
fn call_notifications<R, P>(fn_name: FunctionName, payload: P) -> ExternResult<Option<R>>
where
    P: serde::Serialize + std::fmt::Debug,
    R: DeserializeOwned + std::fmt::Debug,
{
    let Some(zome_name) = notifications_zome_name() else {
        return Ok(None);
    };
    call_local_zome(zome_name, fn_name, payload)
}

pub fn send_friends_notification(
    recipient: AgentPubKey,
    friends_notification: FriendsNotification,
) -> ExternResult<()> {
    // We don't care in this case if the notification is not sent
    let _result: Option<()> = call_notifications(
        "send_notification".into(),
        SendNotificationInput {
            zome_name: zome_info()?.name,
            notification_type: friends_notification.notification_type(),
            notification_group: friends_notification.notification_group(),
            recipient,
            content: SerializedBytes::try_from(friends_notification)
                .map_err(|err| wasm_error!(err))?,
        },
    )?;

    Ok(())
}
