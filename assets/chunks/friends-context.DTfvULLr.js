import{l as b}from"./context.MzCdc8Vh.js";import{r as C,c as w,b as d,a as x,x as y,i as P}from"./friends-client.D4zYoAMY.js";import{b as O,n as g,c as m,a as l,f as E,t as _}from"./context.DkJWIMN7.js";import"./commonjsHelpers.BosuxZz1.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class j{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,s=!1){const i=s||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:i}]of this.subscriptions)s(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,s,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:s});const{disposer:o}=this.subscriptions.get(t);t(this.value,o)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let D=class extends Event{constructor(t,s){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=s}};class f extends j{constructor(t,s,i){var o,r;super(s.context!==void 0?s.initialValue:i),this.onContextRequest=e=>{if(e.context!==this.context)return;const c=e.contextTarget??e.composedPath()[0];c!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,c,e.subscribe))},this.onProviderRequest=e=>{if(e.context!==this.context||(e.contextTarget??e.composedPath()[0])===this.host)return;const c=new Set;for(const[p,{consumerHost:u}]of this.subscriptions)c.has(p)||(c.add(p),u.dispatchEvent(new O(this.context,u,p,!0)));e.stopPropagation()},this.host=t,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),(r=(o=this.host).addController)==null||r.call(o,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new D(this.context,this.host))}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v({context:n}){return(t,s)=>{const i=new WeakMap;if(typeof s=="object")return s.addInitializer(function(){i.set(this,new f(this,{context:n}))}),{get(){return t.get.call(this)},set(o){var r;return(r=i.get(this))==null||r.setValue(o),t.set.call(this,o)},init(o){var r;return(r=i.get(this))==null||r.setValue(o),o}};{t.constructor.addInitializer(e=>{i.set(e,new f(e,{context:n}))});const o=Object.getOwnPropertyDescriptor(t,s);let r;if(o===void 0){const e=new WeakMap;r={get(){return e.get(this)},set(c){i.get(this).setValue(c),e.set(this,c)},configurable:!0,enumerable:!0}}else{const e=o.set;r={...o,set(c){i.get(this).setValue(c),e==null||e.call(this,c)}}}return void Object.defineProperty(t,s,r)}}}const V=g("ProfilesProvider"),$=g("tnesh/appClientContext");var k=Object.defineProperty,z=Object.getOwnPropertyDescriptor,h=(n,t,s,i)=>{for(var o=i>1?void 0:i?z(t,s):t,r=n.length-1,e;r>=0;r--)(e=n[r])&&(o=(i?e(t,s,o):e(o))||o);return i&&o&&k(t,s,o),o};let a=class extends C{constructor(){super(...arguments),this.config=w,this.zome="friends"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<friends-context> must have a role="YOUR_DNA_ROLE" property, eg: <friends-context role="role1">');if(!this.client)throw new Error(`<friends-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <friends-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <friends-context .store=\${store}>)
      `);this.addEventListener("context-provider",n=>{if(n.context===b){const t=n.target;setTimeout(()=>{this.store=new d(new x(this.client,this.role,this.zome),this.store.config,t.store)})}}),this.store=new d(new x(this.client,this.role,this.zome),this.config,this.linkedDevicesStore)}}render(){return y`<slot></slot>`}};a.styles=P`
		:host {
			display: contents;
		}
	`;h([m({context:$})],a.prototype,"client",2);h([v({context:E}),v({context:V}),l({type:Object})],a.prototype,"store",2);h([l()],a.prototype,"role",2);h([l()],a.prototype,"config",2);h([l()],a.prototype,"zome",2);h([m({context:b,subscribe:!0})],a.prototype,"linkedDevicesStore",2);a=h([_("friends-context")],a);export{a as FriendsContext};
