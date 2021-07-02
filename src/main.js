import "./mock";
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from './router';
import { showMessage } from './utils';
Vue.prototype.$showMessage = showMessage;

import "./api/banner";
import { getBanners } from "./api/banner";

getBanners().then((r) => {
  console.log(r); 
})

new Vue({
  router,
  render: (h) => h(App),
  
}).$mount('#app')
