import Vue from "vue";
import App from "./App.vue";

import StencilTestUI from "@stencil-test/vue2";

Vue.use(StencilTestUI);

new Vue({
	render: (h) => h(App),
}).$mount("#app");
