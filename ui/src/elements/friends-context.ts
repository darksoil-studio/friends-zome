import { css, html, LitElement } from 'lit';
import { provide, consume } from '@lit/context';
import { customElement, property } from 'lit/decorators.js';
import { AppClient } from '@holochain/client';
import { appClientContext } from '@tnesh-stack/elements';

import { friendsStoreContext } from '../context.js';
import { FriendsStore } from '../friends-store.js';
import { FriendsClient } from '../friends-client.js';

/**
 * @element friends-context
 */
@customElement('friends-context')
export class FriendsContext extends LitElement {
  @consume({ context: appClientContext })
  private client!: AppClient;

  @provide({ context: friendsStoreContext })
  @property({ type: Object })
  store!: FriendsStore;

  @property()
  role!: string;

  @property()
  zome = 'friends';

  connectedCallback() {
    super.connectedCallback();
    if (this.store) return;
    if (!this.role) {
      throw new Error(`<friends-context> must have a role="YOUR_DNA_ROLE" property, eg: <friends-context role="role1">`);
    }
    if (!this.client) {
      throw new Error(`<friends-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <friends-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <friends-context .store=\${store}>)
      `);
    }

    this.store = new FriendsStore(new FriendsClient(this.client, this.role, this.zome));
  }
  
  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

