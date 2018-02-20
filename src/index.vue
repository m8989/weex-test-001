<template>
  <div @androidback="goback">
    <div class="tabbar">
      <div class="tab">
        <text>总页面</text>
      </div>
      <div class="tab">
        <text @click="go('/home/page1')">01</text>
      </div>

      <div class="tab">
        <text @click="go('/home/page2')">02</text>
      </div>

      <div class="tab">
        <text @click="go('/home/page3')">03</text>
      </div>

    </div>

    <router-view class="routerview" style="flex:1"></router-view>
  </div>
</template>

<script>
//import weex from 'weex-vue-render';
import { WxcButton } from 'weex-ui';
import router from './router.js';
var navigator = weex.requireModule('navigator');
var modal = weex.requireModule('modal');
//import mixins from './mixins.js'

export default {
  //mixins:[mixins],
  components: { WxcButton },
  data() {
    return {
      selectedPath: '/home'
    }
  },
  methods: {

    goback(url) {
      /*链接有三种情况：
       * /product/20408.html  开发者定义跳转
       * http://xiazhou.me/#/product/20408.html?from=banner  运维添加的链接
       * http://xiazhou.me/blog/670.html?from=banner#tabs1   原生页面，一般native端都会做链接截取跳转对应页面
       * */
      console.warn("后退");
      const self = this;
      if (WXEnvironment.platform == "Web") {
        this.$router.back();
      } else {
        console.warn("要用原生后退" + url);
        navigator.pop({
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + event })
        })
      }

      // //const nativeEvent = weex.requireModule('nativeEvent');//native端必须扩展这个模块才能正常运行
      // let go = to => {
      //     self.$router.push(to);
      // };
      // url.indexOf('/') == 0 && go(url); //开发者定义跳转
      // url.indexOf('http') == 0 && url.indexOf('/#/') > 0 && go(url.substr(url.indexOf('#') + 1)); //运维添加的链接
      // //url.indexOf('http') == 0 && url.indexOf('/#/') == -1 && nativeEvent.skip(url); //原生页面//native端必须扩展这个模块才能正常运行
    },
    go(url) {
      /*链接有三种情况：
       * /product/20408.html  开发者定义跳转
       * http://xiazhou.me/#/product/20408.html?from=banner  运维添加的链接
       * http://xiazhou.me/blog/670.html?from=banner#tabs1   原生页面，一般native端都会做链接截取跳转对应页面
       * */
      console.warn("index跳到" + url);
      if (!url || (url.indexOf('http') != 0 && url.indexOf('/') != 0)) {
        console.warn(url + "为非法的链接");
        return;
      }
      const self = this;
      if (WXEnvironment.platform == "Web") {
        this.$router.push(url);
      } else {
        console.warn("要用原生跳转到" + url);
        navigator.push({
          url: this.nativeUrl(url),
          animated: "true"
        }, event => {
          modal.toast({ message: 'callback: ' + event })
        })
      }

      // //const nativeEvent = weex.requireModule('nativeEvent');//native端必须扩展这个模块才能正常运行
      // let go = to => {
      //     self.$router.push(to);
      // };
      // url.indexOf('/') == 0 && go(url); //开发者定义跳转
      // url.indexOf('http') == 0 && url.indexOf('/#/') > 0 && go(url.substr(url.indexOf('#') + 1)); //运维添加的链接
      // //url.indexOf('http') == 0 && url.indexOf('/#/') == -1 && nativeEvent.skip(url); //原生页面//native端必须扩展这个模块才能正常运行
    },
    /**
     * 用相对URL 生成原生使用的URL
     * @param {*} url 
     */
    nativeUrl(url) {
      //const curUrl = weex.config.bundleUrl;//看当前js的路径
      const basePath = 'http://192.168.0.99:8081/dist/pages';//替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
      if (url.indexOf('/') == 0) { //开发者定义跳转
        let js = `${basePath}${url}.js`;
        url = js + '?_wx_tpl=' + js;
      }
      return url;
    },
    vueUrl(url) {
      if (url.indexOf('http') == 0 && url.indexOf('?_wx_tpl=') > 0) { //http开头,又有 ?_wx_tpl= 是完整的链接
        url = url.substr(url.indexOf('?_wx_tpl=') + 9);
        if (url.indexOf('/dist') == 0) { //开发者定义跳转
          url = url.substr(url.indexOf('/dist') + 5);
        }
      }
      return url;
    }
  },
  created() {
    console.error("载入了App-index");
    var modal = weex.requireModule('modal')
    modal.toast({
        message: 'This is a toast',
        duration: 0.3
    })

    console.warn(this.$router);
    console.log("WXEnvironment", WXEnvironment);
    if (WXEnvironment.platform == "Web") {
      this.$router.push('/')
    } else {
      console.warn("要用原生跳转到" + url);
      this.go('/hpome/page1');
    }
    console.warn(this.go);

  }
}

</script>
<style scoped>
.routerview {
  border-width: 2px;
  border-style: solid;
  border-color: #dd0000;
}
.nav-item-selected {
  font-weight: bold;
}
.tabbar {
  flex-direction: row;
  background-color: #ff4563;
}
.tab {
  height: 120px;
  width: 150px;
  justify-content: center;
  align-items: center;
}
</style>