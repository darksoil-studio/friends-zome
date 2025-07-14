use std::io::Cursor;

use image::ImageReader;
use xliff::t::T;

use hc_zome_traits::*;
use hdk::prelude::*;
use notifications_zome_trait::*;
use private_event_sourcing::{query_all_my_agents, query_private_event};

use crate::{private_event::FriendsEvent, profile::query_profile_event_for};

pub struct FriendsNotifications;

#[implement_zome_trait_as_externs]
impl NotificationsZomeTrait for FriendsNotifications {
    fn get_notification(input: GetNotificationInput) -> ExternResult<Option<Notification>> {
        let event_hash = EntryHashB64::from_b64_str(input.notification_id.as_str())
            .map_err(|_err| wasm_error!("Failed to convert notification id to EntryHash."))?;
        let Some(private_event) = query_private_event::<FriendsEvent>(event_hash.clone().into())?
        else {
            return Ok(None);
        };

        let my_agents = query_all_my_agents()?;

        if my_agents.contains(&private_event.author) {
            return Ok(None);
        }

        match private_event.payload.content.event {
            FriendsEvent::FriendRequest { from_name, .. } => Ok(Some(Notification {
                title: t(&input.locale, "New friend request."),
                body: format!(
                    "{} {}.",
                    from_name,
                    t(&input.locale, "sent you a friend request"),
                ),
                large_body: Some(format!(
                    "{} {}.",
                    from_name,
                    t(&input.locale, "sent you a friend request"),
                )),
                summary: None,
                // icon_src: format!(
                //     "data:image/svg+xml;charset=utf-8,{}",
                //     md_icons::filled::ICON_PERSON_ADD
                // ),
                icon: None,
                large_icon: None,
                icon_color: None,
                group: Some(format!("friend-request/{}", event_hash)),
                group_summary: true,
            })),
            FriendsEvent::AcceptFriendRequest {
                friend_request_hash,
            } => {
                let Some(friend_request) =
                    query_private_event::<FriendsEvent>(friend_request_hash.clone())?
                else {
                    return Err(wasm_error!("Failed to find friend request hash"));
                };
                let FriendsEvent::FriendRequest { to_name, .. } =
                    friend_request.payload.content.event
                else {
                    return Err(wasm_error!(
                        "friend_request_hash is not for a friend request."
                    ));
                };

                Ok(Some(Notification {
                    title: t(&input.locale, "Friend request was accepted."),
                    body: format!(
                        "{} {} {}.",
                        t(&input.locale, "Your friend request for"),
                        to_name,
                        t(&input.locale, "was accepted"),
                    ),
                    large_body: Some(format!(
                        "{} {} {}.",
                        t(&input.locale, "Your friend request for"),
                        to_name,
                        t(&input.locale, "was accepted"),
                    )),
                    summary: None,
                    icon: None,
                    large_icon: None,
                    icon_color: None,
                    // icon_src: format!(
                    //     "data:image/svg+xml;charset=utf-8,{}",
                    //     md_icons::filled::ICON_HOW_TO_REG
                    // ),
                    group: Some(format!("friend-request/{}", friend_request_hash)),
                    group_summary: true,
                }))
            }
            FriendsEvent::RejectFriendRequest {
                friend_request_hash,
            } => {
                let Some(friend_request) =
                    query_private_event::<FriendsEvent>(friend_request_hash.clone())?
                else {
                    return Err(wasm_error!("Failed to find friend request hash"));
                };
                let FriendsEvent::FriendRequest { to_name, .. } =
                    friend_request.payload.content.event
                else {
                    return Err(wasm_error!(
                        "friend_request_hash is not for a friend request."
                    ));
                };

                Ok(Some(Notification {
                    title: t(&input.locale, "Friend request was rejected."),
                    body: format!(
                        "{} {} {}.",
                        t(&input.locale, "Your friend request for"),
                        to_name,
                        t(&input.locale, "was rejected"),
                    ),
                    large_body: Some(format!(
                        "{} {} {}.",
                        t(&input.locale, "Your friend request for"),
                        to_name,
                        t(&input.locale, "was rejected"),
                    )),
                    icon: None,
                    large_icon: None,
                    icon_color: None,
                    // icon_src: format!(
                    //     "data:image/svg+xml;charset=utf-8,{}",
                    //     md_icons::filled::ICON_PERSON_REMOVE_ALT_1
                    // ),
                    group: Some(format!("friend-request/{}", friend_request_hash)),
                    group_summary: true,
                    summary: None,
                }))
            }
            FriendsEvent::CancelFriendRequest {
                friend_request_hash,
            } => {
                let Some(friend_request) =
                    query_private_event::<FriendsEvent>(friend_request_hash.clone())?
                else {
                    return Err(wasm_error!("Failed to find friend request hash"));
                };
                let FriendsEvent::FriendRequest { from_name, .. } =
                    friend_request.payload.content.event
                else {
                    return Err(wasm_error!(
                        "friend_request_hash is not for a friend request."
                    ));
                };

                Ok(Some(Notification {
                    title: t(&input.locale, "Friend request was cancelled."),
                    body: format!(
                        "{} {} {}.",
                        t(&input.locale, "Friend request from"),
                        from_name,
                        t(&input.locale, "was cancelled"),
                    ),
                    large_body: Some(format!(
                        "{} {} {}.",
                        t(&input.locale, "Friend request from"),
                        from_name,
                        t(&input.locale, "was cancelled"),
                    )),
                    icon: None,
                    large_icon: None,
                    icon_color: None,
                    // icon_src: format!(
                    //     "data:image/svg+xml;charset=utf-8,{}",
                    //     md_icons::filled::ICON_PERSON_REMOVE_ALT_1
                    // ),
                    group: Some(format!("friend-request/{}", friend_request_hash)),
                    group_summary: true,
                    summary: None,
                }))
            }
            FriendsEvent::RemoveFriend { .. } => {
                let Some((_, sender_profile)) =
                    query_profile_event_for(vec![private_event.author].into_iter().collect())?
                else {
                    return Err(wasm_error!(
                        "Failed to find profile for friend after they have removed me."
                    ));
                };

                let large_icon = match sender_profile.avatar {
                    None => None,
                    Some(avatar) => {
                        // let image_bytes = avatar.as_bytes().to_vec();
                        // let img = ImageReader::new(Cursor::new(image_bytes))
                        //     .with_guessed_format()
                        //     .map_err(|err| wasm_error!("Failed to guess image format: {:?}", err))?
                        //     .decode()
                        //     .map_err(|err| wasm_error!("Failed to decode image: {:?}", err))?;

                        // let mut bytes: Vec<u8> = Vec::new();
                        // img.write_to(&mut Cursor::new(&mut bytes), image::ImageFormat::Bmp)
                        //     .map_err(|err| wasm_error!("Failed to write image {:?}", err))?;

                        // Some(bytes)
                        None
                    }
                };

                Ok(Some(Notification {
                    title: t(&input.locale, "One of your friends removed you."),
                    body: format!(
                        "{} {}.",
                        sender_profile.name,
                        t(&input.locale, "removed you from their friends"),
                    ),
                    large_body: Some(format!(
                        "{} {}.",
                        sender_profile.name,
                        t(&input.locale, "removed you from their friends"),
                    )),
                    icon: None,
                    large_icon,
                    icon_color: None,
                    // icon_src: format!(
                    //     "data:image/svg+xml;charset=utf-8,{}",
                    //     md_icons::filled::ICON_PERSON_REMOVE_ALT_1
                    // ),
                    group: None,
                    group_summary: true,
                    summary: None,
                }))
            }
            _ => Ok(None),
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
