import {
	appClientContext,
	notify,
	notifyError,
} from '@darksoil-studio/holochain-elements';
import {
	LinkedDevicesStore,
	linkedDevicesStoreContext,
} from '@darksoil-studio/linked-devices-zome';
import { LinkedDevicesContext } from '@darksoil-studio/linked-devices-zome/dist/elements/linked-devices-context.js';
import { profilesProviderContext } from '@darksoil-studio/profiles-provider';
import { AppClient } from '@holochain/client';
import { consume, provide } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { FriendsConfig, defaultConfig } from '../config.js';
import { DeepLinkApi, deepLinkApi, friendsStoreContext } from '../context.js';
import { FriendsClient } from '../friends-client.js';
import { FriendsStore } from '../friends-store.js';
import { sendFriendRequestFromCode } from './friend-request-qr-code.js';

/**
 * @element friends-context
 */
@customElement('friends-context')
export class FriendsContext extends LitElement {
	@consume({ context: appClientContext })
	private client!: AppClient;

	@consume({ context: deepLinkApi })
	deepLinkApi: DeepLinkApi | undefined;

	@provide({ context: friendsStoreContext })
	@provide({ context: profilesProviderContext })
	@property({ type: Object })
	store!: FriendsStore;

	@property()
	role!: string;

	@property()
	config: FriendsConfig = defaultConfig;

	@property()
	zome = 'friends';

	@consume({ context: linkedDevicesStoreContext, subscribe: true })
	linkedDevicesStore!: LinkedDevicesStore;

	connectedCallback() {
		super.connectedCallback();
		if (this.store) return;
		if (!this.role) {
			throw new Error(
				`<friends-context> must have a role="YOUR_DNA_ROLE" property, eg: <friends-context role="role1">`,
			);
		}
		if (!this.client) {
			throw new Error(`<friends-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <friends-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <friends-context .store=\${store}>)
      `);
		}

		this.addEventListener('context-provider', e => {
			if (e.context === linkedDevicesStoreContext) {
				const context = e.target as LinkedDevicesContext;

				setTimeout(() => {
					this.store = new FriendsStore(
						new FriendsClient(this.client, this.role, this.zome),
						this.store.config,
						context.store,
					);
				});
			}
		});

		this.store = new FriendsStore(
			new FriendsClient(this.client, this.role, this.zome),
			this.config,
			this.linkedDevicesStore,
		);

		this.deepLinkApi?.onDeepLinkClicked(async code => {
			try {
				await sendFriendRequestFromCode(this.store, code);
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
		});
	}

	render() {
		return html`<slot></slot>`;
	}

	static styles = css`
		:host {
			display: contents;
		}
	`;
}
