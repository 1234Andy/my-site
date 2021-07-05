import "./mock";
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from './router';
import { showMessage } from './utils';
Vue.prototype.$showMessage = showMessage; 

// 注册全局指令 loading指令
import vLoading from "./directives/loading";
Vue.directive('loading',vLoading);

new Vue({
  router,
  render: (h) => h(App),
  
}).$mount('#app')


// 测试
import * as bolgApi from "./api/blog";

// bolgApi.getBlogTypes().then((r) => {
//   console.log(r)
// })

// bolgApi.getBlogs().then((r) => {
//   console.log(r)
// })