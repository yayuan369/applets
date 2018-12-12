import Vue from 'vue'
import App from '@/App'
import store from '@/store'
var Fly=require("flyio/dist/npm/wx")

var fly=new Fly

Vue.prototype.$http = fly

Vue.config.productionTip = false

import IboxPlugin from '@/plugins/ibox'
Vue.use(IboxPlugin)

const app = new Vue({
  store,
  ...App
})

app.$mount()

export default {
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    subPackages: true,
    // tabBar: {
    //   "color": "#202020",
    //   "selectedColor": "#1296db",
    //   "list": [
    //     {
    //       text: "药品查询",
    //       pagePath: "pages/drug/drugList",
    //       iconPath: "/static/assets/icon_drug.png",
    //       selectedIconPath: "/static/assets/icon_drug_selected.png"
    //     },
    //     {
    //       text: "药店查询",
    //       pagePath: "pages/pharmacy/pharmacyList",
    //       iconPath: "/static/assets/icon_pharmacy.png",
    //       selectedIconPath: "/static/assets/icon_pharmacy_selected.png"
    //     },
    //     {
    //       text: "个人中心",
    //       pagePath: "pages/member/myAccount",
    //       iconPath: "/static/assets/icon_myAccount.png",
    //       selectedIconPath: "/static/assets/icon_myAccount_selected.png"
    //     }
    //   ]
    // }
  }
}
