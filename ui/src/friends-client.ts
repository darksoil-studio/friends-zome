import { PrivateEventSourcingClient } from '@darksoil-studio/private-event-sourcing-zome';
import { AgentPubKey, AppClient, EntryHash } from '@holochain/client';

import { Friend, Profile } from './types';

export class FriendsClient extends PrivateEventSourcingClient {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'friends',
	) {
		super(client, roleName, zomeName);
	}

	setMyProfile(profile: Profile): Promise<void> {
		return this.callZome('set_my_profile', profile);
	}

	sendFriendRequest(name: string, agents: AgentPubKey[]): Promise<EntryHash> {
		return this.callZome('send_friend_request', {
			to_name: name,
			to_agents: agents,
		});
	}

	acceptFriendRequest(friendRequestHash: EntryHash): Promise<void> {
		return this.callZome('accept_friend_request', friendRequestHash);
	}

	rejectFriendRequest(friendRequestHash: EntryHash): Promise<void> {
		return this.callZome('reject_friend_request', friendRequestHash);
	}

	cancelFriendRequest(friendRequestHash: EntryHash): Promise<void> {
		return this.callZome('cancel_friend_request', friendRequestHash);
	}

	removeFriend(agents: AgentPubKey[]): Promise<void> {
		return this.callZome('remove_friend', agents);
	}

	queryAllFriends(): Promise<Friend[]> {
		return this.callZome('query_all_friends', undefined);
	}
}
