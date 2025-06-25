use hdk::prelude::*;
use private_event_sourcing::{create_private_event, query_all_my_agents, SignedEvent};

use crate::private_event::{query_friends_events, FriendsEvent, Profile};

#[hdk_extern]
pub fn set_my_profile(profile: Profile) -> ExternResult<()> {
    let agents: BTreeSet<AgentPubKey> = query_all_my_agents()?.into_iter().collect();
    create_private_event(FriendsEvent::SetProfile { agents, profile })?;
    Ok(())
}

#[hdk_extern]
pub fn query_my_profile() -> ExternResult<Option<Profile>> {
    let my_profile_event = query_my_profile_event()?;
    Ok(my_profile_event.map(|(_hash, profile)| profile))
}

pub fn query_my_profile_event() -> ExternResult<Option<(EntryHashB64, Profile)>> {
    let friends_events = query_friends_events()?;

    let mut sorted_events: Vec<(EntryHashB64, SignedEvent<FriendsEvent>)> =
        friends_events.into_iter().collect();

    sorted_events.sort_by_key(|e| e.1.payload.timestamp);

    let all_my_agents = query_all_my_agents()?;

    let profile_events: Vec<(EntryHashB64, Profile)> = sorted_events
        .into_iter()
        .filter_map(|(entry_hash, event)| match event.payload.content.event {
            FriendsEvent::SetProfile { agents, profile } => {
                match agents.iter().any(|a| all_my_agents.contains(a)) {
                    true => Some((entry_hash.clone(), profile)),
                    false => None,
                }
            }
            _ => None,
        })
        .collect();

    Ok(profile_events.last().cloned())
}
