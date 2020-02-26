import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// iconfont
import './iconfont/iconfont.css';

// vuex
import store from './stores'

Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()