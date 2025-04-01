import { decodeHashFromBase64 } from '@holochain/client';
import { msg } from '@lit/localize';
import { notifyError } from '@tnesh-stack/elements';
import { AsyncState, Signal } from '@tnesh-stack/signals';

import { FriendsStore } from './friends-store';

export function asyncReadable<T>(
	initFn: (set: (value: T) => void) => Promise<(() => void) | void>,
) {
	let cleanup: (() => void) | void;
	const signal = new AsyncState<T>(
		{ status: 'pending' },
		{
			[Signal.subtle.watched]: async () => {
				try {
					cleanup = await initFn(value =>
						signal.set({
							status: 'completed',
							value,
						}),
					);
				} catch (error) {
					signal.set({
						status: 'error',
						error,
					});
				}
			},
			[Signal.subtle.unwatched]: () => {
				if (cleanup) cleanup();
				signal.set({
					status: 'pending',
				});
			},
		},
	);
	return signal;
}

export class LocalStorageSignal<T> extends Signal.State<T | undefined> {
	constructor(public key: string) {
		const item = globalThis.localStorage?.getItem(key);

		super(item ? JSON.parse(item) : undefined);
	}

	public set(value: T) {
		super.set(value);
		if (globalThis.localStorage)
			globalThis.localStorage.setItem(this.key, JSON.stringify(value));
	}
}

export async function sendFriendRequestFromCode(
	store: FriendsStore,
	code: string,
) {
	const split = code.split('/');
	if (split.length !== 2) {
		notifyError(msg('Invalid code.'));
		return;
	}
	const [name, pubkeyB64] = split;
	const pubkey = decodeHashFromBase64(pubkeyB64);

	return store.client.sendFriendRequest(name, [pubkey]);
}
