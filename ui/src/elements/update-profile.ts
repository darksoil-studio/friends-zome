import {
	notifyError,
	onSubmit,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import '@darksoil-studio/holochain-elements/dist/elements/select-avatar.js';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { FieldConfig, Profile } from '@darksoil-studio/profiles-provider';
import { consume } from '@lit/context';
import { localized, msg, str } from '@lit/localize';
import { mdiInformationOutline } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';

/**
 * A custom element that fires event on value change.
 *
 * @element update-profile
 * @fires profile-updated - Fired after the profile has been updated. Detail will have this shape: { profile: { nickname, fields } }
 */
@localized()
@customElement('update-profile')
export class UpdateProfile extends SignalWatcher(LitElement) {
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
				new CustomEvent('profile-updated', {
					detail: {
						profile,
					},
					bubbles: true,
					composed: true,
				}),
			);
		} catch (e) {
			console.error(e);
			notifyError(msg('Error updating the profile.'));
		}
		this.shadowRoot!.querySelector('sl-button')!.loading = false;
	}

	renderField(fieldConfig: FieldConfig, value: string) {
		return html`
			<sl-input
				name="${fieldConfig.name}"
				.required=${fieldConfig.required}
				.label=${fieldConfig.label}
				.value=${value}
			></sl-input>
		`;
	}

	renderForm(profile: Profile) {
		return html`
			<form
				id="profile-form"
				class="column"
				${onSubmit(fields => this.setProfile(fields))}
				style="gap: 16px"
			>
				<div class="row" style="justify-content: center; gap: 16px;">
					<select-avatar
						avatar-width="64"
						avatar-height="64"
						name="avatar"
						required
						.value=${profile.avatar}
					></select-avatar>
					<sl-input
						name="name"
						.value=${profile.name}
						.label=${msg('Name')}
						required
						minLength="${this.store.config.minNicknameLength}"
						.helpText=${msg(
							str`Min. ${this.store.config.minNicknameLength} characters`,
						)}
						style="flex: 1;"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(field =>
					this.renderField(field, profile.fields[field.name]),
				)}

				<sl-button variant="primary" type="submit"
					>${msg('Update Profile')}
				</sl-button>
			</form>
		`;
	}

	render() {
		const myProfile = this.store.myProfile.get();

		switch (myProfile.status) {
			case 'pending':
				return html`<div
					class="column"
					style="align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;
			case 'completed':
				if (!myProfile.value) {
					return html`<div
						class="column placeholder"
						style="flex: 1; align-items: center; justify-content: center; gap: 16px"
					>
						<sl-icon
							.src=${wrapPathInSvg(mdiInformationOutline)}
							style="height: 64px; width: 64px;"
						></sl-icon>
						<span>${msg("You haven't created a profile yet.")}</span>
					</div>`;
				}

				return this.renderForm(myProfile.value);
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching your profile')}
					.error=${myProfile.error}
				></display-error>`;
		}
	}

	static styles = sharedStyles;
}
