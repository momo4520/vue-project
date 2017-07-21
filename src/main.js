// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from './config/env'
import routes from './router/router'

Vue.config.productionTip = false
Vue.use(VueRouter)
/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: routerMode
})
new Vue({
  router
}).$mount('#app')
