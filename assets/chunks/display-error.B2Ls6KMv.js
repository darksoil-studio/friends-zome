import{i as dt,r as pe,T as Me,x as N}from"./friends-client.BHFcpvB2.js";import{n as m,s as Be,t as De}from"./property.CPxPeo4V.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Fe=t=>(...e)=>({_$litDirective$:t,values:e});let Ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};function Ie(t){return`data:image/svg+xml;utf8,${Ne(t)}`}function Ne(t){return`<svg style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`}var je="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",vo="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",wo="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",yo="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function We(t){return m({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t,e){return(i,o,n)=>{const r=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return Ue(i,o,{get(){return r(this)}})}}var Vt=dt`
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
`,fe=Object.defineProperty,qe=Object.defineProperties,Ye=Object.getOwnPropertyDescriptor,Xe=Object.getOwnPropertyDescriptors,Kt=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,Pt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),It=t=>{throw TypeError(t)},Gt=(t,e,i)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,At=(t,e)=>{for(var i in e||(e={}))Ze.call(e,i)&&Gt(t,i,e[i]);if(Kt)for(var i of Kt(e))Ke.call(e,i)&&Gt(t,i,e[i]);return t},ge=(t,e)=>qe(t,Xe(e)),f=(t,e,i,o)=>{for(var n=o>1?void 0:o?Ye(e,i):e,r=t.length-1,s;r>=0;r--)(s=t[r])&&(n=(o?s(e,i,n):s(n))||n);return o&&n&&fe(e,i,n),n},me=(t,e,i)=>e.has(t)||It("Cannot "+i),Ge=(t,e,i)=>(me(t,e,"read from private field"),e.get(t)),Je=(t,e,i)=>e.has(t)?It("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Qe=(t,e,i,o)=>(me(t,e,"write to private field"),e.set(t,i),i),ti=function(t,e){this[0]=t,this[1]=e},bo=t=>{var e=t[Pt("asyncIterator")],i=!1,o,n={};return e==null?(e=t[Pt("iterator")](),o=r=>n[r]=s=>e[r](s)):(e=e.call(t),o=r=>n[r]=s=>{if(i){if(i=!1,r==="throw")throw s;return s}return i=!0,{done:!1,value:new ti(new Promise(a=>{var l=e[r](s);l instanceof Object||It("Object expected"),a(l)}),1)}}),n[Pt("iterator")]=()=>n,o("next"),"throw"in e?o("throw"):n.throw=r=>{throw r},"return"in e&&o("return"),n},wt,et=class extends pe{constructor(){super(),Je(this,wt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,At({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let n=" (unknown version)",r=n;"version"in e&&e.version&&(n=" v"+e.version),"version"in o&&o.version&&(r=" v"+o.version),!(n&&r&&n===r)&&console.warn(`Attempted to register <${t}>${n}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,i){Ge(this,wt)||(this.constructor.elementProperties.forEach((o,n)=>{o.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),Qe(this,wt,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};wt=new WeakMap;et.version="2.20.0";et.dependencies={};f([m()],et.prototype,"dir",2);f([m()],et.prototype,"lang",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=Fe(class extends Ve{constructor(t){var e;if(super(t),t.type!==He.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,n;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((o=this.nt)!=null&&o.has(r))&&this.st.add(r);return this.render(e)}const i=t.element.classList;for(const r of this.st)r in e||(i.remove(r),this.st.delete(r));for(const r in e){const s=!!e[r];s===this.st.has(r)||(n=this.nt)!=null&&n.has(r)||(s?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return Me}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ei=(t,...e)=>({strTag:!0,strings:t,values:e}),xo=ei,ii=t=>typeof t!="string"&&"strTag"in t,oi=(t,e,i)=>{let o=t[0];for(let n=1;n<t.length;n++)o+=e[n-1],o+=t[n];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ni=t=>ii(t)?oi(t.strings,t.values):t;let Co=ni;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ri=class{constructor(e){this.__litLocalizeEventHandler=i=>{i.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(Jt,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(Jt,this.__litLocalizeEventHandler)}};const si=t=>t.addController(new ri(t)),ai=si;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eo=()=>(t,e)=>(t.addInitializer(ai),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class li{constructor(){this.settled=!1,this.promise=new Promise((e,i)=>{this._resolve=e,this._reject=i})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ci=new li;ci.resolve();var kt="";function Qt(t){kt=t}function hi(t=""){if(!kt){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)Qt(i.getAttribute("data-shoelace"));else{const o=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let n="";o&&(n=o.getAttribute("src")),Qt(n.split("/").slice(0,-1).join("/"))}}return kt.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var di={name:"default",resolver:t=>hi(`assets/icons/${t}.svg`)},ui=di,te={caret:`
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
  `},pi={name:"system",resolver:t=>t in te?`data:image/svg+xml,${encodeURIComponent(te[t])}`:""},fi=pi,gi=[ui,fi],Mt=[];function mi(t){Mt.push(t)}function vi(t){Mt=Mt.filter(e=>e!==t)}function ee(t){return gi.find(e=>e.name===t)}var wi=dt`
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
`;function pt(t,e){const i=At({waitUntilFirstUpdate:!1},e);return(o,n)=>{const{update:r}=o,s=Array.isArray(t)?t:[t];o.update=function(a){s.forEach(l=>{const c=l;if(a.has(c)){const h=a.get(c),u=this[c];h!==u&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[n](h,u)}}),r.call(this,a)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,_o=t=>t.strings===void 0,bi={},Lo=(t,e=bi)=>t._$AH=e;var ct=Symbol(),mt=Symbol(),Ot,zt=new Map,j=class extends et{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=N`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?ct:mt}catch{return mt}try{const n=document.createElement("div");n.innerHTML=await o.text();const r=n.firstElementChild;if(((i=r==null?void 0:r.tagName)==null?void 0:i.toLowerCase())!=="svg")return ct;Ot||(Ot=new DOMParser);const a=Ot.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):ct}catch{return ct}}connectedCallback(){super.connectedCallback(),mi(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),vi(this)}getIconSource(){const t=ee(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?ee(this.library):void 0;if(!e){this.svg=null;return}let n=zt.get(e);if(n||(n=this.resolveIcon(e,o),zt.set(e,n)),!this.initialRender)return;const r=await n;if(r===mt&&zt.delete(e),e===this.getIconSource().url){if(yi(r)){if(this.svg=r,o){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&s&&o.mutator(s)}return}switch(r){case mt:case ct:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};j.styles=[Vt,wi];f([We()],j.prototype,"svg",2);f([m({reflect:!0})],j.prototype,"name",2);f([m()],j.prototype,"src",2);f([m()],j.prototype,"label",2);f([m({reflect:!0})],j.prototype,"library",2);f([pt("label")],j.prototype,"handleLabelChange",1);f([pt(["name","src","library"])],j.prototype,"setIcon",1);j.define("sl-icon");var xi=dt`
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
`,Ci=dt`
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
`;const Bt=new Set,ot=new Map;let G,Nt="ltr",jt="en";const ve=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ve){const t=new MutationObserver(ye);Nt=document.documentElement.dir||"ltr",jt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function we(...t){t.map(e=>{const i=e.$code.toLowerCase();ot.has(i)?ot.set(i,Object.assign(Object.assign({},ot.get(i)),e)):ot.set(i,e),G||(G=e)}),ye()}function ye(){ve&&(Nt=document.documentElement.dir||"ltr",jt=document.documentElement.lang||navigator.language),[...Bt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Ai=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Bt.add(this.host)}hostDisconnected(){Bt.delete(this.host)}dir(){return`${this.host.dir||Nt}`.toLowerCase()}lang(){return`${this.host.lang||jt}`.toLowerCase()}getTranslationData(e){var i,o;const n=new Intl.Locale(e.replace(/_/g,"-")),r=n==null?void 0:n.language.toLowerCase(),s=(o=(i=n==null?void 0:n.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",a=ot.get(`${r}-${s}`),l=ot.get(r);return{locale:n,language:r,region:s,primary:a,secondary:l}}exists(e,i){var o;const{primary:n,secondary:r}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(n&&n[e]||r&&r[e]||i.includeFallback&&G&&G[e])}term(e,...i){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let r;if(o&&o[e])r=o[e];else if(n&&n[e])r=n[e];else if(G&&G[e])r=G[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...i):r}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var be={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};we(be);var Ei=be,xe=class extends Ai{};we(Ei);const X=Math.min,P=Math.max,bt=Math.round,vt=Math.floor,D=t=>({x:t,y:t}),_i={left:"right",right:"left",bottom:"top",top:"bottom"},Li={start:"end",end:"start"};function Dt(t,e,i){return P(t,X(e,i))}function st(t,e){return typeof t=="function"?t(e):t}function Z(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function Ce(t){return t==="x"?"y":"x"}function Wt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(Z(t))?"y":"x"}function Ut(t){return Ce(J(t))}function Si(t,e,i){i===void 0&&(i=!1);const o=at(t),n=Ut(t),r=Wt(n);let s=n==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=xt(s)),[s,xt(s)]}function Pi(t){const e=xt(t);return[Ht(t),e,Ht(e)]}function Ht(t){return t.replace(/start|end/g,e=>Li[e])}function Oi(t,e,i){const o=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return i?e?n:o:e?o:n;case"left":case"right":return e?r:s;default:return[]}}function zi(t,e,i,o){const n=at(t);let r=Oi(Z(t),i==="start",o);return n&&(r=r.map(s=>s+"-"+n),e&&(r=r.concat(r.map(Ht)))),r}function xt(t){return t.replace(/left|right|bottom|top/g,e=>_i[e])}function Ri(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ae(t){return typeof t!="number"?Ri(t):{top:t,right:t,bottom:t,left:t}}function Ct(t){const{x:e,y:i,width:o,height:n}=t;return{width:o,height:n,top:i,left:e,right:e+o,bottom:i+n,x:e,y:i}}function ie(t,e,i){let{reference:o,floating:n}=t;const r=J(e),s=Ut(e),a=Wt(s),l=Z(e),c=r==="y",h=o.x+o.width/2-n.width/2,u=o.y+o.height/2-n.height/2,g=o[a]/2-n[a]/2;let d;switch(l){case"top":d={x:h,y:o.y-n.height};break;case"bottom":d={x:h,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-n.width,y:u};break;default:d={x:o.x,y:o.y}}switch(at(e)){case"start":d[s]-=g*(i&&c?-1:1);break;case"end":d[s]+=g*(i&&c?-1:1);break}return d}const $i=async(t,e,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:s}=i,a=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:n}),{x:h,y:u}=ie(c,o,l),g=o,d={},p=0;for(let v=0;v<a.length;v++){const{name:y,fn:w}=a[v],{x:b,y:x,data:E,reset:A}=await w({x:h,y:u,initialPlacement:o,placement:g,strategy:n,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});h=b??h,u=x??u,d={...d,[y]:{...d[y],...E}},A&&p<=50&&(p++,typeof A=="object"&&(A.placement&&(g=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:n}):A.rects),{x:h,y:u}=ie(c,g,l)),v=-1)}return{x:h,y:u,placement:g,strategy:n,middlewareData:d}};async function qt(t,e){var i;e===void 0&&(e={});const{x:o,y:n,platform:r,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:g=!1,padding:d=0}=st(e,t),p=Ae(d),y=a[g?u==="floating"?"reference":"floating":u],w=Ct(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(y)))==null||i?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),b=u==="floating"?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),E=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},A=Ct(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:x,strategy:l}):b);return{top:(w.top-A.top+p.top)/E.y,bottom:(A.bottom-w.bottom+p.bottom)/E.y,left:(w.left-A.left+p.left)/E.x,right:(A.right-w.right+p.right)/E.x}}const Ti=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:n,rects:r,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=st(t,e)||{};if(c==null)return{};const u=Ae(h),g={x:i,y:o},d=Ut(n),p=Wt(d),v=await s.getDimensions(c),y=d==="y",w=y?"top":"left",b=y?"bottom":"right",x=y?"clientHeight":"clientWidth",E=r.reference[p]+r.reference[d]-g[d]-r.floating[p],A=g[d]-r.reference[d],z=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let L=z?z[x]:0;(!L||!await(s.isElement==null?void 0:s.isElement(z)))&&(L=a.floating[x]||r.floating[p]);const V=E/2-A/2,k=L/2-v[p]/2-1,R=X(u[w],k),W=X(u[b],k),M=R,U=L-v[p]-W,S=L/2-v[p]/2+V,it=Dt(M,S,U),I=!l.arrow&&at(n)!=null&&S!==it&&r.reference[p]/2-(S<M?R:W)-v[p]/2<0,B=I?S<M?S-M:S-U:0;return{[d]:g[d]+B,data:{[d]:it,centerOffset:S-it-B,...I&&{alignmentOffset:B}},reset:I}}}),ki=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:v=!0,...y}=st(t,e);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const w=Z(n),b=J(a),x=Z(a)===a,E=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=g||(x||!v?[xt(a)]:Pi(a)),z=p!=="none";!g&&z&&A.push(...zi(a,v,p,E));const L=[a,...A],V=await qt(e,y),k=[];let R=((o=r.flip)==null?void 0:o.overflows)||[];if(h&&k.push(V[w]),u){const S=Si(n,s,E);k.push(V[S[0]],V[S[1]])}if(R=[...R,{placement:n,overflows:k}],!k.every(S=>S<=0)){var W,M;const S=(((W=r.flip)==null?void 0:W.index)||0)+1,it=L[S];if(it)return{data:{index:S,overflows:R},reset:{placement:it}};let I=(M=R.filter(B=>B.overflows[0]<=0).sort((B,q)=>B.overflows[1]-q.overflows[1])[0])==null?void 0:M.placement;if(!I)switch(d){case"bestFit":{var U;const B=(U=R.filter(q=>{if(z){const Y=J(q.placement);return Y===b||Y==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(Y=>Y>0).reduce((Y,ke)=>Y+ke,0)]).sort((q,Y)=>q[1]-Y[1])[0])==null?void 0:U[0];B&&(I=B);break}case"initialPlacement":I=a;break}if(n!==I)return{reset:{placement:I}}}return{}}}};async function Mi(t,e){const{placement:i,platform:o,elements:n}=t,r=await(o.isRTL==null?void 0:o.isRTL(n.floating)),s=Z(i),a=at(i),l=J(i)==="y",c=["left","top"].includes(s)?-1:1,h=r&&l?-1:1,u=st(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return a&&typeof p=="number"&&(d=a==="end"?p*-1:p),l?{x:d*h,y:g*c}:{x:g*c,y:d*h}}const Bi=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:n,y:r,placement:s,middlewareData:a}=e,l=await Mi(e,t);return s===((i=a.offset)==null?void 0:i.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:s}}}}},Di=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:n}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...l}=st(t,e),c={x:i,y:o},h=await qt(e,l),u=J(Z(n)),g=Ce(u);let d=c[g],p=c[u];if(r){const y=g==="y"?"top":"left",w=g==="y"?"bottom":"right",b=d+h[y],x=d-h[w];d=Dt(b,d,x)}if(s){const y=u==="y"?"top":"left",w=u==="y"?"bottom":"right",b=p+h[y],x=p-h[w];p=Dt(b,p,x)}const v=a.fn({...e,[g]:d,[u]:p});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[g]:r,[u]:s}}}}}},Hi=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:n,rects:r,platform:s,elements:a}=e,{apply:l=()=>{},...c}=st(t,e),h=await qt(e,c),u=Z(n),g=at(n),d=J(n)==="y",{width:p,height:v}=r.floating;let y,w;u==="top"||u==="bottom"?(y=u,w=g===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(w=u,y=g==="end"?"top":"bottom");const b=v-h.top-h.bottom,x=p-h.left-h.right,E=X(v-h[y],b),A=X(p-h[w],x),z=!e.middlewareData.shift;let L=E,V=A;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(V=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(L=b),z&&!g){const R=P(h.left,0),W=P(h.right,0),M=P(h.top,0),U=P(h.bottom,0);d?V=p-2*(R!==0||W!==0?R+W:P(h.left,h.right)):L=v-2*(M!==0||U!==0?M+U:P(h.top,h.bottom))}await l({...e,availableWidth:V,availableHeight:L});const k=await s.getDimensions(a.floating);return p!==k.width||v!==k.height?{reset:{rects:!0}}:{}}}};function Et(){return typeof window<"u"}function lt(t){return Ee(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(Ee(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ee(t){return Et()?t instanceof Node||t instanceof O(t).Node:!1}function $(t){return Et()?t instanceof Element||t instanceof O(t).Element:!1}function H(t){return Et()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function oe(t){return!Et()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function ft(t){const{overflow:e,overflowX:i,overflowY:o,display:n}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(n)}function Fi(t){return["table","td","th"].includes(lt(t))}function _t(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Lt(t){const e=Yt(),i=$(t)?T(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>i[o]?i[o]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Vi(t){let e=K(t);for(;H(e)&&!rt(e);){if(Lt(e))return e;if(_t(e))return null;e=K(e)}return null}function Yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function rt(t){return["html","body","#document"].includes(lt(t))}function T(t){return O(t).getComputedStyle(t)}function St(t){return $(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(lt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||oe(t)&&t.host||F(t);return oe(e)?e.host:e}function _e(t){const e=K(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:H(e)&&ft(e)?e:_e(e)}function ht(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const n=_e(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),s=O(n);if(r){const a=Ft(s);return e.concat(s,s.visualViewport||[],ft(n)?n:[],a&&i?ht(a):[])}return e.concat(n,ht(n,[],i))}function Ft(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Le(t){const e=T(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const n=H(t),r=n?t.offsetWidth:i,s=n?t.offsetHeight:o,a=bt(i)!==r||bt(o)!==s;return a&&(i=r,o=s),{width:i,height:o,$:a}}function Xt(t){return $(t)?t:t.contextElement}function nt(t){const e=Xt(t);if(!H(e))return D(1);const i=e.getBoundingClientRect(),{width:o,height:n,$:r}=Le(e);let s=(r?bt(i.width):i.width)/o,a=(r?bt(i.height):i.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Ii=D(0);function Se(t){const e=O(t);return!Yt()||!e.visualViewport?Ii:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ni(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==O(t)?!1:e}function Q(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const n=t.getBoundingClientRect(),r=Xt(t);let s=D(1);e&&(o?$(o)&&(s=nt(o)):s=nt(t));const a=Ni(r,i,o)?Se(r):D(0);let l=(n.left+a.x)/s.x,c=(n.top+a.y)/s.y,h=n.width/s.x,u=n.height/s.y;if(r){const g=O(r),d=o&&$(o)?O(o):o;let p=g,v=Ft(p);for(;v&&o&&d!==p;){const y=nt(v),w=v.getBoundingClientRect(),b=T(v),x=w.left+(v.clientLeft+parseFloat(b.paddingLeft))*y.x,E=w.top+(v.clientTop+parseFloat(b.paddingTop))*y.y;l*=y.x,c*=y.y,h*=y.x,u*=y.y,l+=x,c+=E,p=O(v),v=Ft(p)}}return Ct({width:h,height:u,x:l,y:c})}function Zt(t,e){const i=St(t).scrollLeft;return e?e.left+i:Q(F(t)).left+i}function Pe(t,e,i){i===void 0&&(i=!1);const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-(i?0:Zt(t,o)),r=o.top+e.scrollTop;return{x:n,y:r}}function ji(t){let{elements:e,rect:i,offsetParent:o,strategy:n}=t;const r=n==="fixed",s=F(o),a=e?_t(e.floating):!1;if(o===s||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=D(1);const h=D(0),u=H(o);if((u||!u&&!r)&&((lt(o)!=="body"||ft(s))&&(l=St(o)),H(o))){const d=Q(o);c=nt(o),h.x=d.x+o.clientLeft,h.y=d.y+o.clientTop}const g=s&&!u&&!r?Pe(s,l,!0):D(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+g.x,y:i.y*c.y-l.scrollTop*c.y+h.y+g.y}}function Wi(t){return Array.from(t.getClientRects())}function Ui(t){const e=F(t),i=St(t),o=t.ownerDocument.body,n=P(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=P(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+Zt(t);const a=-i.scrollTop;return T(o).direction==="rtl"&&(s+=P(e.clientWidth,o.clientWidth)-n),{width:n,height:r,x:s,y:a}}function qi(t,e){const i=O(t),o=F(t),n=i.visualViewport;let r=o.clientWidth,s=o.clientHeight,a=0,l=0;if(n){r=n.width,s=n.height;const c=Yt();(!c||c&&e==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:s,x:a,y:l}}function Yi(t,e){const i=Q(t,!0,e==="fixed"),o=i.top+t.clientTop,n=i.left+t.clientLeft,r=H(t)?nt(t):D(1),s=t.clientWidth*r.x,a=t.clientHeight*r.y,l=n*r.x,c=o*r.y;return{width:s,height:a,x:l,y:c}}function ne(t,e,i){let o;if(e==="viewport")o=qi(t,i);else if(e==="document")o=Ui(F(t));else if($(e))o=Yi(e,i);else{const n=Se(t);o={x:e.x-n.x,y:e.y-n.y,width:e.width,height:e.height}}return Ct(o)}function Oe(t,e){const i=K(t);return i===e||!$(i)||rt(i)?!1:T(i).position==="fixed"||Oe(i,e)}function Xi(t,e){const i=e.get(t);if(i)return i;let o=ht(t,[],!1).filter(a=>$(a)&&lt(a)!=="body"),n=null;const r=T(t).position==="fixed";let s=r?K(t):t;for(;$(s)&&!rt(s);){const a=T(s),l=Lt(s);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||ft(s)&&!l&&Oe(t,s))?o=o.filter(h=>h!==s):n=a,s=K(s)}return e.set(t,o),o}function Zi(t){let{element:e,boundary:i,rootBoundary:o,strategy:n}=t;const s=[...i==="clippingAncestors"?_t(e)?[]:Xi(e,this._c):[].concat(i),o],a=s[0],l=s.reduce((c,h)=>{const u=ne(e,h,n);return c.top=P(u.top,c.top),c.right=X(u.right,c.right),c.bottom=X(u.bottom,c.bottom),c.left=P(u.left,c.left),c},ne(e,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ki(t){const{width:e,height:i}=Le(t);return{width:e,height:i}}function Gi(t,e,i){const o=H(e),n=F(e),r=i==="fixed",s=Q(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=D(0);if(o||!o&&!r)if((lt(e)!=="body"||ft(n))&&(a=St(e)),o){const g=Q(e,!0,r,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else n&&(l.x=Zt(n));const c=n&&!o&&!r?Pe(n,a):D(0),h=s.left+a.scrollLeft-l.x-c.x,u=s.top+a.scrollTop-l.y-c.y;return{x:h,y:u,width:s.width,height:s.height}}function Rt(t){return T(t).position==="static"}function re(t,e){if(!H(t)||T(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return F(t)===i&&(i=i.ownerDocument.body),i}function ze(t,e){const i=O(t);if(_t(t))return i;if(!H(t)){let n=K(t);for(;n&&!rt(n);){if($(n)&&!Rt(n))return n;n=K(n)}return i}let o=re(t,e);for(;o&&Fi(o)&&Rt(o);)o=re(o,e);return o&&rt(o)&&Rt(o)&&!Lt(o)?i:o||Vi(t)||i}const Ji=async function(t){const e=this.getOffsetParent||ze,i=this.getDimensions,o=await i(t.floating);return{reference:Gi(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Qi(t){return T(t).direction==="rtl"}const yt={convertOffsetParentRelativeRectToViewportRelativeRect:ji,getDocumentElement:F,getClippingRect:Zi,getOffsetParent:ze,getElementRects:Ji,getClientRects:Wi,getDimensions:Ki,getScale:nt,isElement:$,isRTL:Qi};function Re(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function to(t,e){let i=null,o;const n=F(t);function r(){var a;clearTimeout(o),(a=i)==null||a.disconnect(),i=null}function s(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=t.getBoundingClientRect(),{left:h,top:u,width:g,height:d}=c;if(a||e(),!g||!d)return;const p=vt(u),v=vt(n.clientWidth-(h+g)),y=vt(n.clientHeight-(u+d)),w=vt(h),x={rootMargin:-p+"px "+-v+"px "+-y+"px "+-w+"px",threshold:P(0,X(1,l))||1};let E=!0;function A(z){const L=z[0].intersectionRatio;if(L!==l){if(!E)return s();L?s(!1,L):o=setTimeout(()=>{s(!1,1e-7)},1e3)}L===1&&!Re(c,t.getBoundingClientRect())&&s(),E=!1}try{i=new IntersectionObserver(A,{...x,root:n.ownerDocument})}catch{i=new IntersectionObserver(A,x)}i.observe(t)}return s(!0),r}function eo(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,c=Xt(t),h=n||r?[...c?ht(c):[],...ht(e)]:[];h.forEach(w=>{n&&w.addEventListener("scroll",i,{passive:!0}),r&&w.addEventListener("resize",i)});const u=c&&a?to(c,i):null;let g=-1,d=null;s&&(d=new ResizeObserver(w=>{let[b]=w;b&&b.target===c&&d&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=d)==null||x.observe(e)})),i()}),c&&!l&&d.observe(c),d.observe(e));let p,v=l?Q(t):null;l&&y();function y(){const w=Q(t);v&&!Re(v,w)&&i(),v=w,p=requestAnimationFrame(y)}return i(),()=>{var w;h.forEach(b=>{n&&b.removeEventListener("scroll",i),r&&b.removeEventListener("resize",i)}),u==null||u(),(w=d)==null||w.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const io=Bi,oo=Di,no=ki,se=Hi,ro=Ti,so=(t,e,i)=>{const o=new Map,n={platform:yt,...i},r={...n.platform,_c:o};return $i(t,e,{...n,platform:r})};function ao(t){return lo(t)}function $t(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function lo(t){for(let e=t;e;e=$t(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=$t(t);e;e=$t(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||Lt(i)||e.tagName==="BODY"))return e}return null}function co(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var C=class extends et{constructor(){super(...arguments),this.localize=new xe(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,n=0,r=0,s=0,a=0,l=0,c=0,h=0;i?t.top<e.top?(o=t.left,n=t.bottom,r=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,h=e.top):(o=e.left,n=e.bottom,r=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,h=t.top):t.left<e.left?(o=t.right,n=t.top,r=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,h=e.bottom):(o=e.right,n=e.top,r=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${n}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||co(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=eo(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[io({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(se({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",n=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=n?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(no({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(oo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(se({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ro({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>yt.getOffsetParent(i,ao):yt.getOffsetParent;so(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:ge(At({},yt),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:n,placement:r})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const l=n.arrow.x,c=n.arrow.y;let h="",u="",g="",d="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=s?p:"",d=s?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=s?"":p,d=s?p:"",g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(d=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(d=typeof l=="number"?`${l}px`:"",h=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:g,left:d,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return N`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Tt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Tt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?N`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=[Vt,Ci];f([ut(".popup")],C.prototype,"popup",2);f([ut(".popup__arrow")],C.prototype,"arrowEl",2);f([m()],C.prototype,"anchor",2);f([m({type:Boolean,reflect:!0})],C.prototype,"active",2);f([m({reflect:!0})],C.prototype,"placement",2);f([m({reflect:!0})],C.prototype,"strategy",2);f([m({type:Number})],C.prototype,"distance",2);f([m({type:Number})],C.prototype,"skidding",2);f([m({type:Boolean})],C.prototype,"arrow",2);f([m({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);f([m({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);f([m({type:Boolean})],C.prototype,"flip",2);f([m({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);f([m({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);f([m({type:Object})],C.prototype,"flipBoundary",2);f([m({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);f([m({type:Boolean})],C.prototype,"shift",2);f([m({type:Object})],C.prototype,"shiftBoundary",2);f([m({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);f([m({attribute:"auto-size"})],C.prototype,"autoSize",2);f([m()],C.prototype,"sync",2);f([m({type:Object})],C.prototype,"autoSizeBoundary",2);f([m({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);f([m({attribute:"hover-bridge",type:Boolean})],C.prototype,"hoverBridge",2);var $e=new Map,ho=new WeakMap;function uo(t){return t??{keyframes:[],options:{duration:0}}}function ae(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function Te(t,e){$e.set(t,uo(e))}function le(t,e,i){const o=ho.get(t);if(o!=null&&o[e])return ae(o[e],i.dir);const n=$e.get(e);return n?ae(n,i.dir):{keyframes:[],options:{duration:0}}}function ce(t,e){return new Promise(i=>{function o(n){n.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function he(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=t.animate(e,ge(At({},i),{duration:po()?0:i.duration}));n.addEventListener("cancel",o,{once:!0}),n.addEventListener("finish",o,{once:!0})})}function de(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function po(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ue(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}var _=class extends et{constructor(){super(),this.localize=new xe(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=de(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=de(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ue(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=le(this,"tooltip.show",{dir:this.localize.dir()});await he(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ue(this.body);const{keyframes:i,options:o}=le(this,"tooltip.hide",{dir:this.localize.dir()});await he(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ce(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ce(this,"sl-after-hide")}render(){return N`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Tt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};_.styles=[Vt,xi];_.dependencies={"sl-popup":C};f([ut("slot:not([name])")],_.prototype,"defaultSlot",2);f([ut(".tooltip__body")],_.prototype,"body",2);f([ut("sl-popup")],_.prototype,"popup",2);f([m()],_.prototype,"content",2);f([m()],_.prototype,"placement",2);f([m({type:Boolean,reflect:!0})],_.prototype,"disabled",2);f([m({type:Number})],_.prototype,"distance",2);f([m({type:Boolean,reflect:!0})],_.prototype,"open",2);f([m({type:Number})],_.prototype,"skidding",2);f([m()],_.prototype,"trigger",2);f([m({type:Boolean})],_.prototype,"hoist",2);f([pt("open",{waitUntilFirstUpdate:!0})],_.prototype,"handleOpenChange",1);f([pt(["content","distance","hoist","placement","skidding"])],_.prototype,"handleOptionsChange",1);f([pt("disabled")],_.prototype,"handleDisabledChange",1);Te("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Te("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});_.define("sl-tooltip");var gt=function(t,e,i,o){var n=arguments.length,r=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};let tt=class extends pe{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return N`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize}; margin-bottom: 8px;"
				src="${Ie(je)}"
			></sl-icon>
		`}renderFull(){return N` <div class="column center-content" style="flex: 1">
			${this.renderIcon()}
			<div style="width: 500px; text-align: center" class="column">
				${this.headline?N` <span style="margin-bottom: 8px">${this.headline} </span>`:N``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return N`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};tt.styles=[Be,dt`
			:host {
				display: flex;
			}
		`];gt([m({attribute:"tooltip"})],tt.prototype,"tooltip",void 0);gt([m()],tt.prototype,"headline",void 0);gt([m()],tt.prototype,"error",void 0);gt([m({attribute:"icon-size"})],tt.prototype,"iconSize",void 0);tt=gt([De("display-error")],tt);export{yo as A,C as B,xe as L,et as S,f as _,wo as a,Tt as b,Vt as c,je as d,ut as e,j as f,pt as g,ge as h,At as i,bo as j,le as k,Eo as l,Co as m,he as n,ue as o,ce as p,xo as q,We as r,Te as s,vo as t,Fe as u,Ve as v,Ie as w,He as x,_o as y,Lo as z};
