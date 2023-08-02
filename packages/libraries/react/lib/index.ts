import { applyPolyfills, defineCustomElements } from "stencil-test/loader";

applyPolyfills().then(() => defineCustomElements());

export * from "./components/stencil-generated";
