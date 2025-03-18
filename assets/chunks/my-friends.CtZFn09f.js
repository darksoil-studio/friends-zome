import{o as G}from"./join.C7K6zG64.js";import{a as d,s as Q,c as J,f as Z,t as ee}from"./context.B1mOevgT.js";import{j as te,c as A,_ as a,i as f,d as _,s as y,b as L,L as R,k as b,o as v,p as w,q as S,e as z,t as q,u as se,v as ie,x as oe,y as ne,h as ae,S as re,w as N,m as g,z as le,n as de,a as he,A as ue,l as ce}from"./display-error.CUGxAW9p.js";import{S as Y,H as B,o as O,a as pe,g as me}from"./chunk.HLJ2JR6P.NGcCBZYb.js";import{i as C,x as u,E as W,r as fe}from"./friends-client.DXmLVIGM.js";import"./tslib.es6.kHcLnhpD.js";import"./commonjsHelpers.BosuxZz1.js";var H=new WeakMap;function V(e){let s=H.get(e);return s||(s=window.getComputedStyle(e,null),H.set(e,s)),s}function ge(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const s=V(e);return s.visibility!=="hidden"&&s.display!=="none"}function be(e){const s=V(e),{overflowY:t,overflowX:i}=s;return t==="scroll"||i==="scroll"?!0:t!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&t==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function ve(e){const s=e.tagName.toLowerCase(),t=Number(e.getAttribute("tabindex"));if(e.hasAttribute("tabindex")&&(isNaN(t)||t<=-1)||e.hasAttribute("disabled")||e.closest("[inert]"))return!1;if(s==="input"&&e.getAttribute("type")==="radio"){const n=e.getRootNode(),r=`input[type='radio'][name="${e.getAttribute("name")}"]`,l=n.querySelector(`${r}:checked`);return l?l===e:n.querySelector(r)===e}return ge(e)?(s==="audio"||s==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(s)?!0:be(e):!1}function ye(e){var s,t;const i=P(e),o=(s=i[0])!=null?s:null,n=(t=i[i.length-1])!=null?t:null;return{start:o,end:n}}function we(e,s){var t;return((t=e.getRootNode({composed:!0}))==null?void 0:t.host)!==s}function P(e){const s=new WeakMap,t=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||s.has(o))return;s.set(o,!0),!t.includes(o)&&ve(o)&&t.push(o),o instanceof HTMLSlotElement&&we(o,e)&&o.assignedElements({flatten:!0}).forEach(n=>{i(n)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const n of o.children)i(n)}return i(e),t.sort((o,n)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-r})}function*I(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*te(I(e.shadowRoot.activeElement))))}function ke(){return[...I()].pop()}var k=[],xe=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=s=>{var t;if(s.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=ke();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;s.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=P(this.element);let n=o.findIndex(l=>l===i);this.previousFocus=this.currentFocus;const r=this.tabDirection==="forward"?1:-1;for(;;){n+r>=o.length?n=0:n+r<0?n=o.length-1:n+=r,this.previousFocus=this.currentFocus;const l=o[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;s.preventDefault(),this.currentFocus=l,(t=this.currentFocus)==null||t.focus({preventScroll:!1});const p=[...I()];if(p.includes(this.currentFocus)||!p.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){k.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){k=k.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return k[k.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=P(this.element);if(!this.element.matches(":focus-within")){const s=e[0],t=e[e.length-1],i=this.tabDirection==="forward"?s:t;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},M=new Set;function _e(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ce(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function K(e){if(M.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const s=_e()+Ce();let t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t==="auto")&&(t="stable"),s<2&&(t=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",t),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${s}px`)}}function U(e){M.delete(e),M.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var Se=C`
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
`,m=class extends L{constructor(){super(...arguments),this.hasSlotController=new B(this,"footer"),this.localize=new R(this),this.modal=new xe(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),K(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),U(this),this.removeOpenListeners()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const t=b(this,"dialog.denyClose",{dir:this.localize.dir()});v(this.panel,t.keyframes,t.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),K(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([w(this.dialog),w(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const s=b(this,"dialog.show",{dir:this.localize.dir()}),t=b(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([v(this.panel,s.keyframes,s.options),v(this.overlay,t.keyframes,t.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([w(this.dialog),w(this.overlay)]);const e=b(this,"dialog.hide",{dir:this.localize.dir()}),s=b(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([v(this.overlay,s.keyframes,s.options).then(()=>{this.overlay.hidden=!0}),v(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,U(this);const t=this.originalTrigger;typeof(t==null?void 0:t.focus)=="function"&&setTimeout(()=>t.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,S(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,S(this,"sl-after-hide")}render(){return u`
      <div
        part="base"
        class=${z({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${O(this.noHeader?this.label:void 0)}
          aria-labelledby=${O(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":u`
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
    `}};m.styles=[A,Se];m.dependencies={"sl-icon-button":Y};a([f(".dialog")],m.prototype,"dialog",2);a([f(".dialog__panel")],m.prototype,"panel",2);a([f(".dialog__overlay")],m.prototype,"overlay",2);a([d({type:Boolean,reflect:!0})],m.prototype,"open",2);a([d({reflect:!0})],m.prototype,"label",2);a([d({attribute:"no-header",type:Boolean,reflect:!0})],m.prototype,"noHeader",2);a([_("open",{waitUntilFirstUpdate:!0})],m.prototype,"handleOpenChange",1);y("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});y("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});y("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});y("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});y("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});m.define("sl-dialog");var Ee=C`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,h=class extends L{constructor(){super(...arguments),this.localize=new R(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var s;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((s=document.activeElement)==null?void 0:s.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var t,i,o;const n=((t=this.containingElement)==null?void 0:t.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const s=e.composedPath();this.containingElement&&!s.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const s=e.target;!this.stayOpenOnSelect&&s.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const s=this.getMenu();if(s){const t=s.getAllItems(),i=t[0],o=t[t.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),t.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(s.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(s.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const s=this.trigger.assignedElements({flatten:!0}).find(i=>ye(i).start);let t;if(s){switch(s.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":t=s.button;break;default:t=s}t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,S(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,S(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await w(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:s}=b(this,"dropdown.show",{dir:this.localize.dir()});await v(this.popup.popup,e,s),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await w(this);const{keyframes:e,options:s}=b(this,"dropdown.hide",{dir:this.localize.dir()});await v(this.popup.popup,e,s),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return u`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${O(this.sync?this.sync:void 0)}
        class=${z({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};h.styles=[A,Ee];h.dependencies={"sl-popup":q};a([f(".dropdown")],h.prototype,"popup",2);a([f(".dropdown__trigger")],h.prototype,"trigger",2);a([f(".dropdown__panel")],h.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],h.prototype,"open",2);a([d({reflect:!0})],h.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],h.prototype,"disabled",2);a([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],h.prototype,"stayOpenOnSelect",2);a([d({attribute:!1})],h.prototype,"containingElement",2);a([d({type:Number})],h.prototype,"distance",2);a([d({type:Number})],h.prototype,"skidding",2);a([d({type:Boolean})],h.prototype,"hoist",2);a([d({reflect:!0})],h.prototype,"sync",2);a([_("open",{waitUntilFirstUpdate:!0})],h.prototype,"handleOpenChange",1);y("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});y("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});h.define("sl-dropdown");Y.define("sl-icon-button");var $e=C`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=(e,s)=>{var i;const t=e._$AN;if(t===void 0)return!1;for(const o of t)(i=o._$AO)==null||i.call(o,s,!1),x(o,s);return!0},E=e=>{let s,t;do{if((s=e._$AM)===void 0)break;t=s._$AN,t.delete(e),e=s}while((t==null?void 0:t.size)===0)},j=e=>{for(let s;s=e._$AM;e=s){let t=s._$AN;if(t===void 0)s._$AN=t=new Set;else if(t.has(e))break;t.add(e),Te(s)}};function Ae(e){this._$AN!==void 0?(E(this),this._$AM=e,j(this)):this._$AM=e}function Le(e,s=!1,t=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(s)if(Array.isArray(i))for(let n=t;n<i.length;n++)x(i[n],!1),E(i[n]);else i!=null&&(x(i,!1),E(i));else x(this,e)}const Te=e=>{e.type==oe.CHILD&&(e._$AP??(e._$AP=Le),e._$AQ??(e._$AQ=Ae))};class De extends se{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,t,i){super._$AT(s,t,i),j(this),this.isConnected=s._$AU}_$AO(s,t=!0){var i,o;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),t&&(x(this,s),E(this))}setValue(s){if(ie(this._$Ct))this._$Ct._$AI(s,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=s,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=()=>new Pe;class Pe{}const D=new WeakMap,Me=ne(class extends De{render(e){return W}update(e,[s]){var i;const t=s!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=s,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),W}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const s=this.ht??globalThis;let t=D.get(s);t===void 0&&(t=new WeakMap,D.set(s,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,s;return typeof this.Y=="function"?(e=D.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(s=this.Y)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Re=class{constructor(e,s){this.popupRef=Oe(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t);break}},this.handleClick=t=>{var i;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&(t.target.tagName==="sl-menu-item"||(i=t.target.role)!=null&&i.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),i=t==null?void 0:t.assignedElements({flatten:!0}).filter(T=>T.localName==="sl-menu")[0],o=getComputedStyle(this.host).direction==="rtl";if(!i)return;const{left:n,top:r,width:l,height:p}=i.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${o?n+l:n}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${r}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${o?n+l:n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${r+p}px`)},(this.host=e).addController(this),this.hasSlotController=s}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const s=this.host.renderRoot.querySelector("slot[name='submenu']");if(!s){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let t=null;for(const i of s.assignedElements())if(t=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),t.length!==0)break;if(!(!t||t.length===0)){t[0].setAttribute("tabindex","0");for(let i=1;i!==t.length;++i)t[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?t[0]instanceof HTMLElement&&t[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{t[0]instanceof HTMLElement&&t[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const s=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,n)=>{var r;const l=(r=s.get(n))!=null?r:new CSSUnitValue(0,"px"),T=(l instanceof CSSUnitValue?l:new CSSUnitValue(0,"px")).to("px");return o-T.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=getComputedStyle(this.host).direction==="rtl";return this.isConnected?u`
      <sl-popup
        ${Me(this.popupRef)}
        placement=${e?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:u` <slot name="submenu" hidden></slot> `}},c=class extends L{constructor(){super(...arguments),this.localize=new R(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new B(this,"submenu"),this.submenuController=new Re(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return me(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",s=this.submenuController.isExpanded();return u`
      <div
        id="anchor"
        part="base"
        class=${z({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":s})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!s}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?u` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};c.styles=[A,$e];c.dependencies={"sl-icon":ae,"sl-popup":q,"sl-spinner":pe};a([f("slot:not([name])")],c.prototype,"defaultSlot",2);a([f(".menu-item")],c.prototype,"menuItem",2);a([d()],c.prototype,"type",2);a([d({type:Boolean,reflect:!0})],c.prototype,"checked",2);a([d()],c.prototype,"value",2);a([d({type:Boolean,reflect:!0})],c.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],c.prototype,"disabled",2);a([_("checked")],c.prototype,"handleCheckedChange",1);a([_("disabled")],c.prototype,"handleDisabledChange",1);a([_("type")],c.prototype,"handleTypeChange",1);c.define("sl-menu-item");var ze=C`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,F=class extends L{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const s=["menuitem","menuitemcheckbox"],t=e.composedPath(),i=t.find(l=>{var p;return s.includes(((p=l==null?void 0:l.getAttribute)==null?void 0:p.call(l,"role"))||"")});if(!i||t.find(l=>{var p;return((p=l==null?void 0:l.getAttribute)==null?void 0:p.call(l,"role"))==="menu"})!==this)return;const r=i;r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const s=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),s==null||s.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const s=this.getAllItems(),t=this.getCurrentItem();let i=t?s.indexOf(t):0;s.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=s.length-1),i<0&&(i=s.length-1),i>s.length-1&&(i=0),this.setCurrentItem(s[i]),s[i].focus())}}handleMouseDown(e){const s=e.target;this.isMenuItem(s)&&this.setCurrentItem(s)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var s;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((s=e.getAttribute("role"))!=null?s:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute("tabindex",t===e?"0":"-1")})}render(){return u`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};F.styles=[A,ze];a([f("slot")],F.prototype,"defaultSlot",2);F.define("sl-menu");var Ie=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,X=(e,s,t,i)=>{for(var o=i>1?void 0:i?Fe(s,t):s,n=e.length-1,r;n>=0;n--)(r=e[n])&&(o=(i?r(s,t,o):r(o))||o);return i&&o&&Ie(s,t,o),o};let $=class extends re(fe){renderList(e){return e.length===0?u`
				<div
					class="column placeholder center-content"
					style="flex: 1; gap: 8px"
				>
					<sl-icon
						.src=${N(he)}
						style="height: 64px; width: 64px;"
					></sl-icon>
					<span>${g("You don't have any friends yet.")}</span>
				</div>
			`:u`
			<div class="column" style="flex: 1; gap: 8px">
				${G(e.map((s,t)=>u`
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
										.src=${N(ue)}
									></sl-icon-button>
									<sl-menu>
										<sl-menu-item
											@click=${()=>this.shadowRoot.querySelector("sl-dialog").show()}
											>${g("Remove Friend")}
										</sl-menu-item>
									</sl-menu>
								</sl-dropdown>
								<sl-dialog id="dialog-${t}" .label=${g("Remove Friend")}>
									<div class="column" style="gap: 12px">
										<span
											>${g(le`Are you sure you want to remove ${s.profile.name} as a friend?`)}</span
										>
									</div>
									<sl-button
										slot="footer"
										@click=${()=>this.shadowRoot.querySelector(`sl-dialog#${t}`).hide()}
										>${g("Cancel")}</sl-button
									>
									<sl-button
										slot="footer"
										variant="danger"
										@click=${async i=>{const o=i.target;o.loading=!0;try{await this.store.client.removeFriend(s.agents)}catch(n){de(g("Failed to remove friend.")),console.error(n)}this.shadowRoot.querySelector(`sl-dialog#${t}`).hide(),o.loading=!1}}
										>${g("Remove Friend")}</sl-button
									>
								</sl-dialog>
							</div>
						`),()=>u`<sl-divider></sl-divider>`)}
			</div>
		`}render(){const e=this.store.friends.get();switch(e.status){case"pending":return u`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;case"error":return u`<display-error
					.headline=${g("Error fetching the profiles for all agents")}
					.error=${e.error}
				></display-error>`;case"completed":return this.renderList(e.value)}}};$.styles=[Q,C`
			:host {
				display: flex;
			}
		`];X([J({context:Z,subscribe:!0}),d()],$.prototype,"store",2);$=X([ce(),ee("my-friends")],$);export{$ as MyFriends};
