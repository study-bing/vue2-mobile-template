import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
// 引入全局组件
import './components'
// 引入element组件库
import './plugins/element'
// 引入常用插件
import './plugins/commonUse'
// 引入svg
import './assets/icons/index'
Vue.config.productionTip = false
=======
Vue.config.productionTip = false

// 引入全局组件
import './components'
// 引入element组件库
import './plugins/vant'
// 引入常用插件
import './plugins/commonUse'
// 引入svg
import './assets/icons/index'
>>>>>>> deef3a9 (feat: 添加插件)
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
