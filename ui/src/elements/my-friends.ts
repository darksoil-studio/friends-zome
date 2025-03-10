import '@darksoil-studio/profiles-zome/dist/elements/profile-list-item-skeleton.js';
import { ActionHash, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import { mdiDotsVertical, mdiInformationOutline, mdiMenu } from '@mdi/js';
import { SlButton, SlDialog } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import {
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import { SignalWatcher, joinAsyncMap } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';
import { Friend, Profile } from '../types.js';

/**
 * @element my-friends
 * @fires profile-selected - Fired when the user selects an agent from the list. Detail will have this shape: { profileHash: <ProfileHash as ActionHash> }
 */
@localized()
@customElement('my-friends')
export class MyFriends extends SignalWatcher(LitElement) {
	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: friendsStoreContext, subscribe: true })
	@property()
	store!: FriendsStore;

	/** Private properties */

	renderList(friends: Array<Friend>) {
		if (friends.length === 0)
			return html`
				<div class="column center-content" style="padding: 20px; flex: 1">
					<sl-icon
						.src=${wrapPathInSvg(mdiInformationOutline)}
						style="color: grey; height: 64px; width: 48px;"
					></sl-icon>
					<span class="placeholder"
						>${msg("You don't have any friends yet.")}</span
					>
				</div>
			`;

		return html`
			<div class="column" style="flex: 1;">
				${join(
					friends.map(
						(friend, i) => html`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<sl-avatar
									style="--size: 32px;"
									.image=${friend.profile.avatar}
									.initials=${friend.profile.name.slice(0, 2)}
								></sl-avatar>
								<span style="flex: 1">${friend.profile.name}</span>

								<sl-dropdown>
									<sl-icon-button
										slot="trigger"
										.src=${wrapPathInSvg(mdiDotsVertical)}
									></sl-icon-button>
									<sl-menu>
										<sl-menu-item
											@click=${() =>
												this.shadowRoot!.querySelector('sl-dialog')!.show()}
											>${msg('Remove Friend')}
										</sl-menu-item>
									</sl-menu>
								</sl-dropdown>
								<sl-dialog id="dialog-${i}" .label=${msg('Remove Friend')}>
									<div class="column" style="gap: 12px">
										<span
											>${msg(
												str`Are you sure you want to remove ${friend.profile.name} as a friend?`,
											)}</span
										>
									</div>
									<sl-button
										slot="footer"
										@click=${() =>
											(
												this.shadowRoot!.querySelector(
													`sl-dialog#${i}`,
												)! as SlDialog
											).hide()}
										>${msg('Cancel')}</sl-button
									>
									<sl-button
										slot="footer"
										variant="danger"
										@click=${async (e: CustomEvent) => {
											const button = e.target as SlButton;
											button.loading = true;
											try {
												await this.store.client.removeFriend(friend.agents);
											} catch (e) {
												notifyError(msg('Failed to remove friend.'));
												console.error(e);
											}
											button.loading = false;
											(
												this.shadowRoot!.querySelector(
													`sl-dialog#${i}`,
												)! as SlDialog
											).hide();
										}}
										>${msg('Remove Friend')}</sl-button
									>
								</sl-dialog>
							</div>
						`,
					),
					() => html`<sl-divider></sl-divider>`,
				)}
			</div>
		`;
	}

	render() {
		const allProfiles = this.store.friends.get();

		switch (allProfiles.status) {
			case 'pending':
				return html`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the profiles for all agents')}
					.error=${allProfiles.error}
				></display-error>`;
			case 'completed':
				return this.renderList(allProfiles.value);
		}
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: flex;
			}
		`,
	];
}
