import{o as m}from"./join.BQFQqXPz.js";import{e as d,x as l,d as p,r as v,i as g}from"./friends-client.dn7e3wvF.js";import{s as h,c as y,a as x,f as b,t as $}from"./context.a7Ifszyp.js";import{S as q,w as F,m as a,n as f,a as w,l as _}from"./display-error.Bxcgbtnr.js";import"./tslib.es6.kHcLnhpD.js";import"./commonjsHelpers.BosuxZz1.js";var j=Object.defineProperty,O=Object.getOwnPropertyDescriptor,u=(r,i,n,s)=>{for(var e=s>1?void 0:s?O(i,n):i,t=r.length-1,o;t>=0;t--)(o=r[t])&&(e=(s?o(i,n,e):o(e))||e);return s&&e&&j(i,n,e),e};let c=class extends q(v){renderList(r){const i=Object.entries(r).filter(([n,s])=>d(s.author)!==d(this.store.client.client.myPubKey));return Object.keys(i).length===0?l`
				<div
					class="column placeholder center-content"
					style="gap: 8px; flex: 1"
				>
					<sl-icon
						.src=${F(w)}
						style="font-size: 64px;"
					></sl-icon>
					<span style="text-align: center"
						>${a("You don't have pending friend requests.")}</span
					>
				</div>
			`:l`
			<div class="column" style="flex: 1;">
				${m(i.map(([n,s])=>l`
							<div
								class="row"
								style="align-items: center; gap: 8px; margin: 8px"
							>
								<span style="flex: 1"
									>${s.event.content.from_name}</span
								>
								<sl-button
									@click=${async e=>{const t=e.target;t.loading=!0;try{await this.store.client.rejectFriendRequest(p(n))}catch(o){console.error(o),f(a("Failed to reject the friend request."))}t.loading=!1}}
									variant="danger"
									>${a("Reject")}</sl-button
								>
								<sl-button
									@click=${async e=>{const t=e.target;t.loading=!0;try{await this.store.client.acceptFriendRequest(p(n))}catch(o){console.error(o),f(a("Failed to accept the friend request."))}t.loading=!1}}
									variant="primary"
									>${a("Accept")}</sl-button
								>
							</div>
						`),()=>l`<sl-divider></sl-divider>`)}
			</div>
		`}render(){const r=this.store.pendingFriendRequests.get();switch(r.status){case"pending":return l`<div class="column center-content">
					<profile-list-item-skeleton> </profile-list-item-skeleton>
					<sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton
					><sl-divider></sl-divider>
					<profile-list-item-skeleton> </profile-list-item-skeleton>
				</div>`;case"error":return l`<display-error
					.headline=${a("Error fetching the profiles for all agents")}
					.error=${r.error}
				></display-error>`;case"completed":return this.renderList(r.value)}}};c.styles=[h,g`
			:host {
				display: flex;
			}
		`];u([y({context:b,subscribe:!0}),x()],c.prototype,"store",2);c=u([_(),$("friend-requests")],c);export{c as FriendRequests};
