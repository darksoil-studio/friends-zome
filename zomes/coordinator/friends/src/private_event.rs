use std::collections::BTreeMap;

use hdk::prelude::*;
use private_event_sourcing::*;

use crate::{all_friends::query_all_friends, profile::query_my_profile_event};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Profile {
    pub name: String,
    pub avatar: Option<String>,
    pub fields: BTreeMap<String, String>,
}

#[derive(Serialize, Deserialize, Debug, Clone, SerializedBytes)]
#[serde(tag = "type")]
pub enum FriendsEvent {
    /// Friend Request
    FriendRequest {
        from_name: String,
        from_agents: Vec<AgentPubKey>,
        to_name: String,
        to_agents: Vec<AgentPubKey>,
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
        agents: Vec<AgentPubKey>,
        profile: Profile,
    },
    /// Remove Friend
    RemoveFriend {
        agents: Vec<AgentPubKey>,
    },
}

impl PrivateEvent for FriendsEvent {
    fn validate(
        &self,
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

                let FriendsEvent::FriendRequest { .. } = friend_request.event.content else {
                    return Ok(ValidateCallbackResult::Invalid(
                        "Given hash was not for a FriendRequest".into(),
                    ));
                };
                Ok(ValidateCallbackResult::Valid)
            }
            FriendsEvent::RemoveFriend { agents } => {
                let my_friends = query_my_friends()?;

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
        _author: AgentPubKey,
        _timestamp: Timestamp,
    ) -> ExternResult<Vec<AgentPubKey>> {
        match self {
            FriendsEvent::SetProfile { .. } => query_my_friends(),
            FriendsEvent::RemoveFriend { agents } => Ok(agents.clone()),
            FriendsEvent::FriendRequest { to_agents, .. } => Ok(to_agents.clone()),
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

                let FriendsEvent::FriendRequest { from_agents, .. } = friend_request.event.content
                else {
                    return Err(wasm_error!("Given hash was not for a FriendRequest"));
                };

                Ok(from_agents)
            }

            FriendsEvent::CancelFriendRequest {
                friend_request_hash,
            } => {
                let Some(friend_request) =
                    query_private_event::<FriendsEvent>(friend_request_hash.clone())?
                else {
                    return Err(wasm_error!("Friend request not found"));
                };

                let FriendsEvent::FriendRequest { to_agents, .. } = friend_request.event.content
                else {
                    return Err(wasm_error!("Given hash was not for a FriendRequest"));
                };

                Ok(to_agents)
            }
        }
    }

    fn post_commit(&self, _author: AgentPubKey, _timestamp: Timestamp) -> ExternResult<()> {
        let FriendsEvent::AcceptFriendRequest {
            friend_request_hash,
        } = self
        else {
            return Ok(());
        };

        let Some(my_profile_event) = query_my_profile_event()? else {
            return Err(wasm_error!(
                "Can't accept a friend request if we haven't set our profile."
            ));
        };

        let Some(friend_request_entry) =
            query_private_event::<FriendsEvent>(friend_request_hash.clone())?
        else {
            return Err(wasm_error!("Friend request not found."));
        };
        let FriendsEvent::FriendRequest {
            from_agents,
            to_agents,
            ..
        } = friend_request_entry.event.content
        else {
            return Err(wasm_error!("."));
        };
        let all_my_agents = query_all_my_agents()?;
        let peer_agents = if from_agents.iter().any(|a| all_my_agents.contains(a)) {
            to_agents
        } else {
            from_agents
        };

        info!("Sending my profile to {peer_agents:?}.");

        send_private_event_to_new_recipients(my_profile_event.0.clone().into(), peer_agents)?;

        Ok(())
    }
}

fn query_my_friends() -> ExternResult<Vec<AgentPubKey>> {
    let all_friends = query_all_friends(())?;

    Ok(all_friends
        .into_iter()
        .map(|friend| friend.agents)
        .flatten()
        .collect())
}

pub fn query_friends_events() -> ExternResult<BTreeMap<EntryHashB64, SignedEvent<FriendsEvent>>> {
    query_private_events()
}

#[hdk_extern]
pub fn attempt_commit_awaiting_deps_entries() -> ExternResult<()> {
    private_event_sourcing::attempt_commit_awaiting_deps_entries::<FriendsEvent>()?;

    Ok(())
}
