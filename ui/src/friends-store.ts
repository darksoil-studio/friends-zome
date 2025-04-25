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
import { AsyncComputed, toPromise } from '@darksoil-studio/holochain-signals';
import { MemoHoloHashMap } from '@darksoil-studio/holochain-utils';

import { FriendsConfig, defaultConfig } from './config.js';
import { FriendsClient } from './friends-client.js';
import { Friend, FriendRequest, FriendsEvent } from './types.js';
import { LocalStorageSignal, asyncReadable } from './utils.js';

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

		const unsubscribe = client.onSignal(signal => {
			const privateEventSourcingSignal = signal as PrivateEventSourcingSignal;
			if (
				!(
					'type' in privateEventSourcingSignal &&
					privateEventSourcingSignal.type === 'NewPrivateEvent'
				)
			)
				return;

			const friendsEvent = decode(
				privateEventSourcingSignal.private_event_entry.event.content,
			) as FriendsEvent;

			if (friendsEvent.type !== 'SetProfile') return;
			this.profileIntialized.set(true);
			unsubscribe();
		});
	}

	get myPubKey() {
		return this.client.client.myPubKey;
	}

	allMyAgents = new AsyncComputed(() => {
		let myDevices = [this.client.client.myPubKey];

		if (this.linkedDevicesStore) {
			const myLinkedDevices = this.linkedDevicesStore.myLinkedDevices.get();
			if (myLinkedDevices.status !== 'completed') return myLinkedDevices;
			myDevices = [this.client.client.myPubKey, ...myLinkedDevices.value];
		}
		return {
			status: 'completed',
			value: myDevices,
		};
	});

	private profileIntialized = new LocalStorageSignal<boolean>(
		`profile-initialized/${this.client.roleName}/${encodeHashToBase64(this.client.client.myPubKey)}`,
	);

	myProfile = new AsyncComputed(() => {
		const isInitialized = this.profileIntialized.get();

		if (!isInitialized) {
			return {
				status: 'completed',
				value: undefined,
			};
		}

		const privateEvents = this.privateEvents.get();

		const myAgents = this.allMyAgents.get();
		if (privateEvents.status !== 'completed') return privateEvents;
		if (myAgents.status !== 'completed') return myAgents;

		let myProfile: [Timestamp, Profile] | undefined;

		for (const [entryHash, entry] of Object.entries(privateEvents.value)) {
			if (entry.event.content.type !== 'SetProfile') continue;
			if (
				!myAgents.value.find(
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

	incomingFriendRequests = new AsyncComputed(() => {
		const pendingFriendRequests = this.pendingFriendRequests.get();
		const allMyAgents = this.allMyAgents.get();
		if (pendingFriendRequests.status !== 'completed')
			return pendingFriendRequests;
		if (allMyAgents.status !== 'completed') return allMyAgents;

		const incomingFriendRequests: Record<
			EntryHashB64,
			SignedEvent<FriendRequest>
		> = {};
		for (const [eventHash, friendRequest] of Object.entries(
			pendingFriendRequests.value,
		)) {
			if (
				!allMyAgents.value.find(
					a =>
						encodeHashToBase64(friendRequest.author) === encodeHashToBase64(a),
				)
			) {
				incomingFriendRequests[eventHash] = friendRequest;
			}
		}

		return {
			status: 'completed',
			value: incomingFriendRequests,
		};
	});

	outgoingFriendRequests = new AsyncComputed(() => {
		const pendingFriendRequests = this.pendingFriendRequests.get();
		const allMyAgents = this.allMyAgents.get();
		if (pendingFriendRequests.status !== 'completed')
			return pendingFriendRequests;
		if (allMyAgents.status !== 'completed') return allMyAgents;

		const outgoingFriendRequests: Record<
			EntryHashB64,
			SignedEvent<FriendRequest>
		> = {};
		for (const [eventHash, friendRequest] of Object.entries(
			pendingFriendRequests.value,
		)) {
			if (
				allMyAgents.value.find(
					a =>
						encodeHashToBase64(friendRequest.author) === encodeHashToBase64(a),
				)
			) {
				outgoingFriendRequests[eventHash] = friendRequest;
			}
		}

		return {
			status: 'completed',
			value: outgoingFriendRequests,
		};
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
				const myAgents = this.allMyAgents.get();
				const events = this.privateEvents.get();

				if (myAgents.status !== 'completed') return myAgents;
				if (events.status !== 'completed') return events;

				if (
					myAgents.value.find(
						a => encodeHashToBase64(a) === encodeHashToBase64(agent),
					)
				) {
					return this.myProfile.get();
				}

				const sortedSetProfiles = Object.values(events.value)
					.filter(event => event.event.content.type === 'SetProfile')
					.sort((e1, e2) => e2.event.timestamp - e1.event.timestamp)
					.map(event =>
						event.event.content.type === 'SetProfile'
							? event.event.content
							: undefined,
					)
					.filter(a => !!a);

				const setProfile = sortedSetProfiles.find(setProfile =>
					setProfile.agents.find(
						a => encodeHashToBase64(a) === encodeHashToBase64(agent),
					),
				);

				return {
					status: 'completed',
					value: setProfile?.profile,
				};
			}),
	);

	async search(nameFilter: string): Promise<Array<User>> {
		const friends = await toPromise(this.friends);
		const filteredFriends = friends.filter(friend =>
			friend.profile.name.toLowerCase().startsWith(nameFilter.toLowerCase()),
		);
		return filteredFriends;
	}
}
