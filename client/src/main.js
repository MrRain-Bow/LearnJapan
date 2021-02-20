import Vue from 'vue'

// import VueRouter from 'vue-router'
import vuetify from '@/plugins/vuetify'
// import Vuex from 'vuex'

import App from './App.vue'

import store from './store'

new Vue({
  el: '#app',
  store,
  vuetify,
  render: h=> h(App)
})

