use hdk::prelude::*;
use private_event_sourcing::{query_all_my_agents, SignedEvent};

use crate::private_event::{query_friends_events, FriendsEvent, Profile};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Friend {
    pub agents: Vec<AgentPubKey>,
    pub profile: Profile,
}

#[hdk_extern]
pub fn query_all_friends() -> ExternResult<Vec<Friend>> {
    let friends_events = query_friends_events()?;

    let mut sorted_events: Vec<SignedEvent<FriendsEvent>> = friends_events.into_values().collect();

    sorted_events.sort_by(|e1, e2| e1.event.timestamp.cmp(&e2.event.timestamp));

    let mut friends: Vec<Friend> = Vec::new();

    let all_my_agents = query_all_my_agents()?;

    for friend_event in sorted_events {
        match friend_event.event.content {
            FriendsEvent::SetProfile { agents, profile } => {
                if agents.iter().find(|a| all_my_agents.contains(a)).is_some() {
                    // This is our SetProfile: continue
                    continue;
                }

                let maybe_position = friends.iter().position(|friend| {
                    friend
                        .agents
                        .iter()
                        .find(|a1| agents.contains(a1))
                        .is_some()
                });
                if let Some(position) = maybe_position {
                    friends[position].agents = agents;
                    friends[position].profile = profile;
                } else {
                    friends.push(Friend { agents, profile });
                }
            }
            FriendsEvent::RemoveFriend { agents } => {
                let maybe_position = friends.iter().position(|friend| {
                    friend
                        .agents
                        .iter()
                        .find(|a1| agents.contains(a1))
                        .is_some()
                        || all_my_agents.iter().find(|a| agents.contains(a)).is_some()
                });
                if let Some(position) = maybe_position {
                    friends.remove(position);
                }
            }
            _ => {}
        };
    }

    Ok(friends)
}
