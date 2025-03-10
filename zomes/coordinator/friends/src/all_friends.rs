use std::collections::BTreeMap;

use hdk::prelude::*;
use private_event_sourcing::{query_all_my_agents, SignedEvent};

use crate::private_event::{query_friends_events, FriendsEvent, Profile};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Friend {
    pub agents: BTreeSet<AgentPubKey>,
    pub profile: Profile,
}

#[hdk_extern]
pub fn query_all_friends() -> ExternResult<Vec<Friend>> {
    let friends_events = query_friends_events()?;

    let mut sorted_events: Vec<(EntryHashB64, SignedEvent<FriendsEvent>)> =
        friends_events.into_iter().collect();

    sorted_events.sort_by(|e1, e2| e1.1.event.timestamp.cmp(&e2.1.event.timestamp));

    let all_my_agents = query_all_my_agents()?;

    let mut friend_requests: BTreeMap<EntryHashB64, (Timestamp, BTreeSet<AgentPubKey>)> =
        BTreeMap::new();

    for (entry_hash, friend_event) in &sorted_events {
        let FriendsEvent::FriendRequest {
            to_agents,
            from_agents,
            ..
        } = &friend_event.event.content
        else {
            continue;
        };
        let peer_agents = if from_agents.iter().any(|a| all_my_agents.contains(a)) {
            to_agents
        } else {
            from_agents
        };
        friend_requests.insert(
            entry_hash.clone(),
            (friend_event.event.timestamp, peer_agents.clone()),
        );
    }

    let mut accepted_friend_requests: Vec<(Timestamp, BTreeSet<AgentPubKey>)> = Vec::new();

    for (_entry_hash, friend_event) in &sorted_events {
        let FriendsEvent::AcceptFriendRequest {
            friend_request_hash,
        } = &friend_event.event.content
        else {
            continue;
        };
        let Some(friend) = friend_requests.get(&EntryHashB64::from(friend_request_hash.clone()))
        else {
            continue;
        };
        accepted_friend_requests.push(friend.clone());
    }

    for (_entry_hash, friend_event) in &sorted_events {
        let FriendsEvent::RemoveFriend { agents } = &friend_event.event.content else {
            continue;
        };

        accepted_friend_requests = accepted_friend_requests
            .into_iter()
            .filter(|(timestamp, friend)| {
                friend_event.event.timestamp.lt(timestamp)
                    || (friend.is_disjoint(agents) && !friend.contains(&friend_event.author))
            })
            .collect();
    }

    let mut friends: Vec<Friend> = Vec::new();

    for (_hash, friend_event) in sorted_events {
        let FriendsEvent::SetProfile { agents, profile } = friend_event.event.content else {
            continue;
        };
        if agents.iter().any(|a| all_my_agents.contains(a)) {
            // This is our SetProfile: continue
            continue;
        }
        if !accepted_friend_requests
            .iter()
            .any(|(_timestamp, friend)| !friend.is_disjoint(&agents))
        {
            continue;
        }

        let maybe_position = friends
            .iter()
            .position(|friend| !friend.agents.is_disjoint(&agents));
        if let Some(position) = maybe_position {
            friends[position].agents = agents;
            friends[position].profile = profile;
        } else {
            friends.push(Friend { agents, profile });
        }
    }

    Ok(friends)
}

pub fn query_my_friends() -> ExternResult<Vec<BTreeSet<AgentPubKey>>> {
    let friends_events = query_friends_events()?;

    let mut sorted_events: Vec<(EntryHashB64, SignedEvent<FriendsEvent>)> =
        friends_events.into_iter().collect();

    sorted_events.sort_by(|e1, e2| e1.1.event.timestamp.cmp(&e2.1.event.timestamp));

    let all_my_agents = query_all_my_agents()?;

    let mut friend_requests: BTreeMap<EntryHashB64, (Timestamp, BTreeSet<AgentPubKey>)> =
        BTreeMap::new();

    for (entry_hash, friend_event) in &sorted_events {
        let FriendsEvent::FriendRequest {
            to_agents,
            from_agents,
            ..
        } = &friend_event.event.content
        else {
            continue;
        };
        let peer_agents = if from_agents.iter().any(|a| all_my_agents.contains(a)) {
            to_agents
        } else {
            from_agents
        };
        friend_requests.insert(
            entry_hash.clone(),
            (friend_event.event.timestamp, peer_agents.clone()),
        );
    }

    let mut accepted_friend_requests: Vec<(Timestamp, BTreeSet<AgentPubKey>)> = Vec::new();

    for (_entry_hash, friend_event) in &sorted_events {
        let FriendsEvent::AcceptFriendRequest {
            friend_request_hash,
        } = &friend_event.event.content
        else {
            continue;
        };
        let Some(friend) = friend_requests.get(&EntryHashB64::from(friend_request_hash.clone()))
        else {
            continue;
        };
        accepted_friend_requests.push(friend.clone());
    }

    for (_entry_hash, friend_event) in &sorted_events {
        let FriendsEvent::RemoveFriend { agents } = &friend_event.event.content else {
            continue;
        };

        accepted_friend_requests = accepted_friend_requests
            .into_iter()
            .filter(|(timestamp, friend)| {
                friend_event.event.timestamp.lt(timestamp)
                    || (friend.is_disjoint(agents) && !friend.contains(&friend_event.author))
            })
            .collect();
    }

    let friends = accepted_friend_requests
        .into_iter()
        .map(|(_, agents)| agents)
        .collect();

    Ok(friends)
}
