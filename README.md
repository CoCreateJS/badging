# CoCreate Badging

Browser app badge API helpers.

## Install

```sh
yarn add @cocreate/badging
```

## API

The module exports the browser capability as `CoCreate.badging` and as an ES module API:

```js
import Badging from "@cocreate/badging";

await Badging.setBadge(3); // Show a count
await Badging.setBadge(); // Show a dot without a count
await Badging.clearBadge();
```

`isSupported()` reports whether both browser methods are available. Browser and platform support varies.

The API-only entry has no page or Actions dependency, so it can also be imported by a service worker:

```js
import { setBadge, clearBadge } from "@cocreate/badging/src/api.js";

await setBadge(unreadCount);
if (unreadCount === 0) await clearBadge();
```

## Actions

Load the module, then use its registered action methods:

```html
<button actions="badging.setBadge(3)">Set unread count</button>
<button actions="badging.setBadge">Set attention dot</button>
<button actions="badging.clearBadge">Clear app badge</button>
```

The action names can be called from any CoCreate event flow that triggers an element with the `actions` attribute. Keep the badge synchronized with the app's actual unread state; opening the page alone does not mean that the user has read everything.

See [`demo/index.html`](demo/index.html) and [the documentation](docs/index.html).
