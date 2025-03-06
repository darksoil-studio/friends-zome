import{a,e as f}from"./context.Bkj8EDfc.js";import{c as d,n as c,t as m}from"./property.CPxPeo4V.js";import{r as x,b as h,a as u,x as y,i as v}from"./friends-client.BHFcpvB2.js";import{f as C}from"./context.BbcyPs4I.js";import"./commonjsHelpers.BosuxZz1.js";var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(l,o,s,n)=>{for(var e=n>1?void 0:n?w(o,s):o,i=l.length-1,p;i>=0;i--)(p=l[i])&&(e=(n?p(o,s,e):p(e))||e);return n&&e&&b(o,s,e),e};let t=class extends x{constructor(){super(...arguments),this.zome="friends"}connectedCallback(){if(super.connectedCallback(),!this.store){if(!this.role)throw new Error('<friends-context> must have a role="YOUR_DNA_ROLE" property, eg: <friends-context role="role1">');if(!this.client)throw new Error(`<friends-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <friends-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <friends-context .store=\${store}>)
      `);this.store=new h(new u(this.client,this.role,this.zome))}}render(){return y`<slot></slot>`}};t.styles=v`
		:host {
			display: contents;
		}
	`;r([d({context:a})],t.prototype,"client",2);r([f({context:C}),c({type:Object})],t.prototype,"store",2);r([c()],t.prototype,"role",2);r([c()],t.prototype,"zome",2);t=r([m("friends-context")],t);export{t as FriendsContext};
