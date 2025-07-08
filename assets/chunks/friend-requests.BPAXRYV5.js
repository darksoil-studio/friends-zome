import{s as y,c as h,a as $,f as b,t as w}from"./context.nxAsj1gS.js";import{x as a,d,r as x,i as q}from"./friends-client.DqGVcibm.js";import{S as j,w as m,m as r,n as p,s as F,a as O,b as R,l as _}from"./chunk.NYIIDP5N.BIguUsWJ.js";import{o as f}from"./join.Bh3q1C9d.js";import"./commonjsHelpers.BosuxZz1.js";import"./tslib.es6.kHcLnhpD.js";function k(s,l){{const t=s.find(e=>e&&e.status==="error");if(t)return t}{const t=s.find(e=>e&&e.status==="pending");if(t)return t}return{status:"completed",value:s.filter(t=>t.status==="completed").map(t=>t.value)}}var C=Object.defineProperty,S=Object.getOwnPropertyDescriptor,g=(s,l,o,t)=>{for(var e=t>1?void 0:t?S(l,o):l,n=s.length-1,i;n>=0;n--)(i=s[n])&&(e=(t?i(l,o,e):i(e))||e);return t&&e&&C(l,o,e),e};let c=class extends j(x){renderList(s,l){return Object.keys(s).length+Object.keys(l).length===0?a`
				<div
					class="column placeholder center-content"
					style="gap: 8px; flex: 1"
				>
					<sl-icon
						.src=${m(O)}
						style="font-size: 64px;"
					></sl-icon>
					<span style="text-align: center"
						>${r("You don't have pending friend requests.")}</span
					>
				</div>
			`:a`
			<div class="column" style="flex: 1;">
				${f(Object.entries(s).map(([o,t])=>a`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<span style="flex: 1"
									>${t.payload.content.event.from_name}</span
								>
								<sl-button
									@click=${async e=>{const n=e.target;n.loading=!0;try{await this.store.client.rejectFriendRequest(d(o))}catch(i){console.error(i),p(r("Failed to reject the friend request."))}n.loading=!1}}
									variant="danger"
									>${r("Reject")}</sl-button
								>
								<sl-button
									@click=${async e=>{const n=e.target;n.loading=!0;try{await this.store.client.acceptFriendRequest(d(o))}catch(i){console.error(i),p(r("Failed to accept the friend request."))}n.loading=!1}}
									variant="primary"
									>${r("Accept")}</sl-button
								>
							</div>
						`),()=>a`<sl-divider></sl-divider>`)}
				${f(Object.entries(l).map(([o,t],e)=>a`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<span style="flex: 1"
									>${t.payload.content.event.to_name}</span
								>
								<div class="row" style="align-items: center">
									<sl-tag>${r("Awaiting response")} </sl-tag>

									<sl-dropdown>
										<sl-icon-button
											slot="trigger"
											.src=${m(R)}
											style="font-size: 1.4rem"
										></sl-icon-button>
										<sl-menu>
											<sl-menu-item
												@click=${()=>this.shadowRoot.querySelector("sl-dialog").show()}
												>${r("Cancel Request")}
											</sl-menu-item>
										</sl-menu>
									</sl-dropdown>
									<sl-dialog
										id="dialog-${e}"
										.label=${r("Cancel Friend Request")}
									>
										<div class="column" style="gap: 12px">
											<span
												>${r(F`Are you sure you want to cancel the friend request to ${t.payload.content.event.to_name}?`)}</span
											>
										</div>
										<sl-button
											slot="footer"
											@click=${()=>this.shadowRoot.getElementById(`dialog-${e}`).hide()}
											>${r("Cancel")}</sl-button
										>
										<sl-button
											slot="footer"
											variant="danger"
											@click=${async n=>{var u;const i=n.target;i.loading=!0;try{await this.store.client.cancelFriendRequest(d(o))}catch(v){p(r("Failed to cancel friend request.")),console.error(v)}(u=this.shadowRoot.getElementById(`dialog-${e}`))==null||u.hide(),i.loading=!1}}
											>${r("Cancel Friend Request")}</sl-button
										>
									</sl-dialog>
								</div>
							</div>
						`),()=>a`<sl-divider></sl-divider>`)}
			</div>
		`}render(){const s=k([this.store.incomingFriendRequests.get(),this.store.outgoingFriendRequests.get()]);switch(s.status){case"pending":return a`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;case"error":return a`<display-error
					.headline=${r("Error fetching the profiles for all agents")}
					.error=${s.error}
				></display-error>`;case"completed":return this.renderList(s.value[0],s.value[1])}}};c.styles=[y,q`
			:host {
				display: flex;
			}
		`];g([h({context:b,subscribe:!0}),$()],c.prototype,"store",2);c=g([_(),w("friend-requests")],c);export{c as FriendRequests};
