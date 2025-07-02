use hc_zome_traits::implement_zome_trait_as_externs;
use hdk::prelude::*;
use private_event_sourcing::SignedEvent;
use profiles_provider_zome_trait::{Profile, ProfilesProviderZomeTrait};

use crate::private_event::{query_friends_events, FriendsEvent};

pub struct FriendsProfilesProvider;

#[implement_zome_trait_as_externs]
impl ProfilesProviderZomeTrait for FriendsProfilesProvider {
    fn get_profile(agent: AgentPubKey) -> ExternResult<Option<Profile>> {
        let mut events: Vec<SignedEvent<FriendsEvent>> =
            query_friends_events()?.into_values().collect();

        events.sort_by_key(|e| e.payload.timestamp);
        events.reverse();

        for event in events {
            let FriendsEvent::SetProfile { agents, profile } = event.payload.content.event else {
                continue;
            };

            if agents.contains(&agent) {
                return Ok(Some(profile));
            }
        }

        Ok(None)
    }
}
