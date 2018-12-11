import Vue from 'vue'
import App from './App'

import store from '@/store'
var Fly=require("flyio/dist/npm/wx")
var fly=new Fly
Vue.prototype.$http = fly

Vue.config.productionTip = false

import IboxPlugin from '@/plugins/ibox'
Vue.use(IboxPlugin)
App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()

export default{
    config :{
        page:[],
    }
}
