import { applyPolyfills, defineCustomElements } from "stencil-test/loader";
import type { Plugin } from "vue";

const toKebabCase = (eventName: string) => {
	if (!eventName) return;

	return eventName
		.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
		.toLowerCase();
};

const StencilTestUI: Plugin = {
	async install() {
		applyPolyfills().then(() => {
			defineCustomElements(window, {
				ael: (el: any, eventName: string, cb: any, opts: any) =>
					el.addEventListener(toKebabCase(eventName), cb, opts),
				rel: (el: any, eventName: string, cb: any, opts: any) =>
					el.removeEventListener(toKebabCase(eventName), cb, opts),
				ce: (eventName: string, opts: any) =>
					new CustomEvent(toKebabCase(eventName), opts),
			} as any);
		});
	},
};

export default StencilTestUI;
