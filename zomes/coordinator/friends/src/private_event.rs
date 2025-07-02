use std::collections::BTreeMap;

use hdk::prelude::*;
use private_event_sourcing::*;
pub use profiles_provider_zome_trait::Profile;

use crate::all_friends::query_my_friends;

#[private_event]
pub enum FriendsEvent {
    /// Friend Request
    FriendRequest {
        from_name: String,
        from_agents: BTreeSet<AgentPubKey>,
        to_name: String,
        to_agents: BTreeSet<AgentPubKey>,
    },
    AcceptFriendRequest {
        friend_request_hash: EntryHash,
    },
    RejectFriendRequest {
        friend_request_hash: EntryHash,
    },
    CancelFriendRequest {
        friend_request_hash: EntryHash,
    },
    /// Profile
    SetProfile {
        agents: BTreeSet<AgentPubKey>,
        profile: Profile,
    },
    /// Remove Friend
    RemoveFriend {
        agents: BTreeSet<AgentPubKey>,
    },
}

impl PrivateEvent for FriendsEvent {
    fn validate(
        &self,
        _event_hash: EntryHash,
        author: AgentPubKey,
        _timestamp: Timestamp,
    ) -> ExternResult<ValidateCallbackResult> {
        match self {
            FriendsEvent::FriendRequest {
                from_agents,
                to_agents,
                ..
            } => {
                if !from_agents.contains(&author) {
                    return Ok(ValidateCallbackResult::Invalid(
                        "FriendRequest from agents should contain the author.".into(),
                    ));
                }

                let my_agents = query_all_my_agents()?;

                if !from_agents.iter().any(|agent| my_agents.contains(agent))
                    && !to_agents.iter().any(|agent| my_agents.contains(agent))
                {
                    return Ok(ValidateCallbackResult::Invalid(
                        "FriendRequest is not for me.".into(),
                    ));
                }

                Ok(ValidateCallbackResult::Valid)
            }
            FriendsEvent::SetProfile { agents, .. } => {
                if !agents.contains(&author) {
                    return Ok(ValidateCallbackResult::Invalid(
                        "Agents must include the author of the SetProfile event.".into(),
                    ));
                }

                Ok(ValidateCallbackResult::Valid)
            }
            FriendsEvent::AcceptFriendRequest {
                friend_request_hash,
            }
            | FriendsEvent::RejectFriendRequest {
                friend_request_hash,
            }
            | FriendsEvent::CancelFriendRequest {
                friend_request_hash,
            } => {
                let Some(friend_request) =
                    query_private_event::<FriendsEvent>(friend_request_hash.clone())?
                else {
                    return Ok(ValidateCallbackResult::UnresolvedDependencies(
                        UnresolvedDependencies::Hashes(vec![friend_request_hash.clone().into()]),
                    ));
                };

                let FriendsEvent::FriendRequest { .. } = friend_request.payload.content.event
                else {
                    return Ok(ValidateCallbackResult::Invalid(
                        "Given hash was not for a FriendRequest".into(),
                    ));
                };
                Ok(ValidateCallbackResult::Valid)
            }
            FriendsEvent::RemoveFriend { agents } => {
                let my_friends: BTreeSet<AgentPubKey> =
                    query_my_friends()?.into_iter().flatten().collect();

                if !my_friends.contains(&author) && !agents.iter().any(|a| my_friends.contains(a)) {
                    return Ok(ValidateCallbackResult::Invalid(
                        "We can't remove friend because we are not friends with this agent.".into(),
                    ));
                };
                Ok(ValidateCallbackResult::Valid)
            }
        }
    }

    fn recipients(
        &self,
        _event_hash: EntryHash,
        _author: AgentPubKey,
        _timestamp: Timestamp,
    ) -> ExternResult<BTreeSet<AgentPubKey>> {
        match self {
            FriendsEvent::SetProfile { .. } => {
                Ok(query_my_friends()?.into_iter().flatten().collect())
            }
            FriendsEvent::RemoveFriend { agents } => Ok(agents.iter().cloned().collect()),
            FriendsEvent::FriendRequest { to_agents, .. } => {
                Ok(to_agents.iter().cloned().collect())
            }
            FriendsEvent::AcceptFriendRequest {
                friend_request_hash,
            }
            | FriendsEvent::RejectFriendRequest {
                friend_request_hash,
            } => {
                let Some(friend_request) =
                    query_private_event::<FriendsEvent>(friend_request_hash.clone())?
                else {
                    return Err(wasm_error!("Friend request not found"));
                };

                let FriendsEvent::FriendRequest { from_agents, .. } =
                    friend_request.payload.content.event
                else {
                    return Err(wasm_error!("Given hash was not for a FriendRequest"));
                };

                Ok(from_agents.iter().cloned().collect())
            }

            FriendsEvent::CancelFriendRequest {
                friend_request_hash,
            } => {
                let Some(friend_request) =
                    query_private_event::<FriendsEvent>(friend_request_hash.clone())?
                else {
                    return Err(wasm_error!("Friend request not found"));
                };

                let FriendsEvent::FriendRequest { to_agents, .. } =
                    friend_request.payload.content.event
                else {
                    return Err(wasm_error!("Given hash was not for a FriendRequest"));
                };

                Ok(to_agents.iter().cloned().collect())
            }
        }
    }
}

pub fn query_friends_events() -> ExternResult<BTreeMap<EntryHashB64, SignedEvent<FriendsEvent>>> {
    query_private_events()
}

#[hdk_extern]
pub fn recv_remote_signal(signal_bytes: SerializedBytes) -> ExternResult<()> {
    if let Ok(private_event_sourcing_remote_signal) =
        PrivateEventSourcingRemoteSignal::try_from(signal_bytes)
    {
        recv_private_events_remote_signal::<FriendsEvent>(private_event_sourcing_remote_signal)
    } else {
        Ok(())
    }
}
