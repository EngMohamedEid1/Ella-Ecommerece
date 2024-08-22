import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// pinia
import { createPinia } from "pinia";

// swiper
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

createApp(App).use(createPinia()).use(router).mount("#app");
