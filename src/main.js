import Vue from "vue";
import App from "./App.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component("LikeNumber", LikeNumber);
Vue.directive("border", (el, binding) => {
  el.style.border = `${binding.arg} ${binding.value.color} ${binding.value.width}`;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
