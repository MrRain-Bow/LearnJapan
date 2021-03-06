import Vue from 'vue'

import App from './App.vue'

import router from './router/index'

import store from './store'
import vuetify from '@/plugins/vuetify'

new Vue({
  iconfont: 'mdi',
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
