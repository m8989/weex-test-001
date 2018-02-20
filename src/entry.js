import Vue from 'vue';
import weex from 'weex-vue-render';
import router from '@/router.js'


// import render-core.
// import weex from 'weex-vue-render/dist/index.core';

// need to run `npm i weex-vue-slider weex-vue-stream --save` frist.
// import the plugins (components and modules) you want to use.
// import slider from 'weex-vue-slider';
// import stream from 'weex-vue-stream';

// install the plugins.
// weex.install(slider);
// weex.install(stream);

// //注册全局过滤器 mixins. 好象手机扫描调试不生效
// import mixins from '@/mixins.js'
// Vue.mixin(mixins)

// //注册全局过滤器
// import * as filters from '@/filters'
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

weex.init(Vue);

//下面部分要去configs\webpack.common.conf.js 改,每个vue页面才能都加入文件
//import router from '@/router.js'
// new Vue(Vue.util.extend({el:'#root',
//     router
// },App))
//router.push('/');//这里是为了默认加载内容,因为index.vue中仅仅使用了roter-view作为渲染模版,不然看上去会是空白的。
