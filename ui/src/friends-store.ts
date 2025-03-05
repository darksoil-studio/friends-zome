import {
	PrivateEventSourcingStore,
	SignedEvent,
} from '@darksoil-studio/private-event-sourcing-zome';
import { asyncReadable } from '@darksoil-studio/private-event-sourcing-zome/dist/utils.js';
import { EntryHashB64, encodeHashToBase64 } from '@holochain/client';
import { AsyncComputed } from '@tnesh-stack/signals';
import { MemoMap } from '@tnesh-stack/utils';

import { FriendsClient } from './friends-client.js';
import { Friend, FriendRequest, FriendsEvent } from './types.js';

export class FriendsStore extends PrivateEventSourcingStore<FriendsEvent> {
	constructor(public client: FriendsClient) {
		super(client);
	}

	// friendRequests = new AsyncComputed(() => {
	// 			const privateEvents = this.privateEvents.get();
	// 			if (privateEvents.status !== 'completed') return privateEvents;
	// 			const privateEventsOfThisType: Record<EntryHashB64, SignedEvent<FriendRequest>> = pickBy(privateEvents.value, value =>
	// 				value.event.content.type === 'FriendRequest'
	// 		);

	// 			return { status: 'completed',value:privateEventsOfThisType};
	// 		}

	pendingFriendRequests = new AsyncComputed(() => {
		const privateEvents = this.privateEvents.get();
		if (privateEvents.status !== 'completed') return privateEvents;

		const friendRequests: Record<EntryHashB64, SignedEvent<FriendRequest>> = {};

		for (const [entryHash, entry] of Object.entries(privateEvents.value)) {
			if (entry.event.content.type === 'FriendRequest') {
				friendRequests[entryHash] = entry as SignedEvent<FriendRequest>;
			}
		}

		for (const [entryHash, entry] of Object.entries(privateEvents.value)) {
			if (
				entry.event.content.type === 'AcceptFriendRequest' ||
				entry.event.content.type === 'RejectFriendRequest' ||
				entry.event.content.type === 'CancelFriendRequest'
			) {
				delete friendRequests[
					encodeHashToBase64(entry.event.content.friend_request_hash)
				];
			}
		}

		return { status: 'completed', value: friendRequests };
	});

	friends = asyncReadable<Friend[]>(async set => {
		const entries = await this.client.queryAllFriends();
		set(entries);

		return this.client.onSignal(async signal => {
			if (signal.type !== 'EntryCreated') return;

			const entries = await this.client.queryAllFriends();
			set(entries);
		});
	});
}
