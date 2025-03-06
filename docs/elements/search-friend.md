# `<search-friend>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<search-friend>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/friends-zome/dist/elements/search-friend.js'
```

2. Use it in the html side of your web-app like this:


::: code-group
```html [Lit]
<search-friend>
</search-friend>
```

```html [React]
<search-friend>
</search-friend>
```

```html [Angular]
<search-friend>
</search-friend>
```

```html [Vue]
<search-friend>
</search-friend>
```

```html [Svelte]
<search-friend>
</search-friend>
```
:::

> [!WARNING]
> Like all the elements in this module, `<search-friend>` needs to be placed inside an initialized `<friends-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { decodeHashFromBase64 } from '@holochain/client';
import { render, html } from "lit";

import { FriendsZomeMock  } from "../../ui/src/mocks.ts";
import { FriendsStore } from "../../ui/src/friends-store.ts";
import { FriendsClient } from "../../ui/src/friends-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('@darksoil-studio/profiles-zome/dist/elements/profiles-context.js');
  if (!customElements.get('friends-context')) await import('../../ui/src/elements/friends-context.ts');
  if (!customElements.get('search-friend')) await import('../../ui/src/elements/search-friend.ts');

  const mock = new FriendsZomeMock();
  const client = new FriendsClient(mock, "friends_test");

  const store = new FriendsStore(client);
  
  render(html`
    <friends-context .store=${store}>
      <api-demo src="custom-elements.json" only="search-friend" exclude-knobs="store">
      </api-demo>
    </friends-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<search-friend>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="search-friend">
</api-docs>

