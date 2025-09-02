import {
	notify,
	notifyError,
	sharedStyles,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
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
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { DeepLinkApi, deepLinkApi, friendsStoreContext } from '../context.js';
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

	@consume({ context: deepLinkApi })
	deepLinkApi: DeepLinkApi | undefined;

	@property()
	size: number = 256;

	@property({ attribute: 'show-send-code-fallback', type: Boolean })
	showSendCodeFallback = false;

	renderSendCodeFallback(code: string) {
		if (!this.showSendCodeFallback) return html``;

		return html`
			<div class="column" style="gap:16px">
				<span style="align-self: center">${msg('OR')} </span>

				${this.renderCodeOrLink(code)}
			</div>
		`;
	}

	renderCodeOrLink(code: string) {
		if (this.deepLinkApi) {
			const link = this.deepLinkApi.buildDeepLink(code);
			return html`
				<div class="column" style="gap: 8px">
					<span>${msg('Share this link with your friend:')} </span>
					<div
						class="row"
						style="align-items: center; gap: 8px; justify-content: center"
					>
						<sl-tag style="width: calc(${this.size}px - 38px)">${link}</sl-tag>
						<sl-copy-button .value=${link}></sl-copy-button>
					</div>
				</div>
			`;
		}
		return html`
			<div class="column" style="gap: 8px; width: calc(${this.size}px)">
				<span>${msg('Share this code with your friend:')} </span>
				<div
					class="row"
					style="align-items: center; gap: 8px; justify-content: center"
				>
					<sl-tag style="width: calc(${this.size}px - 38px)">${code}</sl-tag>
					<sl-copy-button .value=${code}></sl-copy-button>
				</div>

				<span style="word-break: break-word;"
					>${msg('Enter the code from your friend:')}
				</span>

				<sl-input
					@sl-input=${async (e: CustomEvent) => {
						const input = e.target as SlInput;

						if (code === input.value) {
							notifyError(
								msg('Invalid invite code: this is your own invite code.'),
							);
							input.value = '';

							return;
						}

						try {
							await sendFriendRequestFromCode(this.store, input.value);
							this.dispatchEvent(
								new CustomEvent('friend-request-sent', {
									bubbles: true,
									composed: true,
								}),
							);
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
		`;
	}

	code() {
		const myProfile = this.store.myProfile.get();
		if (myProfile.status !== 'completed') return myProfile;

		return {
			status: 'completed' as const,
			value: `${myProfile.value?.name}/${encodeHashToBase64(
				this.store.client.client.myPubKey,
			)}`,
		};
	}

	render() {
		const code = this.code();
		switch (code.status) {
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
					.error=${code.error}
				></display-error>`;
			case 'completed':
				return html`<div class="column" style="gap: 16px; flex: 1">
					<sl-qr-code
						style="align-self: center"
						.size=${this.size}
						.value=${code.value}
					>
					</sl-qr-code
					>${this.renderSendCodeFallback(code.value)}
				</div>`;
		}
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: flex;
			}
			sl-tag::part(base) {
				overflow: hidden;
			}
		`,
	];
}
