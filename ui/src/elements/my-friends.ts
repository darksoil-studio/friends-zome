import '@darksoil-studio/profiles-zome/dist/elements/profile-list-item-skeleton.js';
import { ActionHash, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import { sharedStyles } from '@tnesh-stack/elements';
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
			return html`<span>${msg("You don't have any friends yet.")}</span>`;

		return html`
			<div class="column" style="flex: 1;">
				${join(
					friends.map(
						friend => html`
							<div class="row" style="align-items: center; gap: 8px">
								<sl-avatar
									style="--size: 32px;"
									.image=${friend.profile.avatar}
									.initials=${friend.profile.name.slice(0, 2)}
								></sl-avatar>
								<span>${friend.profile.name}</span>
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
