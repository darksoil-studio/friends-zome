import{a as b,b as f,c as v,n as p,f as g,t as C}from"./context.Bjs5uBkO.js";import{r as m,b as w,a as P,x as y,i as O}from"./friends-client.B6X9N127.js";import"./commonjsHelpers.BosuxZz1.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class E{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,s=!1){const r=s||!Object.is(t,this.o);this.o=t,r&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:r}]of this.subscriptions)s(this.o,r)},t!==void 0&&(this.value=t)}addCallback(t,s,r){if(!r)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:s});const{disposer:o}=this.subscriptions.get(t);t(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _=class extends Event{constructor(t,s){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s}};class d extends E{constructor(t,s,r){var o,i;super(s.context!==void 0?s.initialValue:r),this.onContextRequest=e=>{if(e.context!==this.context)return;const n=e.contextTarget??e.composedPath()[0];n!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,n,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;const n=new Set;for(const[l,{consumerHost:u}]of this.subscriptions)n.has(l)||(n.add(l),u.dispatchEvent(new b(this.context,u,l,!0)));e.stopPropagation()},this.host=t,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),(i=(o=this.host).addController)==null||i.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new _(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x({context:c}){return(t,s)=>{const r=new WeakMap;if(typeof s=="object")return s.addInitializer(function(){r.set(this,new d(this,{context:c}))}),{get(){return t.get.call(this)},set(o){var i;return(i=r.get(this))==null||i.setValue(o),t.set.call(this,o)},init(o){var i;return(i=r.get(this))==null||i.setValue(o),o}};{t.constructor.addInitializer(e=>{r.set(e,new d(e,{context:c}))});const o=Object.getOwnPropertyDescriptor(t,s);let i;if(o===void 0){const e=new WeakMap;i={get(){return e.get(this)},set(n){r.get(this).setValue(n),e.set(this,n)},configurable:!0,enumerable:!0}}else{const e=o.set;i={...o,set(n){r.get(this).setValue(n),e==null||e.call(this,n)}}}return void Object.defineProperty(t,s,i)}}}const j=f("ProfilesProvider"),V=f("tnesh/appClientContext");var $=Object.defineProperty,R=Object.getOwnPropertyDescriptor,h=(c,t,s,r)=>{for(var o=r>1?void 0:r?R(t,s):t,i=c.length-1,e;i>=0;i--)(e=c[i])&&(o=(r?e(t,s,o):e(o))||o);return r&&o&&$(t,s,o),o};let a=class extends m{constructor(){super(...arguments),this.zome="friends"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<friends-context> must have a role="YOUR_DNA_ROLE" property, eg: <friends-context role="role1">');if(!this.client)throw new Error(`<friends-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <friends-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <friends-context .store=\${store}>)
      `);this.store=new w(new P(this.client,this.role,this.zome))}}render(){return y`<slot></slot>`}};a.styles=O`
		:host {
			display: contents;
		}
	`;h([v({context:V})],a.prototype,"client",2);h([x({context:g}),x({context:j}),p({type:Object})],a.prototype,"store",2);h([p()],a.prototype,"role",2);h([p()],a.prototype,"zome",2);a=h([C("friends-context")],a);export{a as FriendsContext};
