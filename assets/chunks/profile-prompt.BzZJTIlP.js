import{K as at,M as nt,h as N,z as mt,k as a,l as P,e as o,r as S,o as T,A as lt,p as K,L as ct,D as X,B as J,C as Z,E as tt,u as D,N as x,P as ft,Q as vt,j as bt,v as h,c as C,d as z,t as A,S as H,n as k,m as d,H as gt,w as q,R as yt,f as dt,s as _t,T as wt,U as et}from"./chunk.HLJ2JR6P.CqE0XoMz.js";import{e as y,d as j,i as v,x as c,u as it,T as R,E as xt,r as E,f as kt,H as $t}from"./friends-client.CkI5ekAr.js";import{l as M,r as Ct,s as At,F as Et}from"./index.DZodZdt-.js";import{_ as b}from"./tslib.es6.kHcLnhpD.js";import{H as Q,l as G}from"./chunk.NYIIDP5N.vTyj-h3z.js";import{F as Dt}from"./chunk.UG6RICOR.DsW34Pdg.js";import"./commonjsHelpers.BosuxZz1.js";class Pt{constructor(t){this.host=t,this.host.addController(this),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this)}closestElement(t){function i(r){if(!r||r===document||r===window)return null;r.assignedSlot&&(r=r.assignedSlot);const s=r.closest(t);return s||i(r.getRootNode().host)}return i(this.host)}hostConnected(){this.form=this.closestElement("form"),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),this.form.dispatchEvent(new CustomEvent("update-form")))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),this.form=void 0)}handleFormData(t){const i=this.host.disabled,r=this.host.name,s=this.host.value;!i&&r&&s!==void 0&&(Array.isArray(s)?s.map(n=>t.formData.append(r,n)):t.formData.append(r,s))}handleFormSubmit(t){const i=this.form,r=this.host.disabled,s=this.host.reportValidity;i&&!i.noValidate&&!r&&s&&!this.host.reportValidity()&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(t){this.host.reset()}}function U(e){return typeof e=="string"&&e.split(",").length===39?new Uint8Array(e.split(",").map(t=>parseInt(t,10))):e}function rt(e){const t=new FormData(e),i={};return t.forEach((r,s)=>{if(Reflect.has(i,s)){const n=i[s];Array.isArray(n)?n.push(U(r)):i[s]=[i[s],U(r)]}else i[s]=U(r)}),i}class St extends nt{constructor(){super(...arguments),this.initialized=!1}update(t,i){this.initialized||(this.initialized=!0,t.element.addEventListener("update-form",s=>{this.listener&&t.element.removeEventListener("submit",this.listener),this.listener=n=>{n.preventDefault();const u=rt(t.element);i[0](u)},t.element.addEventListener("submit",this.listener)})),setTimeout(()=>{this.listener&&t.element.removeEventListener("submit",this.listener),this.listener=r=>{r.preventDefault();const s=rt(t.element);i[0](s)},t.element.addEventListener("submit",this.listener)},100)}render(t){return""}}const Tt=at(St);function zt(e){return{attribute:e,type:Object,hasChanged:(t,i)=>(t==null?void 0:t.toString())!==(i==null?void 0:i.toString()),converter:{fromAttribute:t=>t&&t.length>0&&j(t),toAttribute:t=>t&&y(t)},reflect:!0}}const It=60*1e3;var Ft=v`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,m=class g extends K{constructor(){super(...arguments),this.hasSlotController=new Q(this,"icon","suffix"),this.localize=new ct(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,i="100%",r="0";this.countdownAnimation=t.animate([{width:i},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await X(this.base),this.base.hidden=!1;const{keyframes:t,options:i}=J(this,"alert.show",{dir:this.localize.dir()});await Z(this.base,t,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await X(this.base);const{keyframes:t,options:i}=J(this,"alert.hide",{dir:this.localize.dir()});await Z(this.base,t,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,tt(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,tt(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),g.toastStack.parentElement===null&&document.body.append(g.toastStack),g.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{g.toastStack.removeChild(this),t(),g.toastStack.querySelector("sl-alert")===null&&g.toastStack.remove()},{once:!0})})}render(){return c`
      <div
        part="base"
        class=${D({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?c`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?c`
              <div
                class=${D({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};m.styles=[N,Ft];m.dependencies={"sl-icon-button":mt};a([P('[part~="base"]')],m.prototype,"base",2);a([P(".alert__countdown-elapsed")],m.prototype,"countdownElement",2);a([o({type:Boolean,reflect:!0})],m.prototype,"open",2);a([o({type:Boolean,reflect:!0})],m.prototype,"closable",2);a([o({reflect:!0})],m.prototype,"variant",2);a([o({type:Number})],m.prototype,"duration",2);a([o({type:String,reflect:!0})],m.prototype,"countdown",2);a([S()],m.prototype,"remainingTime",2);a([T("open",{waitUntilFirstUpdate:!0})],m.prototype,"handleOpenChange",1);a([T("duration")],m.prototype,"handleDurationChange",1);var Lt=m;lt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});lt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Lt.define("sl-alert");function Rt(){return Math.floor(Math.random()*10)}function st(e){const t=[];for(let i=0;i<e;i++)t.push(Rt());return t}var qt=v`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Bt=(e="value")=>(t,i)=>{const r=t.constructor,s=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(n,u,w){var W;const F=r.getPropertyOptions(e),ht=typeof F.attribute=="string"?F.attribute:e;if(n===ht){const L=F.converter||it,Y=(typeof L=="function"?L:(W=L==null?void 0:L.fromAttribute)!=null?W:it.fromAttribute)(w,F.type);this[e]!==Y&&(this[i]=Y)}s.call(this,n,u,w)}},Vt=v`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=at(class extends nt{constructor(e){if(super(e),e.type!==x.PROPERTY&&e.type!==x.ATTRIBUTE&&e.type!==x.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ft(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===R||t===xt)return t;const i=e.element,r=e.name;if(e.type===x.PROPERTY){if(t===i[r])return R}else if(e.type===x.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(r))return R}else if(e.type===x.ATTRIBUTE&&i.getAttribute(r)===t+"")return R;return vt(e),t}});var l=class extends K{constructor(){super(...arguments),this.formControlController=new Dt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Q(this,"help-text","label"),this.localize=new ct(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,i="none"){this.input.setSelectionRange(e,t,i)}setRangeText(e,t,i,r="preserve"){const s=t??this.input.selectionStart,n=i??this.input.selectionEnd;this.input.setRangeText(e,s,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),i=this.label?!0:!!e,r=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return c`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${D({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${h(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${h(this.placeholder)}
              minlength=${h(this.minlength)}
              maxlength=${h(this.maxlength)}
              min=${h(this.min)}
              max=${h(this.max)}
              step=${h(this.step)}
              .value=${Ot(this.value)}
              autocapitalize=${h(this.autocapitalize)}
              autocomplete=${h(this.autocomplete)}
              autocorrect=${h(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${h(this.pattern)}
              enterkeyhint=${h(this.enterkeyhint)}
              inputmode=${h(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?c`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?c`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?c`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:c`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};l.styles=[N,Vt,qt];l.dependencies={"sl-icon":bt};a([P(".input__control")],l.prototype,"input",2);a([S()],l.prototype,"hasFocus",2);a([o()],l.prototype,"title",2);a([o({reflect:!0})],l.prototype,"type",2);a([o()],l.prototype,"name",2);a([o()],l.prototype,"value",2);a([Bt()],l.prototype,"defaultValue",2);a([o({reflect:!0})],l.prototype,"size",2);a([o({type:Boolean,reflect:!0})],l.prototype,"filled",2);a([o({type:Boolean,reflect:!0})],l.prototype,"pill",2);a([o()],l.prototype,"label",2);a([o({attribute:"help-text"})],l.prototype,"helpText",2);a([o({type:Boolean})],l.prototype,"clearable",2);a([o({type:Boolean,reflect:!0})],l.prototype,"disabled",2);a([o()],l.prototype,"placeholder",2);a([o({type:Boolean,reflect:!0})],l.prototype,"readonly",2);a([o({attribute:"password-toggle",type:Boolean})],l.prototype,"passwordToggle",2);a([o({attribute:"password-visible",type:Boolean})],l.prototype,"passwordVisible",2);a([o({attribute:"no-spin-buttons",type:Boolean})],l.prototype,"noSpinButtons",2);a([o({reflect:!0})],l.prototype,"form",2);a([o({type:Boolean,reflect:!0})],l.prototype,"required",2);a([o()],l.prototype,"pattern",2);a([o({type:Number})],l.prototype,"minlength",2);a([o({type:Number})],l.prototype,"maxlength",2);a([o()],l.prototype,"min",2);a([o()],l.prototype,"max",2);a([o()],l.prototype,"step",2);a([o()],l.prototype,"autocapitalize",2);a([o()],l.prototype,"autocorrect",2);a([o()],l.prototype,"autocomplete",2);a([o({type:Boolean})],l.prototype,"autofocus",2);a([o()],l.prototype,"enterkeyhint",2);a([o({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],l.prototype,"spellcheck",2);a([o()],l.prototype,"inputmode",2);a([T("disabled",{waitUntilFirstUpdate:!0})],l.prototype,"handleDisabledChange",1);a([T("step",{waitUntilFirstUpdate:!0})],l.prototype,"handleStepChange",1);a([T("value",{waitUntilFirstUpdate:!0})],l.prototype,"handleValueChange",1);l.define("sl-input");function ot(){return!!window.__TAURI_INTERNALS__}const Ht=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);async function Ut(){return await Ct(),(await At({windowed:!1,formats:[Et.QRCode]})).content}let B=class extends H(E){async attemptDiscoverAgent(t){try{await this.store.client.attemptDiscoverAgent(t),this.dispatchEvent(new CustomEvent("agent-discovered",{bubbles:!0,composed:!0,detail:{agentPubKey:t}}))}catch(i){throw k(d("Error discovering agent.")),i}}async scanAndDiscover(){const t=j(await Ut());try{await this.attemptDiscoverAgent(t)}catch(i){console.error(i),await this.scanAndDiscover()}}async firstUpdated(){if(await this.store.client.prepareDiscoverAgent(),this.store.client.onSignal(t=>{t.type==="AgentDiscovered"&&this.dispatchEvent(new CustomEvent("agent-discovered",{bubbles:!0,composed:!0,detail:{agentPubKey:t.agent}}))}),ot()&&Ht)try{await this.scanAndDiscover()}catch{k(d("Error discovering agent. Please try again.")),this.dispatchEvent(new CustomEvent("link-devices-cancelled",{bubbles:!0,composed:!0}))}}renderQrcode(){return c`
			<div class="column" style="gap: 8px; flex: 1;">
				<span style="align-self: center"
					>${d("Scan this code with your other device.")}
				</span>
				<sl-qr-code
					value="${y(this.store.client.client.myPubKey)}"
					style="align-self: center"
					size="240"
				>
				</sl-qr-code>
			</div>

			<span style="align-self: center">${d("OR")} </span>
		`}render(){return c`
			<div class="column" style="gap: 32px; flex: 1;">
				${ot()?this.renderQrcode():c``}
				<div class="column" style="gap: 16px">
					<div class="column" style="gap: 8px">
						<span>${d("Send this code to your other device...")} </span>
						<div class="row" style="align-items: center; gap: 8px">
							<sl-tag style="flex: 1; "
								>${y(this.store.client.client.myPubKey)}
							</sl-tag>
							<sl-copy-button
								value="${y(this.store.client.client.myPubKey)}"
							></sl-copy-button>
						</div>
					</div>

					<div class="column" style=" gap: 8px">
						<span style="word-break: break-word;"
							>${d("... and enter here the code from your other device.")}
						</span>

						<sl-input
							@sl-input=${async t=>{const i=t.target;if(y(this.store.client.client.myPubKey)===i.value){k(d("Please enter the code from your other device.")),i.value="";return}const r=j(i.value);try{await this.attemptDiscoverAgent(r)}catch{i.value=""}}}
						>
						</sl-input>
					</div>
				</div>
			</div>
		`}};B.styles=[...C,v`
			sl-tag::part(base) {
				font-size: 12px;
				overflow: hidden;
			}
			sl-tag {
				max-width: 70%;
			}
		`];b([z({context:M,subscribe:!0}),o()],B.prototype,"store",void 0);B=b([G(),A("discover-agent")],B);let V=class extends E{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))===null||t===void 0||t.focus()})}get passcode(){const t=Array.from(this.shadowRoot.querySelectorAll("sl-input")),i=Array.from(Array(this.passcodeLength)).map(()=>{});for(let r=0;r<t.length;r++){if(t[r].value==="")return;const s=parseInt(t[r].value,10);if(s>9)return;i[r]=s}return i}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(i=>i.value=""),setTimeout(()=>{var i;(i=this.shadowRoot.getElementById("input-0"))===null||i===void 0||i.focus()})}maybeDispatchEvent(){const t=this.passcode;t&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:t}}))}render(){return c`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((t,i)=>c`<sl-input
							id="input-${i}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${r=>{if(r.key==="Backspace"){if(r.target.value===""){const n=this.shadowRoot.getElementById(`input-${i-1}`);n&&(n.value=""),setTimeout(()=>{const u=this.shadowRoot.getElementById(`input-${i-1}`);u&&u.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${r=>{const s=r.target;if(!s.value.match(/^[0-9]$/g)){s.value="";return}const n=this.shadowRoot.getElementById(`input-${i+1}`);n&&n.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};V.styles=[C,v`
			sl-input::part(input) {
				text-align: center;
			}
		`];b([o()],V.prototype,"passcodeLength",void 0);V=b([A("passcode-input")],V);let $=class extends H(E){constructor(){super(...arguments),this.initialized=!1}async firstUpdated(){setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))===null||t===void 0||t.focus()}),this.store.client.onSignal(t=>{this.recipient&&(t.type!=="LinkCreated"||t.link_type!=="AgentToLinkedDevices"||y(kt(t.action.hashed.content.target_address,$t.AGENT))===y(this.recipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.recipient}})),gt(d("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),this.interval&&clearInterval(this.interval),this.store.client.clearLinkDevicesCapGrants()}async prepareLinkDevices(t){this.requestorPasscode=st(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.requestorPasscode=st(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevicesCapGrants(),await this.store.client.prepareLinkDevicesRequestor(t,this.requestorPasscode)},It),await this.store.client.prepareLinkDevicesRequestor(t,this.requestorPasscode)}renderNumber(){return c`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${d("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorPasscode.join("")}</span>
		</div>`}render(){return this.recipient?this.initialized?this.renderNumber():c`
				<div
					class="column"
					style="gap: 12px; align-items: center; justify-content: center; flex: 1"
				>
					<span>${d("Enter the pass code from your other device:")} </span>
					<passcode-input
						.passcodeLength=${this.store.config.linkDevicePasscodeLength}
						@passcode-change=${async t=>{try{await this.store.client.requestLinkDevices(this.recipient,t.detail.passcode),this.initialized=!0}catch(i){console.error(i),k(d("Error linking devices. Please try again")),this.recipient=void 0}}}
					>
					</passcode-input>
				</div>
			`:c`
				<discover-agent
					@agent-discovered=${async t=>{this.recipient=t.detail.agentPubKey;try{await this.prepareLinkDevices(this.recipient)}catch(i){k(d("Error linking devices. Please try again.")),console.error(i),this.recipient=void 0,this.initialized=!1}}}
				>
				</discover-agent>
			`}};$.styles=[C,v`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];b([z({context:M,subscribe:!0}),o()],$.prototype,"store",void 0);b([o(zt("recipient"))],$.prototype,"recipient",void 0);b([S()],$.prototype,"initialized",void 0);$=b([A("link-device-requestor")],$);var jt=v`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,ut=class extends K{constructor(){super(...arguments),this.hasSlotController=new Q(this,"footer","header","image")}render(){return c`
      <div
        part="base"
        class=${D({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};ut.styles=[N,jt];ut.define("sl-card");function Nt(e,t,i){let r=e.width,s=e.height;r>s?r>t&&(s=s*(t/r),r=t):s>i&&(r=r*(i/s),s=i);const n=document.createElement("canvas");return n.width=r,n.height=s,n.getContext("2d").drawImage(e,0,0,r,s),n.toDataURL()}var f=function(e,t,i,r){var s=arguments.length,n=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,r);else for(var w=e.length-1;w>=0;w--)(u=e[w])&&(n=(s<3?u(n):s>3?u(t,i,n):u(t,i))||n);return s>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends E{constructor(){super(...arguments),this.name="avatar",this.required=!1,this.shape="circle",this.disabled=!1,this.avatarWidth=300,this.avatarHeight=300,this.label=d("Avatar"),this._controller=new Pt(this)}reportValidity(){const t=this.required&&!this.value;return t&&(this._errorInput.setCustomValidity(d("Avatar is required")),this._errorInput.reportValidity()),!t}reset(){this.value=this.defaultValue}onAvatarUploaded(){const t=this.shadowRoot.querySelector("sl-button");if(t&&(t.loading=!0),this._avatarFilePicker.files&&this._avatarFilePicker.files[0]){const i=new FileReader;i.onload=r=>{var n;const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{this.value=Nt(s,this.avatarWidth,this.avatarHeight),this._avatarFilePicker.value="",this.dispatchEvent(new CustomEvent("avatar-selected",{composed:!0,bubbles:!0,detail:{avatar:this.value}})),t.loading=!1},s.src=(n=r.target)==null?void 0:n.result},i.readAsDataURL(this._avatarFilePicker.files[0])}}renderAvatar(){return this.value?c`
				<div
					class="column"
					style="align-items: center; height: 50px"
					@click=${()=>{this.value=void 0}}
				>
					<sl-tooltip .content=${d("Clear")}>
						<sl-avatar
							image="${this.value}"
							alt="Avatar"
							.shape=${this.shape}
							initials=""
						></sl-avatar
					></sl-tooltip>
				</div>
			`:c` <div class="column" style="align-items: center;">
				<sl-button
					.disabled=${this.disabled}
					variant="default"
					size="large"
					circle
					@click=${()=>this._avatarFilePicker.click()}
				>
					<sl-icon
						src="${q(yt)}"
						.label=${d("Add avatar image")}
					></sl-icon>
				</sl-button>
			</div>`}render(){return c`<input
				type="file"
				id="avatar-file-picker"
				style="display: none"
				@change=${this.onAvatarUploaded}
			/>
			<div class="column" style="position: relative; align-items: center">
				<input
					id="error-input"
					style="position: absolute; z-index: -1; left: 50%; top: 30px; height: 0; width: 0"
				/>
				${this.label!==""?c`
							<span
								style="font-size: var(--sl-input-label-font-size-medium); margin-bottom: 4px; white-space: nowrap;"
								>${this.label}${this.required!==!1?" *":""}</span
							>
						`:c``}
				${this.renderAvatar()}
			</div>`}};p.styles=C;f([o({attribute:"name"})],p.prototype,"name",void 0);f([o()],p.prototype,"required",void 0);f([o()],p.prototype,"shape",void 0);f([o()],p.prototype,"value",void 0);f([o()],p.prototype,"disabled",void 0);f([o()],p.prototype,"defaultValue",void 0);f([o({attribute:"avatar-width"})],p.prototype,"avatarWidth",void 0);f([o({attribute:"avatar-height"})],p.prototype,"avatarHeight",void 0);f([o()],p.prototype,"label",void 0);f([P("#avatar-file-picker")],p.prototype,"_avatarFilePicker",void 0);f([P("#error-input")],p.prototype,"_errorInput",void 0);p=f([A("select-avatar")],p);var Kt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,pt=(e,t,i,r)=>{for(var s=r>1?void 0:r?Mt(t,i):t,n=e.length-1,u;n>=0;n--)(u=e[n])&&(s=(r?u(t,i,s):u(s))||s);return r&&s&&Kt(t,i,s),s};let O=class extends H(E){async setProfile(e){this.shadowRoot.querySelector("sl-button").loading=!0;try{await this.store.client.setMyProfile({...e,fields:{}}),this.dispatchEvent(new CustomEvent("profile-created",{detail:{profile:e},bubbles:!0,composed:!0}))}catch(t){console.error(t),k(d("Error creating the profile."))}this.shadowRoot.querySelector("sl-button").loading=!1}renderField(e){return c`
			<sl-input
				name="${e.name}"
				.required=${e.required}
				.label=${e.label}
			></sl-input>
		`}render(){return c`
			<form
				id="profile-form"
				class="column"
				${Tt(e=>this.setProfile(e))}
				style="gap: 16px"
			>
				<div
					class="row"
					style="justify-content: center; align-self: start; gap: 16px"
				>
					<select-avatar name="avatar" required></select-avatar>
					<sl-input
						name="name"
						.label=${d("Name")}
						required
						minLength="${this.store.config.minNicknameLength}"
						.helpText=${d(_t`Min. ${this.store.config.minNicknameLength} characters`)}
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(e=>this.renderField(e))}

				<sl-button style="flex: 1;" variant="primary" type="submit"
					>${d("Create Profile")}
				</sl-button>
			</form>
		`}};O.styles=C;pt([z({context:dt,subscribe:!0}),o()],O.prototype,"store",2);O=pt([G(),A("create-profile")],O);var Qt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,I=(e,t,i,r)=>{for(var s=r>1?void 0:r?Gt(t,i):t,n=e.length-1,u;n>=0;n--)(u=e[n])&&(s=(r?u(t,i,s):u(s))||s);return r&&s&&Qt(t,i,s),s};let _=class extends H(E){constructor(){super(...arguments),this.view="question",this.linkingDevices=!1}firstUpdated(){this.store.client.queryPrivateEventEntries()}renderContent(){if(!this.linkedDevicesStore)return c`
				<sl-card>
					<div class="column">
						<span
							class="title"
							style="margin-bottom: 16px; align-self: flex-start"
							>${d("Create Profile")}</span
						>
						<create-profile></create-profile>
					</div>
				</sl-card>
			`;if(this.linkingDevices)return c`
				<div
					class="column"
					style="flex: 1; justify-content: center; align-items: center; gap: 16px"
				>
					<sl-icon
						style="font-size: 64px"
						.src=${q(wt)}
					></sl-icon>
					<span>${d("Synchronizing with your other devices...")} </span>
				</div>
			`;const e=this.linkedDevicesStore.myLinkedDevices.get();switch(e.status){case"pending":return c`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return c`<display-error
					.headline=${d("Error fetching your linked devices.")}
					.error=${e.error}
				></display-error>`;case"completed":return this.view==="create-profile"?c`
						<div class="column" style="align-items: start">
							<sl-button
								variant="text"
								@click=${()=>{this.view="question"}}
								style="margin-bottom: 12px"
							>
								<sl-icon
									slot="prefix"
									.src=${q(et)}
								></sl-icon>
								${d("Back")}</sl-button
							>
							<sl-card>
								<div class="column">
									<span
										class="title"
										style="margin-bottom: 16px; align-self: flex-start"
										>${d("Create Profile")}</span
									>
									<create-profile></create-profile>
								</div>
							</sl-card>
						</div>
					`:this.view==="link-device"?c` <div class="column" style="align-items: start">
						<sl-button
							variant="text"
							@click=${()=>{this.view="question"}}
							style="margin-bottom: 12px"
						>
							<sl-icon
								slot="prefix"
								.src=${q(et)}
							></sl-icon>
							${d("Back")}</sl-button
						>
						<sl-card>
							<link-device-requestor
								@device-linked=${async t=>{this.linkingDevices=!0}}
							></link-device-requestor>
						</sl-card>
					</div>`:c`
					<sl-card>
						<div class="column" style="gap: 12px">
							<span class="title"> ${d("Profile Setup")} </span>
							<span>
								${d("Have you already created a profile in this app?")}
							</span>

							<div class="row" style="gap: 12px">
								<sl-button @click=${()=>this.view="create-profile"}
									>${d("No, create a new profile")}
								</sl-button>
								<sl-button
									variant="primary"
									@click=${()=>this.view="link-device"}
									>${d("Yes! Link this device")}
								</sl-button>
							</div>
						</div>
					</sl-card>
				`}}renderPrompt(e){return e?c`<slot></slot>`:c`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const e=this.store.myProfile.get();switch(e.status){case"pending":return c`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return c`<display-error
					.headline=${d("Error fetching your profile.")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderPrompt(e.value!==void 0)}}};_.styles=[C,v`
			:host {
				display: flex;
				flex: 1;
			}
		`];I([z({context:dt,subscribe:!0}),o()],_.prototype,"store",2);I([z({context:M,subscribe:!0}),o()],_.prototype,"linkedDevicesStore",2);I([S()],_.prototype,"view",2);I([S()],_.prototype,"linkingDevices",2);_=I([G(),A("profile-prompt")],_);export{_ as ProfilePrompt};
