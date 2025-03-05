import '@darksoil-studio/profiles-zome/dist/elements/profile-list-item-skeleton.js';
import {
	ActionHash,
	AgentPubKey,
	decodeHashFromBase64,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import { sharedStyles } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import {
	AsyncComputed,
	Signal,
	SignalWatcher,
	joinAsyncMap,
	pipe,
	toPromise,
} from '@tnesh-stack/signals';
import { EntryRecord, HoloHashMap, mapValues, slice } from '@tnesh-stack/utils';
import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';
import { Friend, Profile } from '../types.js';

/**
 * @element search-profile-dropdown
 * @fires profile-selected - Fired when the user selects some agent. Detail will have this shape: { profileHash: ActionHash }
 */
@localized()
@customElement('search-profile-dropdown')
export class SearchProfileDropdown extends SignalWatcher(LitElement) {
	/** Public attributes */

	set searchFilter(sf: string | undefined) {
		this._searchFilter.set(sf);
	}
	get searchFilter() {
		return this._searchFilter.get();
	}

	_searchFilter = new Signal.State<string | undefined>(undefined);

	@property()
	open: boolean | undefined;

	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: friendsStoreContext, subscribe: true })
	@property()
	store!: FriendsStore;

	/**
	 * @internal
	 */
	_search = new AsyncComputed(() => {
		const filter = this._searchFilter.get();
		if (!filter)
			return {
				status: 'completed',
				value: [],
			};

		const friends = this.store.friends.get();
		if (friends.status !== 'completed') return friends;

		const filteredFriends = friends.value.filter(friend =>
			friend.profile.name.startsWith(filter),
		);

		return {
			status: 'completed',
			value: filteredFriends,
		};
	});

	/**
	 * @internal
	 */
	@query('#dropdown')
	public dropdown!: SlDropdown;

	async onFriendSelected(friend: Friend) {
		this.dispatchEvent(
			new CustomEvent('friend-selected', {
				detail: { friend },
				bubbles: true,
				composed: true,
			}),
		);
	}

	renderFriendList() {
		const sf = this._searchFilter.get();
		if (!sf || sf.length < 3)
			return html`<sl-menu-item disabled
				>${msg('Enter at least 3 chars to search...')}</sl-menu-item
			>`;

		const searchResult = this._search.get();

		switch (searchResult.status) {
			case 'pending':
				return Array.from(Array(3)).map(
					() => html`
						<sl-menu-item>
							<div class="row" style="display:flex; align-items: center">
								<sl-skeleton
									effect="sheen"
									slot="prefix"
									style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
								></sl-skeleton>
								<sl-skeleton
									effect="sheen"
									style="width: 100px; margin: 8px; border-radius: 12px"
								></sl-skeleton>
							</div>
						</sl-menu-item>
					`,
				);
			case 'error':
				return html`
					<display-error
						style="flex: 1; display:flex"
						tooltip
						.headline=${msg('Error searching profiles')}
						.error=${searchResult.error}
					></display-error>
				`;
			case 'completed': {
				const friends = searchResult.value;

				if (friends.length === 0)
					return html`<sl-menu-item disabled>
						${msg('No nicknames match the filter')}
					</sl-menu-item>`;

				return html`
					${friends.map(
						friend => html`
							<sl-menu-item .value=${encodeHashToBase64(friend.agents[0])}>
								<sl-avatar
									slot="prefix"
									style="--size: 32px; margin-right: 16px"
									.image=${friend.profile.avatar}
									.initials=${friend.profile.name.slice(0, 2)}
								></sl-avatar>
								${friend.profile.name}
							</sl-menu-item>
						`,
					)}
				`;
			}
		}
	}

	render() {
		return html`
			<sl-dropdown
				id="dropdown"
				hoist
				style="flex: 1"
				.open=${ifDefined(this.open)}
			>
				<slot slot="trigger"></slot>
				<sl-menu
					@sl-select=${async (e: CustomEvent) => {
						const friendAgent = decodeHashFromBase64(e.detail.item.value);
						const friends = await toPromise(this.store.friends);
						const friend = friends.find(friend =>
							friend.agents.find(
								agent =>
									encodeHashToBase64(agent) === encodeHashToBase64(friendAgent),
							),
						)!;
						this.onFriendSelected(friend);
					}}
				>
					${this.renderFriendList()}
				</sl-menu>
			</sl-dropdown>
		`;
	}

	static get styles() {
		return [
			sharedStyles,
			css`
				:host {
					display: flex;
				}
			`,
		];
	}
}
