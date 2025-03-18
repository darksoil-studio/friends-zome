import { FieldConfig, Profile } from '@darksoil-studio/profiles-provider';
import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import { notifyError, onSubmit, sharedStyles } from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/select-avatar.js';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';

/**
 * A custom element that fires event on value change.
 *
 * @element create-profile
 * @fires profile-created - Fired after the profile has been created. Detail will have this shape: { profile: { nickname, fields } }
 */
@localized()
@customElement('create-profile')
export class CreateProfile extends SignalWatcher(LitElement) {
	/**
	 * Profiles store for this element, not required if you embed this element inside a <profiles-context>
	 */
	@consume({ context: friendsStoreContext, subscribe: true })
	@property()
	store!: FriendsStore;

	/** Private properties */

	async setProfile(profile: Profile) {
		this.shadowRoot!.querySelector('sl-button')!.loading = true;
		try {
			await this.store.client.setMyProfile({
				...profile,
				fields: {},
			});
			this.dispatchEvent(
				new CustomEvent('profile-created', {
					detail: {
						profile,
					},
					bubbles: true,
					composed: true,
				}),
			);
		} catch (e) {
			console.error(e);
			notifyError(msg('Error creating the profile.'));
		}
		this.shadowRoot!.querySelector('sl-button')!.loading = false;
	}

	renderField(fieldConfig: FieldConfig) {
		return html`
			<sl-input
				name="${fieldConfig.name}"
				.required=${fieldConfig.required}
				.label=${fieldConfig.label}
			></sl-input>
		`;
	}

	render() {
		return html`
			<form
				id="profile-form"
				class="column"
				${onSubmit(fields => this.setProfile(fields))}
				style="gap: 16px"
			>
				<div
					class="row"
					style="justify-content: center; align-self: start; gap: 16px"
				>
					<select-avatar name="avatar" required></select-avatar>
					<sl-input
						name="name"
						.label=${msg('Name')}
						required
						minLength="${this.store.config.minNicknameLength}"
						.helpText=${msg(
							str`Min. ${this.store.config.minNicknameLength} characters`,
						)}
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(field =>
					this.renderField(field),
				)}

				<sl-button style="flex: 1;" variant="primary" type="submit"
					>${msg('Create Profile')}
				</sl-button>
			</form>
		`;
	}

	static styles = sharedStyles;
}
