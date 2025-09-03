var qe=Object.defineProperty;var Ye=(t,e,i)=>e in t?qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var zt=(t,e,i)=>Ye(t,typeof e!="symbol"?e+"":e,i);import{S as te,i as tt,g as Ze,u as Xe,r as we,x as R,T as Ke,E as Ge}from"./friends-client.D0EhSUbZ.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ho(t){class e extends t{constructor(){super(...arguments);zt(this,"__dispose");zt(this,"w",new te.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const r=this.__dispose,n=new te.Computed(()=>{super.performUpdate()});this.w.watch(n),this.__dispose=()=>{this.w.unwatch(n)},n.get(),r==null||r()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.__dispose)==null||r.call(this)}}return e}const Je=[tt`
		.row {
			display: flex;
			flex-direction: row;
		}
		.column {
			display: flex;
			flex-direction: column;
		}
		.small-margin {
			margin-top: 6px;
		}
		.big-margin {
			margin-top: 23px;
		}

		.fill {
			flex: 1;
			height: 100%;
		}

		.title {
			font-size: 20px;
		}

		.center-content {
			align-items: center;
			justify-content: center;
		}

		.placeholder {
			color: var(--sl-color-gray-700);
		}

		.flex-scrollable-parent {
			position: relative;
			display: flex;
			flex: 1;
		}

		.flex-scrollable-container {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		.flex-scrollable-x {
			max-width: 100%;
			overflow-x: auto;
		}
		.flex-scrollable-y {
			max-height: 100%;
			overflow-y: auto;
		}
		:host {
			color: var(--sl-color-neutral-1000);
		}

		sl-card {
			display: flex;
		}
		sl-card::part(base) {
			flex: 1;
		}
		sl-card::part(body) {
			display: flex;
			flex: 1;
			height: 100%;
		}
		sl-drawer::part(body) {
			display: flex;
		}
	`];/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ti=t=>(...e)=>({_$litDirective$:t,values:e});let ei=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};function xe(t){return`data:image/svg+xml;utf8,${ii(t)}`}function ii(t){return encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`)}var Ce="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",Io="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",jo="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",oi="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",No="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",Wo="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z";function ri(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function ni(t,e="primary",i=oi,o=3e3){const r=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:o,innerHTML:`
        <sl-icon src="${xe(i)}" slot="icon"></sl-icon>
        ${ri(t)}
      `});return document.body.append(r),r.toast()}function Uo(t){return ni(t,"danger",Ce)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let si=class Ae extends Event{constructor(e){super(Ae.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=e}};si.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ai=class extends Event{constructor(e,i,o,r){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=i,this.callback=o,this.subscribe=r??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yo(t){return t}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ee{constructor(e,i,o,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,s)),this.unsubscribe=s},this.host=e,i.context!==void 0){const n=i;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=i,this.callback=o,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new ai(this.context,this.host,this.t,this.subscribe))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zo({context:t,subscribe:e}){return(i,o)=>{typeof o=="object"?o.addInitializer(function(){new ee(this,{context:t,callback:r=>{i.set.call(this,r)},subscribe:e})}):i.constructor.addInitializer(r=>{new ee(r,{context:t,callback:n=>{r[o]=n},subscribe:e})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci={attribute:!0,type:String,converter:Xe,reflect:!1,hasChanged:Ze},hi=(t=ci,e,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(i.name,t),o==="accessor"){const{name:s}=i;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(o==="setter"){const{name:s}=i;return function(a){const l=this[s];e.call(this,a),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+o)};function g(t){return(e,i)=>typeof i=="object"?hi(t,e,i):((o,r,n)=>{const s=r.hasOwnProperty(n);return r.constructor.createProperty(n,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(r,n):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(t){return g({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const di=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ct(t,e){return(i,o,r)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return di(i,o,{get(){return n(this)}})}}const Xo="friends/store",Ko="deepLinkApi";var Ft="";function ie(t){Ft=t}function ui(t=""){if(!Ft){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)ie(i.getAttribute("data-shoelace"));else{const o=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";o&&(r=o.getAttribute("src")),ie(r.split("/").slice(0,-1).join("/"))}}return Ft.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var pi={name:"default",resolver:t=>ui(`assets/icons/${t}.svg`)},fi=pi,oe={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},gi={name:"system",resolver:t=>t in oe?`data:image/svg+xml,${encodeURIComponent(oe[t])}`:""},mi=gi,vi=[fi,mi],Ht=[];function bi(t){Ht.push(t)}function yi(t){Ht=Ht.filter(e=>e!==t)}function re(t){return vi.find(e=>e.name===t)}var wi=tt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,_e=Object.defineProperty,xi=Object.defineProperties,Ci=Object.getOwnPropertyDescriptor,Ai=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,$i=Object.prototype.hasOwnProperty,_i=Object.prototype.propertyIsEnumerable,Rt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Wt=t=>{throw TypeError(t)},se=(t,e,i)=>e in t?_e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,St=(t,e)=>{for(var i in e||(e={}))$i.call(e,i)&&se(t,i,e[i]);if(ne)for(var i of ne(e))_i.call(e,i)&&se(t,i,e[i]);return t},Ee=(t,e)=>xi(t,Ai(e)),p=(t,e,i,o)=>{for(var r=o>1?void 0:o?Ci(e,i):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&_e(e,i,r),r},Se=(t,e,i)=>e.has(t)||Wt("Cannot "+i),Ei=(t,e,i)=>(Se(t,e,"read from private field"),e.get(t)),Si=(t,e,i)=>e.has(t)?Wt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ki=(t,e,i,o)=>(Se(t,e,"write to private field"),e.set(t,i),i),Pi=function(t,e){this[0]=t,this[1]=e},Go=t=>{var e=t[Rt("asyncIterator")],i=!1,o,r={};return e==null?(e=t[Rt("iterator")](),o=n=>r[n]=s=>e[n](s)):(e=e.call(t),o=n=>r[n]=s=>{if(i){if(i=!1,n==="throw")throw s;return s}return i=!0,{done:!1,value:new Pi(new Promise(a=>{var l=e[n](s);l instanceof Object||Wt("Object expected"),a(l)}),1)}}),r[Rt("iterator")]=()=>r,o("next"),"throw"in e?o("throw"):r.throw=n=>{throw n},"return"in e&&o("return"),r};function gt(t,e){const i=St({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:n}=o,s=Array.isArray(t)?t:[t];o.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),d=this[c];h!==d&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,d)}}),n.call(this,a)}}}var mt=tt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,xt,q=class extends we{constructor(){super(),Si(this,xt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,St({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",n=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(n=" v"+o.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,i){Ei(this,xt)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),ki(this,xt,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};xt=new WeakMap;q.version="2.20.0";q.dependencies={};p([g()],q.prototype,"dir",2);p([g()],q.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Li=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Jo=t=>t.strings===void 0,Oi={},Qo=(t,e=Oi)=>t._$AH=e;var pt=Symbol(),yt=Symbol(),Tt,Mt=new Map,j=class extends q{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=R`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?pt:yt}catch{return yt}try{const r=document.createElement("div");r.innerHTML=await o.text();const n=r.firstElementChild;if(((i=n==null?void 0:n.tagName)==null?void 0:i.toLowerCase())!=="svg")return pt;Tt||(Tt=new DOMParser);const a=Tt.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):pt}catch{return pt}}connectedCallback(){super.connectedCallback(),bi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),yi(this)}getIconSource(){const t=re(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?re(this.library):void 0;if(!e){this.svg=null;return}let r=Mt.get(e);if(r||(r=this.resolveIcon(e,o),Mt.set(e,r)),!this.initialRender)return;const n=await r;if(n===yt&&Mt.delete(e),e===this.getIconSource().url){if(Li(n)){if(this.svg=n,o){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&s&&o.mutator(s)}return}switch(n){case yt:case pt:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[mt,wi];p([$e()],j.prototype,"svg",2);p([g({reflect:!0})],j.prototype,"name",2);p([g()],j.prototype,"src",2);p([g()],j.prototype,"label",2);p([g({reflect:!0})],j.prototype,"library",2);p([gt("label")],j.prototype,"handleLabelChange",1);p([gt(["name","src","library"])],j.prototype,"setIcon",1);j.define("sl-icon");var zi=tt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ri=tt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Vt=new Set,st=new Map;let et,Ut="ltr",qt="en";const ke=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ke){const t=new MutationObserver(Le);Ut=document.documentElement.dir||"ltr",qt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Pe(...t){t.map(e=>{const i=e.$code.toLowerCase();st.has(i)?st.set(i,Object.assign(Object.assign({},st.get(i)),e)):st.set(i,e),et||(et=e)}),Le()}function Le(){ke&&(Ut=document.documentElement.dir||"ltr",qt=document.documentElement.lang||navigator.language),[...Vt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Ti=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Vt.add(this.host)}hostDisconnected(){Vt.delete(this.host)}dir(){return`${this.host.dir||Ut}`.toLowerCase()}lang(){return`${this.host.lang||qt}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),n=r==null?void 0:r.language.toLowerCase(),s=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",a=st.get(`${n}-${s}`),l=st.get(n);return{locale:r,language:n,region:s,primary:a,secondary:l}}exists(e,i){var o;const{primary:r,secondary:n}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||n&&n[e]||i.includeFallback&&et&&et[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(r&&r[e])n=r[e];else if(et&&et[e])n=et[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...i):n}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Oe={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Pe(Oe);var Mi=Oe,Yt=class extends Ti{};Pe(Mi);const G=Math.min,k=Math.max,At=Math.round,wt=Math.floor,V=t=>({x:t,y:t}),Bi={left:"right",right:"left",bottom:"top",top:"bottom"},Di={start:"end",end:"start"};function It(t,e,i){return k(t,G(e,i))}function ht(t,e){return typeof t=="function"?t(e):t}function J(t){return t.split("-")[0]}function dt(t){return t.split("-")[1]}function ze(t){return t==="x"?"y":"x"}function Zt(t){return t==="y"?"height":"width"}function it(t){return["top","bottom"].includes(J(t))?"y":"x"}function Xt(t){return ze(it(t))}function Fi(t,e,i){i===void 0&&(i=!1);const o=dt(t),r=Xt(t),n=Zt(r);let s=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=$t(s)),[s,$t(s)]}function Hi(t){const e=$t(t);return[jt(t),e,jt(e)]}function jt(t){return t.replace(/start|end/g,e=>Di[e])}function Vi(t,e,i){const o=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:o:e?o:r;case"left":case"right":return e?n:s;default:return[]}}function Ii(t,e,i,o){const r=dt(t);let n=Vi(J(t),i==="start",o);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(jt)))),n}function $t(t){return t.replace(/left|right|bottom|top/g,e=>Bi[e])}function ji(t){return{top:0,right:0,bottom:0,left:0,...t}}function Re(t){return typeof t!="number"?ji(t):{top:t,right:t,bottom:t,left:t}}function _t(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function ae(t,e,i){let{reference:o,floating:r}=t;const n=it(e),s=Xt(e),a=Zt(s),l=J(e),c=n==="y",h=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,m=o[a]/2-r[a]/2;let u;switch(l){case"top":u={x:h,y:o.y-r.height};break;case"bottom":u={x:h,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:d};break;case"left":u={x:o.x-r.width,y:d};break;default:u={x:o.x,y:o.y}}switch(dt(e)){case"start":u[s]-=m*(i&&c?-1:1);break;case"end":u[s]+=m*(i&&c?-1:1);break}return u}const Ni=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=i,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:d}=ae(c,o,l),m=o,u={},f=0;for(let v=0;v<a.length;v++){const{name:y,fn:b}=a[v],{x:w,y:x,data:$,reset:A}=await b({x:h,y:d,initialPlacement:o,placement:m,strategy:r,middlewareData:u,rects:c,platform:s,elements:{reference:t,floating:e}});h=w??h,d=x??d,u={...u,[y]:{...u[y],...$}},A&&f<=50&&(f++,typeof A=="object"&&(A.placement&&(m=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:h,y:d}=ae(c,m,l)),v=-1)}return{x:h,y:d,placement:m,strategy:r,middlewareData:u}};async function Kt(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=ht(e,t),f=Re(u),y=a[m?d==="floating"?"reference":"floating":d],b=_t(await n.getClippingRect({element:(i=await(n.isElement==null?void 0:n.isElement(y)))==null||i?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),w=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),$=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},A=_t(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:x,strategy:l}):w);return{top:(b.top-A.top+f.top)/$.y,bottom:(A.bottom-b.bottom+f.bottom)/$.y,left:(b.left-A.left+f.left)/$.x,right:(A.right-b.right+f.right)/$.x}}const Wi=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=ht(t,e)||{};if(c==null)return{};const d=Re(h),m={x:i,y:o},u=Xt(r),f=Zt(u),v=await s.getDimensions(c),y=u==="y",b=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",$=n.reference[f]+n.reference[u]-m[u]-n.floating[f],A=m[u]-n.reference[u],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let E=O?O[x]:0;(!E||!await(s.isElement==null?void 0:s.isElement(O)))&&(E=a.floating[x]||n.floating[f]);const W=$/2-A/2,B=E/2-v[f]/2-1,z=G(d[b],B),Y=G(d[w],B),D=z,Z=E-v[f]-Y,S=E/2-v[f]/2+W,nt=It(D,S,Z),U=!l.arrow&&dt(r)!=null&&S!==nt&&n.reference[f]/2-(S<D?z:Y)-v[f]/2<0,F=U?S<D?S-D:S-Z:0;return{[u]:m[u]+F,data:{[u]:nt,centerOffset:S-nt-F,...U&&{alignmentOffset:F}},reset:U}}}),Ui=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...y}=ht(t,e);if((i=n.arrow)!=null&&i.alignmentOffset)return{};const b=J(r),w=it(a),x=J(a)===a,$=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=m||(x||!v?[$t(a)]:Hi(a)),O=f!=="none";!m&&O&&A.push(...Ii(a,v,f,$));const E=[a,...A],W=await Kt(e,y),B=[];let z=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&B.push(W[b]),d){const S=Fi(r,s,$);B.push(W[S[0]],W[S[1]])}if(z=[...z,{placement:r,overflows:B}],!B.every(S=>S<=0)){var Y,D;const S=(((Y=n.flip)==null?void 0:Y.index)||0)+1,nt=E[S];if(nt)return{data:{index:S,overflows:z},reset:{placement:nt}};let U=(D=z.filter(F=>F.overflows[0]<=0).sort((F,X)=>F.overflows[1]-X.overflows[1])[0])==null?void 0:D.placement;if(!U)switch(u){case"bestFit":{var Z;const F=(Z=z.filter(X=>{if(O){const K=it(X.placement);return K===w||K==="y"}return!0}).map(X=>[X.placement,X.overflows.filter(K=>K>0).reduce((K,Ue)=>K+Ue,0)]).sort((X,K)=>X[1]-K[1])[0])==null?void 0:Z[0];F&&(U=F);break}case"initialPlacement":U=a;break}if(r!==U)return{reset:{placement:U}}}return{}}}};async function qi(t,e){const{placement:i,platform:o,elements:r}=t,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=J(i),a=dt(i),l=it(i)==="y",c=["left","top"].includes(s)?-1:1,h=n&&l?-1:1,d=ht(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:f}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof f=="number"&&(u=a==="end"?f*-1:f),l?{x:u*h,y:m*c}:{x:m*c,y:u*h}}const Yi=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:r,y:n,placement:s,middlewareData:a}=e,l=await qi(e,t);return s===((i=a.offset)==null?void 0:i.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},Zi=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:b,y:w}=y;return{x:b,y:w}}},...l}=ht(t,e),c={x:i,y:o},h=await Kt(e,l),d=it(J(r)),m=ze(d);let u=c[m],f=c[d];if(n){const y=m==="y"?"top":"left",b=m==="y"?"bottom":"right",w=u+h[y],x=u-h[b];u=It(w,u,x)}if(s){const y=d==="y"?"top":"left",b=d==="y"?"bottom":"right",w=f+h[y],x=f-h[b];f=It(w,f,x)}const v=a.fn({...e,[m]:u,[d]:f});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[m]:n,[d]:s}}}}}},Xi=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=ht(t,e),h=await Kt(e,c),d=J(r),m=dt(r),u=it(r)==="y",{width:f,height:v}=n.floating;let y,b;d==="top"||d==="bottom"?(y=d,b=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=d,y=m==="end"?"top":"bottom");const w=v-h.top-h.bottom,x=f-h.left-h.right,$=G(v-h[y],w),A=G(f-h[b],x),O=!e.middlewareData.shift;let E=$,W=A;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(W=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(E=w),O&&!m){const z=k(h.left,0),Y=k(h.right,0),D=k(h.top,0),Z=k(h.bottom,0);u?W=f-2*(z!==0||Y!==0?z+Y:k(h.left,h.right)):E=v-2*(D!==0||Z!==0?D+Z:k(h.top,h.bottom))}await l({...e,availableWidth:W,availableHeight:E});const B=await s.getDimensions(a.floating);return f!==B.width||v!==B.height?{reset:{rects:!0}}:{}}}};function kt(){return typeof window<"u"}function ut(t){return Te(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function N(t){var e;return(e=(Te(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Te(t){return kt()?t instanceof Node||t instanceof P(t).Node:!1}function T(t){return kt()?t instanceof Element||t instanceof P(t).Element:!1}function I(t){return kt()?t instanceof HTMLElement||t instanceof P(t).HTMLElement:!1}function le(t){return!kt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function vt(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function Ki(t){return["table","td","th"].includes(ut(t))}function Pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Lt(t){const e=Gt(),i=T(t)?M(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>i[o]?i[o]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Gi(t){let e=Q(t);for(;I(e)&&!lt(e);){if(Lt(e))return e;if(Pt(e))return null;e=Q(e)}return null}function Gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function lt(t){return["html","body","#document"].includes(ut(t))}function M(t){return P(t).getComputedStyle(t)}function Ot(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Q(t){if(ut(t)==="html")return t;const e=t.assignedSlot||t.parentNode||le(t)&&t.host||N(t);return le(e)?e.host:e}function Me(t){const e=Q(t);return lt(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&vt(e)?e:Me(e)}function ft(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=Me(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),s=P(r);if(n){const a=Nt(s);return e.concat(s,s.visualViewport||[],vt(r)?r:[],a&&i?ft(a):[])}return e.concat(r,ft(r,[],i))}function Nt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Be(t){const e=M(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=I(t),n=r?t.offsetWidth:i,s=r?t.offsetHeight:o,a=At(i)!==n||At(o)!==s;return a&&(i=n,o=s),{width:i,height:o,$:a}}function Jt(t){return T(t)?t:t.contextElement}function at(t){const e=Jt(t);if(!I(e))return V(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:n}=Be(e);let s=(n?At(i.width):i.width)/o,a=(n?At(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Ji=V(0);function De(t){const e=P(t);return!Gt()||!e.visualViewport?Ji:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Qi(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==P(t)?!1:e}function ot(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),n=Jt(t);let s=V(1);e&&(o?T(o)&&(s=at(o)):s=at(t));const a=Qi(n,i,o)?De(n):V(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,h=r.width/s.x,d=r.height/s.y;if(n){const m=P(n),u=o&&T(o)?P(o):o;let f=m,v=Nt(f);for(;v&&o&&u!==f;){const y=at(v),b=v.getBoundingClientRect(),w=M(v),x=b.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,$=b.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,d*=y.y,l+=x,c+=$,f=P(v),v=Nt(f)}}return _t({width:h,height:d,x:l,y:c})}function Qt(t,e){const i=Ot(t).scrollLeft;return e?e.left+i:ot(N(t)).left+i}function Fe(t,e,i){i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(i?0:Qt(t,o)),n=o.top+e.scrollTop;return{x:r,y:n}}function to(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const n=r==="fixed",s=N(o),a=e?Pt(e.floating):!1;if(o===s||a&&n)return i;let l={scrollLeft:0,scrollTop:0},c=V(1);const h=V(0),d=I(o);if((d||!d&&!n)&&((ut(o)!=="body"||vt(s))&&(l=Ot(o)),I(o))){const u=ot(o);c=at(o),h.x=u.x+o.clientLeft,h.y=u.y+o.clientTop}const m=s&&!d&&!n?Fe(s,l,!0):V(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+m.x,y:i.y*c.y-l.scrollTop*c.y+h.y+m.y}}function eo(t){return Array.from(t.getClientRects())}function io(t){const e=N(t),i=Ot(t),o=t.ownerDocument.body,r=k(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=k(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+Qt(t);const a=-i.scrollTop;return M(o).direction==="rtl"&&(s+=k(e.clientWidth,o.clientWidth)-r),{width:r,height:n,x:s,y:a}}function oo(t,e){const i=P(t),o=N(t),r=i.visualViewport;let n=o.clientWidth,s=o.clientHeight,a=0,l=0;if(r){n=r.width,s=r.height;const c=Gt();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:n,height:s,x:a,y:l}}function ro(t,e){const i=ot(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,n=I(t)?at(t):V(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=o*n.y;return{width:s,height:a,x:l,y:c}}function ce(t,e,i){let o;if(e==="viewport")o=oo(t,i);else if(e==="document")o=io(N(t));else if(T(e))o=ro(e,i);else{const r=De(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return _t(o)}function He(t,e){const i=Q(t);return i===e||!T(i)||lt(i)?!1:M(i).position==="fixed"||He(i,e)}function no(t,e){const i=e.get(t);if(i)return i;let o=ft(t,[],!1).filter(a=>T(a)&&ut(a)!=="body"),r=null;const n=M(t).position==="fixed";let s=n?Q(t):t;for(;T(s)&&!lt(s);){const a=M(s),l=Lt(s);!l&&a.position==="fixed"&&(r=null),(n?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||vt(s)&&!l&&He(t,s))?o=o.filter(h=>h!==s):r=a,s=Q(s)}return e.set(t,o),o}function so(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const s=[...i==="clippingAncestors"?Pt(e)?[]:no(e,this._c):[].concat(i),o],a=s[0],l=s.reduce((c,h)=>{const d=ce(e,h,r);return c.top=k(d.top,c.top),c.right=G(d.right,c.right),c.bottom=G(d.bottom,c.bottom),c.left=k(d.left,c.left),c},ce(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ao(t){const{width:e,height:i}=Be(t);return{width:e,height:i}}function lo(t,e,i){const o=I(e),r=N(e),n=i==="fixed",s=ot(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=V(0);if(o||!o&&!n)if((ut(e)!=="body"||vt(r))&&(a=Ot(e)),o){const m=ot(e,!0,n,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else r&&(l.x=Qt(r));const c=r&&!o&&!n?Fe(r,a):V(0),h=s.left+a.scrollLeft-l.x-c.x,d=s.top+a.scrollTop-l.y-c.y;return{x:h,y:d,width:s.width,height:s.height}}function Bt(t){return M(t).position==="static"}function he(t,e){if(!I(t)||M(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return N(t)===i&&(i=i.ownerDocument.body),i}function Ve(t,e){const i=P(t);if(Pt(t))return i;if(!I(t)){let r=Q(t);for(;r&&!lt(r);){if(T(r)&&!Bt(r))return r;r=Q(r)}return i}let o=he(t,e);for(;o&&Ki(o)&&Bt(o);)o=he(o,e);return o&&lt(o)&&Bt(o)&&!Lt(o)?i:o||Gi(t)||i}const co=async function(t){const e=this.getOffsetParent||Ve,i=this.getDimensions,o=await i(t.floating);return{reference:lo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ho(t){return M(t).direction==="rtl"}const Ct={convertOffsetParentRelativeRectToViewportRelativeRect:to,getDocumentElement:N,getClippingRect:so,getOffsetParent:Ve,getElementRects:co,getClientRects:eo,getDimensions:ao,getScale:at,isElement:T,isRTL:ho};function Ie(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function uo(t,e){let i=null,o;const r=N(t);function n(){var a;clearTimeout(o),(a=i)==null||a.disconnect(),i=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const c=t.getBoundingClientRect(),{left:h,top:d,width:m,height:u}=c;if(a||e(),!m||!u)return;const f=wt(d),v=wt(r.clientWidth-(h+m)),y=wt(r.clientHeight-(d+u)),b=wt(h),x={rootMargin:-f+"px "+-v+"px "+-y+"px "+-b+"px",threshold:k(0,G(1,l))||1};let $=!0;function A(O){const E=O[0].intersectionRatio;if(E!==l){if(!$)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},1e3)}E===1&&!Ie(c,t.getBoundingClientRect())&&s(),$=!1}try{i=new IntersectionObserver(A,{...x,root:r.ownerDocument})}catch{i=new IntersectionObserver(A,x)}i.observe(t)}return s(!0),n}function po(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Jt(t),h=r||n?[...c?ft(c):[],...ft(e)]:[];h.forEach(b=>{r&&b.addEventListener("scroll",i,{passive:!0}),n&&b.addEventListener("resize",i)});const d=c&&a?uo(c,i):null;let m=-1,u=null;s&&(u=new ResizeObserver(b=>{let[w]=b;w&&w.target===c&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=u)==null||x.observe(e)})),i()}),c&&!l&&u.observe(c),u.observe(e));let f,v=l?ot(t):null;l&&y();function y(){const b=ot(t);v&&!Ie(v,b)&&i(),v=b,f=requestAnimationFrame(y)}return i(),()=>{var b;h.forEach(w=>{r&&w.removeEventListener("scroll",i),n&&w.removeEventListener("resize",i)}),d==null||d(),(b=u)==null||b.disconnect(),u=null,l&&cancelAnimationFrame(f)}}const fo=Yi,go=Zi,mo=Ui,de=Xi,vo=Wi,bo=(t,e,i)=>{const o=new Map,r={platform:Ct,...i},n={...r.platform,_c:o};return Ni(t,e,{...r,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=ti(class extends ei{constructor(t){var e;if(super(t),t.type!==Qe.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return Ke}});function yo(t){return wo(t)}function Dt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function wo(t){for(let e=t;e;e=Dt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Dt(t);e;e=Dt(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||Lt(i)||e.tagName==="BODY"))return e}return null}function xo(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends q{constructor(){super(...arguments),this.localize=new Yt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,n=0,s=0,a=0,l=0,c=0,h=0;i?t.top<e.top?(o=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(o=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(o=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(o=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||xo(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=po(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[fo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(de({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(mo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(go({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(de({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(vo({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>Ct.getOffsetParent(i,yo):Ct.getOffsetParent;bo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Ee(St({},Ct),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:r,placement:n})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let h="",d="",m="",u="";if(this.arrowPlacement==="start"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?f:"",u=s?"":f}else if(this.arrowPlacement==="end"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":f,u=s?f:"",m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:m,left:u,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return R`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Et({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Et({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?R`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[mt,Ri];p([ct(".popup")],C.prototype,"popup",2);p([ct(".popup__arrow")],C.prototype,"arrowEl",2);p([g()],C.prototype,"anchor",2);p([g({type:Boolean,reflect:!0})],C.prototype,"active",2);p([g({reflect:!0})],C.prototype,"placement",2);p([g({reflect:!0})],C.prototype,"strategy",2);p([g({type:Number})],C.prototype,"distance",2);p([g({type:Number})],C.prototype,"skidding",2);p([g({type:Boolean})],C.prototype,"arrow",2);p([g({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);p([g({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);p([g({type:Boolean})],C.prototype,"flip",2);p([g({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);p([g({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);p([g({type:Object})],C.prototype,"flipBoundary",2);p([g({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);p([g({type:Boolean})],C.prototype,"shift",2);p([g({type:Object})],C.prototype,"shiftBoundary",2);p([g({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);p([g({attribute:"auto-size"})],C.prototype,"autoSize",2);p([g()],C.prototype,"sync",2);p([g({type:Object})],C.prototype,"autoSizeBoundary",2);p([g({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);p([g({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var je=new Map,Co=new WeakMap;function Ao(t){return t??{keyframes:[],options:{duration:0}}}function ue(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ne(t,e){je.set(t,Ao(e))}function pe(t,e,i){const o=Co.get(t);if(o!=null&&o[e])return ue(o[e],i.dir);const r=je.get(e);return r?ue(r,i.dir):{keyframes:[],options:{duration:0}}}function fe(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function ge(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,Ee(St({},i),{duration:$o()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function me(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function $o(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ve(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}var _=class extends q{constructor(){super(),this.localize=new Yt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=me(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=me(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ve(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=pe(this,"tooltip.show",{dir:this.localize.dir()});await ge(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ve(this.body);const{keyframes:i,options:o}=pe(this,"tooltip.hide",{dir:this.localize.dir()});await ge(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,fe(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,fe(this,"sl-after-hide")}render(){return R`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Et({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};_.styles=[mt,zi];_.dependencies={"sl-popup":C};p([ct("slot:not([name])")],_.prototype,"defaultSlot",2);p([ct(".tooltip__body")],_.prototype,"body",2);p([ct("sl-popup")],_.prototype,"popup",2);p([g()],_.prototype,"content",2);p([g()],_.prototype,"placement",2);p([g({type:Boolean,reflect:!0})],_.prototype,"disabled",2);p([g({type:Number})],_.prototype,"distance",2);p([g({type:Boolean,reflect:!0})],_.prototype,"open",2);p([g({type:Number})],_.prototype,"skidding",2);p([g()],_.prototype,"trigger",2);p([g({type:Boolean})],_.prototype,"hoist",2);p([gt("open",{waitUntilFirstUpdate:!0})],_.prototype,"handleOpenChange",1);p([gt(["content","distance","hoist","placement","skidding"])],_.prototype,"handleOptionsChange",1);p([gt("disabled")],_.prototype,"handleDisabledChange",1);Ne("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ne("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});_.define("sl-tooltip");var bt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let rt=class extends we{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return R`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize};"
				src="${xe(Ce)}"
			></sl-icon>
		`}renderFull(){return R` <div class="column center-content" style="flex: 1; gap: 8px">
			${this.renderIcon()}
			<div style="max-width: 500px; text-align: center" class="column">
				${this.headline?R` <span style="margin-bottom: 8px">${this.headline} </span>`:R``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return R`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};rt.styles=[Je,tt`
			:host {
				display: flex;
			}
		`];bt([g({attribute:"tooltip"})],rt.prototype,"tooltip",void 0);bt([g()],rt.prototype,"headline",void 0);bt([g()],rt.prototype,"error",void 0);bt([g({attribute:"icon-size"})],rt.prototype,"iconSize",void 0);rt=bt([li("display-error")],rt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o=(t,...e)=>({strTag:!0,strings:t,values:e}),ir=_o,Eo=t=>typeof t!="string"&&"strTag"in t,So=(t,e,i)=>{let o=t[0];for(let r=1;r<t.length;r++)o+=e[r-1],o+=t[r];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=t=>Eo(t)?So(t.strings,t.values):t;let or=ko;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Po{constructor(){this.settled=!1,this.promise=new Promise((e,i)=>{this._resolve=e,this._reject=i})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lo=new Po;Lo.resolve();var Oo=tt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,zo=class extends q{constructor(){super(...arguments),this.localize=new Yt(this)}render(){return R`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};zo.styles=[mt,Oo];var Ro=tt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=Symbol.for(""),To=t=>{if((t==null?void 0:t.r)===We)return t==null?void 0:t._$litStatic$},be=(t,...e)=>({_$litStatic$:e.reduce((i,o,r)=>i+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[r+1],t[0]),r:We}),ye=new Map,Mo=t=>(e,...i)=>{const o=i.length;let r,n;const s=[],a=[];let l,c=0,h=!1;for(;c<o;){for(l=e[c];c<o&&(n=i[c],(r=To(n))!==void 0);)l+=r+e[++c],h=!0;c!==o&&a.push(n),s.push(l),c++}if(c===o&&s.push(e[o]),h){const d=s.join("$$lit$$");(e=ye.get(d))===void 0&&(s.raw=s,ye.set(d,e=s)),i=a}return t(e,...i)},Bo=Mo(R);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=t=>t??Ge;var L=class extends q{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?be`a`:be`button`;return Bo`
      <${e}
        part="base"
        class=${Et({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${H(t?void 0:this.disabled)}
        type=${H(t?void 0:"button")}
        href=${H(t?this.href:void 0)}
        target=${H(t?this.target:void 0)}
        download=${H(t?this.download:void 0)}
        rel=${H(t&&this.target?"noreferrer noopener":void 0)}
        role=${H(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${H(this.name)}
          library=${H(this.library)}
          src=${H(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};L.styles=[mt,Ro];L.dependencies={"sl-icon":j};p([ct(".icon-button")],L.prototype,"button",2);p([$e()],L.prototype,"hasFocus",2);p([g()],L.prototype,"name",2);p([g()],L.prototype,"library",2);p([g()],L.prototype,"src",2);p([g()],L.prototype,"href",2);p([g()],L.prototype,"target",2);p([g()],L.prototype,"download",2);p([g()],L.prototype,"label",2);p([g({type:Boolean,reflect:!0})],L.prototype,"disabled",2);export{Ne as A,pe as B,ge as C,ve as D,fe as E,ai as F,Yo as G,ni as H,Ko as I,_ as J,ti as K,Yt as L,ei as M,Qe as N,C as O,Jo as P,Qo as Q,No as R,Ho as S,Wo as T,Io as U,Ee as _,oi as a,jo as b,Je as c,Zo as d,g as e,Xo as f,St as g,mt as h,zo as i,j,p as k,ct as l,or as m,Uo as n,gt as o,q as p,be as q,$e as r,ir as s,li as t,Et as u,H as v,xe as w,Bo as x,Go as y,L as z};
