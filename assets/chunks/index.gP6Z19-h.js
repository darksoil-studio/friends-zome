import{G as F,h as U,J as q,j as tt,k as m,l as R,r as V,e as T,A as J,p as Q,L as K,B as G,u as Z,K as rt,M as et,N as ot,o as st,i as it,z as nt}from"./chunk.HLJ2JR6P.W6_Rq4-Q.js";import{i as j,x as O,T as at}from"./friends-client.D0EhSUbZ.js";const mt=F("linked_devices/store");var lt=j`
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
`,L=class extends Q{constructor(){super(...arguments),this.localize=new K(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let p=this.value;if(this.from){const _=this.getRootNode(),A=this.from.includes("."),b=this.from.includes("[")&&this.from.includes("]");let x=this.from,z="";A?[x,z]=this.from.trim().split("."):b&&([x,z]=this.from.trim().replace(/\]$/,"").split("["));const S="getElementById"in _?_.getElementById(x):null;S?b?p=S.getAttribute(z)||"":A?p=S[z]||"":p=S.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!p)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(p),this.showStatus("success"),this.emit("sl-copy",{detail:{value:p}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(p){const _=this.copyLabel||this.localize.term("copy"),A=this.successLabel||this.localize.term("copied"),b=this.errorLabel||this.localize.term("error"),x=p==="success"?this.successIcon:this.errorIcon,z=G(this,"copy.in",{dir:"ltr"}),S=G(this,"copy.out",{dir:"ltr"});this.tooltip.content=p==="success"?A:b,await this.copyIcon.animate(S.keyframes,S.options).finished,this.copyIcon.hidden=!0,this.status=p,x.hidden=!1,await x.animate(z.keyframes,z.options).finished,setTimeout(async()=>{await x.animate(S.keyframes,S.options).finished,x.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(z.keyframes,z.options).finished,this.tooltip.content=_,this.isCopying=!1},this.feedbackDuration)}render(){const p=this.copyLabel||this.localize.term("copy");return O`
      <sl-tooltip
        class=${Z({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${p}
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
    `}};L.styles=[U,lt];L.dependencies={"sl-icon":tt,"sl-tooltip":q};m([R('slot[name="copy-icon"]')],L.prototype,"copyIcon",2);m([R('slot[name="success-icon"]')],L.prototype,"successIcon",2);m([R('slot[name="error-icon"]')],L.prototype,"errorIcon",2);m([R("sl-tooltip")],L.prototype,"tooltip",2);m([V()],L.prototype,"isCopying",2);m([V()],L.prototype,"status",2);m([T()],L.prototype,"value",2);m([T()],L.prototype,"from",2);m([T({type:Boolean,reflect:!0})],L.prototype,"disabled",2);m([T({attribute:"copy-label"})],L.prototype,"copyLabel",2);m([T({attribute:"success-label"})],L.prototype,"successLabel",2);m([T({attribute:"error-label"})],L.prototype,"errorLabel",2);m([T({attribute:"feedback-duration",type:Number})],L.prototype,"feedbackDuration",2);m([T({attribute:"tooltip-placement"})],L.prototype,"tooltipPlacement",2);m([T({type:Boolean})],L.prototype,"hoist",2);J("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});J("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});L.define("sl-copy-button");var ut=j`
  :host {
    display: inline-block;
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W="important",ct=" !"+W,pt=rt(class extends et{constructor(p){var _;if(super(p),p.type!==ot.ATTRIBUTE||p.name!=="style"||((_=p.strings)==null?void 0:_.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(p){return Object.keys(p).reduce((_,A)=>{const b=p[A];return b==null?_:_+`${A=A.includes("-")?A:A.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${b};`},"")}update(p,[_]){const{style:A}=p.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(_)),this.render(_);for(const b of this.ft)_[b]==null&&(this.ft.delete(b),b.includes("-")?A.removeProperty(b):A[b]=null);for(const b in _){const x=_[b];if(x!=null){this.ft.add(b);const z=typeof x=="string"&&x.endsWith(ct);b.includes("-")||z?A.setProperty(b,z?x.slice(0,-11):x,z?W:""):A[b]=x}}return at}});let X=null;class Y{}Y.render=function(p,_){X(p,_)};self.QrCreator=Y;(function(p){function _(g,s,e,c){var t={},r=p(e,s);r.u(g),r.J(),c=c||0;var n=r.h(),i=r.h()+2*c;return t.text=g,t.level=s,t.version=e,t.O=i,t.a=function(l,v){return l-=c,v-=c,0>l||l>=n||0>v||v>=n?!1:r.a(l,v)},t}function A(g,s,e,c,t,r,n,i,l,v){function E(u,h,o,a,d,w,C){u?(g.lineTo(h+w,o+C),g.arcTo(h,o,a,d,r)):g.lineTo(h,o)}n?g.moveTo(s+r,e):g.moveTo(s,e),E(i,c,e,c,t,-r,0),E(l,c,t,s,t,0,-r),E(v,s,t,s,e,r,0),E(n,s,e,c,e,0,r)}function b(g,s,e,c,t,r,n,i,l,v){function E(u,h,o,a){g.moveTo(u+o,h),g.lineTo(u,h),g.lineTo(u,h+a),g.arcTo(u,h,u+o,h,r)}n&&E(s,e,r,r),i&&E(c,e,-r,r),l&&E(c,t,-r,-r),v&&E(s,t,r,-r)}function x(g,s){var e=s.fill;if(typeof e=="string")g.fillStyle=e;else{var c=e.type,t=e.colorStops;if(e=e.position.map(n=>Math.round(n*s.size)),c==="linear-gradient")var r=g.createLinearGradient.apply(g,e);else if(c==="radial-gradient")r=g.createRadialGradient.apply(g,e);else throw Error("Unsupported fill");t.forEach(([n,i])=>{r.addColorStop(n,i)}),g.fillStyle=r}}function z(g,s){t:{var e=s.text,c=s.v,t=s.N,r=s.K,n=s.P;for(t=Math.max(1,t||1),r=Math.min(40,r||40);t<=r;t+=1)try{var i=_(e,c,t,n);break t}catch{}i=void 0}if(!i)return null;for(e=g.getContext("2d"),s.background&&(e.fillStyle=s.background,e.fillRect(s.left,s.top,s.size,s.size)),c=i.O,r=s.size/c,e.beginPath(),n=0;n<c;n+=1)for(t=0;t<c;t+=1){var l=e,v=s.left+t*r,E=s.top+n*r,u=n,h=t,o=i.a,a=v+r,d=E+r,w=u-1,C=u+1,y=h-1,f=h+1,$=Math.floor(Math.min(.5,Math.max(0,s.R))*r),I=o(u,h),P=o(w,y),N=o(w,h);w=o(w,f);var D=o(u,f);f=o(C,f),h=o(C,h),C=o(C,y),u=o(u,y),v=Math.round(v),E=Math.round(E),a=Math.round(a),d=Math.round(d),I?A(l,v,E,a,d,$,!N&&!u,!N&&!D,!h&&!D,!h&&!u):b(l,v,E,a,d,$,N&&u&&P,N&&D&&w,h&&D&&f,h&&u&&C)}return x(e,s),e.fill(),g}var S={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};X=function(g,s){var e={};Object.assign(e,S,g),e.N=e.minVersion,e.K=e.maxVersion,e.v=e.ecLevel,e.left=e.left,e.top=e.top,e.size=e.size,e.fill=e.fill,e.background=e.background,e.text=e.text,e.R=e.radius,e.P=e.quiet,s instanceof HTMLCanvasElement?((s.width!==e.size||s.height!==e.size)&&(s.width=e.size,s.height=e.size),s.getContext("2d").clearRect(0,0,s.width,s.height),z(s,e)):(g=document.createElement("canvas"),g.width=e.size,g.height=e.size,e=z(g,e),s.appendChild(e))}})(function(){function p(s){var e=A.s(s);return{S:function(){return 4},b:function(){return e.length},write:function(c){for(var t=0;t<e.length;t+=1)c.put(e[t],8)}}}function _(){var s=[],e=0,c={B:function(){return s},c:function(t){return(s[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(t,r){for(var n=0;n<r;n+=1)c.m((t>>>r-n-1&1)==1)},f:function(){return e},m:function(t){var r=Math.floor(e/8);s.length<=r&&s.push(0),t&&(s[r]|=128>>>e%8),e+=1}};return c}function A(s,e){function c(u,h){for(var o=-1;7>=o;o+=1)if(!(-1>=u+o||i<=u+o))for(var a=-1;7>=a;a+=1)-1>=h+a||i<=h+a||(n[u+o][h+a]=0<=o&&6>=o&&(a==0||a==6)||0<=a&&6>=a&&(o==0||o==6)||2<=o&&4>=o&&2<=a&&4>=a)}function t(u,h){for(var o=i=4*s+17,a=Array(o),d=0;d<o;d+=1){a[d]=Array(o);for(var w=0;w<o;w+=1)a[d][w]=null}for(n=a,c(0,0),c(i-7,0),c(0,i-7),o=z.G(s),a=0;a<o.length;a+=1)for(d=0;d<o.length;d+=1){w=o[a];var C=o[d];if(n[w][C]==null)for(var y=-2;2>=y;y+=1)for(var f=-2;2>=f;f+=1)n[w+y][C+f]=y==-2||y==2||f==-2||f==2||y==0&&f==0}for(o=8;o<i-8;o+=1)n[o][6]==null&&(n[o][6]=o%2==0);for(o=8;o<i-8;o+=1)n[6][o]==null&&(n[6][o]=o%2==0);for(o=z.w(r<<3|h),a=0;15>a;a+=1)d=!u&&(o>>a&1)==1,n[6>a?a:8>a?a+1:i-15+a][8]=d,n[8][8>a?i-a-1:9>a?15-a:14-a]=d;if(n[i-8][8]=!u,7<=s){for(o=z.A(s),a=0;18>a;a+=1)d=!u&&(o>>a&1)==1,n[Math.floor(a/3)][a%3+i-8-3]=d;for(a=0;18>a;a+=1)d=!u&&(o>>a&1)==1,n[a%3+i-8-3][Math.floor(a/3)]=d}if(l==null){for(u=g.I(s,r),o=_(),a=0;a<v.length;a+=1)d=v[a],o.put(4,4),o.put(d.b(),z.f(4,s)),d.write(o);for(a=d=0;a<u.length;a+=1)d+=u[a].j;if(o.f()>8*d)throw Error("code length overflow. ("+o.f()+">"+8*d+")");for(o.f()+4<=8*d&&o.put(0,4);o.f()%8!=0;)o.m(!1);for(;!(o.f()>=8*d)&&(o.put(236,8),!(o.f()>=8*d));)o.put(17,8);var $=0;for(d=a=0,w=Array(u.length),C=Array(u.length),y=0;y<u.length;y+=1){var I=u[y].j,P=u[y].o-I;for(a=Math.max(a,I),d=Math.max(d,P),w[y]=Array(I),f=0;f<w[y].length;f+=1)w[y][f]=255&o.B()[f+$];for($+=I,f=z.C(P),I=b(w[y],f.b()-1).l(f),C[y]=Array(f.b()-1),f=0;f<C[y].length;f+=1)P=f+I.b()-C[y].length,C[y][f]=0<=P?I.c(P):0}for(f=o=0;f<u.length;f+=1)o+=u[f].o;for(o=Array(o),f=$=0;f<a;f+=1)for(y=0;y<u.length;y+=1)f<w[y].length&&(o[$]=w[y][f],$+=1);for(f=0;f<d;f+=1)for(y=0;y<u.length;y+=1)f<C[y].length&&(o[$]=C[y][f],$+=1);l=o}for(u=l,o=-1,a=i-1,d=7,w=0,h=z.F(h),C=i-1;0<C;C-=2)for(C==6&&--C;;){for(y=0;2>y;y+=1)n[a][C-y]==null&&(f=!1,w<u.length&&(f=(u[w]>>>d&1)==1),h(a,C-y)&&(f=!f),n[a][C-y]=f,--d,d==-1&&(w+=1,d=7));if(a+=o,0>a||i<=a){a-=o,o=-o;break}}}var r=x[e],n=null,i=0,l=null,v=[],E={u:function(u){u=p(u),v.push(u),l=null},a:function(u,h){if(0>u||i<=u||0>h||i<=h)throw Error(u+","+h);return n[u][h]},h:function(){return i},J:function(){for(var u=0,h=0,o=0;8>o;o+=1){t(!0,o);var a=z.D(E);(o==0||u>a)&&(u=a,h=o)}t(!1,h)}};return E}function b(s,e){if(typeof s.length>"u")throw Error(s.length+"/"+e);var c=function(){for(var r=0;r<s.length&&s[r]==0;)r+=1;for(var n=Array(s.length-r+e),i=0;i<s.length-r;i+=1)n[i]=s[i+r];return n}(),t={c:function(r){return c[r]},b:function(){return c.length},multiply:function(r){for(var n=Array(t.b()+r.b()-1),i=0;i<t.b();i+=1)for(var l=0;l<r.b();l+=1)n[i+l]^=S.i(S.g(t.c(i))+S.g(r.c(l)));return b(n,0)},l:function(r){if(0>t.b()-r.b())return t;for(var n=S.g(t.c(0))-S.g(r.c(0)),i=Array(t.b()),l=0;l<t.b();l+=1)i[l]=t.c(l);for(l=0;l<r.b();l+=1)i[l]^=S.i(S.g(r.c(l))+n);return b(i,0).l(r)}};return t}A.s=function(s){for(var e=[],c=0;c<s.length;c++){var t=s.charCodeAt(c);128>t?e.push(t):2048>t?e.push(192|t>>6,128|t&63):55296>t||57344<=t?e.push(224|t>>12,128|t>>6&63,128|t&63):(c++,t=65536+((t&1023)<<10|s.charCodeAt(c)&1023),e.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|t&63))}return e};var x={L:1,M:0,Q:3,H:2},z=function(){function s(t){for(var r=0;t!=0;)r+=1,t>>>=1;return r}var e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],c={w:function(t){for(var r=t<<10;0<=s(r)-s(1335);)r^=1335<<s(r)-s(1335);return(t<<10|r)^21522},A:function(t){for(var r=t<<12;0<=s(r)-s(7973);)r^=7973<<s(r)-s(7973);return t<<12|r},G:function(t){return e[t-1]},F:function(t){switch(t){case 0:return function(r,n){return(r+n)%2==0};case 1:return function(r){return r%2==0};case 2:return function(r,n){return n%3==0};case 3:return function(r,n){return(r+n)%3==0};case 4:return function(r,n){return(Math.floor(r/2)+Math.floor(n/3))%2==0};case 5:return function(r,n){return r*n%2+r*n%3==0};case 6:return function(r,n){return(r*n%2+r*n%3)%2==0};case 7:return function(r,n){return(r*n%3+(r+n)%2)%2==0};default:throw Error("bad maskPattern:"+t)}},C:function(t){for(var r=b([1],0),n=0;n<t;n+=1)r=r.multiply(b([1,S.i(n)],0));return r},f:function(t,r){if(t!=4||1>r||40<r)throw Error("mode: "+t+"; type: "+r);return 10>r?8:16},D:function(t){for(var r=t.h(),n=0,i=0;i<r;i+=1)for(var l=0;l<r;l+=1){for(var v=0,E=t.a(i,l),u=-1;1>=u;u+=1)if(!(0>i+u||r<=i+u))for(var h=-1;1>=h;h+=1)0>l+h||r<=l+h||(u!=0||h!=0)&&E==t.a(i+u,l+h)&&(v+=1);5<v&&(n+=3+v-5)}for(i=0;i<r-1;i+=1)for(l=0;l<r-1;l+=1)v=0,t.a(i,l)&&(v+=1),t.a(i+1,l)&&(v+=1),t.a(i,l+1)&&(v+=1),t.a(i+1,l+1)&&(v+=1),(v==0||v==4)&&(n+=3);for(i=0;i<r;i+=1)for(l=0;l<r-6;l+=1)t.a(i,l)&&!t.a(i,l+1)&&t.a(i,l+2)&&t.a(i,l+3)&&t.a(i,l+4)&&!t.a(i,l+5)&&t.a(i,l+6)&&(n+=40);for(l=0;l<r;l+=1)for(i=0;i<r-6;i+=1)t.a(i,l)&&!t.a(i+1,l)&&t.a(i+2,l)&&t.a(i+3,l)&&t.a(i+4,l)&&!t.a(i+5,l)&&t.a(i+6,l)&&(n+=40);for(l=v=0;l<r;l+=1)for(i=0;i<r;i+=1)t.a(i,l)&&(v+=1);return n+=Math.abs(100*v/r/r-50)/5*10}};return c}(),S=function(){for(var s=Array(256),e=Array(256),c=0;8>c;c+=1)s[c]=1<<c;for(c=8;256>c;c+=1)s[c]=s[c-4]^s[c-5]^s[c-6]^s[c-8];for(c=0;255>c;c+=1)e[s[c]]=c;return{g:function(t){if(1>t)throw Error("glog("+t+")");return e[t]},i:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return s[t]}}}(),g=function(){function s(t,r){switch(r){case x.L:return e[4*(t-1)];case x.M:return e[4*(t-1)+1];case x.Q:return e[4*(t-1)+2];case x.H:return e[4*(t-1)+3]}}var e=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c={I:function(t,r){var n=s(t,r);if(typeof n>"u")throw Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+r);t=n.length/3,r=[];for(var i=0;i<t;i+=1)for(var l=n[3*i],v=n[3*i+1],E=n[3*i+2],u=0;u<l;u+=1){var h=E,o={};o.o=v,o.j=h,r.push(o)}return r}};return c}();return A}());const ht=QrCreator;var M=class extends Q{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&ht.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var p;return O`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((p=this.label)==null?void 0:p.length)>0?this.label:this.value}
        style=${pt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};M.styles=[U,ut];m([R("canvas")],M.prototype,"canvas",2);m([T()],M.prototype,"value",2);m([T()],M.prototype,"label",2);m([T({type:Number})],M.prototype,"size",2);m([T()],M.prototype,"fill",2);m([T()],M.prototype,"background",2);m([T({type:Number})],M.prototype,"radius",2);m([T({attribute:"error-correction"})],M.prototype,"errorCorrection",2);m([st(["background","errorCorrection","fill","radius","size","value"])],M.prototype,"generate",1);M.define("sl-qr-code");it.define("sl-spinner");var ft=j`
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
`,B=class extends Q{constructor(){super(...arguments),this.localize=new K(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return O`
      <span
        part="base"
        class=${Z({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?O`
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
    `}};B.styles=[U,ft];B.dependencies={"sl-icon-button":nt};m([T({reflect:!0})],B.prototype,"variant",2);m([T({reflect:!0})],B.prototype,"size",2);m([T({type:Boolean,reflect:!0})],B.prototype,"pill",2);m([T({type:Boolean})],B.prototype,"removable",2);B.define("sl-tag");async function dt(p){return k(`plugin:${p}|request_permissions`)}async function k(p,_={},A){return window.__TAURI_INTERNALS__.invoke(p,_,A)}var H;(function(p){p.QRCode="QR_CODE",p.UPC_A="UPC_A",p.UPC_E="UPC_E",p.EAN8="EAN_8",p.EAN13="EAN_13",p.Code39="CODE_39",p.Code93="CODE_93",p.Code128="CODE_128",p.Codabar="CODABAR",p.ITF="ITF",p.Aztec="AZTEC",p.DataMatrix="DATA_MATRIX",p.PDF417="PDF_417"})(H||(H={}));async function bt(p){return await k("plugin:barcode-scanner|scan",{...p})}async function _t(){return await dt("barcode-scanner").then(p=>p.camera)}export{H as F,mt as l,_t as r,bt as s};
