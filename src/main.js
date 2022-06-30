import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import LitepieDatepicker from "litepie-datepicker-tw3";
import "./index.css";
import "flowbite";

const app = createApp(App);

app.use(LitepieDatepicker);
app.use(createPinia());
app.use(router);

app.mount("#app");
