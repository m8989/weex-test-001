import Vue from 'vue'
import Router from 'vue-router'
//将Vue-router集成到Vue中
Vue.use(Router);
import routes from './native-router.js';


//提供默认对外接口
export default new Router({
  // mode: 'abstract',
  routes: routes
});

// Vue.use(autorouter, {
//   routes,
//   weex
// })
