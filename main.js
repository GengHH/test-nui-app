import Vue from 'vue'
import App from './App'

//#ifdef H5
import _ from 'loadsh'
// 直接绑定原型来按安装lodash插件
Vue.prototype._ = _;
//#endif

Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
	...App
})
app.$mount()
