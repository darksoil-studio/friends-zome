use std::collections::BTreeMap;

use hdk::prelude::*;
use private_event_sourcing::*;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct Profile {
    pub name: String,
    pub avatar: Option<String>,
    pub custom_fields: BTreeMap<String, String>,
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
    AcceptFriendRequest(EntryHash),
    RejectFriendRequest(EntryHash),
    CancelFriendRequest(EntryHash),
    /// Profile
    SetProfile {
        agents: Vec<AgentPubKey>,
        profile: Profile,
    },
    /// Remove Friend
    RemoveFriend(Vec<AgentPubKey>),
}

impl PrivateEvent for FriendsEvent {
    fn validate(&self) -> ExternResult<ValidateCallbackResult> {
        Ok(ValidateCallbackResult::Valid)
    }
    fn recipients(&self) -> ExternResult<Vec<AgentPubKey>> {
        // match self {
        //     ContactsEvent::SetMyProfile()
        // }
        Ok(vec![])
    }
}

pub fn query_friends_events() -> ExternResult<BTreeMap<EntryHashB64, SignedEvent<FriendsEvent>>> {
    query_private_events()
}

#[hdk_extern]
pub fn attempt_commit_awaiting_deps_entries() -> ExternResult<()> {
    private_event_sourcing::attempt_commit_awaiting_deps_entries::<FriendsEvent>()?;

    Ok(())
}
