import {
	PrivateEventSourcingStore,
	SignedEvent,
} from '@darksoil-studio/private-event-sourcing-zome';
import { EntryHashB64, Timestamp, encodeHashToBase64 } from '@holochain/client';
import { AsyncComputed } from '@tnesh-stack/signals';
import { MemoMap } from '@tnesh-stack/utils';

import { FriendsConfig, defaultConfig } from './config.js';
import { FriendsClient } from './friends-client.js';
import { Friend, FriendRequest, FriendsEvent, Profile } from './types.js';
import { asyncReadable } from './utils.js';

export class FriendsStore extends PrivateEventSourcingStore<FriendsEvent> {
	constructor(
		public client: FriendsClient,
		public config: FriendsConfig = defaultConfig,
	) {
		super(client);
	}

	myProfile = new AsyncComputed(() => {
		const privateEvents = this.privateEvents.get();
		if (privateEvents.status !== 'completed') return privateEvents;

		let myProfile: [Timestamp, Profile] | undefined;

		for (const [entryHash, entry] of Object.entries(privateEvents.value)) {
			if (entry.event.content.type !== 'SetProfile') continue;
			if (
				encodeHashToBase64(entry.author) !==
				encodeHashToBase64(this.client.client.myPubKey)
			)
				continue;

			const profile = entry.event.content.profile;

			if (!myProfile || myProfile[0] < entry.event.timestamp) {
				myProfile = [entry.event.timestamp, profile];
			}
		}

		return {
			status: 'completed',
			value: myProfile ? myProfile[1] : undefined,
		};
	});

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
		let friends = await this.client.queryAllFriends();
		set(friends);

		const interval = setInterval(async () => {
			friends = await this.client.queryAllFriends();
			set(friends);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
}
