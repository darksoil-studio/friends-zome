import { AsyncState, Signal } from '@tnesh-stack/signals';

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
		const item = localStorage.getItem(key);

		super(item ? JSON.parse(item) : undefined);
	}

	public set(value: T) {
		super.set(value);
		localStorage.setItem(this.key, JSON.stringify(value));
	}
}
