import{i as v,x as y,E as g}from"./friends-client.BHFcpvB2.js";import{c as V,S as b,L as k,h as m,i as c}from"./display-error.B2Ls6KMv.js";var E=v`
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
`,S=class extends b{constructor(){super(...arguments),this.localize=new k(this)}render(){return y`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};S.styles=[V,E];var a=new WeakMap,n=new WeakMap,h=new WeakMap,f=new WeakSet,l=new WeakMap,F=class{constructor(t,o){this.handleFormData=e=>{const s=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),d=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!d&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(p=>{e.formData.append(r,p.toString())}):e.formData.append(r,i.toString()))},this.handleFormSubmit=e=>{var s;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=a.get(this.form))==null||s.forEach(d=>{this.setUserInteracted(d,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),l.set(this.host,[])},this.handleInteraction=e=>{const s=l.get(this.host);s.includes(e.type)||s.push(e.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const s of e)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const s of e)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=c({form:e=>{const s=e.form;if(s){const i=e.getRootNode().querySelector(`#${s}`);if(i)return i}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var s;return(s=e.disabled)!=null?s:!1},reportValidity:e=>typeof e.reportValidity=="function"?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity=="function"?e.checkValidity():!0,setValue:(e,s)=>e.value=s,assumeInteractionOn:["sl-input"]},o)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),l.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),l.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,a.has(this.form)?a.get(this.form).add(this.host):a.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),n.has(this.form)||(n.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),h.has(this.form)||(h.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=a.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),n.has(this.form)&&(this.form.reportValidity=n.get(this.form),n.delete(this.form)),h.has(this.form)&&(this.form.checkValidity=h.get(this.form),h.delete(this.form)),this.form=void 0))}setUserInteracted(t,o){o?f.add(t):f.delete(t),t.requestUpdate()}doAction(t,o){if(this.form){const e=document.createElement("button");e.type=t,e.style.position="absolute",e.style.width="0",e.style.height="0",e.style.clipPath="inset(50%)",e.style.overflow="hidden",e.style.whiteSpace="nowrap",o&&(e.name=o.name,e.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{o.hasAttribute(s)&&e.setAttribute(s,o.getAttribute(s))})),this.form.append(e),e.click(),e.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const o=this.host,e=!!f.has(o),s=!!o.required;o.toggleAttribute("data-required",s),o.toggleAttribute("data-optional",!s),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&e),o.toggleAttribute("data-user-valid",t&&e)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const o=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||o.preventDefault(),this.host.dispatchEvent(o)||t==null||t.preventDefault()}},u=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(m(c({},u),{valid:!1,valueMissing:!0}));Object.freeze(m(c({},u),{valid:!1,customError:!0}));var C=class{constructor(t,...o){this.slotNames=[],this.handleSlotChange=e=>{const s=e.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=o}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const o=t;if(o.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!o.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function A(t){if(!t)return"";const o=t.assignedNodes({flatten:!0});let e="";return[...o].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=t=>t??g;export{F,C as H,S,A as g,N as o,u as v};
