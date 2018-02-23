## weex 起手式,入门练手乱折腾的,说不定哪天就删除了
20180223  
vue-router 在手机上不好使,改用两者切换方安,参考了weex-vue-router




## 已知问题
 官网的web页可以触发点击事件(光标是圆点)
而我本地web不能触发,估计是打包时的版本不同或处理不同, 在html页上.
因为两者的js页单独打开都不能触发
手机扫码看正常


## 提问

如果你Fork的,一定要把回头帮帮我啊~~  




-----------------------------------------------

## Commands

### npm start

Starts the development server for you to preview your weex page on browser.
You can also scan the QR code using weex playground to preview weex page on native.

### npm run dev

Open the code compilation task in watch mode.

### npm run ios

(Mac only, requires Xcode)
Starts the development server and loads your app in an iOS simulator.

### npm run android

(Requires Android build tools)
Starts the development server and loads your app on a connected Android device or emulator.

### npm run pack:ios

(Mac only, requires Xcode)
Packaging ios project into ipa package.

### npm run pack:android

(Requires Android build tools)
Packaging android project into apk package.

### npm run pack:web

Packaging html5 project into `web/build` folder.

### npm run test

Starts the test runner.
