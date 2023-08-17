import { createApp } from "vue";
import App from "./App.vue";

import StencilTestUI from "@stencil-test/vue3";

createApp(App).use(StencilTestUI).mount("#app");
