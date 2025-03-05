import '@darksoil-studio/profiles-zome/dist/elements/profile-list-item-skeleton.js';
import { ActionHash, AgentPubKey, encodeHashToBase64 } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import {
	FormField,
	FormFieldController,
	hashProperty,
	sharedStyles,
} from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import { SignalWatcher, toPromise } from '@tnesh-stack/signals';
import { EntryRecord } from '@tnesh-stack/utils';
import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';
import { Friend, Profile } from '../types.js';
import './search-friend-dropdown.js';

/**
 * @element search-friend
 * @fires friend-selected - Fired when the user selects some agent. Detail will have this shape: { agentPubKey: HoloHash }
 */
@localized()
@customElement('search-friend')
export class SearchFriend
	extends SignalWatcher(LitElement)
	implements FormField
{
	/** Form field properties */

	/**
	 * The name of the field if this element is used inside a form
	 * Required only if the element is used inside a form
	 */
	@property()
	name!: string;

	/**
	 * The default value of the field if this element is used inside a form
	 */
	@property(hashProperty('default-value'))
	defaultValue: AgentPubKey[] | undefined;

	/**
	 * Whether this field is required if this element is used inside a form
	 */
	@property()
	required = false;

	/**
	 * Whether this field is disabled if this element is used inside a form
	 */
	@property()
	disabled = false;

	/**
	 * @internal
	 */
	@state()
	value!: AgentPubKey[] | undefined;

	/** Public attributes */

	/**
	 * Whether to clear the field when an agent is selected.
	 * @attr clear-on-select
	 */
	@property({ type: Boolean, attribute: 'clear-on-select' })
	clearOnSelect = false;

	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: friendsStoreContext, subscribe: true })
	@property()
	store!: FriendsStore;

	/**
	 * Label for the agent searching field.
	 * @attr field-label
	 */
	@property({ type: String, attribute: 'field-label' })
	fieldLabel!: string;

	/**
	 * @internal
	 */
	_controller = new FormFieldController(this);

	reportValidity() {
		const invalid = this.required !== false && this.value === undefined;

		if (invalid) {
			this._textField.setCustomValidity(`This field is required`);
			this._textField.reportValidity();
		}

		return !invalid;
	}

	async reset() {
		this.value = this.defaultValue;
		if (this.defaultValue) {
			const friends = await toPromise(this.store.friends);
			const friend = friends.find(friend =>
				friend.agents.find(agent =>
					this.defaultValue!.find(
						a2 => encodeHashToBase64(agent) === encodeHashToBase64(a2),
					),
				),
			);
			this._textField.value = friend?.profile.name || '';
		} else {
			this._textField.value = '';
		}
	}

	/**
	 * @internal
	 */
	@query('#textfield')
	private _textField!: SlInput;

	@state()
	searchFilter = '';

	private onFriendSelected(friend: Friend) {
		this.value = friend.agents;

		// If the consumer says so, clear the field
		if (this.clearOnSelect) {
			this._textField.value = '';
		} else {
			this._textField.value = friend.profile.name;
		}
		this.searchFilter = '';
	}

	/**
	 * @internal
	 */
	get _label() {
		let l = this.fieldLabel ? this.fieldLabel : msg('Search Friend');

		if (this.required !== false) l = `${l} *`;

		return l;
	}

	render() {
		return html`
			<div style="flex: 1; display: flex;">
				<search-profile-dropdown
					id="dropdown"
					.open=${this.searchFilter.length >= 3}
					style="flex: 1"
					.searchFilter=${this.searchFilter}
					@friend-selected=${(e: CustomEvent) =>
						this.onFriendSelected(e.detail.friend)}
				>
					<sl-input
						id="textfield"
						.label=${this._label}
						.placeholder=${msg('At least 3 chars...')}
						@input=${(e: CustomEvent) => {
							this.searchFilter = (e.target as SlInput).value;
						}}
					></sl-input>
				</search-profile-dropdown>
			</div>
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
