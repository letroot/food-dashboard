import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";
import LitepieDatepicker from "litepie-datepicker-tw3";

import "./index.css";
import "flowbite";

const app = createApp(App);

app.use(LitepieDatepicker);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

app.use(pinia);
app.use(router);

app.mount("#app");
