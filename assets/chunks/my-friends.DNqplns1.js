import"./profile-list-item-skeleton.BpJUbgPN.js";import{n as y,s as z,c as P,t as q}from"./property.CPxPeo4V.js";import{j as T,c as W,_ as c,e as w,g as O,s as f,S as R,L as H,k as u,n as p,o as g,p as k,b as I,w as F,m as r,q as K,a as B,t as U,l as j}from"./display-error.B2Ls6KMv.js";import{n as M}from"./chunk.M343NXS3.1q8ICQ-V.js";import{S as A}from"./chunk.HLJ2JR6P.DpRnHKy4.js";import{H as N,o as $}from"./if-defined.xUC1_DA-.js";import{g as C}from"./chunk.JGMXX6EB.Bvx4vYOP.js";import{i as D,x as n,r as G}from"./friends-client.BHFcpvB2.js";import{o as V}from"./join.Cj1WnxtB.js";import{S as Y}from"./signal-watcher.D20SjYbO.js";import{f as J}from"./context.BbcyPs4I.js";import"./tslib.es6.kHcLnhpD.js";import"./commonjsHelpers.BosuxZz1.js";function*_(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*T(_(e.shadowRoot.activeElement))))}function Q(){return[..._()].pop()}var m=[],X=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=o=>{var t;if(o.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=Q();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;o.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=C(this.element);let a=s.findIndex(h=>h===i);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){a+d>=s.length?a=0:a+d<0?a=s.length-1:a+=d,this.previousFocus=this.currentFocus;const h=s[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||h&&this.possiblyHasTabbableChildren(h))return;o.preventDefault(),this.currentFocus=h,(t=this.currentFocus)==null||t.focus({preventScroll:!1});const x=[..._()];if(x.includes(this.currentFocus)||!x.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){m.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){m=m.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return m[m.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=C(this.element);if(!this.element.matches(":focus-within")){const o=e[0],t=e[e.length-1],i=this.tabDirection==="forward"?o:t;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},b=new Set;function Z(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function ee(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function E(e){if(b.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const o=Z()+ee();let t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t==="auto")&&(t="stable"),o<2&&(t=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",t),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${o}px`)}}function S(e){b.delete(e),b.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var te=D`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,l=class extends R{constructor(){super(...arguments),this.hasSlotController=new N(this,"footer"),this.localize=new H(this),this.modal=new X(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),E(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),S(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const t=u(this,"dialog.denyClose",{dir:this.localize.dir()});p(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),E(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([g(this.dialog),g(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const o=u(this,"dialog.show",{dir:this.localize.dir()}),t=u(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([p(this.panel,o.keyframes,o.options),p(this.overlay,t.keyframes,t.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([g(this.dialog),g(this.overlay)]);const e=u(this,"dialog.hide",{dir:this.localize.dir()}),o=u(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([p(this.overlay,o.keyframes,o.options).then(()=>{this.overlay.hidden=!0}),p(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,S(this);const t=this.originalTrigger;typeof(t==null?void 0:t.focus)=="function"&&setTimeout(()=>t.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,k(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,k(this,"sl-after-hide")}render(){return n`
      <div
        part="base"
        class=${I({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${$(this.noHeader?this.label:void 0)}
          aria-labelledby=${$(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":n`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};l.styles=[W,te];l.dependencies={"sl-icon-button":A};c([w(".dialog")],l.prototype,"dialog",2);c([w(".dialog__panel")],l.prototype,"panel",2);c([w(".dialog__overlay")],l.prototype,"overlay",2);c([y({type:Boolean,reflect:!0})],l.prototype,"open",2);c([y({reflect:!0})],l.prototype,"label",2);c([y({attribute:"no-header",type:Boolean,reflect:!0})],l.prototype,"noHeader",2);c([O("open",{waitUntilFirstUpdate:!0})],l.prototype,"handleOpenChange",1);f("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});f("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});f("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});f("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});f("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});l.define("sl-dialog");A.define("sl-icon-button");var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,L=(e,o,t,i)=>{for(var s=i>1?void 0:i?ie(o,t):o,a=e.length-1,d;a>=0;a--)(d=e[a])&&(s=(i?d(o,t,s):d(s))||s);return i&&s&&oe(o,t,s),s};let v=class extends Y(G){renderList(e){return e.length===0?n`
				<div class="column center-content" style="padding: 20px; flex: 1">
					<sl-icon
						.src=${F(B)}
						style="color: grey; height: 64px; width: 48px;"
					></sl-icon>
					<span class="placeholder"
						>${r("You don't have any friends yet.")}</span
					>
				</div>
			`:n`
			<div class="column" style="flex: 1;">
				${V(e.map((o,t)=>n`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<sl-avatar
									style="--size: 32px;"
									.image=${o.profile.avatar}
									.initials=${o.profile.name.slice(0,2)}
								></sl-avatar>
								<span style="flex: 1">${o.profile.name}</span>

								<sl-dropdown>
									<sl-icon-button
										slot="trigger"
										.src=${F(U)}
									></sl-icon-button>
									<sl-menu>
										<sl-menu-item
											@click=${()=>this.shadowRoot.querySelector("sl-dialog").show()}
											>${r("Remove Friend")}
										</sl-menu-item>
									</sl-menu>
								</sl-dropdown>
								<sl-dialog id="dialog-${t}" .label=${r("Remove Friend")}>
									<div class="column" style="gap: 12px">
										<span
											>${r(K`Are you sure you want to remove ${o.profile.name} as a friend?`)}</span
										>
									</div>
									<sl-button
										slot="footer"
										@click=${()=>this.shadowRoot.querySelector(`sl-dialog#${t}`).hide()}
										>${r("Cancel")}</sl-button
									>
									<sl-button
										slot="footer"
										variant="danger"
										@click=${async i=>{const s=i.target;s.loading=!0;try{await this.store.client.removeFriend(o.agents)}catch(a){M(r("Failed to remove friend.")),console.error(a)}s.loading=!1,this.shadowRoot.querySelector(`sl-dialog#${t}`).hide()}}
										>${r("Remove Friend")}</sl-button
									>
								</sl-dialog>
							</div>
						`),()=>n`<sl-divider></sl-divider>`)}
			</div>
		`}render(){const e=this.store.friends.get();switch(e.status){case"pending":return n`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;case"error":return n`<display-error
					.headline=${r("Error fetching the profiles for all agents")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderList(e.value)}}};v.styles=[z,D`
			:host {
				display: flex;
			}
		`];L([P({context:J,subscribe:!0}),y()],v.prototype,"store",2);v=L([j(),q("my-friends")],v);export{v as MyFriends};
