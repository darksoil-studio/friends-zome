use hdk::prelude::*;
use private_event_sourcing::{create_private_event, query_all_my_agents, query_private_event};

use crate::{
    notifications::{send_friends_notification, FriendsNotification},
    private_event::FriendsEvent,
    profile::query_my_profile,
};

#[derive(Serialize, Deserialize, Debug)]
pub struct SendFriendRequestInput {
    pub to_name: String,
    pub to_agents: BTreeSet<AgentPubKey>,
}

#[hdk_extern]
pub fn send_friend_request(input: SendFriendRequestInput) -> ExternResult<EntryHash> {
    let Some(my_profile) = query_my_profile(())? else {
        return Err(wasm_error!(
            "Can't request to share contacts before creating a profile."
        ));
    };

    let my_agents: BTreeSet<AgentPubKey> = query_all_my_agents()?.into_iter().collect();

    let Some(agent) = input.to_agents.first().clone() else {
        return Err(wasm_error!("Cannot send friend request with no agents."));
    };

    let friend_request_hash = create_private_event(FriendsEvent::FriendRequest {
        from_name: my_profile.name.clone(),
        from_agents: my_agents,
        to_name: input.to_name,
        to_agents: input.to_agents.clone(),
    })?;

    send_friends_notification(
        agent.clone(),
        FriendsNotification::NewFriendRequest {
            from_name: my_profile.name.clone(),
            friend_request_hash: friend_request_hash.clone(),
        },
    )?;

    Ok(friend_request_hash)
}

#[hdk_extern]
pub fn accept_friend_request(friend_request_hash: EntryHash) -> ExternResult<()> {
    let Some(friend_request_entry) =
        query_private_event::<FriendsEvent>(friend_request_hash.clone())?
    else {
        return Err(wasm_error!("Friend request not found."));
    };
    let FriendsEvent::FriendRequest { from_agents, .. } =
        friend_request_entry.payload.content.event
    else {
        return Err(wasm_error!("The given hash is not for a friend request."));
    };
    let Some(my_profile) = query_my_profile(())? else {
        return Err(wasm_error!(
            "Can't accept friend requests before creating a profile."
        ));
    };

    let Some(agent) = from_agents.first() else {
        return Err(wasm_error!("Cannot accept friend request with no agents."));
    };
    create_private_event(FriendsEvent::AcceptFriendRequest {
        friend_request_hash: friend_request_hash.clone(),
    })?;

    send_friends_notification(
        agent.clone(),
        FriendsNotification::AcceptedFriendRequest {
            name: my_profile.name.clone(),
            friend_request_hash: friend_request_hash.clone(),
        },
    )?;

    Ok(())
}

#[hdk_extern]
pub fn reject_friend_request(friend_request_hash: EntryHash) -> ExternResult<()> {
    let Some(friend_request_entry) =
        query_private_event::<FriendsEvent>(friend_request_hash.clone())?
    else {
        return Err(wasm_error!("Friend request not found."));
    };
    let FriendsEvent::FriendRequest { from_agents, .. } =
        friend_request_entry.payload.content.event
    else {
        return Err(wasm_error!("The given hash is not for a friend request."));
    };
    let Some(my_profile) = query_my_profile(())? else {
        return Err(wasm_error!(
            "Can't accept friend requests before creating a profile."
        ));
    };

    let Some(agent) = from_agents.first() else {
        return Err(wasm_error!("Cannot reject friend request with no agents."));
    };
    create_private_event(FriendsEvent::RejectFriendRequest {
        friend_request_hash: friend_request_hash.clone(),
    })?;
    send_friends_notification(
        agent.clone(),
        FriendsNotification::RejectedFriendRequest {
            name: my_profile.name.clone(),
            friend_request_hash: friend_request_hash.clone(),
        },
    )?;
    Ok(())
}

#[hdk_extern]
pub fn cancel_friend_request(friend_request_hash: EntryHash) -> ExternResult<()> {
    let Some(friend_request_entry) =
        query_private_event::<FriendsEvent>(friend_request_hash.clone())?
    else {
        return Err(wasm_error!("Friend request not found."));
    };
    let FriendsEvent::FriendRequest { to_agents, .. } = friend_request_entry.payload.content.event
    else {
        return Err(wasm_error!("The given hash is not for a friend request."));
    };
    let Some(my_profile) = query_my_profile(())? else {
        return Err(wasm_error!(
            "Can't accept friend requests before creating a profile."
        ));
    };

    let Some(agent) = to_agents.first() else {
        return Err(wasm_error!("Cannot cancel friend request with no agents."));
    };
    create_private_event(FriendsEvent::CancelFriendRequest {
        friend_request_hash: friend_request_hash.clone(),
    })?;

    send_friends_notification(
        agent.clone(),
        FriendsNotification::CancelledFriendRequest {
            name: my_profile.name.clone(),
            friend_request_hash: friend_request_hash.clone(),
        },
    )?;

    Ok(())
}

#[hdk_extern]
pub fn remove_friend(agents: BTreeSet<AgentPubKey>) -> ExternResult<()> {
    let Some(my_profile) = query_my_profile(())? else {
        return Err(wasm_error!(
            "Can't remove friends before creating a profile."
        ));
    };

    let Some(agent) = agents.first() else {
        return Err(wasm_error!("Cannot remove friend with no agents."));
    };
    create_private_event(FriendsEvent::RemoveFriend {
        agents: agents.clone(),
    })?;
    send_friends_notification(
        agent.clone(),
        FriendsNotification::RemovedYouAsFriend {
            name: my_profile.name.clone(),
            friend: agents.clone(),
        },
    )?;
    Ok(())
}
