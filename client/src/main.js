import Vue from 'vue'

// import VueRouter from 'vue-router'
// import Vuex from 'vuex'

import App from './App.vue'

import store from './store'
import vuetify from '@/plugins/vuetify'

new Vue({
  el: '#app',
  store,
  vuetify,
  render: h=> h(App)
})

