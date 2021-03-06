import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import http from "./http";
import Axios from "axios";

Vue.prototype.$http = http
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/rest'
Axios.defaults.headers.get['Content-Type'] = 'application/json';

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
