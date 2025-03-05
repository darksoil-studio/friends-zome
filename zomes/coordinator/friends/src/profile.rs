use hdk::prelude::*;
use private_event_sourcing::{create_private_event, query_all_my_agents, SignedEvent};

use crate::private_event::{query_friends_events, FriendsEvent, Profile};

#[hdk_extern]
pub fn set_my_profile(profile: Profile) -> ExternResult<()> {
    let agents = query_all_my_agents()?;
    create_private_event(FriendsEvent::SetProfile { agents, profile })?;
    Ok(())
}

#[hdk_extern]
pub fn query_my_profile() -> ExternResult<Option<Profile>> {
    let contacts_events = query_friends_events()?;

    let mut sorted_events: Vec<SignedEvent<FriendsEvent>> = contacts_events.into_values().collect();

    sorted_events.sort_by(|e1, e2| e1.event.timestamp.cmp(&e2.event.timestamp));

    let all_my_agents = query_all_my_agents()?;

    let profile_events: Vec<Profile> = sorted_events
        .into_iter()
        .filter_map(|event| match event.event.content {
            FriendsEvent::SetProfile { agents, profile } => {
                match agents.iter().find(|a| all_my_agents.contains(a)).is_some() {
                    true => Some(profile),
                    false => None,
                }
            }
            _ => None,
        })
        .collect();

    Ok(profile_events.last().cloned())
}
