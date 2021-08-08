/*
 * @Author: your name
 * @Date: 2021-07-29 22:48:58
 * @LastEditTime: 2021-08-07 12:08:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test-uni-app\main.js
 */
/*
 * @Author: your name
 * @Date: 2021-07-29 22:48:58
 * @LastEditTime: 2021-08-07 11:34:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test-uni-app\main.js
 */
import Vue from "vue"
import App from "./App"
// import _ from 'loadsh'
// 直接绑定原型来按安装lodash插件
// Vue.prototype._ = _;

Vue.config.productionTip = false

App.mpType = "app"

const app = new Vue({
	...App,
})
app.$mount()
