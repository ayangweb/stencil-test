import type { PluginObject } from "vue";
import { defineCustomElements, applyPolyfills } from "stencil-test/loader";

const kebabCase = (eventName: string) => {
	if (!eventName) return;

	return eventName
		.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
		.toLowerCase();
};

const StencilTestUI: PluginObject<void> = {
	install() {
		applyPolyfills().then(() =>
			defineCustomElements(window, {
				ael: (el: any, eventName: string, cb: any, opts: any) =>
					el.addEventListener(kebabCase(eventName), cb, opts),
				rel: (el: any, eventName: string, cb: any, opts: any) =>
					el.removeEventListener(kebabCase(eventName), cb, opts),
				ce: (eventName: string, opts: any) =>
					new CustomEvent(kebabCase(eventName), opts),
			} as any)
		);
	},
};

export default StencilTestUI;
