/**
 * Combined index of all the modules.
 */
export * from "@tangle-frost/iota-core";
export * from "@tangle-frost/iota-qr-core";
export * from "@tangle-frost/iota-qr-render";
export * from "@tangle-frost/iota-qr-data";

import { initRender } from "@tangle-frost/iota-qr-render";

initRender();