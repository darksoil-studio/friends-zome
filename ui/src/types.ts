import { ActionCommittedSignal } from '@darksoil-studio/holochain-utils';
import { Profile } from '@darksoil-studio/profiles-provider';
import { AgentPubKey, EntryHash } from '@holochain/client';

export type FriendsSignal = ActionCommittedSignal<EntryTypes, LinkTypes>;

export type EntryTypes = never;

export type LinkTypes = string;

export interface Friend {
	agents: AgentPubKey[];
	profile: Profile;
}

export interface FriendRequest {
	type: 'FriendRequest';
	from_name: string;
	from_agents: Array<AgentPubKey>;
	to_name: string;
	to_agents: Array<AgentPubKey>;
}

export type FriendsEvent =
	| FriendRequest
	| {
			type: 'AcceptFriendRequest';
			friend_request_hash: EntryHash;
	  }
	| {
			type: 'RejectFriendRequest';
			friend_request_hash: EntryHash;
	  }
	| {
			type: 'CancelFriendRequest';
			friend_request_hash: EntryHash;
	  }
	| {
			type: 'SetProfile';
			agents: AgentPubKey[];
			profile: Profile;
	  }
	| {
			type: 'RemoveFriend';
			agents: AgentPubKey[];
	  };
