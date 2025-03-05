import { dhtSync, pause, runScenario } from '@holochain/tryorama';
import { toPromise, watch } from '@tnesh-stack/signals';
import { assert, expect, test } from 'vitest';

import { setup } from './setup.js';

test('send friend request and accept it', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		await alice.store.client.setMyProfile({
			name: 'alice',
			avatar: '',
			fields: {},
		});

		await bob.store.client.setMyProfile({
			name: 'bob',
			avatar: '',
			fields: {},
		});

		const friendRequestHash = await alice.store.client.sendFriendRequest(
			'bob',
			[bob.player.agentPubKey],
		);

		await pause(2000);

		let pendingFriendRequests = await toPromise(
			alice.store.pendingFriendRequests,
		);
		assert.equal(Object.keys(pendingFriendRequests).length, 1);

		pendingFriendRequests = await toPromise(bob.store.pendingFriendRequests);
		assert.equal(Object.keys(pendingFriendRequests).length, 1);

		let friends = await toPromise(alice.store.friends);
		assert.equal(friends.length, 0);

		friends = await toPromise(bob.store.friends);
		assert.equal(friends.length, 0);

		await bob.store.client.acceptFriendRequest(friendRequestHash);

		await pause(2000);

		pendingFriendRequests = await toPromise(alice.store.pendingFriendRequests);
		assert.equal(Object.keys(pendingFriendRequests).length, 0);

		pendingFriendRequests = await toPromise(bob.store.pendingFriendRequests);
		assert.equal(Object.keys(pendingFriendRequests).length, 0);

		friends = await toPromise(alice.store.friends);
		assert.equal(friends.length, 1);

		friends = await toPromise(bob.store.friends);
		assert.equal(friends.length, 1);

		await alice.store.client.removeFriend([bob.player.agentPubKey]);

		await pause(2000);

		friends = await toPromise(alice.store.friends);
		assert.equal(friends.length, 0);

		friends = await toPromise(bob.store.friends);
		assert.equal(friends.length, 0);
	});
});
