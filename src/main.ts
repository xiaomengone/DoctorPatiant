import { createApp } from "vue";
import "vant/lib/index.css";
import "./styles/main.scss";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import "virtual:svg-icons-register";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");

console.log("所在环境", import.meta.env.VITE_APP_CALLBACK);
