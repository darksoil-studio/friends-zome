import {
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import {
	SignalWatcher,
	joinAsyncMap,
} from '@darksoil-studio/holochain-signals';
import '@darksoil-studio/profiles-provider/dist/elements/profile-list-item-skeleton.js';
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
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';
import { Friend } from '../types.js';

/**
 * @element my-friends
 */
@localized()
@customElement('my-friends')
export class MyFriends extends SignalWatcher(LitElement) {
	/**
	 * Friends store for this element, not required if you embed this element inside a <friends-context>
	 */
	@consume({ context: friendsStoreContext, subscribe: true })
	@property()
	store!: FriendsStore;

	/** Private properties */

	renderList(friends: Array<Friend>) {
		if (friends.length === 0)
			return html`
				<div
					class="column placeholder center-content"
					style="flex: 1; gap: 8px"
				>
					<sl-icon
						.src=${wrapPathInSvg(mdiInformationOutline)}
						style="height: 64px; width: 64px;"
					></sl-icon>
					<span style="text-align: center"
						>${msg("You don't have any friends yet.")}</span
					>
				</div>
			`;

		return html`
			<div class="column" style="flex: 1; gap: 8px">
				${join(
					friends.map(
						(friend, i) => html`
							<div class="row" style="align-items: center; margin: 8px;">
								<div
									class="row"
									style="align-items: center; gap: 8px; flex: 1; cursor: pointer"
									@click=${() =>
										this.dispatchEvent(
											new CustomEvent('friend-clicked', {
												bubbles: true,
												composed: true,
												detail: {
													agents: friend.agents,
												},
											}),
										)}
								>
									<sl-avatar
										style="--size: 32px;"
										.image=${friend.profile.avatar}
										.initials=${friend.profile.name.slice(0, 2)}
									></sl-avatar>
									<span>${friend.profile.name}</span>
								</div>

								<sl-dropdown>
									<sl-icon-button
										slot="trigger"
										.src=${wrapPathInSvg(mdiDotsVertical)}
										style="font-size: 1.4rem"
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
												this.shadowRoot!.getElementById(
													`dialog-${i}`,
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
											(
												this.shadowRoot!.getElementById(
													`dialog-${i}`,
												)! as SlDialog
											).hide();
											button.loading = false;
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
