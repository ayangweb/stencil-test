import { applyPolyfills, defineCustomElements } from "stencil-test/loader";
import type { Plugin } from "vue";

const StencilTestUI: Plugin = {
	async install() {
		applyPolyfills().then(() => {
			defineCustomElements();
		});
	},
};

export default StencilTestUI;
