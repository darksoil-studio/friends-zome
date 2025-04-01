import { decodeHashFromBase64, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import { SlInput } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/copy-button/copy-button.js';
import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
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

	return sendFriendRequestFromCode(store, code);
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

@customElement('friend-request-qr-code')
export class FriendRequestQrCode extends SignalWatcher(LitElement) {
	@consume({ context: friendsStoreContext, subscribe: true })
	store!: FriendsStore;

	@property()
	size: number = 256;

	@property({ attribute: 'show-send-code-fallback', type: Boolean })
	showSendCodeFallback = false;

	renderSendCodeFallback(code: string) {
		if (!this.showSendCodeFallback) return html``;

		return html`
			<div class="column" style="gap: 16px">
				<span style="align-self: center">${msg('OR')} </span>

				<div class="column" style="gap: 8px">
					<span>${msg('Send this code to your other friend...')} </span>
					<div class="row" style="align-items: center; gap: 8px">
						<sl-tag style="flex: 1; ">${code} </sl-tag>
						<sl-copy-button .value=${code}></sl-copy-button>
					</div>
				</div>

				<div class="column" style=" gap: 8px">
					<span style="word-break: break-word;"
						>${msg('... and enter here the code from your friend.')}
					</span>

					<sl-input
						@sl-input=${async (e: CustomEvent) => {
							const input = e.target as SlInput;

							const code = input.value;

							try {
								await sendFriendRequestFromCode(this.store, code);
								notify('Friend request send!');
							} catch (e) {
								notifyError('Failed to send friend request.');
								console.error(e);
							}
							input.value = '';
						}}
					>
					</sl-input>
				</div>
			</div>
		`;
	}

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
				const code = `${myProfile.value?.name}/${encodeHashToBase64(
					this.store.client.client.myPubKey,
				)}`;
				return html`<div class="column" style="gap: 16px">
					<sl-qr-code
						style="align-self: center"
						.size=${this.size}
						.value=${code}
					>
					</sl-qr-code
					>${this.renderSendCodeFallback(code)}
				</div>`;
		}
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: contents;
			}
			sl-tag::part(base) {
				font-size: 12px;
				overflow: hidden;
			}
			sl-tag {
				max-width: 70vw;
			}
		`,
	];
}
