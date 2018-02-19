import Vue from 'vue'
import Router from 'vue-router'
//将Vue-router集成到Vue中
Vue.use(Router);
import HomePage1 from './pages/home/page1.vue'
import HomePage2 from './pages/home/page2.vue'
// import StoriesView from './views/StoriesView.vue'
// import ArticleView from './views/ArticleView.vue'
// import CommentView from './views/CommentView.vue'
// import UserView from './views/UserView.vue'

//import mixins from './mixins.js'
//// register global mixins.
//import mixins from '../mixins'
//Vue.mixin(mixins)

// // Story view factory
// function createStoriesView(type) {
//   return {
//     name: `${type}-stories-view`,
//     render(createElement) {
//       return createElement(StoriesView, {
//         props: {
//           type
//         }
//       })
//     }
//   }
// }

//提供默认对外接口
export default new Router({
  // mode: 'abstract',
  routes: [
    {
      name: 'default_home',
      path: '/',
      redirect: '/home/page1'
    },
    {
      path: '/home/page1',
      component: HomePage1
    }, {
      path: '/home/page2',
      component: HomePage2
    },
    // { path: '/top', component: createStoriesView('top') },
    // { path: '/new', component: createStoriesView('new') },
    // { path: '/show', component: createStoriesView('show') },
    // { path: '/ask', component: createStoriesView('ask') },
    // { path: '/job', component: createStoriesView('job') },
    // { path: '/article/:url(.*)?', component: ArticleView },
    // { path: '/item/:id(\\d+)', component: CommentView },
    // { path: '/user/:id', component: UserView },

  ]
});