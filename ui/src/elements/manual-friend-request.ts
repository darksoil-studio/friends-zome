import {
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { decodeHashFromBase64, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { msg } from '@lit/localize';
import { mdiAccountPlus } from '@mdi/js';
import { SlDialog } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/copy-button/copy-button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/tag/tag.js';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { friendsStoreContext } from '../context';
import { FriendsStore } from '../friends-store';

@customElement('manual-friend-request')
export class ManualFriendRequest extends SignalWatcher(LitElement) {
	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: friendsStoreContext, subscribe: true })
	@property()
	store!: FriendsStore;

	async sendFriendRequest(code: string) {
		const split = code.split('/');
		if (split.length !== 2) {
			notifyError(msg('Invalid code.'));
			return;
		}
		const [name, pubkeyB64] = split;
		if (pubkeyB64 === encodeHashToBase64(this.store.client.client.myPubKey)) {
			notifyError(msg('Invalid code: this is your own code.'));
			return;
		}
		const pubkey = decodeHashFromBase64(pubkeyB64);

		try {
			await this.store.client.sendFriendRequest(name, [pubkey]);
			this.shadowRoot!.querySelector('sl-dialog')!.hide();
		} catch (e) {
			console.error(e);
			notifyError(msg('Failed to send friend request.'));
		}
	}

	renderDialog() {
		const myProfile = this.store.myProfile.get();
		const myName =
			myProfile.status === 'completed' ? myProfile.value?.name : undefined;
		return html`
			<sl-dialog .label=${msg('Manual Friend Request')} style="--width: 600px">
				<div class="column" style="gap: 8px">
					<span
						>${msg('Copy the code below and send it to your friend!')}
					</span>
					${myName
						? html`
					<div class="row" style="align-items: center; gap: 8px">
						<sl-tag style="flex: 1">${myName}/${encodeHashToBase64(this.store.client.client.myPubKey)}
						</sl-tag>
						<sl-copy-button .value=${myName}/${encodeHashToBase64(this.store.client.client.myPubKey)}>
						</sl-copy-button>
					</div>
	`
						: html``}

					<span style="align-self: center; margin: 8px 0">${msg('OR')} </span>
					<span
						>${msg('Paste here the code you received from your friend.')}
					</span>

					<div class="row" style="align-items: center; gap: 8px">
						<sl-input style="flex: 1"> </sl-input>
						<sl-button
							@click=${() => {
								const input = this.shadowRoot!.querySelector('sl-input')!;
								this.sendFriendRequest(input.value);
							}}
							variant="primary"
							>${msg('Send Friend Request')}
						</sl-button>
					</div>
				</div>
			</sl-dialog>
		`;
	}

	render() {
		return html` ${this.renderDialog()}
			<sl-icon-button
				style="font-size: 1.5rem"
				@click=${() =>
					(this.shadowRoot!.querySelector('sl-dialog')! as SlDialog).show()}
				.src=${wrapPathInSvg(mdiAccountPlus)}
			></sl-icon-button>`;
	}

	static styles = sharedStyles;
}
