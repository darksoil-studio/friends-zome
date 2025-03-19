var Ie=Object.defineProperty;var je=(t,e,i)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var $t=(t,e,i)=>je(t,typeof e!="symbol"?e+"":e,i);import{S as Jt,i as at,r as me,T as Ne,x as P}from"./friends-client.dn7e3wvF.js";import{a as m,s as We,t as Ue}from"./context.a7Ifszyp.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lo(t){class e extends t{constructor(){super(...arguments);$t(this,"__dispose");$t(this,"w",new Jt.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const r=this.__dispose,n=new Jt.Computed(()=>{super.performUpdate()});this.w.watch(n),this.__dispose=()=>{this.w.unwatch(n)},n.get(),r==null||r()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.__dispose)==null||r.call(this)}}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Ye=t=>(...e)=>({_$litDirective$:t,values:e});let Ze=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};function ve(t){return`data:image/svg+xml;utf8,${Xe(t)}`}function Xe(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var we="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",Po="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",zo="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",Ke="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",Oo="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",$o="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z";function Ge(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function Je(t,e="primary",i=Ke,o=3e3){const r=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:o,innerHTML:`
        <sl-icon src="${ve(i)}" slot="icon"></sl-icon>
        ${Ge(t)}
      `});return document.body.append(r),r.toast()}function Ro(t){return Je(t,"danger",we)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ye(t){return m({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qe=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t,e){return(i,o,r)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Qe(i,o,{get(){return n(this)}})}}var Et=at`
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
`,be=Object.defineProperty,ti=Object.defineProperties,ei=Object.getOwnPropertyDescriptor,ii=Object.getOwnPropertyDescriptors,Qt=Object.getOwnPropertySymbols,oi=Object.prototype.hasOwnProperty,ri=Object.prototype.propertyIsEnumerable,Rt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),Nt=t=>{throw TypeError(t)},te=(t,e,i)=>e in t?be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Lt=(t,e)=>{for(var i in e||(e={}))oi.call(e,i)&&te(t,i,e[i]);if(Qt)for(var i of Qt(e))ri.call(e,i)&&te(t,i,e[i]);return t},xe=(t,e)=>ti(t,ii(e)),p=(t,e,i,o)=>{for(var r=o>1?void 0:o?ei(e,i):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&be(e,i,r),r},Ce=(t,e,i)=>e.has(t)||Nt("Cannot "+i),ni=(t,e,i)=>(Ce(t,e,"read from private field"),e.get(t)),si=(t,e,i)=>e.has(t)?Nt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),ai=(t,e,i,o)=>(Ce(t,e,"write to private field"),e.set(t,i),i),li=function(t,e){this[0]=t,this[1]=e},ko=t=>{var e=t[Rt("asyncIterator")],i=!1,o,r={};return e==null?(e=t[Rt("iterator")](),o=n=>r[n]=s=>e[n](s)):(e=e.call(t),o=n=>r[n]=s=>{if(i){if(i=!1,n==="throw")throw s;return s}return i=!0,{done:!1,value:new li(new Promise(a=>{var l=e[n](s);l instanceof Object||Nt("Object expected"),a(l)}),1)}}),r[Rt("iterator")]=()=>r,o("next"),"throw"in e?o("throw"):r.throw=n=>{throw n},"return"in e&&o("return"),r},yt,J=class extends me{constructor(){super(),si(this,yt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Lt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",n=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(n=" v"+o.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,i){ni(this,yt)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),ai(this,yt,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};yt=new WeakMap;J.version="2.20.0";J.dependencies={};p([m()],J.prototype,"dir",2);p([m()],J.prototype,"lang",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=Ye(class extends Ze{constructor(t){var e;if(super(t),t.type!==qe.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return Ne}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci=(t,...e)=>({strTag:!0,strings:t,values:e}),To=ci,hi=t=>typeof t!="string"&&"strTag"in t,di=(t,e,i)=>{let o=t[0];for(let r=1;r<t.length;r++)o+=e[r-1],o+=t[r];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ui=t=>hi(t)?di(t.strings,t.values):t;let Mo=ui;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pi=class{constructor(e){this.__litLocalizeEventHandler=i=>{i.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(ee,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(ee,this.__litLocalizeEventHandler)}};const fi=t=>t.addController(new pi(t)),gi=fi;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Do=()=>(t,e)=>(t.addInitializer(gi),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mi{constructor(){this.settled=!1,this.promise=new Promise((e,i)=>{this._resolve=e,this._reject=i})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vi=new mi;vi.resolve();var wi=at`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Dt="";function ie(t){Dt=t}function yi(t=""){if(!Dt){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)ie(i.getAttribute("data-shoelace"));else{const o=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";o&&(r=o.getAttribute("src")),ie(r.split("/").slice(0,-1).join("/"))}}return Dt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var bi={name:"default",resolver:t=>yi(`assets/icons/${t}.svg`)},xi=bi,oe={caret:`
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
  `},Ci={name:"system",resolver:t=>t in oe?`data:image/svg+xml,${encodeURIComponent(oe[t])}`:""},Ai=Ci,_i=[xi,Ai],Ht=[];function Ei(t){Ht.push(t)}function Li(t){Ht=Ht.filter(e=>e!==t)}function re(t){return _i.find(e=>e.name===t)}var Si=at`
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
`;function lt(t,e){const i=Lt({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:n}=o,s=Array.isArray(t)?t:[t];o.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),u=this[c];h!==u&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,u)}}),n.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pi=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,Ho=t=>t.strings===void 0,zi={},Vo=(t,e=zi)=>t._$AH=e;var ut=Symbol(),vt=Symbol(),kt,Tt=new Map,F=class extends J{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=P`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?ut:vt}catch{return vt}try{const r=document.createElement("div");r.innerHTML=await o.text();const n=r.firstElementChild;if(((i=n==null?void 0:n.tagName)==null?void 0:i.toLowerCase())!=="svg")return ut;kt||(kt=new DOMParser);const a=kt.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ut}catch{return ut}}connectedCallback(){super.connectedCallback(),Ei(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Li(this)}getIconSource(){const t=re(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?re(this.library):void 0;if(!e){this.svg=null;return}let r=Tt.get(e);if(r||(r=this.resolveIcon(e,o),Tt.set(e,r)),!this.initialRender)return;const n=await r;if(n===vt&&Tt.delete(e),e===this.getIconSource().url){if(Pi(n)){if(this.svg=n,o){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&s&&o.mutator(s)}return}switch(n){case vt:case ut:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};F.styles=[Et,Si];p([ye()],F.prototype,"svg",2);p([m({reflect:!0})],F.prototype,"name",2);p([m()],F.prototype,"src",2);p([m()],F.prototype,"label",2);p([m({reflect:!0})],F.prototype,"library",2);p([lt("label")],F.prototype,"handleLabelChange",1);p([lt(["name","src","library"])],F.prototype,"setIcon",1);var I=class extends J{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=P`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=P``;return this.initials?e=P`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=P`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,P`
      <div
        part="base"
        class=${xt({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};I.styles=[Et,wi];I.dependencies={"sl-icon":F};p([ye()],I.prototype,"hasError",2);p([m()],I.prototype,"image",2);p([m()],I.prototype,"label",2);p([m()],I.prototype,"initials",2);p([m()],I.prototype,"loading",2);p([m({reflect:!0})],I.prototype,"shape",2);p([lt("image")],I.prototype,"handleImageChange",1);I.define("sl-avatar");F.define("sl-icon");var Oi=at`
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
`,$i=at`
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
`;const Vt=new Set,rt=new Map;let Q,Wt="ltr",Ut="en";const Ae=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ae){const t=new MutationObserver(Ee);Wt=document.documentElement.dir||"ltr",Ut=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function _e(...t){t.map(e=>{const i=e.$code.toLowerCase();rt.has(i)?rt.set(i,Object.assign(Object.assign({},rt.get(i)),e)):rt.set(i,e),Q||(Q=e)}),Ee()}function Ee(){Ae&&(Wt=document.documentElement.dir||"ltr",Ut=document.documentElement.lang||navigator.language),[...Vt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Ri=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Vt.add(this.host)}hostDisconnected(){Vt.delete(this.host)}dir(){return`${this.host.dir||Wt}`.toLowerCase()}lang(){return`${this.host.lang||Ut}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),n=r==null?void 0:r.language.toLowerCase(),s=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",a=rt.get(`${n}-${s}`),l=rt.get(n);return{locale:r,language:n,region:s,primary:a,secondary:l}}exists(e,i){var o;const{primary:r,secondary:n}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||n&&n[e]||i.includeFallback&&Q&&Q[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(r&&r[e])n=r[e];else if(Q&&Q[e])n=Q[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...i):n}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var Le={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};_e(Le);var ki=Le,Se=class extends Ri{};_e(ki);const X=Math.min,z=Math.max,Ct=Math.round,wt=Math.floor,H=t=>({x:t,y:t}),Ti={left:"right",right:"left",bottom:"top",top:"bottom"},Mi={start:"end",end:"start"};function Ft(t,e,i){return z(t,X(e,i))}function ct(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function ht(t){return t.split("-")[1]}function Pe(t){return t==="x"?"y":"x"}function qt(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(K(t))?"y":"x"}function Yt(t){return Pe(tt(t))}function Bi(t,e,i){i===void 0&&(i=!1);const o=ht(t),r=Yt(t),n=qt(r);let s=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=At(s)),[s,At(s)]}function Di(t){const e=At(t);return[It(t),e,It(e)]}function It(t){return t.replace(/start|end/g,e=>Mi[e])}function Hi(t,e,i){const o=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:o:e?o:r;case"left":case"right":return e?n:s;default:return[]}}function Vi(t,e,i,o){const r=ht(t);let n=Hi(K(t),i==="start",o);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(It)))),n}function At(t){return t.replace(/left|right|bottom|top/g,e=>Ti[e])}function Fi(t){return{top:0,right:0,bottom:0,left:0,...t}}function ze(t){return typeof t!="number"?Fi(t):{top:t,right:t,bottom:t,left:t}}function _t(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function ne(t,e,i){let{reference:o,floating:r}=t;const n=tt(e),s=Yt(e),a=qt(s),l=K(e),c=n==="y",h=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,g=o[a]/2-r[a]/2;let d;switch(l){case"top":d={x:h,y:o.y-r.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-r.width,y:u};break;default:d={x:o.x,y:o.y}}switch(ht(e)){case"start":d[s]-=g*(i&&c?-1:1);break;case"end":d[s]+=g*(i&&c?-1:1);break}return d}const Ii=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=i,a=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:u}=ne(c,o,l),g=o,d={},f=0;for(let v=0;v<a.length;v++){const{name:y,fn:w}=a[v],{x:b,y:x,data:_,reset:A}=await w({x:h,y:u,initialPlacement:o,placement:g,strategy:r,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});h=b??h,u=x??u,d={...d,[y]:{...d[y],..._}},A&&f<=50&&(f++,typeof A=="object"&&(A.placement&&(g=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:h,y:u}=ne(c,g,l)),v=-1)}return{x:h,y:u,placement:g,strategy:r,middlewareData:d}};async function Zt(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:n,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:g=!1,padding:d=0}=ct(e,t),f=ze(d),y=a[g?u==="floating"?"reference":"floating":u],w=_t(await n.getClippingRect({element:(i=await(n.isElement==null?void 0:n.isElement(y)))==null||i?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),b=u==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),_=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},A=_t(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:x,strategy:l}):b);return{top:(w.top-A.top+f.top)/_.y,bottom:(A.bottom-w.bottom+f.bottom)/_.y,left:(w.left-A.left+f.left)/_.x,right:(A.right-w.right+f.right)/_.x}}const ji=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:n,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=ct(t,e)||{};if(c==null)return{};const u=ze(h),g={x:i,y:o},d=Yt(r),f=qt(d),v=await s.getDimensions(c),y=d==="y",w=y?"top":"left",b=y?"bottom":"right",x=y?"clientHeight":"clientWidth",_=n.reference[f]+n.reference[d]-g[d]-n.floating[f],A=g[d]-n.reference[d],$=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let L=$?$[x]:0;(!L||!await(s.isElement==null?void 0:s.isElement($)))&&(L=a.floating[x]||n.floating[f]);const N=_/2-A/2,M=L/2-v[f]/2-1,R=X(u[w],M),U=X(u[b],M),B=R,q=L-v[f]-U,S=L/2-v[f]/2+N,ot=Ft(B,S,q),W=!l.arrow&&ht(r)!=null&&S!==ot&&n.reference[f]/2-(S<B?R:U)-v[f]/2<0,D=W?S<B?S-B:S-q:0;return{[d]:g[d]+D,data:{[d]:ot,centerOffset:S-ot-D,...W&&{alignmentOffset:D}},reset:W}}}),Ni=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:v=!0,...y}=ct(t,e);if((i=n.arrow)!=null&&i.alignmentOffset)return{};const w=K(r),b=tt(a),x=K(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=g||(x||!v?[At(a)]:Di(a)),$=f!=="none";!g&&$&&A.push(...Vi(a,v,f,_));const L=[a,...A],N=await Zt(e,y),M=[];let R=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&M.push(N[w]),u){const S=Bi(r,s,_);M.push(N[S[0]],N[S[1]])}if(R=[...R,{placement:r,overflows:M}],!M.every(S=>S<=0)){var U,B;const S=(((U=n.flip)==null?void 0:U.index)||0)+1,ot=L[S];if(ot)return{data:{index:S,overflows:R},reset:{placement:ot}};let W=(B=R.filter(D=>D.overflows[0]<=0).sort((D,Y)=>D.overflows[1]-Y.overflows[1])[0])==null?void 0:B.placement;if(!W)switch(d){case"bestFit":{var q;const D=(q=R.filter(Y=>{if($){const Z=tt(Y.placement);return Z===b||Z==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(Z=>Z>0).reduce((Z,Fe)=>Z+Fe,0)]).sort((Y,Z)=>Y[1]-Z[1])[0])==null?void 0:q[0];D&&(W=D);break}case"initialPlacement":W=a;break}if(r!==W)return{reset:{placement:W}}}return{}}}};async function Wi(t,e){const{placement:i,platform:o,elements:r}=t,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=K(i),a=ht(i),l=tt(i)==="y",c=["left","top"].includes(s)?-1:1,h=n&&l?-1:1,u=ct(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:f}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof f=="number"&&(d=a==="end"?f*-1:f),l?{x:d*h,y:g*c}:{x:g*c,y:d*h}}const Ui=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:r,y:n,placement:s,middlewareData:a}=e,l=await Wi(e,t);return s===((i=a.offset)==null?void 0:i.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:s}}}}},qi=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...l}=ct(t,e),c={x:i,y:o},h=await Zt(e,l),u=tt(K(r)),g=Pe(u);let d=c[g],f=c[u];if(n){const y=g==="y"?"top":"left",w=g==="y"?"bottom":"right",b=d+h[y],x=d-h[w];d=Ft(b,d,x)}if(s){const y=u==="y"?"top":"left",w=u==="y"?"bottom":"right",b=f+h[y],x=f-h[w];f=Ft(b,f,x)}const v=a.fn({...e,[g]:d,[u]:f});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[g]:n,[u]:s}}}}}},Yi=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:l=()=>{},...c}=ct(t,e),h=await Zt(e,c),u=K(r),g=ht(r),d=tt(r)==="y",{width:f,height:v}=n.floating;let y,w;u==="top"||u==="bottom"?(y=u,w=g===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(w=u,y=g==="end"?"top":"bottom");const b=v-h.top-h.bottom,x=f-h.left-h.right,_=X(v-h[y],b),A=X(f-h[w],x),$=!e.middlewareData.shift;let L=_,N=A;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(N=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=b),$&&!g){const R=z(h.left,0),U=z(h.right,0),B=z(h.top,0),q=z(h.bottom,0);d?N=f-2*(R!==0||U!==0?R+U:z(h.left,h.right)):L=v-2*(B!==0||q!==0?B+q:z(h.top,h.bottom))}await l({...e,availableWidth:N,availableHeight:L});const M=await s.getDimensions(a.floating);return f!==M.width||v!==M.height?{reset:{rects:!0}}:{}}}};function St(){return typeof window<"u"}function dt(t){return Oe(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function j(t){var e;return(e=(Oe(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Oe(t){return St()?t instanceof Node||t instanceof O(t).Node:!1}function k(t){return St()?t instanceof Element||t instanceof O(t).Element:!1}function V(t){return St()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function se(t){return!St()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function gt(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function Zi(t){return["table","td","th"].includes(dt(t))}function Pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function zt(t){const e=Xt(),i=k(t)?T(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>i[o]?i[o]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Xi(t){let e=G(t);for(;V(e)&&!st(e);){if(zt(e))return e;if(Pt(e))return null;e=G(e)}return null}function Xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function st(t){return["html","body","#document"].includes(dt(t))}function T(t){return O(t).getComputedStyle(t)}function Ot(t){return k(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function G(t){if(dt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||se(t)&&t.host||j(t);return se(e)?e.host:e}function $e(t){const e=G(t);return st(e)?t.ownerDocument?t.ownerDocument.body:t.body:V(e)&&gt(e)?e:$e(e)}function pt(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=$e(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),s=O(r);if(n){const a=jt(s);return e.concat(s,s.visualViewport||[],gt(r)?r:[],a&&i?pt(a):[])}return e.concat(r,pt(r,[],i))}function jt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Re(t){const e=T(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=V(t),n=r?t.offsetWidth:i,s=r?t.offsetHeight:o,a=Ct(i)!==n||Ct(o)!==s;return a&&(i=n,o=s),{width:i,height:o,$:a}}function Kt(t){return k(t)?t:t.contextElement}function nt(t){const e=Kt(t);if(!V(e))return H(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:n}=Re(e);let s=(n?Ct(i.width):i.width)/o,a=(n?Ct(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Ki=H(0);function ke(t){const e=O(t);return!Xt()||!e.visualViewport?Ki:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Gi(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==O(t)?!1:e}function et(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),n=Kt(t);let s=H(1);e&&(o?k(o)&&(s=nt(o)):s=nt(t));const a=Gi(n,i,o)?ke(n):H(0);let l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,h=r.width/s.x,u=r.height/s.y;if(n){const g=O(n),d=o&&k(o)?O(o):o;let f=g,v=jt(f);for(;v&&o&&d!==f;){const y=nt(v),w=v.getBoundingClientRect(),b=T(v),x=w.left+(v.clientLeft+parseFloat(b.paddingLeft))*y.x,_=w.top+(v.clientTop+parseFloat(b.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,u*=y.y,l+=x,c+=_,f=O(v),v=jt(f)}}return _t({width:h,height:u,x:l,y:c})}function Gt(t,e){const i=Ot(t).scrollLeft;return e?e.left+i:et(j(t)).left+i}function Te(t,e,i){i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(i?0:Gt(t,o)),n=o.top+e.scrollTop;return{x:r,y:n}}function Ji(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const n=r==="fixed",s=j(o),a=e?Pt(e.floating):!1;if(o===s||a&&n)return i;let l={scrollLeft:0,scrollTop:0},c=H(1);const h=H(0),u=V(o);if((u||!u&&!n)&&((dt(o)!=="body"||gt(s))&&(l=Ot(o)),V(o))){const d=et(o);c=nt(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const g=s&&!u&&!n?Te(s,l,!0):H(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+g.x,y:i.y*c.y-l.scrollTop*c.y+h.y+g.y}}function Qi(t){return Array.from(t.getClientRects())}function to(t){const e=j(t),i=Ot(t),o=t.ownerDocument.body,r=z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+Gt(t);const a=-i.scrollTop;return T(o).direction==="rtl"&&(s+=z(e.clientWidth,o.clientWidth)-r),{width:r,height:n,x:s,y:a}}function eo(t,e){const i=O(t),o=j(t),r=i.visualViewport;let n=o.clientWidth,s=o.clientHeight,a=0,l=0;if(r){n=r.width,s=r.height;const c=Xt();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:n,height:s,x:a,y:l}}function io(t,e){const i=et(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,n=V(t)?nt(t):H(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,l=r*n.x,c=o*n.y;return{width:s,height:a,x:l,y:c}}function ae(t,e,i){let o;if(e==="viewport")o=eo(t,i);else if(e==="document")o=to(j(t));else if(k(e))o=io(e,i);else{const r=ke(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return _t(o)}function Me(t,e){const i=G(t);return i===e||!k(i)||st(i)?!1:T(i).position==="fixed"||Me(i,e)}function oo(t,e){const i=e.get(t);if(i)return i;let o=pt(t,[],!1).filter(a=>k(a)&&dt(a)!=="body"),r=null;const n=T(t).position==="fixed";let s=n?G(t):t;for(;k(s)&&!st(s);){const a=T(s),l=zt(s);!l&&a.position==="fixed"&&(r=null),(n?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||gt(s)&&!l&&Me(t,s))?o=o.filter(h=>h!==s):r=a,s=G(s)}return e.set(t,o),o}function ro(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const s=[...i==="clippingAncestors"?Pt(e)?[]:oo(e,this._c):[].concat(i),o],a=s[0],l=s.reduce((c,h)=>{const u=ae(e,h,r);return c.top=z(u.top,c.top),c.right=X(u.right,c.right),c.bottom=X(u.bottom,c.bottom),c.left=z(u.left,c.left),c},ae(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function no(t){const{width:e,height:i}=Re(t);return{width:e,height:i}}function so(t,e,i){const o=V(e),r=j(e),n=i==="fixed",s=et(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const l=H(0);if(o||!o&&!n)if((dt(e)!=="body"||gt(r))&&(a=Ot(e)),o){const g=et(e,!0,n,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else r&&(l.x=Gt(r));const c=r&&!o&&!n?Te(r,a):H(0),h=s.left+a.scrollLeft-l.x-c.x,u=s.top+a.scrollTop-l.y-c.y;return{x:h,y:u,width:s.width,height:s.height}}function Mt(t){return T(t).position==="static"}function le(t,e){if(!V(t)||T(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return j(t)===i&&(i=i.ownerDocument.body),i}function Be(t,e){const i=O(t);if(Pt(t))return i;if(!V(t)){let r=G(t);for(;r&&!st(r);){if(k(r)&&!Mt(r))return r;r=G(r)}return i}let o=le(t,e);for(;o&&Zi(o)&&Mt(o);)o=le(o,e);return o&&st(o)&&Mt(o)&&!zt(o)?i:o||Xi(t)||i}const ao=async function(t){const e=this.getOffsetParent||Be,i=this.getDimensions,o=await i(t.floating);return{reference:so(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function lo(t){return T(t).direction==="rtl"}const bt={convertOffsetParentRelativeRectToViewportRelativeRect:Ji,getDocumentElement:j,getClippingRect:ro,getOffsetParent:Be,getElementRects:ao,getClientRects:Qi,getDimensions:no,getScale:nt,isElement:k,isRTL:lo};function De(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function co(t,e){let i=null,o;const r=j(t);function n(){var a;clearTimeout(o),(a=i)==null||a.disconnect(),i=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),n();const c=t.getBoundingClientRect(),{left:h,top:u,width:g,height:d}=c;if(a||e(),!g||!d)return;const f=wt(u),v=wt(r.clientWidth-(h+g)),y=wt(r.clientHeight-(u+d)),w=wt(h),x={rootMargin:-f+"px "+-v+"px "+-y+"px "+-w+"px",threshold:z(0,X(1,l))||1};let _=!0;function A($){const L=$[0].intersectionRatio;if(L!==l){if(!_)return s();L?s(!1,L):o=setTimeout(()=>{s(!1,1e-7)},1e3)}L===1&&!De(c,t.getBoundingClientRect())&&s(),_=!1}try{i=new IntersectionObserver(A,{...x,root:r.ownerDocument})}catch{i=new IntersectionObserver(A,x)}i.observe(t)}return s(!0),n}function ho(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Kt(t),h=r||n?[...c?pt(c):[],...pt(e)]:[];h.forEach(w=>{r&&w.addEventListener("scroll",i,{passive:!0}),n&&w.addEventListener("resize",i)});const u=c&&a?co(c,i):null;let g=-1,d=null;s&&(d=new ResizeObserver(w=>{let[b]=w;b&&b.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=d)==null||x.observe(e)})),i()}),c&&!l&&d.observe(c),d.observe(e));let f,v=l?et(t):null;l&&y();function y(){const w=et(t);v&&!De(v,w)&&i(),v=w,f=requestAnimationFrame(y)}return i(),()=>{var w;h.forEach(b=>{r&&b.removeEventListener("scroll",i),n&&b.removeEventListener("resize",i)}),u==null||u(),(w=d)==null||w.disconnect(),d=null,l&&cancelAnimationFrame(f)}}const uo=Ui,po=qi,fo=Ni,ce=Yi,go=ji,mo=(t,e,i)=>{const o=new Map,r={platform:bt,...i},n={...r.platform,_c:o};return Ii(t,e,{...r,platform:n})};function vo(t){return wo(t)}function Bt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function wo(t){for(let e=t;e;e=Bt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Bt(t);e;e=Bt(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||zt(i)||e.tagName==="BODY"))return e}return null}function yo(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends J{constructor(){super(...arguments),this.localize=new Se(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,n=0,s=0,a=0,l=0,c=0,h=0;i?t.top<e.top?(o=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(o=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(o=t.right,r=t.top,n=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(o=e.right,r=e.top,n=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||yo(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=ho(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[uo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(ce({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(fo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(po({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(ce({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(go({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>bt.getOffsetParent(i,vo):bt.getOffsetParent;mo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:xe(Lt({},bt),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:r,placement:n})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const l=r.arrow.x,c=r.arrow.y;let h="",u="",g="",d="";if(this.arrowPlacement==="start"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?f:"",d=s?"":f}else if(this.arrowPlacement==="end"){const f=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":f,d=s?f:"",g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:g,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return P`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${xt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${xt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?P`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[Et,$i];p([ft(".popup")],C.prototype,"popup",2);p([ft(".popup__arrow")],C.prototype,"arrowEl",2);p([m()],C.prototype,"anchor",2);p([m({type:Boolean,reflect:!0})],C.prototype,"active",2);p([m({reflect:!0})],C.prototype,"placement",2);p([m({reflect:!0})],C.prototype,"strategy",2);p([m({type:Number})],C.prototype,"distance",2);p([m({type:Number})],C.prototype,"skidding",2);p([m({type:Boolean})],C.prototype,"arrow",2);p([m({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);p([m({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);p([m({type:Boolean})],C.prototype,"flip",2);p([m({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);p([m({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);p([m({type:Object})],C.prototype,"flipBoundary",2);p([m({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);p([m({type:Boolean})],C.prototype,"shift",2);p([m({type:Object})],C.prototype,"shiftBoundary",2);p([m({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);p([m({attribute:"auto-size"})],C.prototype,"autoSize",2);p([m()],C.prototype,"sync",2);p([m({type:Object})],C.prototype,"autoSizeBoundary",2);p([m({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);p([m({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var He=new Map,bo=new WeakMap;function xo(t){return t??{keyframes:[],options:{duration:0}}}function he(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Ve(t,e){He.set(t,xo(e))}function de(t,e,i){const o=bo.get(t);if(o!=null&&o[e])return he(o[e],i.dir);const r=He.get(e);return r?he(r,i.dir):{keyframes:[],options:{duration:0}}}function ue(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function pe(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,xe(Lt({},i),{duration:Co()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function fe(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Co(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ge(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}var E=class extends J{constructor(){super(),this.localize=new Se(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=fe(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=fe(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ge(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=de(this,"tooltip.show",{dir:this.localize.dir()});await pe(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ge(this.body);const{keyframes:i,options:o}=de(this,"tooltip.hide",{dir:this.localize.dir()});await pe(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ue(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ue(this,"sl-after-hide")}render(){return P`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${xt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};E.styles=[Et,Oi];E.dependencies={"sl-popup":C};p([ft("slot:not([name])")],E.prototype,"defaultSlot",2);p([ft(".tooltip__body")],E.prototype,"body",2);p([ft("sl-popup")],E.prototype,"popup",2);p([m()],E.prototype,"content",2);p([m()],E.prototype,"placement",2);p([m({type:Boolean,reflect:!0})],E.prototype,"disabled",2);p([m({type:Number})],E.prototype,"distance",2);p([m({type:Boolean,reflect:!0})],E.prototype,"open",2);p([m({type:Number})],E.prototype,"skidding",2);p([m()],E.prototype,"trigger",2);p([m({type:Boolean})],E.prototype,"hoist",2);p([lt("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);p([lt(["content","distance","hoist","placement","skidding"])],E.prototype,"handleOptionsChange",1);p([lt("disabled")],E.prototype,"handleDisabledChange",1);Ve("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Ve("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});E.define("sl-tooltip");var mt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let it=class extends me{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return P`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
				src="${ve(we)}"
			></sl-icon>
		`}renderFull(){return P` <div class="column center-content" style="flex: 1">
			${this.renderIcon()}
			<div style="width: 500px; text-align: center" class="column">
				${this.headline?P` <span style="margin-bottom: 8px">${this.headline} </span>`:P``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return P`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};it.styles=[We,at`
			:host {
				display: flex;
			}
		`];mt([m({attribute:"tooltip"})],it.prototype,"tooltip",void 0);mt([m()],it.prototype,"headline",void 0);mt([m()],it.prototype,"error",void 0);mt([m({attribute:"icon-size"})],it.prototype,"iconSize",void 0);it=mt([Ue("display-error")],it);export{zo as A,E as B,Vo as C,Je as D,Oo as E,$o as F,Po as G,Se as L,Lo as S,p as _,Ke as a,J as b,Et as c,lt as d,xt as e,xe as f,Lt as g,F as h,ft as i,ko as j,de as k,Do as l,Mo as m,Ro as n,pe as o,ge as p,ue as q,ye as r,Ve as s,C as t,Ze as u,Ho as v,ve as w,qe as x,Ye as y,To as z};
