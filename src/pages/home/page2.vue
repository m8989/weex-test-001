<template>
  <div class="panel">
    <div class="panel">
      <text>这是第二页</text>
    </div>
    <div class="panel">

      <text @click="go('/home/page1')">
        跳到第1页。
      </text>
      <text @click="goback()">
        后退
      </text>
      <wxc-button text="跳到第1页" @wxcButtonClicked="wxcButtonClicked('/home/page1')"></wxc-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import { WxcButton } from 'weex-ui'
import myrouter from '../../auto-router.js';

//import mixins from '../../mixins.js'
//// register global mixins.
//import mixins from '../mixins'
//Vue.mixin(mixins)

//const stream = weex.requireModule('stream')
// function createURL(hash) {
//   const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
//   return `${url}?_wx_tpl=${url}`
// }
export default {
  //mixins: [mixins],
  data() {
    return {
      starCount: 'fetching...',
      //url: createURL('8e3c274f5cae4a391a14ac81c890325f')
    }
  },
  components: { WxcButton },
  methods: {
    goback(url) {
      myrouter.back(this);
    },
    go(url) {
      myrouter.push(this, url);
    },
    wxcButtonClicked(url) {
      console.warn("bt跳到" + url);
      this.go(url);
    }
  },
  created() {
    console.log("home载入了");
    console.log(this.$router);
  }
}
</script>

<style scoped>
.panel {
  width: 650px;
  margin-top: 200px;
  margin-left: 50px;
  justify-content: center;
}
.richtext {
  border-width: 2px;
  border-style: solid;
  border-color: #dddddd;
}
.grey {
  color: #888888;
  font-size: 24px;
}
.label {
  color: blue;
  font-size: 48px;
}
.text-bold {
  font-size: 50px;
  font-weight: 700;
}
.text-thin {
  font-size: 18px;
  font-weight: 100;
}
.link {
  color: rgb(0, 180, 255);
  font-size: 40px;
  text-decoration: underline;
}
.star-count {
  font-size: 48px;
  font-weight: 700;
}
</style>
