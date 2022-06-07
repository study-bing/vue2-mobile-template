import Vue from 'vue'
// 拷贝
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

// 本地存储
import Storage from 'vue-ls'

const options = {
    namespace: 'vuejs__', // 存储的key键前缀，可自定义
    name: 'ls', // 命名Vue变量.ls则使用为this.$ls或者Vue.ls,
    storage: 'local', // 存储名称: session, local, memory，更改为session则默认存储在sessionStorage
}

Vue.use(Storage, options) //使用vue-ls插件
