var qe=Object.defineProperty;var Ye=(t,e,i)=>e in t?qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Rt=(t,e,i)=>Ye(t,typeof e!="symbol"?e+"":e,i);import{S as ie,i as et,r as _e,x as S,T as Xe,E as Ze}from"./friends-client.DqGVcibm.js";import{a as f,s as Ke,t as Ge}from"./context.nxAsj1gS.js";/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fo(t){class e extends t{constructor(){super(...arguments);Rt(this,"__dispose");Rt(this,"w",new ie.subtle.Watcher(()=>{this.requestUpdate()}))}performUpdate(){if(this.isUpdatePending===!1)return;const r=this.__dispose,n=new ie.Computed(()=>{super.performUpdate()});this.w.watch(n),this.__dispose=()=>{this.w.unwatch(n)},n.get(),r==null||r()}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.__dispose)==null||r.call(this)}}return e}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Qe=t=>(...e)=>({_$litDirective$:t,values:e});let ti=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,o){this._$Ct=e,this._$AM=i,this._$Ci=o}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};function Ce(t){return`data:image/svg+xml;utf8,${ei(t)}`}function ei(t){return encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' style='fill: currentColor' viewBox='0 0 24 24'><path d='${t}'></path></svg>`)}var Ae="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",No="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",Vo="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z",ii="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",Io="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",jo="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z";function oi(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function ri(t,e="primary",i=ii,o=3e3){const r=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:o,innerHTML:`
        <sl-icon src="${Ce(i)}" slot="icon"></sl-icon>
        ${oi(t)}
      `});return document.body.append(r),r.toast()}function Wo(t){return ri(t,"danger",Ae)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ut(t){return f({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ni=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t,e){return(i,o,r)=>{const n=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(t))??null};return ni(i,o,{get(){return n(this)}})}}var Ht="";function oe(t){Ht=t}function si(t=""){if(!Ht){const e=[...document.getElementsByTagName("script")],i=e.find(o=>o.hasAttribute("data-shoelace"));if(i)oe(i.getAttribute("data-shoelace"));else{const o=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let r="";o&&(r=o.getAttribute("src")),oe(r.split("/").slice(0,-1).join("/"))}}return Ht.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var ai={name:"default",resolver:t=>si(`assets/icons/${t}.svg`)},li=ai,re={caret:`
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
  `},ci={name:"system",resolver:t=>t in re?`data:image/svg+xml,${encodeURIComponent(re[t])}`:""},hi=ci,di=[li,hi],Nt=[];function ui(t){Nt.push(t)}function pi(t){Nt=Nt.filter(e=>e!==t)}function ne(t){return di.find(e=>e.name===t)}var fi=et`
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
`,Ee=Object.defineProperty,gi=Object.defineProperties,mi=Object.getOwnPropertyDescriptor,vi=Object.getOwnPropertyDescriptors,se=Object.getOwnPropertySymbols,yi=Object.prototype.hasOwnProperty,wi=Object.prototype.propertyIsEnumerable,Tt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),qt=t=>{throw TypeError(t)},ae=(t,e,i)=>e in t?Ee(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,Lt=(t,e)=>{for(var i in e||(e={}))yi.call(e,i)&&ae(t,i,e[i]);if(se)for(var i of se(e))wi.call(e,i)&&ae(t,i,e[i]);return t},$e=(t,e)=>gi(t,vi(e)),u=(t,e,i,o)=>{for(var r=o>1?void 0:o?mi(e,i):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&Ee(e,i,r),r},Se=(t,e,i)=>e.has(t)||qt("Cannot "+i),bi=(t,e,i)=>(Se(t,e,"read from private field"),e.get(t)),xi=(t,e,i)=>e.has(t)?qt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),_i=(t,e,i,o)=>(Se(t,e,"write to private field"),e.set(t,i),i),Ci=function(t,e){this[0]=t,this[1]=e},Uo=t=>{var e=t[Tt("asyncIterator")],i=!1,o,r={};return e==null?(e=t[Tt("iterator")](),o=n=>r[n]=s=>e[n](s)):(e=e.call(t),o=n=>r[n]=s=>{if(i){if(i=!1,n==="throw")throw s;return s}return i=!0,{done:!1,value:new Ci(new Promise(a=>{var c=e[n](s);c instanceof Object||qt("Object expected"),a(c)}),1)}}),r[Tt("iterator")]=()=>r,o("next"),"throw"in e?o("throw"):r.throw=n=>{throw n},"return"in e&&o("return"),r};function dt(t,e){const i=Lt({waitUntilFirstUpdate:!1},e);return(o,r)=>{const{update:n}=o,s=Array.isArray(t)?t:[t];o.update=function(a){s.forEach(c=>{const l=c;if(a.has(l)){const h=a.get(l),d=this[l];h!==d&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](h,d)}}),n.call(this,a)}}}var ut=et`
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
`,Ct,j=class extends _e{constructor(){super(),xi(this,Ct,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,Lt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const o=customElements.get(t);if(!o){try{customElements.define(t,e,i)}catch{customElements.define(t,class extends e{},i)}return}let r=" (unknown version)",n=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in o&&o.version&&(n=" v"+o.version),!(r&&n&&r===n)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,i){bi(this,Ct)||(this.constructor.elementProperties.forEach((o,r)=>{o.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),_i(this,Ct,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&this[i]==null&&(this[i]=e)})}};Ct=new WeakMap;j.version="2.20.0";j.dependencies={};u([f()],j.prototype,"dir",2);u([f()],j.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=(t,e)=>(t==null?void 0:t._$litType$)!==void 0,qo=t=>t.strings===void 0,Ei={},Yo=(t,e=Ei)=>t._$AH=e;var mt=Symbol(),xt=Symbol(),Mt,Bt=new Map,B=class extends j{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let o;if(e!=null&&e.spriteSheet)return this.svg=S`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(o=await fetch(t,{mode:"cors"}),!o.ok)return o.status===410?mt:xt}catch{return xt}try{const r=document.createElement("div");r.innerHTML=await o.text();const n=r.firstElementChild;if(((i=n==null?void 0:n.tagName)==null?void 0:i.toLowerCase())!=="svg")return mt;Mt||(Mt=new DOMParser);const a=Mt.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):mt}catch{return mt}}connectedCallback(){super.connectedCallback(),ui(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),pi(this)}getIconSource(){const t=ne(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),o=i?ne(this.library):void 0;if(!e){this.svg=null;return}let r=Bt.get(e);if(r||(r=this.resolveIcon(e,o),Bt.set(e,r)),!this.initialRender)return;const n=await r;if(n===xt&&Bt.delete(e),e===this.getIconSource().url){if(Ai(n)){if(this.svg=n,o){await this.updateComplete;const s=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&s&&o.mutator(s)}return}switch(n){case xt:case mt:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(t=o==null?void 0:o.mutator)==null||t.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};B.styles=[ut,fi];u([Ut()],B.prototype,"svg",2);u([f({reflect:!0})],B.prototype,"name",2);u([f()],B.prototype,"src",2);u([f()],B.prototype,"label",2);u([f({reflect:!0})],B.prototype,"library",2);u([dt("label")],B.prototype,"handleLabelChange",1);u([dt(["name","src","library"])],B.prototype,"setIcon",1);B.define("sl-icon");var $i=et`
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
`,Si=et`
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
`;const Vt=new Set,at=new Map;let it,Yt="ltr",Xt="en";const Le=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Le){const t=new MutationObserver(Pe);Yt=document.documentElement.dir||"ltr",Xt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ke(...t){t.map(e=>{const i=e.$code.toLowerCase();at.has(i)?at.set(i,Object.assign(Object.assign({},at.get(i)),e)):at.set(i,e),it||(it=e)}),Pe()}function Pe(){Le&&(Yt=document.documentElement.dir||"ltr",Xt=document.documentElement.lang||navigator.language),[...Vt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let Li=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Vt.add(this.host)}hostDisconnected(){Vt.delete(this.host)}dir(){return`${this.host.dir||Yt}`.toLowerCase()}lang(){return`${this.host.lang||Xt}`.toLowerCase()}getTranslationData(e){var i,o;const r=new Intl.Locale(e.replace(/_/g,"-")),n=r==null?void 0:r.language.toLowerCase(),s=(o=(i=r==null?void 0:r.region)===null||i===void 0?void 0:i.toLowerCase())!==null&&o!==void 0?o:"",a=at.get(`${n}-${s}`),c=at.get(n);return{locale:r,language:n,region:s,primary:a,secondary:c}}exists(e,i){var o;const{primary:r,secondary:n}=this.getTranslationData((o=i.lang)!==null&&o!==void 0?o:this.lang());return i=Object.assign({includeFallback:!1},i),!!(r&&r[e]||n&&n[e]||i.includeFallback&&it&&it[e])}term(e,...i){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let n;if(o&&o[e])n=o[e];else if(r&&r[e])n=r[e];else if(it&&it[e])n=it[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...i):n}date(e,i){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),i).format(e)}number(e,i){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),i).format(e)}relativeTime(e,i,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(e,i)}};var ze={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ke(ze);var ki=ze,Zt=class extends Li{};ke(ki);const J=Math.min,k=Math.max,Et=Math.round,_t=Math.floor,V=t=>({x:t,y:t}),Pi={left:"right",right:"left",bottom:"top",top:"bottom"},zi={start:"end",end:"start"};function It(t,e,i){return k(t,J(e,i))}function pt(t,e){return typeof t=="function"?t(e):t}function Q(t){return t.split("-")[0]}function ft(t){return t.split("-")[1]}function Oe(t){return t==="x"?"y":"x"}function Kt(t){return t==="y"?"height":"width"}function ot(t){return["top","bottom"].includes(Q(t))?"y":"x"}function Gt(t){return Oe(ot(t))}function Oi(t,e,i){i===void 0&&(i=!1);const o=ft(t),r=Gt(t),n=Kt(r);let s=r==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(s=$t(s)),[s,$t(s)]}function Ri(t){const e=$t(t);return[jt(t),e,jt(e)]}function jt(t){return t.replace(/start|end/g,e=>zi[e])}function Ti(t,e,i){const o=["left","right"],r=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return i?e?r:o:e?o:r;case"left":case"right":return e?n:s;default:return[]}}function Mi(t,e,i,o){const r=ft(t);let n=Ti(Q(t),i==="start",o);return r&&(n=n.map(s=>s+"-"+r),e&&(n=n.concat(n.map(jt)))),n}function $t(t){return t.replace(/left|right|bottom|top/g,e=>Pi[e])}function Bi(t){return{top:0,right:0,bottom:0,left:0,...t}}function Re(t){return typeof t!="number"?Bi(t):{top:t,right:t,bottom:t,left:t}}function St(t){const{x:e,y:i,width:o,height:r}=t;return{width:o,height:r,top:i,left:e,right:e+o,bottom:i+r,x:e,y:i}}function le(t,e,i){let{reference:o,floating:r}=t;const n=ot(e),s=Gt(e),a=Kt(s),c=Q(e),l=n==="y",h=o.x+o.width/2-r.width/2,d=o.y+o.height/2-r.height/2,m=o[a]/2-r[a]/2;let p;switch(c){case"top":p={x:h,y:o.y-r.height};break;case"bottom":p={x:h,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:d};break;case"left":p={x:o.x-r.width,y:d};break;default:p={x:o.x,y:o.y}}switch(ft(e)){case"start":p[s]-=m*(i&&l?-1:1);break;case"end":p[s]+=m*(i&&l?-1:1);break}return p}const Di=async(t,e,i)=>{const{placement:o="bottom",strategy:r="absolute",middleware:n=[],platform:s}=i,a=n.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:h,y:d}=le(l,o,c),m=o,p={},g=0;for(let v=0;v<a.length;v++){const{name:w,fn:y}=a[v],{x:b,y:x,data:A,reset:C}=await y({x:h,y:d,initialPlacement:o,placement:m,strategy:r,middlewareData:p,rects:l,platform:s,elements:{reference:t,floating:e}});h=b??h,d=x??d,p={...p,[w]:{...p[w],...A}},C&&g<=50&&(g++,typeof C=="object"&&(C.placement&&(m=C.placement),C.rects&&(l=C.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):C.rects),{x:h,y:d}=le(l,m,c)),v=-1)}return{x:h,y:d,placement:m,strategy:r,middlewareData:p}};async function Jt(t,e){var i;e===void 0&&(e={});const{x:o,y:r,platform:n,rects:s,elements:a,strategy:c}=t,{boundary:l="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:m=!1,padding:p=0}=pt(e,t),g=Re(p),w=a[m?d==="floating"?"reference":"floating":d],y=St(await n.getClippingRect({element:(i=await(n.isElement==null?void 0:n.isElement(w)))==null||i?w:w.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(a.floating)),boundary:l,rootBoundary:h,strategy:c})),b=d==="floating"?{x:o,y:r,width:s.floating.width,height:s.floating.height}:s.reference,x=await(n.getOffsetParent==null?void 0:n.getOffsetParent(a.floating)),A=await(n.isElement==null?void 0:n.isElement(x))?await(n.getScale==null?void 0:n.getScale(x))||{x:1,y:1}:{x:1,y:1},C=St(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:x,strategy:c}):b);return{top:(y.top-C.top+g.top)/A.y,bottom:(C.bottom-y.bottom+g.bottom)/A.y,left:(y.left-C.left+g.left)/A.x,right:(C.right-y.right+g.right)/A.x}}const Fi=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:o,placement:r,rects:n,platform:s,elements:a,middlewareData:c}=e,{element:l,padding:h=0}=pt(t,e)||{};if(l==null)return{};const d=Re(h),m={x:i,y:o},p=Gt(r),g=Kt(p),v=await s.getDimensions(l),w=p==="y",y=w?"top":"left",b=w?"bottom":"right",x=w?"clientHeight":"clientWidth",A=n.reference[g]+n.reference[p]-m[p]-n.floating[g],C=m[p]-n.reference[p],O=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let $=O?O[x]:0;(!$||!await(s.isElement==null?void 0:s.isElement(O)))&&($=a.floating[x]||n.floating[g]);const q=A/2-C/2,D=$/2-v[g]/2-1,R=J(d[y],D),X=J(d[b],D),F=R,Z=$-v[g]-X,L=$/2-v[g]/2+q,st=It(F,L,Z),Y=!c.arrow&&ft(r)!=null&&L!==st&&n.reference[g]/2-(L<F?R:X)-v[g]/2<0,H=Y?L<F?L-F:L-Z:0;return{[p]:m[p]+H,data:{[p]:st,centerOffset:L-st-H,...Y&&{alignmentOffset:H}},reset:Y}}}),Hi=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,o;const{placement:r,middlewareData:n,rects:s,initialPlacement:a,platform:c,elements:l}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...w}=pt(t,e);if((i=n.arrow)!=null&&i.alignmentOffset)return{};const y=Q(r),b=ot(a),x=Q(a)===a,A=await(c.isRTL==null?void 0:c.isRTL(l.floating)),C=m||(x||!v?[$t(a)]:Ri(a)),O=g!=="none";!m&&O&&C.push(...Mi(a,v,g,A));const $=[a,...C],q=await Jt(e,w),D=[];let R=((o=n.flip)==null?void 0:o.overflows)||[];if(h&&D.push(q[y]),d){const L=Oi(r,s,A);D.push(q[L[0]],q[L[1]])}if(R=[...R,{placement:r,overflows:D}],!D.every(L=>L<=0)){var X,F;const L=(((X=n.flip)==null?void 0:X.index)||0)+1,st=$[L];if(st)return{data:{index:L,overflows:R},reset:{placement:st}};let Y=(F=R.filter(H=>H.overflows[0]<=0).sort((H,K)=>H.overflows[1]-K.overflows[1])[0])==null?void 0:F.placement;if(!Y)switch(p){case"bestFit":{var Z;const H=(Z=R.filter(K=>{if(O){const G=ot(K.placement);return G===b||G==="y"}return!0}).map(K=>[K.placement,K.overflows.filter(G=>G>0).reduce((G,Ue)=>G+Ue,0)]).sort((K,G)=>K[1]-G[1])[0])==null?void 0:Z[0];H&&(Y=H);break}case"initialPlacement":Y=a;break}if(r!==Y)return{reset:{placement:Y}}}return{}}}};async function Ni(t,e){const{placement:i,platform:o,elements:r}=t,n=await(o.isRTL==null?void 0:o.isRTL(r.floating)),s=Q(i),a=ft(i),c=ot(i)==="y",l=["left","top"].includes(s)?-1:1,h=n&&c?-1:1,d=pt(e,t);let{mainAxis:m,crossAxis:p,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),c?{x:p*h,y:m*l}:{x:m*l,y:p*h}}const Vi=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var i,o;const{x:r,y:n,placement:s,middlewareData:a}=e,c=await Ni(e,t);return s===((i=a.offset)==null?void 0:i.placement)&&(o=a.arrow)!=null&&o.alignmentOffset?{}:{x:r+c.x,y:n+c.y,data:{...c,placement:s}}}}},Ii=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:o,placement:r}=e,{mainAxis:n=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:y,y:b}=w;return{x:y,y:b}}},...c}=pt(t,e),l={x:i,y:o},h=await Jt(e,c),d=ot(Q(r)),m=Oe(d);let p=l[m],g=l[d];if(n){const w=m==="y"?"top":"left",y=m==="y"?"bottom":"right",b=p+h[w],x=p-h[y];p=It(b,p,x)}if(s){const w=d==="y"?"top":"left",y=d==="y"?"bottom":"right",b=g+h[w],x=g-h[y];g=It(b,g,x)}const v=a.fn({...e,[m]:p,[d]:g});return{...v,data:{x:v.x-i,y:v.y-o,enabled:{[m]:n,[d]:s}}}}}},ji=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var i,o;const{placement:r,rects:n,platform:s,elements:a}=e,{apply:c=()=>{},...l}=pt(t,e),h=await Jt(e,l),d=Q(r),m=ft(r),p=ot(r)==="y",{width:g,height:v}=n.floating;let w,y;d==="top"||d==="bottom"?(w=d,y=m===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(y=d,w=m==="end"?"top":"bottom");const b=v-h.top-h.bottom,x=g-h.left-h.right,A=J(v-h[w],b),C=J(g-h[y],x),O=!e.middlewareData.shift;let $=A,q=C;if((i=e.middlewareData.shift)!=null&&i.enabled.x&&(q=x),(o=e.middlewareData.shift)!=null&&o.enabled.y&&($=b),O&&!m){const R=k(h.left,0),X=k(h.right,0),F=k(h.top,0),Z=k(h.bottom,0);p?q=g-2*(R!==0||X!==0?R+X:k(h.left,h.right)):$=v-2*(F!==0||Z!==0?F+Z:k(h.top,h.bottom))}await c({...e,availableWidth:q,availableHeight:$});const D=await s.getDimensions(a.floating);return g!==D.width||v!==D.height?{reset:{rects:!0}}:{}}}};function kt(){return typeof window<"u"}function gt(t){return Te(t)?(t.nodeName||"").toLowerCase():"#document"}function P(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(Te(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Te(t){return kt()?t instanceof Node||t instanceof P(t).Node:!1}function T(t){return kt()?t instanceof Element||t instanceof P(t).Element:!1}function I(t){return kt()?t instanceof HTMLElement||t instanceof P(t).HTMLElement:!1}function ce(t){return!kt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof P(t).ShadowRoot}function wt(t){const{overflow:e,overflowX:i,overflowY:o,display:r}=M(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+i)&&!["inline","contents"].includes(r)}function Wi(t){return["table","td","th"].includes(gt(t))}function Pt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function zt(t){const e=Qt(),i=T(t)?M(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>i[o]?i[o]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!e&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!e&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Ui(t){let e=tt(t);for(;I(e)&&!ct(e);){if(zt(e))return e;if(Pt(e))return null;e=tt(e)}return null}function Qt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(t){return["html","body","#document"].includes(gt(t))}function M(t){return P(t).getComputedStyle(t)}function Ot(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function tt(t){if(gt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ce(t)&&t.host||W(t);return ce(e)?e.host:e}function Me(t){const e=tt(t);return ct(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&wt(e)?e:Me(e)}function vt(t,e,i){var o;e===void 0&&(e=[]),i===void 0&&(i=!0);const r=Me(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),s=P(r);if(n){const a=Wt(s);return e.concat(s,s.visualViewport||[],wt(r)?r:[],a&&i?vt(a):[])}return e.concat(r,vt(r,[],i))}function Wt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Be(t){const e=M(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=I(t),n=r?t.offsetWidth:i,s=r?t.offsetHeight:o,a=Et(i)!==n||Et(o)!==s;return a&&(i=n,o=s),{width:i,height:o,$:a}}function te(t){return T(t)?t:t.contextElement}function lt(t){const e=te(t);if(!I(e))return V(1);const i=e.getBoundingClientRect(),{width:o,height:r,$:n}=Be(e);let s=(n?Et(i.width):i.width)/o,a=(n?Et(i.height):i.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const qi=V(0);function De(t){const e=P(t);return!Qt()||!e.visualViewport?qi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Yi(t,e,i){return e===void 0&&(e=!1),!i||e&&i!==P(t)?!1:e}function rt(t,e,i,o){e===void 0&&(e=!1),i===void 0&&(i=!1);const r=t.getBoundingClientRect(),n=te(t);let s=V(1);e&&(o?T(o)&&(s=lt(o)):s=lt(t));const a=Yi(n,i,o)?De(n):V(0);let c=(r.left+a.x)/s.x,l=(r.top+a.y)/s.y,h=r.width/s.x,d=r.height/s.y;if(n){const m=P(n),p=o&&T(o)?P(o):o;let g=m,v=Wt(g);for(;v&&o&&p!==g;){const w=lt(v),y=v.getBoundingClientRect(),b=M(v),x=y.left+(v.clientLeft+parseFloat(b.paddingLeft))*w.x,A=y.top+(v.clientTop+parseFloat(b.paddingTop))*w.y;c*=w.x,l*=w.y,h*=w.x,d*=w.y,c+=x,l+=A,g=P(v),v=Wt(g)}}return St({width:h,height:d,x:c,y:l})}function ee(t,e){const i=Ot(t).scrollLeft;return e?e.left+i:rt(W(t)).left+i}function Fe(t,e,i){i===void 0&&(i=!1);const o=t.getBoundingClientRect(),r=o.left+e.scrollLeft-(i?0:ee(t,o)),n=o.top+e.scrollTop;return{x:r,y:n}}function Xi(t){let{elements:e,rect:i,offsetParent:o,strategy:r}=t;const n=r==="fixed",s=W(o),a=e?Pt(e.floating):!1;if(o===s||a&&n)return i;let c={scrollLeft:0,scrollTop:0},l=V(1);const h=V(0),d=I(o);if((d||!d&&!n)&&((gt(o)!=="body"||wt(s))&&(c=Ot(o)),I(o))){const p=rt(o);l=lt(o),h.x=p.x+o.clientLeft,h.y=p.y+o.clientTop}const m=s&&!d&&!n?Fe(s,c,!0):V(0);return{width:i.width*l.x,height:i.height*l.y,x:i.x*l.x-c.scrollLeft*l.x+h.x+m.x,y:i.y*l.y-c.scrollTop*l.y+h.y+m.y}}function Zi(t){return Array.from(t.getClientRects())}function Ki(t){const e=W(t),i=Ot(t),o=t.ownerDocument.body,r=k(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),n=k(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+ee(t);const a=-i.scrollTop;return M(o).direction==="rtl"&&(s+=k(e.clientWidth,o.clientWidth)-r),{width:r,height:n,x:s,y:a}}function Gi(t,e){const i=P(t),o=W(t),r=i.visualViewport;let n=o.clientWidth,s=o.clientHeight,a=0,c=0;if(r){n=r.width,s=r.height;const l=Qt();(!l||l&&e==="fixed")&&(a=r.offsetLeft,c=r.offsetTop)}return{width:n,height:s,x:a,y:c}}function Ji(t,e){const i=rt(t,!0,e==="fixed"),o=i.top+t.clientTop,r=i.left+t.clientLeft,n=I(t)?lt(t):V(1),s=t.clientWidth*n.x,a=t.clientHeight*n.y,c=r*n.x,l=o*n.y;return{width:s,height:a,x:c,y:l}}function he(t,e,i){let o;if(e==="viewport")o=Gi(t,i);else if(e==="document")o=Ki(W(t));else if(T(e))o=Ji(e,i);else{const r=De(t);o={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return St(o)}function He(t,e){const i=tt(t);return i===e||!T(i)||ct(i)?!1:M(i).position==="fixed"||He(i,e)}function Qi(t,e){const i=e.get(t);if(i)return i;let o=vt(t,[],!1).filter(a=>T(a)&&gt(a)!=="body"),r=null;const n=M(t).position==="fixed";let s=n?tt(t):t;for(;T(s)&&!ct(s);){const a=M(s),c=zt(s);!c&&a.position==="fixed"&&(r=null),(n?!c&&!r:!c&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||wt(s)&&!c&&He(t,s))?o=o.filter(h=>h!==s):r=a,s=tt(s)}return e.set(t,o),o}function to(t){let{element:e,boundary:i,rootBoundary:o,strategy:r}=t;const s=[...i==="clippingAncestors"?Pt(e)?[]:Qi(e,this._c):[].concat(i),o],a=s[0],c=s.reduce((l,h)=>{const d=he(e,h,r);return l.top=k(d.top,l.top),l.right=J(d.right,l.right),l.bottom=J(d.bottom,l.bottom),l.left=k(d.left,l.left),l},he(e,a,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function eo(t){const{width:e,height:i}=Be(t);return{width:e,height:i}}function io(t,e,i){const o=I(e),r=W(e),n=i==="fixed",s=rt(t,!0,n,e);let a={scrollLeft:0,scrollTop:0};const c=V(0);if(o||!o&&!n)if((gt(e)!=="body"||wt(r))&&(a=Ot(e)),o){const m=rt(e,!0,n,e);c.x=m.x+e.clientLeft,c.y=m.y+e.clientTop}else r&&(c.x=ee(r));const l=r&&!o&&!n?Fe(r,a):V(0),h=s.left+a.scrollLeft-c.x-l.x,d=s.top+a.scrollTop-c.y-l.y;return{x:h,y:d,width:s.width,height:s.height}}function Dt(t){return M(t).position==="static"}function de(t,e){if(!I(t)||M(t).position==="fixed")return null;if(e)return e(t);let i=t.offsetParent;return W(t)===i&&(i=i.ownerDocument.body),i}function Ne(t,e){const i=P(t);if(Pt(t))return i;if(!I(t)){let r=tt(t);for(;r&&!ct(r);){if(T(r)&&!Dt(r))return r;r=tt(r)}return i}let o=de(t,e);for(;o&&Wi(o)&&Dt(o);)o=de(o,e);return o&&ct(o)&&Dt(o)&&!zt(o)?i:o||Ui(t)||i}const oo=async function(t){const e=this.getOffsetParent||Ne,i=this.getDimensions,o=await i(t.floating);return{reference:io(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ro(t){return M(t).direction==="rtl"}const At={convertOffsetParentRelativeRectToViewportRelativeRect:Xi,getDocumentElement:W,getClippingRect:to,getOffsetParent:Ne,getElementRects:oo,getClientRects:Zi,getDimensions:eo,getScale:lt,isElement:T,isRTL:ro};function Ve(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function no(t,e){let i=null,o;const r=W(t);function n(){var a;clearTimeout(o),(a=i)==null||a.disconnect(),i=null}function s(a,c){a===void 0&&(a=!1),c===void 0&&(c=1),n();const l=t.getBoundingClientRect(),{left:h,top:d,width:m,height:p}=l;if(a||e(),!m||!p)return;const g=_t(d),v=_t(r.clientWidth-(h+m)),w=_t(r.clientHeight-(d+p)),y=_t(h),x={rootMargin:-g+"px "+-v+"px "+-w+"px "+-y+"px",threshold:k(0,J(1,c))||1};let A=!0;function C(O){const $=O[0].intersectionRatio;if($!==c){if(!A)return s();$?s(!1,$):o=setTimeout(()=>{s(!1,1e-7)},1e3)}$===1&&!Ve(l,t.getBoundingClientRect())&&s(),A=!1}try{i=new IntersectionObserver(C,{...x,root:r.ownerDocument})}catch{i=new IntersectionObserver(C,x)}i.observe(t)}return s(!0),n}function so(t,e,i,o){o===void 0&&(o={});const{ancestorScroll:r=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,l=te(t),h=r||n?[...l?vt(l):[],...vt(e)]:[];h.forEach(y=>{r&&y.addEventListener("scroll",i,{passive:!0}),n&&y.addEventListener("resize",i)});const d=l&&a?no(l,i):null;let m=-1,p=null;s&&(p=new ResizeObserver(y=>{let[b]=y;b&&b.target===l&&p&&(p.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var x;(x=p)==null||x.observe(e)})),i()}),l&&!c&&p.observe(l),p.observe(e));let g,v=c?rt(t):null;c&&w();function w(){const y=rt(t);v&&!Ve(v,y)&&i(),v=y,g=requestAnimationFrame(w)}return i(),()=>{var y;h.forEach(b=>{r&&b.removeEventListener("scroll",i),n&&b.removeEventListener("resize",i)}),d==null||d(),(y=p)==null||y.disconnect(),p=null,c&&cancelAnimationFrame(g)}}const ao=Vi,lo=Ii,co=Hi,ue=ji,ho=Fi,uo=(t,e,i)=>{const o=new Map,r={platform:At,...i},n={...r.platform,_c:o};return Di(t,e,{...r,platform:n})};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=Qe(class extends ti{constructor(t){var e;if(super(t),t.type!==Je.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,r;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const s=!!e[n];s===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(s?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return Xe}});function po(t){return fo(t)}function Ft(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function fo(t){for(let e=t;e;e=Ft(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Ft(t);e;e=Ft(e)){if(!(e instanceof Element))continue;const i=getComputedStyle(e);if(i.display!=="contents"&&(i.position!=="static"||zt(i)||e.tagName==="BODY"))return e}return null}function go(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var _=class extends j{constructor(){super(...arguments),this.localize=new Zt(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),i=this.placement.includes("top")||this.placement.includes("bottom");let o=0,r=0,n=0,s=0,a=0,c=0,l=0,h=0;i?t.top<e.top?(o=t.left,r=t.bottom,n=t.right,s=t.bottom,a=e.left,c=e.top,l=e.right,h=e.top):(o=e.left,r=e.bottom,n=e.right,s=e.bottom,a=t.left,c=t.top,l=t.right,h=t.top):t.left<e.left?(o=t.right,r=t.top,n=e.left,s=e.top,a=t.right,c=t.bottom,l=e.left,h=e.bottom):(o=e.right,r=e.top,n=t.left,s=t.top,a=e.right,c=e.bottom,l=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||go(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=so(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[ao({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(ue({apply:({rects:i})=>{const o=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${i.reference.width}px`:"",this.popup.style.height=r?`${i.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(co({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(lo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(ue({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:i,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${i}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(ho({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?i=>At.getOffsetParent(i,po):At.getOffsetParent;uo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:$e(Lt({},At),{getOffsetParent:e})}).then(({x:i,y:o,middlewareData:r,placement:n})=>{const s=this.localize.dir()==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${i}px`,top:`${o}px`}),this.arrow){const c=r.arrow.x,l=r.arrow.y;let h="",d="",m="",p="";if(this.arrowPlacement==="start"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",d=s?g:"",p=s?"":g}else if(this.arrowPlacement==="end"){const g=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=s?"":g,p=s?g:"",m=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof c=="number"?`${c}px`:"",h=typeof l=="number"?`${l}px`:"");Object.assign(this.arrowEl.style,{top:h,right:d,bottom:m,left:p,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return S`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${yt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${yt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?S`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};_.styles=[ut,Si];u([ht(".popup")],_.prototype,"popup",2);u([ht(".popup__arrow")],_.prototype,"arrowEl",2);u([f()],_.prototype,"anchor",2);u([f({type:Boolean,reflect:!0})],_.prototype,"active",2);u([f({reflect:!0})],_.prototype,"placement",2);u([f({reflect:!0})],_.prototype,"strategy",2);u([f({type:Number})],_.prototype,"distance",2);u([f({type:Number})],_.prototype,"skidding",2);u([f({type:Boolean})],_.prototype,"arrow",2);u([f({attribute:"arrow-placement"})],_.prototype,"arrowPlacement",2);u([f({attribute:"arrow-padding",type:Number})],_.prototype,"arrowPadding",2);u([f({type:Boolean})],_.prototype,"flip",2);u([f({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],_.prototype,"flipFallbackPlacements",2);u([f({attribute:"flip-fallback-strategy"})],_.prototype,"flipFallbackStrategy",2);u([f({type:Object})],_.prototype,"flipBoundary",2);u([f({attribute:"flip-padding",type:Number})],_.prototype,"flipPadding",2);u([f({type:Boolean})],_.prototype,"shift",2);u([f({type:Object})],_.prototype,"shiftBoundary",2);u([f({attribute:"shift-padding",type:Number})],_.prototype,"shiftPadding",2);u([f({attribute:"auto-size"})],_.prototype,"autoSize",2);u([f()],_.prototype,"sync",2);u([f({type:Object})],_.prototype,"autoSizeBoundary",2);u([f({attribute:"auto-size-padding",type:Number})],_.prototype,"autoSizePadding",2);u([f({attribute:"hover-bridge",type:Boolean})],_.prototype,"hoverBridge",2);var Ie=new Map,mo=new WeakMap;function vo(t){return t??{keyframes:[],options:{duration:0}}}function pe(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function je(t,e){Ie.set(t,vo(e))}function fe(t,e,i){const o=mo.get(t);if(o!=null&&o[e])return pe(o[e],i.dir);const r=Ie.get(e);return r?pe(r,i.dir):{keyframes:[],options:{duration:0}}}function ge(t,e){return new Promise(i=>{function o(r){r.target===t&&(t.removeEventListener(e,o),i())}t.addEventListener(e,o)})}function me(t,e,i){return new Promise(o=>{if((i==null?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,$e(Lt({},i),{duration:yo()?0:i.duration}));r.addEventListener("cancel",o,{once:!0}),r.addEventListener("finish",o,{once:!0})})}function ve(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function yo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ye(t){return Promise.all(t.getAnimations().map(e=>new Promise(i=>{e.cancel(),requestAnimationFrame(i)})))}var E=class extends j{constructor(){super(),this.localize=new Zt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=ve(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=ve(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ye(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:i,options:o}=fe(this,"tooltip.show",{dir:this.localize.dir()});await me(this.popup.popup,i,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ye(this.body);const{keyframes:i,options:o}=fe(this,"tooltip.hide",{dir:this.localize.dir()});await me(this.popup.popup,i,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ge(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ge(this,"sl-after-hide")}render(){return S`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${yt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};E.styles=[ut,$i];E.dependencies={"sl-popup":_};u([ht("slot:not([name])")],E.prototype,"defaultSlot",2);u([ht(".tooltip__body")],E.prototype,"body",2);u([ht("sl-popup")],E.prototype,"popup",2);u([f()],E.prototype,"content",2);u([f()],E.prototype,"placement",2);u([f({type:Boolean,reflect:!0})],E.prototype,"disabled",2);u([f({type:Number})],E.prototype,"distance",2);u([f({type:Boolean,reflect:!0})],E.prototype,"open",2);u([f({type:Number})],E.prototype,"skidding",2);u([f()],E.prototype,"trigger",2);u([f({type:Boolean})],E.prototype,"hoist",2);u([dt("open",{waitUntilFirstUpdate:!0})],E.prototype,"handleOpenChange",1);u([dt(["content","distance","hoist","placement","skidding"])],E.prototype,"handleOptionsChange",1);u([dt("disabled")],E.prototype,"handleDisabledChange",1);je("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});je("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});E.define("sl-tooltip");var bt=function(t,e,i,o){var r=arguments.length,n=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(r<3?s(n):r>3?s(e,i,n):s(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let nt=class extends _e{constructor(){super(...arguments),this.tooltip=!1}get _iconSize(){return this.iconSize?this.iconSize:this.tooltip!==!1?"32px":"64px"}renderIcon(){return S`
			<sl-icon
				style="color: red; height: ${this._iconSize}; width: ${this._iconSize};"
				src="${Ce(Ae)}"
			></sl-icon>
		`}renderFull(){return S` <div class="column center-content" style="flex: 1; gap: 8px">
			${this.renderIcon()}
			<div style="max-width: 500px; text-align: center" class="column">
				${this.headline?S` <span style="margin-bottom: 8px">${this.headline} </span>`:S``}
				<span class="placeholder"
					>${typeof this.error=="object"&&"message"in this.error?this.error.message:this.error}
				</span>
			</div>
		</div>`}renderTooltip(){return S`
			<sl-tooltip hoist .content=${this.headline?this.headline:this.error}>
				${this.renderIcon()}</sl-tooltip
			>
		`}render(){return this.tooltip!==!1?this.renderTooltip():this.renderFull()}};nt.styles=[Ke,et`
			:host {
				display: flex;
			}
		`];bt([f({attribute:"tooltip"})],nt.prototype,"tooltip",void 0);bt([f()],nt.prototype,"headline",void 0);bt([f()],nt.prototype,"error",void 0);bt([f({attribute:"icon-size"})],nt.prototype,"iconSize",void 0);nt=bt([Ge("display-error")],nt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const we="lit-localize-status";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wo=(t,...e)=>({strTag:!0,strings:t,values:e}),Go=wo,bo=t=>typeof t!="string"&&"strTag"in t,xo=(t,e,i)=>{let o=t[0];for(let r=1;r<t.length;r++)o+=e[r-1],o+=t[r];return o};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o=t=>bo(t)?xo(t.strings,t.values):t;let Jo=_o;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Co{constructor(e){this.__litLocalizeEventHandler=i=>{i.detail.status==="ready"&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(we,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(we,this.__litLocalizeEventHandler)}}const Ao=t=>t.addController(new Co(t)),Eo=Ao;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo=()=>(t,e)=>(t.addInitializer(Eo),t);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $o{constructor(){this.settled=!1,this.promise=new Promise((e,i)=>{this._resolve=e,this._reject=i})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let t=0;t<256;t++)(t>>4&15).toString(16)+(t&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let So=new $o;So.resolve();var Lo=et`
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
`,U=class extends j{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=S`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=S``;return this.initials?e=S`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=S`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,S`
      <div
        part="base"
        class=${yt({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};U.styles=[ut,Lo];U.dependencies={"sl-icon":B};u([Ut()],U.prototype,"hasError",2);u([f()],U.prototype,"image",2);u([f()],U.prototype,"label",2);u([f()],U.prototype,"initials",2);u([f()],U.prototype,"loading",2);u([f({reflect:!0})],U.prototype,"shape",2);u([dt("image")],U.prototype,"handleImageChange",1);U.define("sl-avatar");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>t??Ze;var ko=et`
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
 */const We=Symbol.for(""),Po=t=>{if((t==null?void 0:t.r)===We)return t==null?void 0:t._$litStatic$},be=(t,...e)=>({_$litStatic$:e.reduce((i,o,r)=>i+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+t[r+1],t[0]),r:We}),xe=new Map,zo=t=>(e,...i)=>{const o=i.length;let r,n;const s=[],a=[];let c,l=0,h=!1;for(;l<o;){for(c=e[l];l<o&&(n=i[l],(r=Po(n))!==void 0);)c+=r+e[++l],h=!0;l!==o&&a.push(n),s.push(c),l++}if(l===o&&s.push(e[o]),h){const d=s.join("$$lit$$");(e=xe.get(d))===void 0&&(s.raw=s,xe.set(d,e=s)),i=a}return t(e,...i)},Oo=zo(S);var z=class extends j{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?be`a`:be`button`;return Oo`
      <${e}
        part="base"
        class=${yt({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${N(t?void 0:this.disabled)}
        type=${N(t?void 0:"button")}
        href=${N(t?this.href:void 0)}
        target=${N(t?this.target:void 0)}
        download=${N(t?this.download:void 0)}
        rel=${N(t&&this.target?"noreferrer noopener":void 0)}
        role=${N(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${N(this.name)}
          library=${N(this.library)}
          src=${N(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};z.styles=[ut,ko];z.dependencies={"sl-icon":B};u([ht(".icon-button")],z.prototype,"button",2);u([Ut()],z.prototype,"hasFocus",2);u([f()],z.prototype,"name",2);u([f()],z.prototype,"library",2);u([f()],z.prototype,"src",2);u([f()],z.prototype,"href",2);u([f()],z.prototype,"target",2);u([f()],z.prototype,"download",2);u([f()],z.prototype,"label",2);u([f({type:Boolean,reflect:!0})],z.prototype,"disabled",2);var Ro=et`
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
`,To=class extends j{constructor(){super(...arguments),this.localize=new Zt(this)}render(){return S`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};To.styles=[ut,Ro];var tr=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=i=>{const o=i.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function er(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(i+=o.textContent)}),i}export{ge as A,_ as B,ti as C,qo as D,Je as E,Qe as F,er as G,tr as H,E as I,Yo as J,ri as K,Zt as L,Io as M,jo as N,No as O,Fo as S,$e as _,ii as a,Vo as b,Lt as c,ut as d,To as e,B as f,u as g,ht as h,dt as i,j,be as k,Qo as l,Jo as m,Wo as n,yt as o,N as p,Uo as q,Ut as r,Go as s,z as t,Oo as u,je as v,Ce as w,fe as x,me as y,ye as z};
