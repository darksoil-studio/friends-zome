import{n as a,s as I,t as F,c as K,f as M}from"./context.Bjs5uBkO.js";import{j as W,k as Y,c as P,b as D,e as y,_ as s,i as w,r as z,d as x,s as X,L as G,o as R,p as H,q,t as U,u as g,v as rt,x as it,h as ot,m as f,w as at,y as st,S as J,n as lt,z as nt,l as Q}from"./display-error.DOnWuCJ6.js";import{i as k,x as d,u as j,T as S,E as dt,r as V}from"./friends-client.B6X9N127.js";import{H as O,S as ut,a as pt,F as ct,o as c}from"./chunk.HLJ2JR6P.D0MhXNWz.js";import"./commonjsHelpers.BosuxZz1.js";class ht{constructor(e){this.host=e,this.host.addController(this),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this)}closestElement(e){function i(r){if(!r||r===document||r===window)return null;r.assignedSlot&&(r=r.assignedSlot);const o=r.closest(e);return o||i(r.getRootNode().host)}return i(this.host)}hostConnected(){this.form=this.closestElement("form"),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),this.form.dispatchEvent(new CustomEvent("update-form")))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),this.form=void 0)}handleFormData(e){const i=this.host.disabled,r=this.host.name,o=this.host.value;!i&&r&&o!==void 0&&(Array.isArray(o)?o.map(n=>e.formData.append(r,n)):e.formData.append(r,o))}handleFormSubmit(e){const i=this.form,r=this.host.disabled,o=this.host.reportValidity;i&&!i.noValidate&&!r&&o&&!this.host.reportValidity()&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(e){this.host.reset()}}function E(t){return typeof t=="string"&&t.split(",").length===39?new Uint8Array(t.split(",").map(e=>parseInt(e,10))):t}function N(t){const e=new FormData(t),i={};return e.forEach((r,o)=>{if(Reflect.has(i,o)){const n=i[o];Array.isArray(n)?n.push(E(r)):i[o]=[i[o],E(r)]}else i[o]=E(r)}),i}class mt extends Y{constructor(){super(...arguments),this.initialized=!1}update(e,i){this.initialized||(this.initialized=!0,e.element.addEventListener("update-form",o=>{this.listener&&e.element.removeEventListener("submit",this.listener),this.listener=n=>{n.preventDefault();const u=N(e.element);i[0](u)},e.element.addEventListener("submit",this.listener)})),setTimeout(()=>{this.listener&&e.element.removeEventListener("submit",this.listener),this.listener=r=>{r.preventDefault();const o=N(e.element);i[0](o)},e.element.addEventListener("submit",this.listener)},100)}render(e){return""}}const ft=W(mt);var vt=k`
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
`,Z=class extends D{constructor(){super(...arguments),this.hasSlotController=new O(this,"footer","header","image")}render(){return d`
      <div
        part="base"
        class=${y({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Z.styles=[P,vt];Z.define("sl-card");ut.define("sl-spinner");var bt=k`
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
`,h=class v extends D{constructor(){super(...arguments),this.hasSlotController=new O(this,"icon","suffix"),this.localize=new G(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,i="100%",r="0";this.countdownAnimation=e.animate([{width:i},{width:r}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await R(this.base),this.base.hidden=!1;const{keyframes:e,options:i}=H(this,"alert.show",{dir:this.localize.dir()});await q(this.base,e,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await R(this.base);const{keyframes:e,options:i}=H(this,"alert.hide",{dir:this.localize.dir()});await q(this.base,e,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,U(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,U(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),v.toastStack.parentElement===null&&document.body.append(v.toastStack),v.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{v.toastStack.removeChild(this),e(),v.toastStack.querySelector("sl-alert")===null&&v.toastStack.remove()},{once:!0})})}render(){return d`
      <div
        part="base"
        class=${y({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?d`
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

        ${this.countdown?d`
              <div
                class=${y({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};h.styles=[P,bt];h.dependencies={"sl-icon-button":pt};s([w('[part~="base"]')],h.prototype,"base",2);s([w(".alert__countdown-elapsed")],h.prototype,"countdownElement",2);s([a({type:Boolean,reflect:!0})],h.prototype,"open",2);s([a({type:Boolean,reflect:!0})],h.prototype,"closable",2);s([a({reflect:!0})],h.prototype,"variant",2);s([a({type:Number})],h.prototype,"duration",2);s([a({type:String,reflect:!0})],h.prototype,"countdown",2);s([z()],h.prototype,"remainingTime",2);s([x("open",{waitUntilFirstUpdate:!0})],h.prototype,"handleOpenChange",1);s([x("duration")],h.prototype,"handleDurationChange",1);var gt=h;X("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});X("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});gt.define("sl-alert");var _t=k`
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
`,yt=(t="value")=>(e,i)=>{const r=e.constructor,o=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(n,u,b){var B;const C=r.getPropertyOptions(t),et=typeof C.attribute=="string"?C.attribute:t;if(n===et){const $=C.converter||j,L=(typeof $=="function"?$:(B=$==null?void 0:$.fromAttribute)!=null?B:j.fromAttribute)(b,C.type);this[t]!==L&&(this[i]=L)}o.call(this,n,u,b)}},wt=k`
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
 */const xt=W(class extends Y{constructor(t){if(super(t),t.type!==g.PROPERTY&&t.type!==g.ATTRIBUTE&&t.type!==g.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!rt(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===S||e===dt)return e;const i=t.element,r=t.name;if(t.type===g.PROPERTY){if(e===i[r])return S}else if(t.type===g.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(r))return S}else if(t.type===g.ATTRIBUTE&&i.getAttribute(r)===e+"")return S;return it(t),e}});var l=class extends D{constructor(){super(...arguments),this.formControlController=new ct(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new O(this,"help-text","label"),this.localize=new G(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,r="preserve"){const o=e??this.input.selectionStart,n=i??this.input.selectionEnd;this.input.setRangeText(t,o,n,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=this.label?!0:!!t,r=this.helpText?!0:!!e,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return d`
      <div
        part="form-control"
        class=${y({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
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
            class=${y({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${c(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${c(this.placeholder)}
              minlength=${c(this.minlength)}
              maxlength=${c(this.maxlength)}
              min=${c(this.min)}
              max=${c(this.max)}
              step=${c(this.step)}
              .value=${xt(this.value)}
              autocapitalize=${c(this.autocapitalize)}
              autocomplete=${c(this.autocomplete)}
              autocorrect=${c(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${c(this.pattern)}
              enterkeyhint=${c(this.enterkeyhint)}
              inputmode=${c(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?d`
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
            ${this.passwordToggle&&!this.disabled?d`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?d`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:d`
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
    `}};l.styles=[P,wt,_t];l.dependencies={"sl-icon":ot};s([w(".input__control")],l.prototype,"input",2);s([z()],l.prototype,"hasFocus",2);s([a()],l.prototype,"title",2);s([a({reflect:!0})],l.prototype,"type",2);s([a()],l.prototype,"name",2);s([a()],l.prototype,"value",2);s([yt()],l.prototype,"defaultValue",2);s([a({reflect:!0})],l.prototype,"size",2);s([a({type:Boolean,reflect:!0})],l.prototype,"filled",2);s([a({type:Boolean,reflect:!0})],l.prototype,"pill",2);s([a()],l.prototype,"label",2);s([a({attribute:"help-text"})],l.prototype,"helpText",2);s([a({type:Boolean})],l.prototype,"clearable",2);s([a({type:Boolean,reflect:!0})],l.prototype,"disabled",2);s([a()],l.prototype,"placeholder",2);s([a({type:Boolean,reflect:!0})],l.prototype,"readonly",2);s([a({attribute:"password-toggle",type:Boolean})],l.prototype,"passwordToggle",2);s([a({attribute:"password-visible",type:Boolean})],l.prototype,"passwordVisible",2);s([a({attribute:"no-spin-buttons",type:Boolean})],l.prototype,"noSpinButtons",2);s([a({reflect:!0})],l.prototype,"form",2);s([a({type:Boolean,reflect:!0})],l.prototype,"required",2);s([a()],l.prototype,"pattern",2);s([a({type:Number})],l.prototype,"minlength",2);s([a({type:Number})],l.prototype,"maxlength",2);s([a()],l.prototype,"min",2);s([a()],l.prototype,"max",2);s([a()],l.prototype,"step",2);s([a()],l.prototype,"autocapitalize",2);s([a()],l.prototype,"autocorrect",2);s([a()],l.prototype,"autocomplete",2);s([a({type:Boolean})],l.prototype,"autofocus",2);s([a()],l.prototype,"enterkeyhint",2);s([a({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],l.prototype,"spellcheck",2);s([a()],l.prototype,"inputmode",2);s([x("disabled",{waitUntilFirstUpdate:!0})],l.prototype,"handleDisabledChange",1);s([x("step",{waitUntilFirstUpdate:!0})],l.prototype,"handleStepChange",1);s([x("value",{waitUntilFirstUpdate:!0})],l.prototype,"handleValueChange",1);l.define("sl-input");function kt(t,e,i){let r=t.width,o=t.height;r>o?r>e&&(o=o*(e/r),r=e):o>i&&(r=r*(i/o),o=i);const n=document.createElement("canvas");return n.width=r,n.height=o,n.getContext("2d").drawImage(t,0,0,r,o),n.toDataURL()}var m=function(t,e,i,r){var o=arguments.length,n=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,r);else for(var b=t.length-1;b>=0;b--)(u=t[b])&&(n=(o<3?u(n):o>3?u(e,i,n):u(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let p=class extends V{constructor(){super(...arguments),this.name="avatar",this.required=!1,this.shape="circle",this.disabled=!1,this.avatarWidth=300,this.avatarHeight=300,this.label=f("Avatar"),this._controller=new ht(this)}reportValidity(){const e=this.required!==!1&&!this.value;return e&&(this._errorInput.setCustomValidity("Avatar is required"),this._errorInput.reportValidity()),!e}reset(){this.value=this.defaultValue}onAvatarUploaded(){if(this._avatarFilePicker.files&&this._avatarFilePicker.files[0]){const e=new FileReader;e.onload=i=>{var o;const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{console.log(this.avatarHeight),this.value=kt(r,this.avatarWidth,this.avatarHeight),this._avatarFilePicker.value="",this.dispatchEvent(new CustomEvent("avatar-selected",{composed:!0,bubbles:!0,detail:{avatar:this.value}}))},r.src=(o=i.target)==null?void 0:o.result},e.readAsDataURL(this._avatarFilePicker.files[0])}}renderAvatar(){return this.value?d`
				<div
					class="column"
					style="align-items: center; height: 50px"
					@click=${()=>{this.value=void 0}}
				>
					<sl-tooltip .content=${f("Clear")}>
						<sl-avatar
							image="${this.value}"
							alt="Avatar"
							.shape=${this.shape}
							initials=""
						></sl-avatar
					></sl-tooltip>
				</div>
			`:d` <div class="column" style="align-items: center;">
				<sl-button
					.disabled=${this.disabled}
					variant="default"
					size="large"
					circle
					@click=${()=>this._avatarFilePicker.click()}
				>
					<sl-icon
						src="${at(st)}"
						.label=${f("Add avatar image")}
					></sl-icon>
				</sl-button>
			</div>`}render(){return d`<input
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
				${this.label!==""?d`
							<span
								style="font-size: var(--sl-input-label-font-size-medium); margin-bottom: 4px"
								>${this.label}${this.required!==!1?" *":""}</span
							>
						`:d``}
				${this.renderAvatar()}
			</div>`}};p.styles=I;m([a({attribute:"name"})],p.prototype,"name",void 0);m([a()],p.prototype,"required",void 0);m([a()],p.prototype,"shape",void 0);m([a()],p.prototype,"value",void 0);m([a()],p.prototype,"disabled",void 0);m([a()],p.prototype,"defaultValue",void 0);m([a({attribute:"avatar-width"})],p.prototype,"avatarWidth",void 0);m([a({attribute:"avatar-height"})],p.prototype,"avatarHeight",void 0);m([a()],p.prototype,"label",void 0);m([w("#avatar-file-picker")],p.prototype,"_avatarFilePicker",void 0);m([w("#error-input")],p.prototype,"_errorInput",void 0);p=m([F("select-avatar")],p);var Ct=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,tt=(t,e,i,r)=>{for(var o=r>1?void 0:r?$t(e,i):e,n=t.length-1,u;n>=0;n--)(u=t[n])&&(o=(r?u(e,i,o):u(o))||o);return r&&o&&Ct(e,i,o),o};let T=class extends J(V){async setProfile(t){try{await this.store.client.setMyProfile({...t,fields:{}}),this.dispatchEvent(new CustomEvent("profile-created",{detail:{profile:t},bubbles:!0,composed:!0}))}catch(e){console.error(e),lt(f("Error creating the profile."))}}renderField(t){return d`
			<sl-input
				name="${t.name}"
				.required=${t.required}
				.label=${t.label}
				style="margin-bottom: 16px;"
			></sl-input>
		`}renderForm(){return d`
			<form
				id="profile-form"
				class="column"
				${ft(t=>this.setProfile(t))}
			>
				<div
					class="row"
					style="justify-content: center; align-self: start; margin-bottom: 16px"
				>
					<select-avatar
						avatar-width="48"
						avatar-height="48"
						name="avatar"
						required
					></select-avatar>
					<sl-input
						name="name"
						.label=${f("Name")}
						required
						minLength="${this.store.config.minNicknameLength}"
						.helpText=${f(nt`Min. ${this.store.config.minNicknameLength} characters`)}
						style="margin-left: 16px;"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(t=>this.renderField(t))}

				<sl-button style="flex: 1;" variant="primary" type="submit"
					>${f("Create Profile")}
				</sl-button>
			</form>
		`}render(){return d`
			<sl-card>
				<div class="column">
					<span
						class="title"
						style="margin-bottom: 16px; align-self: flex-start"
						>${f("Create Profile")}</span
					>
					${this.renderForm()}
				</div>
			</sl-card>
		`}};T.styles=I;tt([K({context:M,subscribe:!0}),a()],T.prototype,"store",2);T=tt([Q(),F("create-profile")],T);var St=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,A=(t,e,i,r)=>{for(var o=r>1?void 0:r?Tt(e,i):e,n=t.length-1,u;n>=0;n--)(u=t[n])&&(o=(r?u(e,i,o):u(o))||o);return r&&o&&St(e,i,o),o};let _=class extends J(V){constructor(){super(...arguments),this.view="question",this.linkingDevices=!1}renderContent(){return d` <create-profile></create-profile> `}renderPrompt(t){return t?d`<slot></slot>`:d`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const t=this.store.myProfile.get();switch(t.status){case"pending":return d`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return d`<display-error
					.headline=${f("Error fetching your profile.")}
					.error=${t.error}
				></display-error>`;case"completed":return this.renderPrompt(t.value!==void 0)}}};_.styles=[I,k`
			:host {
				display: flex;
				flex: 1;
			}
		`];A([K({context:M,subscribe:!0}),a()],_.prototype,"store",2);A([z()],_.prototype,"view",2);A([z()],_.prototype,"linkingDevices",2);_=A([Q(),F("profile-prompt")],_);export{_ as ProfilePrompt};
