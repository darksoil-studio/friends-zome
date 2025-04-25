import { SignedEvent } from '@darksoil-studio/private-event-sourcing-zome';
import '@darksoil-studio/profiles-provider/dist/elements/profile-list-item-skeleton.js';
import {
	ActionHash,
	decodeHashFromBase64,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiInformationOutline } from '@mdi/js';
import { SlButton } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import {
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher, joinAsync, joinAsyncMap } from '@darksoil-studio/holochain-signals';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';
import { FriendRequest } from '../types.js';

/**
 * @element friend-requests
 * @fires profile-selected - Fired when the user selects an agent from the list. Detail will have this shape: { profileHash: <ProfileHash as ActionHash> }
 */
@localized()
@customElement('friend-requests')
export class FriendRequests extends SignalWatcher(LitElement) {
	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: friendsStoreContext, subscribe: true })
	@property()
	store!: FriendsStore;

	/** Private properties */

	renderList(
		incomingFriendRequests: Record<string, SignedEvent<FriendRequest>>,
		outgoingFriendRequests: Record<string, SignedEvent<FriendRequest>>,
	) {
		if (
			Object.keys(incomingFriendRequests).length +
				Object.keys(outgoingFriendRequests).length ===
			0
		)
			return html`
				<div
					class="column placeholder center-content"
					style="gap: 8px; flex: 1"
				>
					<sl-icon
						.src=${wrapPathInSvg(mdiInformationOutline)}
						style="font-size: 64px;"
					></sl-icon>
					<span style="text-align: center"
						>${msg("You don't have pending friend requests.")}</span
					>
				</div>
			`;

		return html`
			<div class="column" style="flex: 1;">
				${join(
					Object.entries(incomingFriendRequests).map(
						([friendRequestHash, friendRequest]) => html`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<span style="flex: 1"
									>${friendRequest.event.content.from_name}</span
								>
								<sl-button
									@click=${async (e: CustomEvent) => {
										const button = e.target as SlButton;
										button.loading = true;
										try {
											await this.store.client.rejectFriendRequest(
												decodeHashFromBase64(friendRequestHash),
											);
										} catch (e) {
											console.error(e);
											notifyError(msg('Failed to reject the friend request.'));
										}
										button.loading = false;
									}}
									variant="danger"
									>${msg('Reject')}</sl-button
								>
								<sl-button
									@click=${async (e: CustomEvent) => {
										const button = e.target as SlButton;
										button.loading = true;
										try {
											await this.store.client.acceptFriendRequest(
												decodeHashFromBase64(friendRequestHash),
											);
										} catch (e) {
											console.error(e);
											notifyError(msg('Failed to accept the friend request.'));
										}
										button.loading = false;
									}}
									variant="primary"
									>${msg('Accept')}</sl-button
								>
							</div>
						`,
					),
					() => html`<sl-divider></sl-divider>`,
				)}
				${join(
					Object.entries(outgoingFriendRequests).map(
						([friendRequestHash, friendRequest]) => html`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<span style="flex: 1"
									>${friendRequest.event.content.to_name}</span
								>
								<sl-tag>${msg('Awaiting response')} </sl-tag>
							</div>
						`,
					),
					() => html`<sl-divider></sl-divider>`,
				)}
			</div>
		`;
	}

	render() {
		const pendingFriendRequests = joinAsync([
			this.store.incomingFriendRequests.get(),
			this.store.outgoingFriendRequests.get(),
		]);

		switch (pendingFriendRequests.status) {
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
					.error=${pendingFriendRequests.error}
				></display-error>`;
			case 'completed':
				return this.renderList(
					pendingFriendRequests.value[0],
					pendingFriendRequests.value[1],
				);
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
