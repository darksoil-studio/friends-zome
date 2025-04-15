import{o as d}from"./join.CXbPOxnh.js";import{x as o,d as p,r as m,i as v}from"./friends-client.5A5PdhbK.js";import{s as g,c as h,a as y,f as x,t as b}from"./context.BXTwhUYa.js";import{S as $,w as j,m as a,n as f,a as w,l as O}from"./display-error.mDQYVCNz.js";import"./tslib.es6.kHcLnhpD.js";import"./commonjsHelpers.BosuxZz1.js";function q(r,i){{const e=r.find(t=>t&&t.status==="error");if(e)return e}{const e=r.find(t=>t&&t.status==="pending");if(e)return e}return{status:"completed",value:r.filter(e=>e.status==="completed").map(e=>e.value)}}var _=Object.defineProperty,F=Object.getOwnPropertyDescriptor,u=(r,i,n,e)=>{for(var t=e>1?void 0:e?F(i,n):i,s=r.length-1,l;s>=0;s--)(l=r[s])&&(t=(e?l(i,n,t):l(t))||t);return e&&t&&_(i,n,t),t};let c=class extends $(m){renderList(r,i){return Object.keys(r).length+Object.keys(i).length===0?o`
				<div
					class="column placeholder center-content"
					style="gap: 8px; flex: 1"
				>
					<sl-icon
						.src=${j(w)}
						style="font-size: 64px;"
					></sl-icon>
					<span style="text-align: center"
						>${a("You don't have pending friend requests.")}</span
					>
				</div>
			`:o`
			<div class="column" style="flex: 1;">
				${d(Object.entries(r).map(([n,e])=>o`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<span style="flex: 1"
									>${e.event.content.from_name}</span
								>
								<sl-button
									@click=${async t=>{const s=t.target;s.loading=!0;try{await this.store.client.rejectFriendRequest(p(n))}catch(l){console.error(l),f(a("Failed to reject the friend request."))}s.loading=!1}}
									variant="danger"
									>${a("Reject")}</sl-button
								>
								<sl-button
									@click=${async t=>{const s=t.target;s.loading=!0;try{await this.store.client.acceptFriendRequest(p(n))}catch(l){console.error(l),f(a("Failed to accept the friend request."))}s.loading=!1}}
									variant="primary"
									>${a("Accept")}</sl-button
								>
							</div>
						`),()=>o`<sl-divider></sl-divider>`)}
				${d(Object.entries(i).map(([n,e])=>o`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<span style="flex: 1"
									>${e.event.content.to_name}</span
								>
								<sl-tag>${a("Awaiting response")} </sl-tag>
							</div>
						`),()=>o`<sl-divider></sl-divider>`)}
			</div>
		`}render(){const r=q([this.store.incomingFriendRequests.get(),this.store.outgoingFriendRequests.get()]);switch(r.status){case"pending":return o`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;case"error":return o`<display-error
					.headline=${a("Error fetching the profiles for all agents")}
					.error=${r.error}
				></display-error>`;case"completed":return this.renderList(r.value[0],r.value[1])}}};c.styles=[g,v`
			:host {
				display: flex;
			}
		`];u([h({context:x,subscribe:!0}),y()],c.prototype,"store",2);c=u([O(),b("friend-requests")],c);export{c as FriendRequests};
