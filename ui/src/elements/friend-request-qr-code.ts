import { decodeHashFromBase64, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import {
	Format,
	requestPermissions,
	scan,
} from '@tauri-apps/plugin-barcode-scanner';
import { notify, notifyError, sharedStyles } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';

export function isTauriEnv() {
	// eslint-disable-next-line
	return !!(window as any).__TAURI_INTERNALS__;
}

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export async function scanQrcode(): Promise<string> {
	await requestPermissions();
	const result = await scan({ windowed: false, formats: [Format.QRCode] });
	return result.content;
}

export async function scanQrCodeAndSendFriendRequest(store: FriendsStore) {
	const code = await scanQrcode();
	notify(code);

	const split = code.split('/');
	if (split.length !== 2) {
		notifyError(msg('Invalid code.'));
		return;
	}
	const [name, pubkeyB64] = split;
	const pubkey = decodeHashFromBase64(pubkeyB64);

	return store.client.sendFriendRequest(name, [pubkey]);
}

@customElement('friend-request-qr-code')
export class FriendRequestQrCode extends SignalWatcher(LitElement) {
	@consume({ context: friendsStoreContext, subscribe: true })
	store!: FriendsStore;

	@property()
	size: number = 256;

	render() {
		const myProfile = this.store.myProfile.get();
		switch (myProfile.status) {
			case 'pending':
				return html`<div
					class="column"
					style="flex: 1; align-items: center; justify-content: center"
				>
					<sl-spinner style="font-size: 0.2rem"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the profiles for all agents')}
					.error=${myProfile.error}
				></display-error>`;
			case 'completed':
				return html`<sl-qr-code
					.size=${this.size}
					value="${myProfile.value?.name}/${encodeHashToBase64(
						this.store.client.client.myPubKey,
					)}"
				>
				</sl-qr-code>`;
		}
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: contents;
			}
		`,
	];
}
