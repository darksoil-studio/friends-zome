const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.DNHmXKYU.js","assets/chunks/api-viewer-tabs.CX3g7Nrf.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.HXDE9Rl5.js","assets/chunks/friends-context.Ca9kpOuw.js","assets/chunks/context.BayuDQ0X.js","assets/chunks/context.Bj0aUWzG.js","assets/chunks/friends-client.pzzTMS1Y.js","assets/chunks/commonjsHelpers.BosuxZz1.js","assets/chunks/profile-prompt.D_GLxf0P.js","assets/chunks/display-error.DbBI8pmS.js","assets/chunks/chunk.HLJ2JR6P.CvG59fEz.js"])))=>i.map(i=>d[i]);
import{v as a,V as t,c as l,o as p,a2 as n,j as o}from"./chunks/framework.B-PCKPf3.js";import{F as r,a as h,b as d,B as c,x as k}from"./chunks/friends-client.pzzTMS1Y.js";import"./chunks/commonjsHelpers.BosuxZz1.js";const f=JSON.parse('{"title":"<profile-prompt>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/profile-prompt.md","filePath":"elements/profile-prompt.md"}'),m={name:"elements/profile-prompt.md"},y=Object.assign(m,{setup(g){return a(async()=>{await t(()=>import("./chunks/api-docs.DNHmXKYU.js"),__vite__mapDeps([0,1,2])),await t(()=>import("./chunks/api-demo.HXDE9Rl5.js"),__vite__mapDeps([3,1,2])),customElements.get("friends-context")||await t(()=>import("./chunks/friends-context.Ca9kpOuw.js"),__vite__mapDeps([4,5,6,7,8])),customElements.get("profile-prompt")||await t(()=>import("./chunks/profile-prompt.D_GLxf0P.js"),__vite__mapDeps([9,5,6,7,8,10,2,11]));const i=new r,e=new h(i,"friends_test"),s=new d(e);c(k`
    <friends-context .store=${s}>
      <api-demo src="custom-elements.json" only="profile-prompt" exclude-knobs="store">
      </api-demo>
    </friends-context>
  `,document.querySelector("element-demo"))}),(i,e)=>(p(),l("div",null,e[0]||(e[0]=[n("",12),o("api-docs",{src:"custom-elements.json",only:"profile-prompt"},null,-1)])))}});export{f as __pageData,y as default};
