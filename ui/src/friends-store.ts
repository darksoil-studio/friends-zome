import { LinkedDevicesStore } from '@darksoil-studio/linked-devices-zome';
import {
	PrivateEventEntry,
	PrivateEventSourcingSignal,
	PrivateEventSourcingStore,
	SignedEvent,
} from '@darksoil-studio/private-event-sourcing-zome';
import {
	Profile,
	ProfilesProvider,
	User,
} from '@darksoil-studio/profiles-provider';
import { EntryHashB64, Timestamp, encodeHashToBase64 } from '@holochain/client';
import { decode } from '@msgpack/msgpack';
import { AsyncComputed, toPromise } from '@tnesh-stack/signals';
import { MemoHoloHashMap } from '@tnesh-stack/utils';

import { FriendsConfig, defaultConfig } from './config.js';
import { FriendsClient } from './friends-client.js';
import { Friend, FriendRequest, FriendsEvent } from './types.js';
import { asyncReadable } from './utils.js';

export class FriendsStore
	extends PrivateEventSourcingStore<FriendsEvent>
	implements ProfilesProvider
{
	profilesArePublic = false;

	constructor(
		public client: FriendsClient,
		public config: FriendsConfig = defaultConfig,
		public linkedDevicesStore?: LinkedDevicesStore,
	) {
		super(client, linkedDevicesStore);
	}

	get myPubKey() {
		return this.client.client.myPubKey;
	}

	myProfile = new AsyncComputed(() => {
		const privateEvents = this.privateEvents.get();
		if (privateEvents.status !== 'completed') return privateEvents;

		let myDevices = [this.client.client.myPubKey];

		if (this.linkedDevicesStore) {
			const myLinkedDevices = this.linkedDevicesStore.myLinkedDevices.get();
			if (myLinkedDevices.status !== 'completed') return myLinkedDevices;
			myDevices = [this.client.client.myPubKey, ...myLinkedDevices.value];
		}

		let myProfile: [Timestamp, Profile] | undefined;

		for (const [entryHash, entry] of Object.entries(privateEvents.value)) {
			if (entry.event.content.type !== 'SetProfile') continue;
			if (
				!myDevices.find(
					myDevice =>
						encodeHashToBase64(entry.author) === encodeHashToBase64(myDevice),
				)
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

	currentProfileForAgent = new MemoHoloHashMap(
		agent =>
			new AsyncComputed(() => {
				if (encodeHashToBase64(this.myPubKey) === encodeHashToBase64(agent)) {
					// TODO: what about when the agent is one of your other linked devices?
					return this.myProfile.get();
				}
				const friends = this.friends.get();
				if (friends.status !== 'completed') return friends;

				const friend = friends.value.find(friend =>
					friend.agents.find(
						agent => encodeHashToBase64(agent) === encodeHashToBase64(agent),
					),
				);

				return {
					status: 'completed',
					value: friend?.profile,
				};
			}),
	);

	async search(nameFilter: string): Promise<Array<User>> {
		const friends = await toPromise(this.friends);
		const filteredFriends = friends.filter(friend =>
			friend.profile.name.startsWith(nameFilter),
		);
		return filteredFriends;
	}
}
