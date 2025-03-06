import{i as s}from"./friends-client.BHFcpvB2.js";import{c,_ as o,g as n,S as d}from"./display-error.B2Ls6KMv.js";import{n as p}from"./property.CPxPeo4V.js";var v=s`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,e=class extends d{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};e.styles=[c,v];o([p({type:Boolean,reflect:!0})],e.prototype,"vertical",2);o([n("vertical")],e.prototype,"handleVerticalChange",1);e.define("sl-divider");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*u(a,t){const i=typeof t=="function";if(a!==void 0){let r=-1;for(const l of a)r>-1&&(yield i?t(r):t),r++,yield l}}export{u as o};
