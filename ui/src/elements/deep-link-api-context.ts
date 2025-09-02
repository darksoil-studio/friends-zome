import { provide } from '@lit/context';
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { DeepLinkApi, deepLinkApi } from '../context.js';

/**
 * @element deep-link-api-context
 */
@customElement('deep-link-api-context')
export class DeepLinkApiContext extends LitElement {
	@provide({ context: deepLinkApi })
	@property({ type: Object })
	deepLinkApi!: DeepLinkApi;

	render() {
		return html`<slot></slot>`;
	}

	static styles = css`
		:host {
			display: contents;
		}
	`;
}
