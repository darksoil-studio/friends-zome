import '@darksoil-studio/profiles-provider/dist/elements/profile-list-item-skeleton.js';
import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import { mdiInformationOutline } from '@mdi/js';
import { SlInput } from '@shoelace-style/shoelace';
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
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher, joinAsyncMap } from '@darksoil-studio/holochain-signals';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';
import { Friend } from '../types.js';

/**
 * @element select-friends
 * @fires friend-selected - Fired when the user selects an agent from the list. Detail will have this shape: { agents: Array<AgentPubKey> }
 */
@localized()
@customElement('select-friend')
export class SelectFriend extends SignalWatcher(LitElement) {
	/**
	 * Friends store for this element, not required if you embed this element inside a <friends-context>
	 */
	@consume({ context: friendsStoreContext, subscribe: true })
	@property()
	store!: FriendsStore;

	/** Private properties */

	@state()
	filter: string | undefined;

	renderList(friends: Array<Friend>) {
		if (friends.length === 0)
			return html`
				<div
					class="column placeholder center-content"
					style="flex: 1; gap: 8px"
				>
					<sl-icon
						.src=${wrapPathInSvg(mdiInformationOutline)}
						style="font-size: 64px;"
					></sl-icon>
					<span style="text-align: center"
						>${msg("You don't have any friends yet.")}</span
					>
				</div>
			`;

		const filteredFriends = friends.filter(
			friend => !this.filter || friend.profile.name.startsWith(this.filter),
		);

		return html`
			<div class="column" style="flex: 1; gap: 8px">
				<sl-input
					.placeholder=${msg('Filter friends...')}
					@input=${(e: CustomEvent) => {
						this.filter = (e.target as SlInput).value;
					}}
				></sl-input>
				${filteredFriends.length === 0
					? html`<span class="placeholder" style="margin: 16px"
							>${msg('No friends match the filter.')}</span
						>`
					: join(
							filteredFriends.map(
								(friend, i) => html`
									<div
										class="row"
										style="align-items: center; gap: 8px; margin: 8px; cursor: pointer"
										@click=${() =>
											new CustomEvent('friend-selected', {
												bubbles: true,
												composed: true,
												detail: {
													agents: friend.agents,
												},
											})}
									>
										<sl-avatar
											style="--size: 32px;"
											.image=${friend.profile.avatar}
											.initials=${friend.profile.name.slice(0, 2)}
										></sl-avatar>
										<span style="flex: 1">${friend.profile.name}</span>
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
