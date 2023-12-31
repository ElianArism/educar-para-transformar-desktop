import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/scss/bootstrap.scss";

createApp(App).use(store).use(router).mount("#app");
