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
import myrouter from './auto-router.js';
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
      myrouter.back(this);

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
      // var modal = weex.requireModule('modal')
      // modal.toast({
      //   message: '跳到'+ JSON.stringify(url),
      //   duration: 5.3
      // })
      //console.warn("============================");
      //console.warn(this.$myrouter);
      //this.$myrouter.push(url);
      myrouter.push(this, url);
      // //const nativeEvent = weex.requireModule('nativeEvent');//native端必须扩展这个模块才能正常运行
      // let go = to => {
      //     self.$router.push(to);
      // };
      // url.indexOf('/') == 0 && go(url); //开发者定义跳转
      // url.indexOf('http') == 0 && url.indexOf('/#/') > 0 && go(url.substr(url.indexOf('#') + 1)); //运维添加的链接
      // //url.indexOf('http') == 0 && url.indexOf('/#/') == -1 && nativeEvent.skip(url); //原生页面//native端必须扩展这个模块才能正常运行
    },

  },
  created() {
    console.error("载入了App-index");
    // var modal = weex.requireModule('modal')
    // modal.toast({
    //   message: '跳到'+ JSON.stringify(url),
    //   duration: 5.3
    // })

    var modal = weex.requireModule('modal')
    modal.toast({
      message: '进到mounted' + JSON.stringify(WXEnvironment),
      duration: 2.3
    })
    console.log("WXEnvironment", WXEnvironment);
    if (WXEnvironment.platform == "Web") {
      this.$router.push('/')
    } else {
      //console.warn("要用原生跳转到" + url);
      //myrouter.push(this,'/home/page1');
      this.go('/home/page1');
    }

  },
  mounted() {


    //console.warn(this.go);
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