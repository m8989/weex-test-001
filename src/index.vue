<template>
  <div @androidback="back">
    <div class="tabbar">
      <div class="tab">
        <text>总页面</text>
      </div>
      <div class="tab">
        <text @click="jump('/home/page1')">01</text>
      </div>

      <div class="tab">
        <text @click="jump('/home/page2')">02</text>
      </div>

      <div class="tab">
        <text @click="jump('/home/page3')">03</text>
      </div>

    </div>

    <router-view class="routerview" style="flex:1"></router-view>
  </div>
</template>

<script>

import { WxcButton } from 'weex-ui'
import router from './router.js';

export default {

  components: { WxcButton },
  data() {
    return {
      selectedPath: '/home',

    }
  },
  methods: {
    back: function () {
      this.$router.back()
    },
    // 跳转
    jump: function (url) {
      console.warn("跳到" + url);
      console.warn(this.$router);
      if (WXEnvironment.platform == "Web") {
        this.$router.push(url);
      } else {
        console.warn("要用原生跳转到" + url);
        router.push('/');
      }

      this.selectedPath = url;
    }
  },
  created() {
    console.log("载入了App-index");
    console.warn(this.$router);
    console.log("WXEnvironment", WXEnvironment);
    if (WXEnvironment.platform == "Web") {
      this.$router.push('/')
    } else {
      console.warn("要用原生跳转到" + url);
      router.push('/');
    }

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