
import HomePage1 from './pages/home/page1.vue'
import HomePage2 from './pages/home/page2.vue'


//native-router.js
const jsDomain = 'http://192.168.0.99:8081/dist/pages';


const routes = [{
    name: 'default_home',
    path: '/',
    redirect: '/home/page1',
    bundle: jsDomain + '/home/page1.js',
  },
  {
    path: '/home/page1',
    component: HomePage1,
    //原生跳转需要用到js bundle地址,有.js
    bundle: jsDomain + '/home/page1.js',

  }, {
    path: '/home/page2',
    component: HomePage2,
    bundle: jsDomain + '/home/page2.js',
  },


];
//提供默认对外接口
export default routes;