import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入框架
import "@/plugins/antd";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
