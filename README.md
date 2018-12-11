# applets
这是一个小程序

该项目使用了mpVue框架,使用flyio发起网络请求

安装flyio
```
npm install flyio --save
```

在mpvue 中您也可以将fly实例挂在vue原型上，这样就可以在任何组件中通过this方便的调用：
```
var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly
... //添加全局配置、拦截器等
Vue.prototype.$http=fly //将fly实例挂在vue原型上
```

创建一个基于 mpvue-quickstart 模板的新项目
```
vue init mpvue/mpvue-quickstart my-project
```
运行成功后，可以看到本地多了个 dist 目录，这个目录里就是生成的小程序相关代码

```Fly.js 一个基于Promise的、强大的、支持多种JavaScript运行时的http请求库. 有了它，您可以使用一份http请求代码在浏览器、微信小程序、Weex、Node、React Native、快应用中都能正常运行。同时可以方便配合主流前端框架 ，最大可能的实现 Write Once Run Everywhere。```

