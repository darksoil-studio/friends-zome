import{n,s as $,t as x,c as E}from"./property.CPxPeo4V.js";import{u as N,v as B,c as D,S as F,b as w,_ as u,e as g,r as S,g as H,s as O,L as W,o as A,k as P,n as T,p as I,m as p,w as M,A as X,q as G,l as j}from"./display-error.B2Ls6KMv.js";import{i as C,x as o,r as k}from"./friends-client.BHFcpvB2.js";import{H as q,S as J}from"./if-defined.xUC1_DA-.js";import{S as L}from"./signal-watcher.D20SjYbO.js";import{f as U}from"./context.BbcyPs4I.js";import{S as K}from"./chunk.HLJ2JR6P.DpRnHKy4.js";import{F as Q}from"./chunk.K7OY4NWI.C2Wfknfq.js";import{n as Y}from"./chunk.M343NXS3.1q8ICQ-V.js";import"./commonjsHelpers.BosuxZz1.js";function _(r){return typeof r=="string"&&r.split(",").length===39?new Uint8Array(r.split(",").map(e=>parseInt(e,10))):r}function z(r){const e=new FormData(r),i={};return e.forEach((a,t)=>{if(Reflect.has(i,t)){const s=i[t];Array.isArray(s)?s.push(_(a)):i[t]=[i[t],_(a)]}else i[t]=_(a)}),i}class Z extends B{constructor(){super(...arguments),this.initialized=!1}update(e,i){this.initialized||(this.initialized=!0,e.element.addEventListener("update-form",t=>{this.listener&&e.element.removeEventListener("submit",this.listener),this.listener=s=>{s.preventDefault();const l=z(e.element);i[0](l)},e.element.addEventListener("submit",this.listener)})),setTimeout(()=>{this.listener&&e.element.removeEventListener("submit",this.listener),this.listener=a=>{a.preventDefault();const t=z(e.element);i[0](t)},e.element.addEventListener("submit",this.listener)},100)}render(e){return""}}const ee=N(Z);var te=C`
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
`,R=class extends F{constructor(){super(...arguments),this.hasSlotController=new q(this,"footer","header","image")}render(){return o`
      <div
        part="base"
        class=${w({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};R.styles=[D,te];R.define("sl-card");J.define("sl-spinner");var re=C`
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
`,c=class m extends F{constructor(){super(...arguments),this.hasSlotController=new q(this,"icon","suffix"),this.localize=new W(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:e}=this,i="100%",a="0";this.countdownAnimation=e.animate([{width:i},{width:a}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await A(this.base),this.base.hidden=!1;const{keyframes:e,options:i}=P(this,"alert.show",{dir:this.localize.dir()});await T(this.base,e,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await A(this.base);const{keyframes:e,options:i}=P(this,"alert.hide",{dir:this.localize.dir()});await T(this.base,e,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,I(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,I(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),m.toastStack.parentElement===null&&document.body.append(m.toastStack),m.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{m.toastStack.removeChild(this),e(),m.toastStack.querySelector("sl-alert")===null&&m.toastStack.remove()},{once:!0})})}render(){return o`
      <div
        part="base"
        class=${w({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?o`
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

        ${this.countdown?o`
              <div
                class=${w({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};c.styles=[D,re];c.dependencies={"sl-icon-button":K};u([g('[part~="base"]')],c.prototype,"base",2);u([g(".alert__countdown-elapsed")],c.prototype,"countdownElement",2);u([n({type:Boolean,reflect:!0})],c.prototype,"open",2);u([n({type:Boolean,reflect:!0})],c.prototype,"closable",2);u([n({reflect:!0})],c.prototype,"variant",2);u([n({type:Number})],c.prototype,"duration",2);u([n({type:String,reflect:!0})],c.prototype,"countdown",2);u([S()],c.prototype,"remainingTime",2);u([H("open",{waitUntilFirstUpdate:!0})],c.prototype,"handleOpenChange",1);u([H("duration")],c.prototype,"handleDurationChange",1);var ae=c;O("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});O("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ae.define("sl-alert");function ie(r,e,i){let a=r.width,t=r.height;a>t?a>e&&(t=t*(e/a),a=e):t>i&&(a=a*(i/t),t=i);const s=document.createElement("canvas");return s.width=a,s.height=t,s.getContext("2d").drawImage(r,0,0,a,t),s.toDataURL()}var h=function(r,e,i,a){var t=arguments.length,s=t<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,i,a);else for(var y=r.length-1;y>=0;y--)(l=r[y])&&(s=(t<3?l(s):t>3?l(e,i,s):l(e,i))||s);return t>3&&s&&Object.defineProperty(e,i,s),s};let d=class extends k{constructor(){super(...arguments),this.name="avatar",this.required=!1,this.shape="circle",this.disabled=!1,this.avatarWidth=300,this.avatarHeight=300,this.label=p("Avatar"),this._controller=new Q(this)}reportValidity(){const e=this.required!==!1&&!this.value;return e&&(this._errorInput.setCustomValidity("Avatar is required"),this._errorInput.reportValidity()),!e}reset(){this.value=this.defaultValue}onAvatarUploaded(){if(this._avatarFilePicker.files&&this._avatarFilePicker.files[0]){const e=new FileReader;e.onload=i=>{var t;const a=new Image;a.crossOrigin="anonymous",a.onload=()=>{console.log(this.avatarHeight),this.value=ie(a,this.avatarWidth,this.avatarHeight),this._avatarFilePicker.value="",this.dispatchEvent(new CustomEvent("avatar-selected",{composed:!0,bubbles:!0,detail:{avatar:this.value}}))},a.src=(t=i.target)==null?void 0:t.result},e.readAsDataURL(this._avatarFilePicker.files[0])}}renderAvatar(){return this.value?o`
				<div
					class="column"
					style="align-items: center; height: 50px"
					@click=${()=>{this.value=void 0}}
				>
					<sl-tooltip .content=${p("Clear")}>
						<sl-avatar
							image="${this.value}"
							alt="Avatar"
							.shape=${this.shape}
							initials=""
						></sl-avatar
					></sl-tooltip>
				</div>
			`:o` <div class="column" style="align-items: center;">
				<sl-button
					.disabled=${this.disabled}
					variant="default"
					size="large"
					circle
					@click=${()=>this._avatarFilePicker.click()}
				>
					<sl-icon
						src="${M(X)}"
						.label=${p("Add avatar image")}
					></sl-icon>
				</sl-button>
			</div>`}render(){return o`<input
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
				${this.label!==""?o`
							<span
								style="font-size: var(--sl-input-label-font-size-medium); margin-bottom: 4px"
								>${this.label}${this.required!==!1?" *":""}</span
							>
						`:o``}
				${this.renderAvatar()}
			</div>`}};d.styles=$;h([n({attribute:"name"})],d.prototype,"name",void 0);h([n()],d.prototype,"required",void 0);h([n()],d.prototype,"shape",void 0);h([n()],d.prototype,"value",void 0);h([n()],d.prototype,"disabled",void 0);h([n()],d.prototype,"defaultValue",void 0);h([n({attribute:"avatar-width"})],d.prototype,"avatarWidth",void 0);h([n({attribute:"avatar-height"})],d.prototype,"avatarHeight",void 0);h([n()],d.prototype,"label",void 0);h([g("#avatar-file-picker")],d.prototype,"_avatarFilePicker",void 0);h([g("#error-input")],d.prototype,"_errorInput",void 0);d=h([x("select-avatar")],d);var se=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,V=(r,e,i,a)=>{for(var t=a>1?void 0:a?oe(e,i):e,s=r.length-1,l;s>=0;s--)(l=r[s])&&(t=(a?l(e,i,t):l(t))||t);return a&&t&&se(e,i,t),t};let f=class extends L(k){async setProfile(r){try{await this.store.client.setMyProfile({...r,fields:{}}),this.dispatchEvent(new CustomEvent("profile-created",{detail:{profile:r},bubbles:!0,composed:!0}))}catch(e){console.error(e),Y(p("Error creating the profile."))}}renderField(r){return o`
			<sl-input
				name="${r.name}"
				.required=${r.required}
				.label=${r.label}
				style="margin-bottom: 16px;"
			></sl-input>
		`}renderForm(){return o`
			<form
				id="profile-form"
				class="column"
				${ee(r=>this.setProfile(r))}
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
						.label=${p("Name")}
						required
						minLength="${this.store.config.minNicknameLength}"
						.helpText=${p(G`Min. ${this.store.config.minNicknameLength} characters`)}
						style="margin-left: 16px;"
					></sl-input>
				</div>

				${this.store.config.additionalFields.map(r=>this.renderField(r))}

				<sl-button style="flex: 1;" variant="primary" type="submit"
					>${p("Create Profile")}
				</sl-button>
			</form>
		`}render(){return o`
			<sl-card>
				<div class="column">
					<span
						class="title"
						style="margin-bottom: 16px; align-self: flex-start"
						>${p("Create Profile")}</span
					>
					${this.renderForm()}
				</div>
			</sl-card>
		`}};f.styles=$;V([E({context:U,subscribe:!0}),n()],f.prototype,"store",2);f=V([j(),x("create-profile")],f);var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,b=(r,e,i,a)=>{for(var t=a>1?void 0:a?le(e,i):e,s=r.length-1,l;s>=0;s--)(l=r[s])&&(t=(a?l(e,i,t):l(t))||t);return a&&t&&ne(e,i,t),t};let v=class extends L(k){constructor(){super(...arguments),this.view="question",this.linkingDevices=!1}renderContent(){return o` <create-profile></create-profile> `}renderPrompt(r){return r?o`<slot></slot>`:o`
			<div
				class="column"
				style="align-items: center; justify-content: center; flex: 1; padding-bottom: 10px;"
			>
				<div class="column" style="align-items: center;">
					<slot name="hero"></slot>
					${this.renderContent()}
				</div>
			</div>
		`}render(){const r=this.store.myProfile.get();switch(r.status){case"pending":return o`<div
					class="row"
					style="flex: 1; justify-content: center; align-items: center"
				>
					<sl-spinner style="font-size: 2rem"></sl-spinner>
				</div>`;case"error":return o`<display-error
					.headline=${p("Error fetching your profile.")}
					.error=${r.error}
				></display-error>`;case"completed":return this.renderPrompt(r.value!==void 0)}}};v.styles=[$,C`
			:host {
				display: flex;
				flex: 1;
			}
		`];b([E({context:U,subscribe:!0}),n()],v.prototype,"store",2);b([S()],v.prototype,"view",2);b([S()],v.prototype,"linkingDevices",2);v=b([j(),x("profile-prompt")],v);export{v as ProfilePrompt};
