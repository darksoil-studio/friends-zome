import"./profile-list-item-skeleton.BpJUbgPN.js";import{e as c,d as m,r as y,S as P,A,x as d,t as g,i as v}from"./friends-client.BHFcpvB2.js";import{n,c as x,t as F,s as b}from"./property.CPxPeo4V.js";import{e as _,l as $,m as h,r as w}from"./display-error.B2Ls6KMv.js";import"./chunk.JGMXX6EB.Bvx4vYOP.js";import{o as C}from"./if-defined.xUC1_DA-.js";import{F as j}from"./chunk.K7OY4NWI.C2Wfknfq.js";import{S}from"./signal-watcher.D20SjYbO.js";import{f as O}from"./context.BbcyPs4I.js";import"./tslib.es6.kHcLnhpD.js";import"./commonjsHelpers.BosuxZz1.js";function q(e){return{attribute:e,type:Object,hasChanged:(t,i)=>(t==null?void 0:t.toString())!==(i==null?void 0:i.toString()),converter:{fromAttribute:t=>t&&t.length>0&&m(t),toAttribute:t=>t&&c(t)},reflect:!0}}var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor,u=(e,t,i,r)=>{for(var s=r>1?void 0:r?L(t,i):t,a=e.length-1,p;a>=0;a--)(p=e[a])&&(s=(r?p(t,i,s):p(s))||s);return r&&s&&D(t,i,s),s};let f=class extends S(y){constructor(){super(...arguments),this._searchFilter=new P.State(void 0),this._search=new A(()=>{const e=this._searchFilter.get();if(!e)return{status:"completed",value:[]};const t=this.store.friends.get();return t.status!=="completed"?t:{status:"completed",value:t.value.filter(r=>r.profile.name.startsWith(e))}})}set searchFilter(e){this._searchFilter.set(e)}get searchFilter(){return this._searchFilter.get()}async onFriendSelected(e){this.dispatchEvent(new CustomEvent("friend-selected",{detail:{friend:e},bubbles:!0,composed:!0}))}renderFriendList(){const e=this._searchFilter.get();if(!e||e.length<3)return d`<sl-menu-item disabled
				>${h("Enter at least 3 chars to search...")}</sl-menu-item
			>`;const t=this._search.get();switch(t.status){case"pending":return Array.from(Array(3)).map(()=>d`
						<sl-menu-item>
							<div class="row" style="display:flex; align-items: center">
								<sl-skeleton
									effect="sheen"
									slot="prefix"
									style="height: 32px; width: 32px; border-radius: 50%; margin: 8px"
								></sl-skeleton>
								<sl-skeleton
									effect="sheen"
									style="width: 100px; margin: 8px; border-radius: 12px"
								></sl-skeleton>
							</div>
						</sl-menu-item>
					`);case"error":return d`
					<display-error
						style="flex: 1; display:flex"
						tooltip
						.headline=${h("Error searching profiles")}
						.error=${t.error}
					></display-error>
				`;case"completed":{const i=t.value;return i.length===0?d`<sl-menu-item disabled>
						${h("No nicknames match the filter")}
					</sl-menu-item>`:d`
					${i.map(r=>d`
							<sl-menu-item .value=${c(r.agents[0])}>
								<sl-avatar
									slot="prefix"
									style="--size: 32px; margin-right: 16px"
									.image=${r.profile.avatar}
									.initials=${r.profile.name.slice(0,2)}
								></sl-avatar>
								${r.profile.name}
							</sl-menu-item>
						`)}
				`}}}render(){return d`
			<sl-dropdown
				id="dropdown"
				hoist
				style="flex: 1"
				.open=${C(this.open)}
			>
				<slot slot="trigger"></slot>
				<sl-menu
					@sl-select=${async e=>{const t=m(e.detail.item.value),r=(await g(this.store.friends)).find(s=>s.agents.find(a=>c(a)===c(t)));this.onFriendSelected(r)}}
				>
					${this.renderFriendList()}
				</sl-menu>
			</sl-dropdown>
		`}static get styles(){return[b,v`
				:host {
					display: flex;
				}
			`]}};u([n()],f.prototype,"open",2);u([x({context:O,subscribe:!0}),n()],f.prototype,"store",2);u([_("#dropdown")],f.prototype,"dropdown",2);f=u([$(),F("search-profile-dropdown")],f);var E=Object.defineProperty,B=Object.getOwnPropertyDescriptor,o=(e,t,i,r)=>{for(var s=r>1?void 0:r?B(t,i):t,a=e.length-1,p;a>=0;a--)(p=e[a])&&(s=(r?p(t,i,s):p(s))||s);return r&&s&&E(t,i,s),s};let l=class extends S(y){constructor(){super(...arguments),this.required=!1,this.disabled=!1,this.clearOnSelect=!1,this._controller=new j(this),this.searchFilter=""}reportValidity(){const e=this.required!==!1&&this.value===void 0;return e&&(this._textField.setCustomValidity("This field is required"),this._textField.reportValidity()),!e}async reset(){if(this.value=this.defaultValue,this.defaultValue){const t=(await g(this.store.friends)).find(i=>i.agents.find(r=>this.defaultValue.find(s=>c(r)===c(s))));this._textField.value=(t==null?void 0:t.profile.name)||""}else this._textField.value=""}onFriendSelected(e){this.value=e.agents,this.clearOnSelect?this._textField.value="":this._textField.value=e.profile.name,this.searchFilter=""}get _label(){let e=this.fieldLabel?this.fieldLabel:h("Search Friend");return this.required!==!1&&(e=`${e} *`),e}render(){return d`
			<div style="flex: 1; display: flex;">
				<search-profile-dropdown
					id="dropdown"
					.open=${this.searchFilter.length>=3}
					style="flex: 1"
					.searchFilter=${this.searchFilter}
					@friend-selected=${e=>this.onFriendSelected(e.detail.friend)}
				>
					<sl-input
						id="textfield"
						.label=${this._label}
						.placeholder=${h("At least 3 chars...")}
						@input=${e=>{this.searchFilter=e.target.value}}
					></sl-input>
				</search-profile-dropdown>
			</div>
		`}static get styles(){return[b,v`
				:host {
					display: flex;
				}
			`]}};o([n()],l.prototype,"name",2);o([n(q("default-value"))],l.prototype,"defaultValue",2);o([n()],l.prototype,"required",2);o([n()],l.prototype,"disabled",2);o([w()],l.prototype,"value",2);o([n({type:Boolean,attribute:"clear-on-select"})],l.prototype,"clearOnSelect",2);o([x({context:O,subscribe:!0}),n()],l.prototype,"store",2);o([n({type:String,attribute:"field-label"})],l.prototype,"fieldLabel",2);o([_("#textfield")],l.prototype,"_textField",2);o([w()],l.prototype,"searchFilter",2);l=o([$(),F("search-friend")],l);export{l as SearchFriend};
