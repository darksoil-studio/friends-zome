import {
	ActionHash,
	AgentPubKey,
	Create,
	CreateLink,
	Delete,
	DeleteLink,
	DnaHash,
	EntryHash,
	SignedActionHashed,
	Update,
} from '@holochain/client';
import { ActionCommittedSignal } from '@tnesh-stack/utils';

export type FriendsSignal = ActionCommittedSignal<EntryTypes, LinkTypes>;

export type EntryTypes = never;

export type LinkTypes = string;

export interface Friend {
	agents: AgentPubKey[];
	profile: Profile;
}

export interface Profile {
	name: string;
	avatar: string;
	custom_fields: Record<string, string>;
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
