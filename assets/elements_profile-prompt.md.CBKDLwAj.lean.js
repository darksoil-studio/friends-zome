const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/api-docs.DNHmXKYU.js","assets/chunks/api-viewer-tabs.CX3g7Nrf.js","assets/chunks/tslib.es6.kHcLnhpD.js","assets/chunks/api-demo.HXDE9Rl5.js","assets/chunks/friends-context.DTfvULLr.js","assets/chunks/context.MzCdc8Vh.js","assets/chunks/context.DkJWIMN7.js","assets/chunks/friends-client.D4zYoAMY.js","assets/chunks/commonjsHelpers.BosuxZz1.js","assets/chunks/profile-prompt.CFdbZ6hG.js","assets/chunks/display-error.DE2mv8Eq.js","assets/chunks/chunk.HLJ2JR6P.CYepkt3z.js"])))=>i.map(i=>d[i]);
import{v as a,V as i,c as l,o as p,a2 as n,j as o}from"./chunks/framework.B-PCKPf3.js";import{F as r,a as h,b as d,B as c,x as k}from"./chunks/friends-client.D4zYoAMY.js";import"./chunks/commonjsHelpers.BosuxZz1.js";const f=JSON.parse('{"title":"<profile-prompt>","description":"","frontmatter":{},"headers":[],"relativePath":"elements/profile-prompt.md","filePath":"elements/profile-prompt.md"}'),m={name:"elements/profile-prompt.md"},y=Object.assign(m,{setup(E){return a(async()=>{await i(()=>import("./chunks/api-docs.DNHmXKYU.js"),__vite__mapDeps([0,1,2])),await i(()=>import("./chunks/api-demo.HXDE9Rl5.js"),__vite__mapDeps([3,1,2])),customElements.get("friends-context")||await i(()=>import("./chunks/friends-context.DTfvULLr.js"),__vite__mapDeps([4,5,6,7,8])),customElements.get("profile-prompt")||await i(()=>import("./chunks/profile-prompt.CFdbZ6hG.js"),__vite__mapDeps([9,5,6,7,8,10,2,11]));const t=new r,e=new h(t,"friends_test"),s=new d(e);c(k`
    <friends-context .store=${s}>
      <api-demo src="custom-elements.json" only="profile-prompt" exclude-knobs="store">
      </api-demo>
    </friends-context>
  `,document.querySelector("element-demo"))}),(t,e)=>(p(),l("div",null,e[0]||(e[0]=[n("",12),o("api-docs",{src:"custom-elements.json",only:"profile-prompt"},null,-1)])))}});export{f as __pageData,y as default};
