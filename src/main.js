import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
