import{a as c,w as d,d as h,c as m,f as v,_ as r,r as p,g as u,S as g,b as f}from"./display-error.B2Ls6KMv.js";import{i as _,x as i}from"./friends-client.BHFcpvB2.js";import{n as s}from"./property.CPxPeo4V.js";function y(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}function b(t,e="primary",n=c,l=3e3){const o=Object.assign(document.createElement("sl-alert"),{variant:e,closable:!0,duration:l,innerHTML:`
        <sl-icon src="${d(n)}" slot="icon"></sl-icon>
        ${y(t)}
      `});return document.body.append(o),o.toast()}function x(t){return b(t,"danger",h)}var E=_`
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
`,a=class extends g{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=i`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=i``;return this.initials?e=i`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=i`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,i`
      <div
        part="base"
        class=${f({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};a.styles=[m,E];a.dependencies={"sl-icon":v};r([p()],a.prototype,"hasError",2);r([s()],a.prototype,"image",2);r([s()],a.prototype,"label",2);r([s()],a.prototype,"initials",2);r([s()],a.prototype,"loading",2);r([s({reflect:!0})],a.prototype,"shape",2);r([u("image")],a.prototype,"handleImageChange",1);a.define("sl-avatar");export{x as n};
