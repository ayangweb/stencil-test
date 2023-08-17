import { defineCustomElements, applyPolyfills } from "stencil-test/loader";

const StencilTestUI = {
	install() {
		applyPolyfills().then(() => defineCustomElements());
	},
};

export default StencilTestUI;
