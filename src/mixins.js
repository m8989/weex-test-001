
// import weex from 'weex-vue-render';
// var navigator = weex.requireModule('navigator')
// var modal = weex.requireModule('modal')

// export default {
//     methods: {
//         // request(opt) {
//         //     const stream = weex.requireModule('stream');
//         //     const self = this;
//         //     let defaultOption = {
//         //         type: "get",
//         //         url: "",
//         //         data: {},
//         //         async: true,
//         //         timeout: 20000,
//         //         dataType: "json"
//         //     };
//         //     let option = self.extendObject(defaultOption, opt);
//         //     return new Promise((resolve, reject) => {
//         //         stream.fetch({
//         //             method: option.type,
//         //             url: self.apiDomain + option.url,
//         //             type: option.dataType,
//         //             //headers:{'content-type': 'application/json'},
//         //             body: option.data
//         //         }, (response) => {
//         //             if (response.ok) {
//         //                 resolve(response.data);
//         //             } else {
//         //                 reject(response)
//         //             }
//         //         }, () => {})
//         //     })
//         // },
//         goback(url) {
//             console.warn("mixin后退");
//             const self = this;
//             if (WXEnvironment.platform == "Web") {
//                 this.$router.back();
//             } else {
//                 console.warn("要用原生后退" + url);
//                 navigator.pop({
//                     animated: "true"
//                 }, event => {
//                     modal.toast({
//                         message: 'callback: ' + event
//                     })
//                 })
//             }

//         },
//         go(url) {
//             /*链接有三种情况：
//              * /product/20408.html  开发者定义跳转
//              * http://xiazhou.me/#/product/20408.html?from=banner  运维添加的链接
//              * http://xiazhou.me/blog/670.html?from=banner#tabs1   原生页面，一般native端都会做链接截取跳转对应页面
//              * */
//             console.warn("mixin跳到" + url);
//             if (!url || (url.indexOf('http') != 0 && url.indexOf('/') != 0)) {
//                 console.warn(url + "为非法的链接");
//                 return;
//             }
//             const self = this;
//             if (WXEnvironment.platform == "Web") {
//                 this.$router.push(url);
//             } else {
//                 console.warn("要用原生跳转到" + url);
//                 navigator.push({
//                     url: this.nativeUrl(url),
//                     animated: "true"
//                 }, event => {
//                     modal.toast({
//                         message: 'callback: ' + event
//                     })
//                 })
//             }
//         },
//         /**
//          * 用相对URL 生成原生使用的URL
//          * @param {*} url 
//          */
//         nativeUrl(url) {
//             //const curUrl = weex.config.bundleUrl;//看当前js的路径
//             const basePath = 'http://192.168.0.99:8081/dist'; //替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
//             if (url.indexOf('/') == 0) { //开发者定义跳转
//                 let js = `${basePath}${url}.js`;
//                 url = js + '?_wx_tpl=' + js;
//             }
//             return url;
//         },
//         vueUrl(url) {
//             if (url.indexOf('http') == 0 && url.indexOf('?_wx_tpl=') > 0) { //http开头,又有 ?_wx_tpl= 是完整的链接
//                 url = url.substr(url.indexOf('?_wx_tpl=') + 9);
//                 if (url.indexOf('/dist') == 0) { //开发者定义跳转
//                     url = url.substr(url.indexOf('/dist') + 5);
//                 }
//             }
//             return url;
//         }
//     }
// }