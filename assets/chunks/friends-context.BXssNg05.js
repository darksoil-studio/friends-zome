import{F as z,G as $,n as x,m as p,c as _,d as f,e as h,S as j,H as k,f as P,I as O,t as q}from"./chunk.HLJ2JR6P.W6_Rq4-Q.js";import{d as D,i as F,r as E,x as l,e as R,c as A,b as g,a as m}from"./friends-client.D0EhSUbZ.js";import{l as L}from"./index.gP6Z19-h.js";import"./commonjsHelpers.BosuxZz1.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class V{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:o}]of this.subscriptions)t(this.o,o)},e!==void 0&&(this.value=e)}addCallback(e,t,o){if(!o)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let H=class extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};class w extends V{constructor(e,t,o){var r,n;super(t.context!==void 0?t.initialValue:o),this.onContextRequest=i=>{if(i.context!==this.context)return;const c=i.contextTarget??i.composedPath()[0];c!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,c,i.subscribe))},this.onProviderRequest=i=>{if(i.context!==this.context||(i.contextTarget??i.composedPath()[0])===this.host)return;const c=new Set;for(const[b,{consumerHost:y}]of this.subscriptions)c.has(b)||(c.add(b),y.dispatchEvent(new z(this.context,y,b,!0)));i.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(n=(r=this.host).addController)==null||n.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new H(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function C({context:s}){return(e,t)=>{const o=new WeakMap;if(typeof t=="object")return t.addInitializer(function(){o.set(this,new w(this,{context:s}))}),{get(){return e.get.call(this)},set(r){var n;return(n=o.get(this))==null||n.setValue(r),e.set.call(this,r)},init(r){var n;return(n=o.get(this))==null||n.setValue(r),r}};{e.constructor.addInitializer(i=>{o.set(i,new w(i,{context:s}))});const r=Object.getOwnPropertyDescriptor(e,t);let n;if(r===void 0){const i=new WeakMap;n={get(){return i.get(this)},set(c){o.get(this).setValue(c),i.set(this,c)},configurable:!0,enumerable:!0}}else{const i=r.set;n={...r,set(c){o.get(this).setValue(c),i==null||i.call(this,c)}}}return void Object.defineProperty(e,t,n)}}}const I=$("tnesh/appClientContext"),T=$("ProfilesProvider");var B=Object.defineProperty,M=Object.getOwnPropertyDescriptor,v=(s,e,t,o)=>{for(var r=o>1?void 0:o?M(e,t):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=(o?i(e,t,r):i(r))||r);return o&&r&&B(e,t,r),r};async function S(s,e){const t=e.split("/");if(t.length!==2){x(p("Invalid code."));return}const[o,r]=t,n=D(r);return s.client.sendFriendRequest(o,[n])}let u=class extends j(E){constructor(){super(...arguments),this.size=256,this.showSendCodeFallback=!1}renderSendCodeFallback(s){return this.showSendCodeFallback?l`
			<div class="column" style="gap:16px">
				<span style="align-self: center">${p("OR")} </span>

				${this.renderCodeOrLink(s)}
			</div>
		`:l``}renderCodeOrLink(s){if(this.deepLinkApi){const e=this.deepLinkApi.buildDeepLink(s);return l`
				<div class="column" style="gap: 8px">
					<span>${p("Share this link with your friend:")} </span>
					<div
						class="row"
						style="align-items: center; gap: 8px; justify-content: center"
					>
						<sl-tag style="width: calc(${this.size}px - 38px)">${e}</sl-tag>
						<sl-copy-button .value=${e}></sl-copy-button>
					</div>
				</div>
			`}return l`
			<div class="column" style="gap: 8px; width: calc(${this.size}px)">
				<span>${p("Share this code with your friend:")} </span>
				<div
					class="row"
					style="align-items: center; gap: 8px; justify-content: center"
				>
					<sl-tag style="width: calc(${this.size}px - 38px)">${s}</sl-tag>
					<sl-copy-button .value=${s}></sl-copy-button>
				</div>

				<span style="word-break: break-word;"
					>${p("Enter the code from your friend:")}
				</span>

				<sl-input
					@sl-input=${async e=>{const t=e.target;if(s===t.value){x(p("Invalid invite code: this is your own invite code.")),t.value="";return}try{await S(this.store,t.value),this.dispatchEvent(new CustomEvent("friend-request-sent",{bubbles:!0,composed:!0})),k("Friend request send!")}catch(o){x("Failed to send friend request."),console.error(o)}t.value=""}}
				>
				</sl-input>
			</div>
		`}code(){var e;const s=this.store.myProfile.get();return s.status!=="completed"?s:{status:"completed",value:`${(e=s.value)==null?void 0:e.name}/${R(this.store.client.client.myPubKey)}`}}render(){const s=this.code();switch(s.status){case"pending":return l`<div
					class="column"
					style="flex: 1; align-items: center; justify-content: center"
				>
					<sl-spinner style="font-size: 0.2rem"></sl-spinner>
				</div>`;case"error":return l`<display-error
					.headline=${p("Error fetching the profiles for all agents")}
					.error=${s.error}
				></display-error>`;case"completed":return l`<div class="column" style="gap: 16px; flex: 1">
					<sl-qr-code
						style="align-self: center"
						.size=${this.size}
						.value=${s.value}
					>
					</sl-qr-code
					>${this.renderSendCodeFallback(s.value)}
				</div>`}}};u.styles=[_,F`
			:host {
				display: flex;
			}
			sl-tag::part(base) {
				overflow: hidden;
			}
		`];v([f({context:P,subscribe:!0})],u.prototype,"store",2);v([f({context:O})],u.prototype,"deepLinkApi",2);v([h()],u.prototype,"size",2);v([h({attribute:"show-send-code-fallback",type:Boolean})],u.prototype,"showSendCodeFallback",2);u=v([q("friend-request-qr-code")],u);var W=Object.defineProperty,G=Object.getOwnPropertyDescriptor,d=(s,e,t,o)=>{for(var r=o>1?void 0:o?G(e,t):e,n=s.length-1,i;n>=0;n--)(i=s[n])&&(r=(o?i(e,t,r):i(r))||r);return o&&r&&W(e,t,r),r};let a=class extends E{constructor(){super(...arguments),this.config=A,this.zome="friends"}connectedCallback(){var s;if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<friends-context> must have a role="YOUR_DNA_ROLE" property, eg: <friends-context role="role1">');if(!this.client)throw new Error(`<friends-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <friends-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <friends-context .store=\${store}>)
      `);this.addEventListener("context-provider",e=>{if(e.context===L){const t=e.target;setTimeout(()=>{this.store=new g(new m(this.client,this.role,this.zome),this.store.config,t.store)})}}),this.store=new g(new m(this.client,this.role,this.zome),this.config,this.linkedDevicesStore),(s=this.deepLinkApi)==null||s.onDeepLinkClicked(async e=>{try{await S(this.store,e),this.dispatchEvent(new CustomEvent("friend-request-sent",{bubbles:!0,composed:!0})),k("Friend request send!")}catch(t){x("Failed to send friend request."),console.error(t)}})}}render(){return l`<slot></slot>`}};a.styles=F`
		:host {
			display: contents;
		}
	`;d([f({context:I})],a.prototype,"client",2);d([f({context:O})],a.prototype,"deepLinkApi",2);d([C({context:P}),C({context:T}),h({type:Object})],a.prototype,"store",2);d([h()],a.prototype,"role",2);d([h()],a.prototype,"config",2);d([h()],a.prototype,"zome",2);d([f({context:L,subscribe:!0})],a.prototype,"linkedDevicesStore",2);a=d([q("friends-context")],a);export{a as FriendsContext};
