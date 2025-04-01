import{l as wt}from"./context.C_Dm2Rqq.js";import{e as K,d as bt,i as F,x as k,u as At,T as st,E as Ht,r as Z,g as jt,H as qt}from"./friends-client.CbaFSixV.js";import{y as xt,u as Ct,c as tt,_ as h,i as U,r as W,d as et,s as mt,b as rt,L as vt,p as zt,k as dt,o as Et,q as St,e as Q,B as Kt,h as Lt,x as j,v as Qt,C as Gt,l as $t,S as gt,n as Y,m as E,D as Wt,w as ut,E as Jt,z as Yt,F as Xt,G as Tt}from"./display-error.DTnmhqNV.js";import{_ as V}from"./tslib.es6.kHcLnhpD.js";import{a as f,s as it,c as nt,t as ot,f as Rt}from"./context.Cxm2Cq9H.js";import{S as Bt,H as kt,F as Zt,o as L,a as te}from"./chunk.HLJ2JR6P.Bp_d8Ygh.js";import"./commonjsHelpers.BosuxZz1.js";const ee=60*1e3;class re{constructor(t){this.host=t,this.host.addController(this),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this)}closestElement(t){function o(s){if(!s||s===document||s===window)return null;s.assignedSlot&&(s=s.assignedSlot);const u=s.closest(t);return u||o(s.getRootNode().host)}return o(this.host)}hostConnected(){this.form=this.closestElement("form"),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),this.form.dispatchEvent(new CustomEvent("update-form")))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),this.form=void 0)}handleFormData(t){const o=this.host.disabled,s=this.host.name,u=this.host.value;!o&&s&&u!==void 0&&(Array.isArray(u)?u.map(v=>t.formData.append(s,v)):t.formData.append(s,u))}handleFormSubmit(t){const o=this.form,s=this.host.disabled,u=this.host.reportValidity;o&&!o.noValidate&&!s&&u&&!this.host.reportValidity()&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(t){this.host.reset()}}function yt(e){return typeof e=="string"&&e.split(",").length===39?new Uint8Array(e.split(",").map(t=>parseInt(t,10))):e}function Pt(e){const t=new FormData(e),o={};return t.forEach((s,u)=>{if(Reflect.has(o,u)){const v=o[u];Array.isArray(v)?v.push(yt(s)):o[u]=[o[u],yt(s)]}else o[u]=yt(s)}),o}class ie extends Ct{constructor(){super(...arguments),this.initialized=!1}update(t,o){this.initialized||(this.initialized=!0,t.element.addEventListener("update-form",u=>{this.listener&&t.element.removeEventListener("submit",this.listener),this.listener=v=>{v.preventDefault();const w=Pt(t.element);o[0](w)},t.element.addEventListener("submit",this.listener)})),setTimeout(()=>{this.listener&&t.element.removeEventListener("submit",this.listener),this.listener=s=>{s.preventDefault();const u=Pt(t.element);o[0](u)},t.element.addEventListener("submit",this.listener)},100)}render(t){return""}}const oe=xt(ie);function se(e){return{attribute:e,type:Object,hasChanged:(t,o)=>(t==null?void 0:t.toString())!==(o==null?void 0:o.toString()),converter:{fromAttribute:t=>t&&t.length>0&&bt(t),toAttribute:t=>t&&K(t)},reflect:!0}}var ne=F`
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
`,R=class q extends rt{constructor(){super(...arguments),this.hasSlotController=new kt(this,"icon","suffix"),this.localize=new vt(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var t;(t=this.countdownAnimation)==null||t.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var t;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(t=this.countdownAnimation)==null||t.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:t}=this,o="100%",s="0";this.countdownAnimation=t.animate([{width:o},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await zt(this.base),this.base.hidden=!1;const{keyframes:t,options:o}=dt(this,"alert.show",{dir:this.localize.dir()});await Et(this.base,t,o),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await zt(this.base);const{keyframes:t,options:o}=dt(this,"alert.hide",{dir:this.localize.dir()});await Et(this.base,t,o),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,St(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,St(this,"sl-after-hide")}async toast(){return new Promise(t=>{this.handleCountdownChange(),q.toastStack.parentElement===null&&document.body.append(q.toastStack),q.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{q.toastStack.removeChild(this),t(),q.toastStack.querySelector("sl-alert")===null&&q.toastStack.remove()},{once:!0})})}render(){return k`
      <div
        part="base"
        class=${Q({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?k`
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

        ${this.countdown?k`
              <div
                class=${Q({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};R.styles=[tt,ne];R.dependencies={"sl-icon-button":Bt};h([U('[part~="base"]')],R.prototype,"base",2);h([U(".alert__countdown-elapsed")],R.prototype,"countdownElement",2);h([f({type:Boolean,reflect:!0})],R.prototype,"open",2);h([f({type:Boolean,reflect:!0})],R.prototype,"closable",2);h([f({reflect:!0})],R.prototype,"variant",2);h([f({type:Number})],R.prototype,"duration",2);h([f({type:String,reflect:!0})],R.prototype,"countdown",2);h([W()],R.prototype,"remainingTime",2);h([et("open",{waitUntilFirstUpdate:!0})],R.prototype,"handleOpenChange",1);h([et("duration")],R.prototype,"handleDurationChange",1);var ae=R;mt("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});mt("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ae.define("sl-alert");function le(){return Math.floor(Math.random()*10)}function Dt(e){const t=[];for(let o=0;o<e;o++)t.push(le());return t}var ce=F`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
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
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,D=class extends rt{constructor(){super(...arguments),this.localize=new vt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),o=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let u=this.from,v="";o?[u,v]=this.from.trim().split("."):s&&([u,v]=this.from.trim().replace(/\]$/,"").split("["));const w="getElementById"in t?t.getElementById(u):null;w?s?e=w.getAttribute(v)||"":o?e=w[v]||"":e=w.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),o=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),u=e==="success"?this.successIcon:this.errorIcon,v=dt(this,"copy.in",{dir:"ltr"}),w=dt(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?o:s,await this.copyIcon.animate(w.keyframes,w.options).finished,this.copyIcon.hidden=!0,this.status=e,u.hidden=!1,await u.animate(v.keyframes,v.options).finished,setTimeout(async()=>{await u.animate(w.keyframes,w.options).finished,u.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(v.keyframes,v.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return k`
      <sl-tooltip
        class=${Q({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};D.styles=[tt,ce];D.dependencies={"sl-icon":Lt,"sl-tooltip":Kt};h([U('slot[name="copy-icon"]')],D.prototype,"copyIcon",2);h([U('slot[name="success-icon"]')],D.prototype,"successIcon",2);h([U('slot[name="error-icon"]')],D.prototype,"errorIcon",2);h([U("sl-tooltip")],D.prototype,"tooltip",2);h([W()],D.prototype,"isCopying",2);h([W()],D.prototype,"status",2);h([f()],D.prototype,"value",2);h([f()],D.prototype,"from",2);h([f({type:Boolean,reflect:!0})],D.prototype,"disabled",2);h([f({attribute:"copy-label"})],D.prototype,"copyLabel",2);h([f({attribute:"success-label"})],D.prototype,"successLabel",2);h([f({attribute:"error-label"})],D.prototype,"errorLabel",2);h([f({attribute:"feedback-duration",type:Number})],D.prototype,"feedbackDuration",2);h([f({attribute:"tooltip-placement"})],D.prototype,"tooltipPlacement",2);h([f({type:Boolean})],D.prototype,"hoist",2);mt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});mt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});D.define("sl-copy-button");var ue=F`
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
`,de=(e="value")=>(t,o)=>{const s=t.constructor,u=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(v,w,A){var a;const n=s.getPropertyOptions(e),g=typeof n.attribute=="string"?n.attribute:e;if(v===g){const r=n.converter||At,d=(typeof r=="function"?r:(a=r==null?void 0:r.fromAttribute)!=null?a:At.fromAttribute)(A,n.type);this[e]!==d&&(this[o]=d)}u.call(this,v,w,A)}},pe=F`
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
 */const he=xt(class extends Ct{constructor(e){if(super(e),e.type!==j.PROPERTY&&e.type!==j.ATTRIBUTE&&e.type!==j.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===st||t===Ht)return t;const o=e.element,s=e.name;if(e.type===j.PROPERTY){if(t===o[s])return st}else if(e.type===j.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(s))return st}else if(e.type===j.ATTRIBUTE&&o.getAttribute(s)===t+"")return st;return Gt(e),t}});var C=class extends rt{constructor(){super(...arguments),this.formControlController=new Zt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new kt(this,"help-text","label"),this.localize=new vt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,s="preserve"){const u=t??this.input.selectionStart,v=o??this.input.selectionEnd;this.input.setRangeText(e,u,v,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,s=this.helpText?!0:!!t,v=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return k`
      <div
        part="form-control"
        class=${Q({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Q({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${L(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${he(this.value)}
              autocapitalize=${L(this.autocapitalize)}
              autocomplete=${L(this.autocomplete)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${L(this.pattern)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${v?k`
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
            ${this.passwordToggle&&!this.disabled?k`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?k`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:k`
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};C.styles=[tt,pe,ue];C.dependencies={"sl-icon":Lt};h([U(".input__control")],C.prototype,"input",2);h([W()],C.prototype,"hasFocus",2);h([f()],C.prototype,"title",2);h([f({reflect:!0})],C.prototype,"type",2);h([f()],C.prototype,"name",2);h([f()],C.prototype,"value",2);h([de()],C.prototype,"defaultValue",2);h([f({reflect:!0})],C.prototype,"size",2);h([f({type:Boolean,reflect:!0})],C.prototype,"filled",2);h([f({type:Boolean,reflect:!0})],C.prototype,"pill",2);h([f()],C.prototype,"label",2);h([f({attribute:"help-text"})],C.prototype,"helpText",2);h([f({type:Boolean})],C.prototype,"clearable",2);h([f({type:Boolean,reflect:!0})],C.prototype,"disabled",2);h([f()],C.prototype,"placeholder",2);h([f({type:Boolean,reflect:!0})],C.prototype,"readonly",2);h([f({attribute:"password-toggle",type:Boolean})],C.prototype,"passwordToggle",2);h([f({attribute:"password-visible",type:Boolean})],C.prototype,"passwordVisible",2);h([f({attribute:"no-spin-buttons",type:Boolean})],C.prototype,"noSpinButtons",2);h([f({reflect:!0})],C.prototype,"form",2);h([f({type:Boolean,reflect:!0})],C.prototype,"required",2);h([f()],C.prototype,"pattern",2);h([f({type:Number})],C.prototype,"minlength",2);h([f({type:Number})],C.prototype,"maxlength",2);h([f()],C.prototype,"min",2);h([f()],C.prototype,"max",2);h([f()],C.prototype,"step",2);h([f()],C.prototype,"autocapitalize",2);h([f()],C.prototype,"autocorrect",2);h([f()],C.prototype,"autocomplete",2);h([f({type:Boolean})],C.prototype,"autofocus",2);h([f()],C.prototype,"enterkeyhint",2);h([f({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],C.prototype,"spellcheck",2);h([f()],C.prototype,"inputmode",2);h([et("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);h([et("step",{waitUntilFirstUpdate:!0})],C.prototype,"handleStepChange",1);h([et("value",{waitUntilFirstUpdate:!0})],C.prototype,"handleValueChange",1);C.define("sl-input");var fe=F`
  :host {
    display: inline-block;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft="important",me=" !"+Ft,ve=xt(class extends Ct{constructor(e){var t;if(super(e),e.type!==j.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,o)=>{const s=e[o];return s==null?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(e,[t]){const{style:o}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?o.removeProperty(s):o[s]=null);for(const s in t){const u=t[s];if(u!=null){this.ft.add(s);const v=typeof u=="string"&&u.endsWith(me);s.includes("-")||v?o.setProperty(s,v?u.slice(0,-11):u,v?Ft:""):o[s]=u}}return st}});let Ot=null;class Mt{}Mt.render=function(e,t){Ot(e,t)};self.QrCreator=Mt;(function(e){function t(A,a,n,g){var r={},i=e(n,a);i.u(A),i.J(),g=g||0;var d=i.h(),c=i.h()+2*g;return r.text=A,r.level=a,r.version=n,r.O=c,r.a=function(m,z){return m-=g,z-=g,0>m||m>=d||0>z||z>=d?!1:i.a(m,z)},r}function o(A,a,n,g,r,i,d,c,m,z){function P(y,b,l,p,x,S,T){y?(A.lineTo(b+S,l+T),A.arcTo(b,l,p,x,i)):A.lineTo(b,l)}d?A.moveTo(a+i,n):A.moveTo(a,n),P(c,g,n,g,r,-i,0),P(m,g,r,a,r,0,-i),P(z,a,r,a,n,i,0),P(d,a,n,g,n,0,i)}function s(A,a,n,g,r,i,d,c,m,z){function P(y,b,l,p){A.moveTo(y+l,b),A.lineTo(y,b),A.lineTo(y,b+p),A.arcTo(y,b,y+l,b,i)}d&&P(a,n,i,i),c&&P(g,n,-i,i),m&&P(g,r,-i,-i),z&&P(a,r,i,-i)}function u(A,a){var n=a.fill;if(typeof n=="string")A.fillStyle=n;else{var g=n.type,r=n.colorStops;if(n=n.position.map(d=>Math.round(d*a.size)),g==="linear-gradient")var i=A.createLinearGradient.apply(A,n);else if(g==="radial-gradient")i=A.createRadialGradient.apply(A,n);else throw Error("Unsupported fill");r.forEach(([d,c])=>{i.addColorStop(d,c)}),A.fillStyle=i}}function v(A,a){t:{var n=a.text,g=a.v,r=a.N,i=a.K,d=a.P;for(r=Math.max(1,r||1),i=Math.min(40,i||40);r<=i;r+=1)try{var c=t(n,g,r,d);break t}catch{}c=void 0}if(!c)return null;for(n=A.getContext("2d"),a.background&&(n.fillStyle=a.background,n.fillRect(a.left,a.top,a.size,a.size)),g=c.O,i=a.size/g,n.beginPath(),d=0;d<g;d+=1)for(r=0;r<g;r+=1){var m=n,z=a.left+r*i,P=a.top+d*i,y=d,b=r,l=c.a,p=z+i,x=P+i,S=y-1,T=y+1,$=b-1,_=b+1,M=Math.floor(Math.min(.5,Math.max(0,a.R))*i),N=l(y,b),H=l(S,$),lt=l(S,b);S=l(S,_);var ct=l(y,_);_=l(T,_),b=l(T,b),T=l(T,$),y=l(y,$),z=Math.round(z),P=Math.round(P),p=Math.round(p),x=Math.round(x),N?o(m,z,P,p,x,M,!lt&&!y,!lt&&!ct,!b&&!ct,!b&&!y):s(m,z,P,p,x,M,lt&&y&&H,lt&&ct&&S,b&&ct&&_,b&&y&&T)}return u(n,a),n.fill(),A}var w={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Ot=function(A,a){var n={};Object.assign(n,w,A),n.N=n.minVersion,n.K=n.maxVersion,n.v=n.ecLevel,n.left=n.left,n.top=n.top,n.size=n.size,n.fill=n.fill,n.background=n.background,n.text=n.text,n.R=n.radius,n.P=n.quiet,a instanceof HTMLCanvasElement?((a.width!==n.size||a.height!==n.size)&&(a.width=n.size,a.height=n.size),a.getContext("2d").clearRect(0,0,a.width,a.height),v(a,n)):(A=document.createElement("canvas"),A.width=n.size,A.height=n.size,n=v(A,n),a.appendChild(n))}})(function(){function e(a){var n=o.s(a);return{S:function(){return 4},b:function(){return n.length},write:function(g){for(var r=0;r<n.length;r+=1)g.put(n[r],8)}}}function t(){var a=[],n=0,g={B:function(){return a},c:function(r){return(a[Math.floor(r/8)]>>>7-r%8&1)==1},put:function(r,i){for(var d=0;d<i;d+=1)g.m((r>>>i-d-1&1)==1)},f:function(){return n},m:function(r){var i=Math.floor(n/8);a.length<=i&&a.push(0),r&&(a[i]|=128>>>n%8),n+=1}};return g}function o(a,n){function g(y,b){for(var l=-1;7>=l;l+=1)if(!(-1>=y+l||c<=y+l))for(var p=-1;7>=p;p+=1)-1>=b+p||c<=b+p||(d[y+l][b+p]=0<=l&&6>=l&&(p==0||p==6)||0<=p&&6>=p&&(l==0||l==6)||2<=l&&4>=l&&2<=p&&4>=p)}function r(y,b){for(var l=c=4*a+17,p=Array(l),x=0;x<l;x+=1){p[x]=Array(l);for(var S=0;S<l;S+=1)p[x][S]=null}for(d=p,g(0,0),g(c-7,0),g(0,c-7),l=v.G(a),p=0;p<l.length;p+=1)for(x=0;x<l.length;x+=1){S=l[p];var T=l[x];if(d[S][T]==null)for(var $=-2;2>=$;$+=1)for(var _=-2;2>=_;_+=1)d[S+$][T+_]=$==-2||$==2||_==-2||_==2||$==0&&_==0}for(l=8;l<c-8;l+=1)d[l][6]==null&&(d[l][6]=l%2==0);for(l=8;l<c-8;l+=1)d[6][l]==null&&(d[6][l]=l%2==0);for(l=v.w(i<<3|b),p=0;15>p;p+=1)x=!y&&(l>>p&1)==1,d[6>p?p:8>p?p+1:c-15+p][8]=x,d[8][8>p?c-p-1:9>p?15-p:14-p]=x;if(d[c-8][8]=!y,7<=a){for(l=v.A(a),p=0;18>p;p+=1)x=!y&&(l>>p&1)==1,d[Math.floor(p/3)][p%3+c-8-3]=x;for(p=0;18>p;p+=1)x=!y&&(l>>p&1)==1,d[p%3+c-8-3][Math.floor(p/3)]=x}if(m==null){for(y=A.I(a,i),l=t(),p=0;p<z.length;p+=1)x=z[p],l.put(4,4),l.put(x.b(),v.f(4,a)),x.write(l);for(p=x=0;p<y.length;p+=1)x+=y[p].j;if(l.f()>8*x)throw Error("code length overflow. ("+l.f()+">"+8*x+")");for(l.f()+4<=8*x&&l.put(0,4);l.f()%8!=0;)l.m(!1);for(;!(l.f()>=8*x)&&(l.put(236,8),!(l.f()>=8*x));)l.put(17,8);var M=0;for(x=p=0,S=Array(y.length),T=Array(y.length),$=0;$<y.length;$+=1){var N=y[$].j,H=y[$].o-N;for(p=Math.max(p,N),x=Math.max(x,H),S[$]=Array(N),_=0;_<S[$].length;_+=1)S[$][_]=255&l.B()[_+M];for(M+=N,_=v.C(H),N=s(S[$],_.b()-1).l(_),T[$]=Array(_.b()-1),_=0;_<T[$].length;_+=1)H=_+N.b()-T[$].length,T[$][_]=0<=H?N.c(H):0}for(_=l=0;_<y.length;_+=1)l+=y[_].o;for(l=Array(l),_=M=0;_<p;_+=1)for($=0;$<y.length;$+=1)_<S[$].length&&(l[M]=S[$][_],M+=1);for(_=0;_<x;_+=1)for($=0;$<y.length;$+=1)_<T[$].length&&(l[M]=T[$][_],M+=1);m=l}for(y=m,l=-1,p=c-1,x=7,S=0,b=v.F(b),T=c-1;0<T;T-=2)for(T==6&&--T;;){for($=0;2>$;$+=1)d[p][T-$]==null&&(_=!1,S<y.length&&(_=(y[S]>>>x&1)==1),b(p,T-$)&&(_=!_),d[p][T-$]=_,--x,x==-1&&(S+=1,x=7));if(p+=l,0>p||c<=p){p-=l,l=-l;break}}}var i=u[n],d=null,c=0,m=null,z=[],P={u:function(y){y=e(y),z.push(y),m=null},a:function(y,b){if(0>y||c<=y||0>b||c<=b)throw Error(y+","+b);return d[y][b]},h:function(){return c},J:function(){for(var y=0,b=0,l=0;8>l;l+=1){r(!0,l);var p=v.D(P);(l==0||y>p)&&(y=p,b=l)}r(!1,b)}};return P}function s(a,n){if(typeof a.length>"u")throw Error(a.length+"/"+n);var g=function(){for(var i=0;i<a.length&&a[i]==0;)i+=1;for(var d=Array(a.length-i+n),c=0;c<a.length-i;c+=1)d[c]=a[c+i];return d}(),r={c:function(i){return g[i]},b:function(){return g.length},multiply:function(i){for(var d=Array(r.b()+i.b()-1),c=0;c<r.b();c+=1)for(var m=0;m<i.b();m+=1)d[c+m]^=w.i(w.g(r.c(c))+w.g(i.c(m)));return s(d,0)},l:function(i){if(0>r.b()-i.b())return r;for(var d=w.g(r.c(0))-w.g(i.c(0)),c=Array(r.b()),m=0;m<r.b();m+=1)c[m]=r.c(m);for(m=0;m<i.b();m+=1)c[m]^=w.i(w.g(i.c(m))+d);return s(c,0).l(i)}};return r}o.s=function(a){for(var n=[],g=0;g<a.length;g++){var r=a.charCodeAt(g);128>r?n.push(r):2048>r?n.push(192|r>>6,128|r&63):55296>r||57344<=r?n.push(224|r>>12,128|r>>6&63,128|r&63):(g++,r=65536+((r&1023)<<10|a.charCodeAt(g)&1023),n.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63))}return n};var u={L:1,M:0,Q:3,H:2},v=function(){function a(r){for(var i=0;r!=0;)i+=1,r>>>=1;return i}var n=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],g={w:function(r){for(var i=r<<10;0<=a(i)-a(1335);)i^=1335<<a(i)-a(1335);return(r<<10|i)^21522},A:function(r){for(var i=r<<12;0<=a(i)-a(7973);)i^=7973<<a(i)-a(7973);return r<<12|i},G:function(r){return n[r-1]},F:function(r){switch(r){case 0:return function(i,d){return(i+d)%2==0};case 1:return function(i){return i%2==0};case 2:return function(i,d){return d%3==0};case 3:return function(i,d){return(i+d)%3==0};case 4:return function(i,d){return(Math.floor(i/2)+Math.floor(d/3))%2==0};case 5:return function(i,d){return i*d%2+i*d%3==0};case 6:return function(i,d){return(i*d%2+i*d%3)%2==0};case 7:return function(i,d){return(i*d%3+(i+d)%2)%2==0};default:throw Error("bad maskPattern:"+r)}},C:function(r){for(var i=s([1],0),d=0;d<r;d+=1)i=i.multiply(s([1,w.i(d)],0));return i},f:function(r,i){if(r!=4||1>i||40<i)throw Error("mode: "+r+"; type: "+i);return 10>i?8:16},D:function(r){for(var i=r.h(),d=0,c=0;c<i;c+=1)for(var m=0;m<i;m+=1){for(var z=0,P=r.a(c,m),y=-1;1>=y;y+=1)if(!(0>c+y||i<=c+y))for(var b=-1;1>=b;b+=1)0>m+b||i<=m+b||(y!=0||b!=0)&&P==r.a(c+y,m+b)&&(z+=1);5<z&&(d+=3+z-5)}for(c=0;c<i-1;c+=1)for(m=0;m<i-1;m+=1)z=0,r.a(c,m)&&(z+=1),r.a(c+1,m)&&(z+=1),r.a(c,m+1)&&(z+=1),r.a(c+1,m+1)&&(z+=1),(z==0||z==4)&&(d+=3);for(c=0;c<i;c+=1)for(m=0;m<i-6;m+=1)r.a(c,m)&&!r.a(c,m+1)&&r.a(c,m+2)&&r.a(c,m+3)&&r.a(c,m+4)&&!r.a(c,m+5)&&r.a(c,m+6)&&(d+=40);for(m=0;m<i;m+=1)for(c=0;c<i-6;c+=1)r.a(c,m)&&!r.a(c+1,m)&&r.a(c+2,m)&&r.a(c+3,m)&&r.a(c+4,m)&&!r.a(c+5,m)&&r.a(c+6,m)&&(d+=40);for(m=z=0;m<i;m+=1)for(c=0;c<i;c+=1)r.a(c,m)&&(z+=1);return d+=Math.abs(100*z/i/i-50)/5*10}};return g}(),w=function(){for(var a=Array(256),n=Array(256),g=0;8>g;g+=1)a[g]=1<<g;for(g=8;256>g;g+=1)a[g]=a[g-4]^a[g-5]^a[g-6]^a[g-8];for(g=0;255>g;g+=1)n[a[g]]=g;return{g:function(r){if(1>r)throw Error("glog("+r+")");return n[r]},i:function(r){for(;0>r;)r+=255;for(;256<=r;)r-=255;return a[r]}}}(),A=function(){function a(r,i){switch(i){case u.L:return n[4*(r-1)];case u.M:return n[4*(r-1)+1];case u.Q:return n[4*(r-1)+2];case u.H:return n[4*(r-1)+3]}}var n=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],g={I:function(r,i){var d=a(r,i);if(typeof d>"u")throw Error("bad rs block @ typeNumber:"+r+"/errorCorrectLevel:"+i);r=d.length/3,i=[];for(var c=0;c<r;c+=1)for(var m=d[3*c],z=d[3*c+1],P=d[3*c+2],y=0;y<m;y+=1){var b=P,l={};l.o=z,l.j=b,i.push(l)}return i}};return g}();return o}());const ge=QrCreator;var O=class extends rt{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&ge.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return k`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${ve({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};O.styles=[tt,fe];h([U("canvas")],O.prototype,"canvas",2);h([f()],O.prototype,"value",2);h([f()],O.prototype,"label",2);h([f({type:Number})],O.prototype,"size",2);h([f()],O.prototype,"fill",2);h([f()],O.prototype,"background",2);h([f({type:Number})],O.prototype,"radius",2);h([f({attribute:"error-correction"})],O.prototype,"errorCorrection",2);h([et(["background","errorCorrection","fill","radius","size","value"])],O.prototype,"generate",1);O.define("sl-qr-code");var ye=F`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,J=class extends rt{constructor(){super(...arguments),this.localize=new vt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return k`
      <span
        part="base"
        class=${Q({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?k`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};J.styles=[tt,ye];J.dependencies={"sl-icon-button":Bt};h([f({reflect:!0})],J.prototype,"variant",2);h([f({reflect:!0})],J.prototype,"size",2);h([f({type:Boolean,reflect:!0})],J.prototype,"pill",2);h([f({type:Boolean})],J.prototype,"removable",2);J.define("sl-tag");async function be(e){return Ut(`plugin:${e}|request_permissions`)}async function Ut(e,t={},o){return window.__TAURI_INTERNALS__.invoke(e,t,o)}var _t;(function(e){e.QRCode="QR_CODE",e.UPC_A="UPC_A",e.UPC_E="UPC_E",e.EAN8="EAN_8",e.EAN13="EAN_13",e.Code39="CODE_39",e.Code93="CODE_93",e.Code128="CODE_128",e.Codabar="CODABAR",e.ITF="ITF",e.Aztec="AZTEC",e.DataMatrix="DATA_MATRIX",e.PDF417="PDF_417"})(_t||(_t={}));async function _e(e){return await Ut("plugin:barcode-scanner|scan",{...e})}async function we(){return await be("barcode-scanner").then(e=>e.camera)}function It(){return!!window.__TAURI_INTERNALS__}const xe=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent);async function Ce(){return await we(),(await _e({windowed:!1,formats:[_t.QRCode]})).content}let pt=class extends gt(Z){async attemptDiscoverAgent(t){try{await this.store.client.attemptDiscoverAgent(t),this.dispatchEvent(new CustomEvent("agent-discovered",{bubbles:!0,composed:!0,detail:{agentPubKey:t}}))}catch(o){throw Y(E("Error discovering agent.")),o}}async scanAndDiscover(){const t=bt(await Ce());try{await this.attemptDiscoverAgent(t)}catch(o){console.error(o),await this.scanAndDiscover()}}async firstUpdated(){if(await this.store.client.prepareDiscoverAgent(),this.store.client.onSignal(t=>{t.type==="AgentDiscovered"&&this.dispatchEvent(new CustomEvent("agent-discovered",{bubbles:!0,composed:!0,detail:{agentPubKey:t.agent}}))}),It()&&xe)try{await this.scanAndDiscover()}catch{Y(E("Error discovering agent. Please try again.")),this.dispatchEvent(new CustomEvent("link-devices-cancelled",{bubbles:!0,composed:!0}))}}renderQrcode(){return k`
			<div class="column" style="gap: 8px; flex: 1;">
				<span style="align-self: center"
					>${E("Scan this code with your other device.")}
				</span>
				<sl-qr-code
					value="${K(this.store.client.client.myPubKey)}"
					style="align-self: center"
					size="240"
				>
				</sl-qr-code>
			</div>

			<span style="align-self: center">${E("OR")} </span>
		`}render(){return k`
			<div class="column" style="gap: 32px; flex: 1;">
				${It()?this.renderQrcode():k``}
				<div class="column" style="gap: 16px">
					<div class="column" style="gap: 8px">
						<span>${E("Send this code to your other device...")} </span>
						<div class="row" style="align-items: center; gap: 8px">
							<sl-tag style="flex: 1; "
								>${K(this.store.client.client.myPubKey)}
							</sl-tag>
							<sl-copy-button
								value="${K(this.store.client.client.myPubKey)}"
							></sl-copy-button>
						</div>
					</div>

					<div class="column" style=" gap: 8px">
						<span style="word-break: break-word;"
							>${E("... and enter here the code from your other device.")}
						</span>

						<sl-input
							@sl-input=${async t=>{const o=t.target;if(K(this.store.client.client.myPubKey)===o.value){Y(E("Please enter the code from your other device.")),o.value="";return}const s=bt(o.value);try{await this.attemptDiscoverAgent(s)}catch{o.value=""}}}
						>
						</sl-input>
					</div>
				</div>
			</div>
		`}};pt.styles=[...it,F`
			sl-tag::part(base) {
				font-size: 12px;
				overflow: hidden;
			}
			sl-tag {
				max-width: 85vw;
			}
		`];V([nt({context:wt,subscribe:!0}),f()],pt.prototype,"store",void 0);pt=V([$t(),ot("discover-agent")],pt);let ht=class extends Z{constructor(){super(...arguments),this.passcodeLength=4}firstUpdated(){setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))===null||t===void 0||t.focus()})}get passcode(){const t=Array.from(this.shadowRoot.querySelectorAll("sl-input")),o=Array.from(Array(this.passcodeLength)).map(()=>{});for(let s=0;s<t.length;s++){if(t[s].value==="")return;const u=parseInt(t[s].value,10);if(u>9)return;o[s]=u}return o}clearPasscode(){Array.from(this.shadowRoot.querySelectorAll("sl-input")).forEach(o=>o.value=""),setTimeout(()=>{var o;(o=this.shadowRoot.getElementById("input-0"))===null||o===void 0||o.focus()})}maybeDispatchEvent(){const t=this.passcode;t&&this.dispatchEvent(new CustomEvent("passcode-change",{bubbles:!0,composed:!0,detail:{passcode:t}}))}render(){return k`
			<div class="row">
				${Array.from(Array(this.passcodeLength)).map((t,o)=>k`<sl-input
							id="input-${o}"
							min="0"
							max="9"
							style="width: 4em"
							size="large"
							@keydown=${s=>{if(s.key==="Backspace"){if(s.target.value===""){const v=this.shadowRoot.getElementById(`input-${o-1}`);v&&(v.value=""),setTimeout(()=>{const w=this.shadowRoot.getElementById(`input-${o-1}`);w&&w.focus()})}this.maybeDispatchEvent()}}}
							@sl-input=${s=>{const u=s.target;if(!u.value.match(/^[0-9]$/g)){u.value="";return}const v=this.shadowRoot.getElementById(`input-${o+1}`);v&&v.focus(),this.maybeDispatchEvent()}}
						></sl-input>`)}
			</div>
		`}};ht.styles=[it,F`
			sl-input::part(input) {
				text-align: center;
			}
		`];V([f()],ht.prototype,"passcodeLength",void 0);ht=V([ot("passcode-input")],ht);let X=class extends gt(Z){constructor(){super(...arguments),this.initialized=!1}async firstUpdated(){setTimeout(()=>{var t;(t=this.shadowRoot.getElementById("input-0"))===null||t===void 0||t.focus()}),this.store.client.onSignal(t=>{this.recipient&&(t.type!=="LinkCreated"||t.link_type!=="AgentToLinkedDevices"||K(jt(t.action.hashed.content.target_address,qt.AGENT))===K(this.recipient)&&(this.dispatchEvent(new CustomEvent("device-linked",{bubbles:!0,composed:!0,detail:{agentPubKey:this.recipient}})),Wt(E("Device linked successfully"))))})}disconnectedCallback(){super.disconnectedCallback(),this.interval&&clearInterval(this.interval),this.store.client.clearLinkDevicesCapGrants()}async prepareLinkDevices(t){this.requestorPasscode=Dt(this.store.config.linkDevicePasscodeLength),this.interval=setInterval(async()=>{this.requestorPasscode=Dt(this.store.config.linkDevicePasscodeLength),await this.store.client.clearLinkDevicesCapGrants(),await this.store.client.prepareLinkDevicesRequestor(t,this.requestorPasscode)},ee),await this.store.client.prepareLinkDevicesRequestor(t,this.requestorPasscode)}renderNumber(){return k`<div
			class="column"
			style="gap: 12px; align-items: center; justify-content: center; flex: 1"
		>
			<span>${E("Enter this pass code in your other device:")} </span>
			<span class="passcode">${this.requestorPasscode.join("")}</span>
		</div>`}render(){return this.recipient?this.initialized?this.renderNumber():k`
				<div
					class="column"
					style="gap: 12px; align-items: center; justify-content: center; flex: 1"
				>
					<span>${E("Enter the pass code from your other device:")} </span>
					<passcode-input
						.passcodeLength=${this.store.config.linkDevicePasscodeLength}
						@passcode-change=${async t=>{try{await this.store.client.requestLinkDevices(this.recipient,t.detail.passcode),this.initialized=!0}catch(o){console.error(o),Y(E("Error linking devices. Please try again")),this.recipient=void 0}}}
					>
					</passcode-input>
				</div>
			`:k`
				<discover-agent
					@agent-discovered=${async t=>{this.recipient=t.detail.agentPubKey;try{await this.prepareLinkDevices(this.recipient)}catch(o){Y(E("Error linking devices. Please try again.")),console.error(o),this.recipient=void 0,this.initialized=!1}}}
				>
				</discover-agent>
			`}};X.styles=[it,F`
			.passcode {
				font-family: Monospace, sans-serif;
				letter-spacing: 0.2rem;
				font-size: 3em;
			}
		`];V([nt({context:wt,subscribe:!0}),f()],X.prototype,"store",void 0);V([f(se("recipient"))],X.prototype,"recipient",void 0);V([W()],X.prototype,"initialized",void 0);X=V([ot("link-device-requestor")],X);var $e=F`
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
`,Nt=class extends rt{constructor(){super(...arguments),this.hasSlotController=new kt(this,"footer","header","image")}render(){return k`
      <div
        part="base"
        class=${Q({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Nt.styles=[tt,$e];Nt.define("sl-card");te.define("sl-spinner");function ke(e,t,o){let s=e.width,u=e.height;s>u?s>t&&(u=u*(t/s),s=t):u>o&&(s=s*(o/u),u=o);const v=document.createElement("canvas");return v.width=s,v.height=u,v.getContext("2d").drawImage(e,0,0,s,u),v.toDataURL()}var B=function(e,t,o,s){var u=arguments.length,v=u<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,o):s,w;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")v=Reflect.decorate(e,t,o,s);else for(var A=e.length-1;A>=0;A--)(w=e[A])&&(v=(u<3?w(v):u>3?w(t,o,v):w(t,o))||v);return u>3&&v&&Object.defineProperty(t,o,v),v};let I=class extends Z{constructor(){super(...arguments),this.name="avatar",this.required=!1,this.shape="circle",this.disabled=!1,this.avatarWidth=300,this.avatarHeight=300,this.label=E("Avatar"),this._controller=new re(this)}reportValidity(){const t=this.required!==!1&&!this.value;return t&&(this._errorInput.setCustomValidity("Avatar is required"),this._errorInput.reportValidity()),!t}reset(){this.value=this.defaultValue}onAvatarUploaded(){if(this._avatarFilePicker.files&&this._avatarFilePicker.files[0]){const t=new FileReader;t.onload=o=>{var u;const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{console.log(this.avatarHeight),this.value=ke(s,this.avatarWidth,this.avatarHeight),this._avatarFilePicker.value="",this.dispatchEvent(new CustomEvent("avatar-selected",{composed:!0,bubbles:!0,detail:{avatar:this.value}}))},s.src=(u=o.target)==null?void 0:u.result},t.readAsDataURL(this._avatarFilePicker.files[0])}}renderAvatar(){return this.value?k`
				<div
					class="column"
					style="align-items: center; height: 50px"
					@click=${()=>{this.value=void 0}}
				>
					<sl-tooltip .content=${E("Clear")}>
						<sl-avatar
							image="${this.value}"
							alt="Avatar"
							.shape=${this.shape}
							initials=""
						></sl-avatar
					></sl-tooltip>
				</div>
			`:k` <div class="column" style="align-items: center;">
				<sl-button
					.disabled=${this.disabled}
					variant="default"
					size="large"
					circle
					@click=${()=>this._avatarFilePicker.click()}
				>
					<sl-icon
						src="${ut(Jt)}"
						.label=${E("Add avatar image")}
					></sl-icon>
				</sl-button>
			</div>`}render(){return k`<input
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
				${this.label!==""?k`
							<span
								style="font-size: var(--sl-input-label-font-size-medium); margin-bottom: 4px"
								>${this.label}${this.required!==!1?" *":""}</span
							>
						`:k``}
				${this.renderAvatar()}
			</div>`}};I.styles=it;B([f({attribute:"name"})],I.prototype,"name",void 0);B([f()],I.prototype,"required",void 0);B([f()],I.prototype,"shape",void 0);B([f()],I.prototype,"value",void 0);B([f()],I.prototype,"disabled",void 0);B([f()],I.prototype,"defaultValue",void 0);B([f({attribute:"avatar-width"})],I.prototype,"avatarWidth",void 0);B([f({attribute:"avatar-height"})],I.prototype,"avatarHeight",void 0);B([f()],I.prototype,"label",void 0);B([U("#avatar-file-picker")],I.prototype,"_avatarFilePicker",void 0);B([U("#error-input")],I.prototype,"_errorInput",void 0);I=B([ot("select-avatar")],I);var Ae=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,Vt=(e,t,o,s)=>{for(var u=s>1?void 0:s?ze(t,o):t,v=e.length-1,w;v>=0;v--)(w=e[v])&&(u=(s?w(t,o,u):w(u))||u);return s&&u&&Ae(t,o,u),u};let ft=class extends gt(Z){async setProfile(e){this.shadowRoot.querySelector("sl-button").loading=!0;try{await this.store.client.setMyProfile({...e,fields:{}}),this.dispatchEvent(new CustomEvent("profile-created",{detail:{profile:e},bubbles:!0,composed:!0}))}catch(t){console.error(t),Y(E("Error creating the profile."))}this.shadowRoot.querySelector("sl-button").loading=!1}renderField(e){return k`
			<sl-input
				name="${e.name}"
				.required=${e.required}
				.label=${e.label}
			></sl-input>
		`}render(){return k`
			<form
				id="profile-form"
				class="column"
				${oe(e=>this.setProfile(e))}
				style="gap: 16px"
			>
				<div
					class="row"
					style="justify-content: center; align-self: start; gap: 16px"
				>
					<select-avatar name="avatar" required></select-avatar>
					<sl-input
						name="name"
						.label=${E("Name")}
						required
						minLength="${this.store.config.minNicknameLength}"
						.helpText=${E(Yt`Min. ${this.store.config.minNicknameLength} characters`)}
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(e=>this.renderField(e))}

				<sl-button style="flex: 1;" variant="primary" type="submit"
					>${E("Create Profile")}
				</sl-button>
			</form>
		`}};ft.styles=it;Vt([nt({context:Rt,subscribe:!0}),f()],ft.prototype,"store",2);ft=Vt([$t(),ot("create-profile")],ft);var Ee=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,at=(e,t,o,s)=>{for(var u=s>1?void 0:s?Se(t,o):t,v=e.length-1,w;v>=0;v--)(w=e[v])&&(u=(s?w(t,o,u):w(u))||u);return s&&u&&Ee(t,o,u),u};let G=class extends gt(Z){constructor(){super(...arguments),this.view="question",this.linkingDevices=!1}firstUpdated(){this.store.client.queryPrivateEventEntries()}renderContent(){if(!this.linkedDevicesStore)return k`
				<sl-card>
					<div class="column">
						<span
							class="title"
							style="margin-bottom: 16px; align-self: flex-start"
							>${E("Create Profile")}</span
						>
						<create-profile></create-profile>
					</div>
				</sl-card>
			`;if(this.linkingDevices)return k`
				<div
					class="column"
					style="flex: 1; justify-content: center; align-items: center; gap: 16px"
				>
					<sl-icon
						style="font-size: 64px"
						.src=${ut(Xt)}
					></sl-icon>
					<span>${E("Synchronizing with your other devices...")} </span>
				</div>
			`;const e=this.linkedDevicesStore.myLinkedDevices.get();switch(e.status){case"pending":return k`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return k`<display-error
					.headline=${E("Error fetching your linked devices.")}
					.error=${e.error}
				></display-error>`;case"completed":return this.view==="create-profile"?k`
						<div class="column" style="align-items: start">
							<sl-button
								variant="text"
								@click=${()=>{this.view="question"}}
								style="margin-bottom: 12px"
							>
								<sl-icon
									slot="prefix"
									.src=${ut(Tt)}
								></sl-icon>
								${E("Back")}</sl-button
							>
							<sl-card>
								<div class="column">
									<span
										class="title"
										style="margin-bottom: 16px; align-self: flex-start"
										>${E("Create Profile")}</span
									>
									<create-profile></create-profile>
								</div>
							</sl-card>
						</div>
					`:this.view==="link-device"?k` <div class="column" style="align-items: start">
						<sl-button
							variant="text"
							@click=${()=>{this.view="question"}}
							style="margin-bottom: 12px"
						>
							<sl-icon
								slot="prefix"
								.src=${ut(Tt)}
							></sl-icon>
							${E("Back")}</sl-button
						>
						<sl-card>
							<link-device-requestor
								@device-linked=${async t=>{this.linkingDevices=!0}}
							></link-device-requestor>
						</sl-card>
					</div>`:k`
					<sl-card>
						<div class="column" style="gap: 12px">
							<span class="title"> ${E("Profile Setup")} </span>
							<span>
								${E("Have you already created a profile in this app?")}
							</span>

							<div class="row" style="gap: 12px">
								<sl-button @click=${()=>this.view="create-profile"}
									>${E("No, create a new profile")}
								</sl-button>
								<sl-button
									variant="primary"
									@click=${()=>this.view="link-device"}
									>${E("Yes! Link this device")}
								</sl-button>
							</div>
						</div>
					</sl-card>
				`}}renderPrompt(e){return e?k`<slot></slot>`:k`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const e=this.store.myProfile.get();switch(e.status){case"pending":return k`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return k`<display-error
					.headline=${E("Error fetching your profile.")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderPrompt(e.value!==void 0)}}};G.styles=[it,F`
			:host {
				display: flex;
				flex: 1;
			}
		`];at([nt({context:Rt,subscribe:!0}),f()],G.prototype,"store",2);at([nt({context:wt,subscribe:!0}),f()],G.prototype,"linkedDevicesStore",2);at([W()],G.prototype,"view",2);at([W()],G.prototype,"linkingDevices",2);G=at([$t(),ot("profile-prompt")],G);export{G as ProfilePrompt};
