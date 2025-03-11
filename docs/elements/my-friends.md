# `<my-friends>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<my-friends>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/friends-zome/dist/elements/my-friends.js'
```

2. Use it in the html side of your web-app like this:


::: code-group
```html [Lit]
<my-friends>
</my-friends>
```

```html [React]
<my-friends>
</my-friends>
```

```html [Angular]
<my-friends>
</my-friends>
```

```html [Vue]
<my-friends>
</my-friends>
```

```html [Svelte]
<my-friends>
</my-friends>
```
:::

> [!WARNING]
> Like all the elements in this module, `<my-friends>` needs to be placed inside an initialized `<friends-context>`.

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
  if (!customElements.get('friends-context')) await import('../../ui/src/elements/friends-context.ts');
  if (!customElements.get('my-friends')) await import('../../ui/src/elements/my-friends.ts');

  const mock = new FriendsZomeMock();
  const client = new FriendsClient(mock, "friends_test");

  const store = new FriendsStore(client);
  
  render(html`
    <friends-context .store=${store}>
      <api-demo src="custom-elements.json" only="my-friends" exclude-knobs="store">
      </api-demo>
    </friends-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<my-friends>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="my-friends">
</api-docs>

