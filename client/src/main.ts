import { createApp } from "vue";
import App from "./App.vue";
import media from "./media";
import router from "./router";
import store from "./store";
import "./styles/index.scss";

const app = createApp(App);
app.use(router);
app.use(store);
app.directive("media", media); // to remove
app.mount("#app");
