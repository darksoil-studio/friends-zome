import{y as z,h as L,z as P,k as c,l as w,e as y,o as T,A as f,p as W,L as O,B as u,C as p,D as g,E as k,u as R,v as E,S as I,w as C,m as r,s as q,n as H,a as K,b as B,c as U,d as j,f as M,t as N}from"./chunk.HLJ2JR6P.W6_Rq4-Q.js";import{i as S,x as n,r as G}from"./friends-client.D0EhSUbZ.js";import{g as $,o as V}from"./join.B5dMbJeX.js";import{H as Y,l as J}from"./chunk.NYIIDP5N.pYqGInUB.js";import"./chunk.UG6RICOR.BJYwagKD.js";import"./commonjsHelpers.BosuxZz1.js";import"./tslib.es6.kHcLnhpD.js";function*_(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*z(_(e.shadowRoot.activeElement))))}function Q(){return[..._()].pop()}var m=[],X=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=s=>{var t;if(s.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=Q();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;s.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=$(this.element);let a=o.findIndex(h=>h===i);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){a+d>=o.length?a=0:a+d<0?a=o.length-1:a+=d,this.previousFocus=this.currentFocus;const h=o[a];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||h&&this.possiblyHasTabbableChildren(h))return;s.preventDefault(),this.currentFocus=h,(t=this.currentFocus)==null||t.focus({preventScroll:!1});const x=[..._()];if(x.includes(this.currentFocus)||!x.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){m.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){m=m.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return m[m.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=$(this.element);if(!this.element.matches(":focus-within")){const s=e[0],t=e[e.length-1],i=this.tabDirection==="forward"?s:t;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},b=new Set;function Z(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function ee(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function F(e){if(b.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const s=Z()+ee();let t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t==="auto")&&(t="stable"),s<2&&(t=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",t),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${s}px`)}}function A(e){b.delete(e),b.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var te=S`
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
`,l=class extends W{constructor(){super(...arguments),this.hasSlotController=new Y(this,"footer"),this.localize=new O(this),this.modal=new X(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),F(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),A(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const t=u(this,"dialog.denyClose",{dir:this.localize.dir()});p(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),F(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([g(this.dialog),g(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const s=u(this,"dialog.show",{dir:this.localize.dir()}),t=u(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([p(this.panel,s.keyframes,s.options),p(this.overlay,t.keyframes,t.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([g(this.dialog),g(this.overlay)]);const e=u(this,"dialog.hide",{dir:this.localize.dir()}),s=u(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([p(this.overlay,s.keyframes,s.options).then(()=>{this.overlay.hidden=!0}),p(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,A(this);const t=this.originalTrigger;typeof(t==null?void 0:t.focus)=="function"&&setTimeout(()=>t.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,k(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,k(this,"sl-after-hide")}render(){return n`
      <div
        part="base"
        class=${R({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${E(this.noHeader?this.label:void 0)}
          aria-labelledby=${E(this.noHeader?void 0:"title")}
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
    `}};l.styles=[L,te];l.dependencies={"sl-icon-button":P};c([w(".dialog")],l.prototype,"dialog",2);c([w(".dialog__panel")],l.prototype,"panel",2);c([w(".dialog__overlay")],l.prototype,"overlay",2);c([y({type:Boolean,reflect:!0})],l.prototype,"open",2);c([y({reflect:!0})],l.prototype,"label",2);c([y({attribute:"no-header",type:Boolean,reflect:!0})],l.prototype,"noHeader",2);c([T("open",{waitUntilFirstUpdate:!0})],l.prototype,"handleOpenChange",1);f("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});f("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});f("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});f("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});f("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});l.define("sl-dialog");var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,D=(e,s,t,i)=>{for(var o=i>1?void 0:i?ie(s,t):s,a=e.length-1,d;a>=0;a--)(d=e[a])&&(o=(i?d(s,t,o):d(o))||o);return i&&o&&se(s,t,o),o};let v=class extends I(G){renderList(e){return e.length===0?n`
				<div
					class="column placeholder center-content"
					style="flex: 1; gap: 8px"
				>
					<sl-icon
						.src=${C(K)}
						style="height: 64px; width: 64px;"
					></sl-icon>
					<span style="text-align: center"
						>${r("You don't have any friends yet.")}</span
					>
				</div>
			`:n`
			<div class="column" style="flex: 1; gap: 8px">
				${V(e.map((s,t)=>n`
							<div class="row" style="align-items: center; margin: 8px;">
								<div
									class="row"
									style="align-items: center; gap: 8px; flex: 1; cursor: pointer"
									@click=${()=>this.dispatchEvent(new CustomEvent("friend-clicked",{bubbles:!0,composed:!0,detail:{agents:s.agents}}))}
								>
									<sl-avatar
										style="--size: 32px;"
										.image=${s.profile.avatar}
										.initials=${s.profile.name.slice(0,2)}
									></sl-avatar>
									<span>${s.profile.name}</span>
								</div>

								<sl-dropdown>
									<sl-icon-button
										slot="trigger"
										.src=${C(B)}
										style="font-size: 1.4rem"
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
											>${r(q`Are you sure you want to remove ${s.profile.name} as a friend?`)}</span
										>
									</div>
									<sl-button
										slot="footer"
										@click=${()=>this.shadowRoot.getElementById(`dialog-${t}`).hide()}
										>${r("Cancel")}</sl-button
									>
									<sl-button
										slot="footer"
										variant="danger"
										@click=${async i=>{const o=i.target;o.loading=!0;try{await this.store.client.removeFriend(s.agents)}catch(a){H(r("Failed to remove friend.")),console.error(a)}this.shadowRoot.getElementById(`dialog-${t}`).hide(),o.loading=!1}}
										>${r("Remove Friend")}</sl-button
									>
								</sl-dialog>
							</div>
						`),()=>n`<sl-divider style="margin: 0"></sl-divider>`)}
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
				></display-error>`;case"completed":return this.renderList(e.value)}}};v.styles=[U,S`
			:host {
				display: flex;
			}
		`];D([j({context:M,subscribe:!0}),y()],v.prototype,"store",2);v=D([J(),N("my-friends")],v);export{v as MyFriends};
