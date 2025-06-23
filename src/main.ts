import Vue from "vue";
import App from "./App.vue";
import "#/style.css";

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  el: "#app",
  render: (h) => h(App),
});
