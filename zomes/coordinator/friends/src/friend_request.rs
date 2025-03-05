use hdk::prelude::*;
use private_event_sourcing::{
    create_private_event, query_all_my_agents, send_private_event_to_new_recipients, PrivateEvent,
    SignedEvent,
};

use crate::{
    private_event::{query_friends_events, FriendsEvent},
    profile::query_my_profile,
};

#[derive(Serialize, Deserialize, Debug)]
pub struct SendFriendRequestInput {
    pub to_name: String,
    pub to_agents: Vec<AgentPubKey>,
}

#[hdk_extern]
pub fn send_friend_request(input: SendFriendRequestInput) -> ExternResult<EntryHash> {
    let Some(my_profile) = query_my_profile(())? else {
        return Err(wasm_error!(
            "Can't request to share contacts before creating a profile."
        ));
    };

    let my_agents = query_all_my_agents()?;

    create_private_event(FriendsEvent::FriendRequest {
        from_name: my_profile.name,
        from_agents: my_agents,
        to_name: input.to_name,
        to_agents: input.to_agents,
    })
}

#[hdk_extern]
pub fn accept_friend_request(friend_request_hash: EntryHash) -> ExternResult<()> {
    create_private_event(FriendsEvent::AcceptFriendRequest {
        friend_request_hash,
    })?;

    Ok(())
}

#[hdk_extern]
pub fn reject_friend_request(friend_request_hash: EntryHash) -> ExternResult<()> {
    create_private_event(FriendsEvent::RejectFriendRequest {
        friend_request_hash,
    })?;
    Ok(())
}

#[hdk_extern]
pub fn cancel_friend_request(friend_request_hash: EntryHash) -> ExternResult<()> {
    create_private_event(FriendsEvent::CancelFriendRequest {
        friend_request_hash,
    })?;
    Ok(())
}

#[hdk_extern]
pub fn remove_friend(agents: Vec<AgentPubKey>) -> ExternResult<()> {
    create_private_event(FriendsEvent::RemoveFriend { agents })?;
    Ok(())
}
