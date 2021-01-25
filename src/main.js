
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import vSelect from 'vue-select'
import toggleDashboard from "./plugins/toggleDashboard";
import "vue-notifyjs/themes/default.css";
import './registerServiceWorker';
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "vue-select/dist/vue-select.css";
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueSweetalert2);
Vue.use(Buefy);
Vue.use(toggleDashboard);
Vue.component('v-select', vSelect)
new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount("#app");
