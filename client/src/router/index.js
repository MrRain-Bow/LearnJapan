import Vue from 'vue'
import VueRouter from 'vue-router'

import Accueil from '@/vue/Accueil.vue'

import TestsOptions from '@/vue/testOpts.vue'
import kana from '@/vue/kana.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/testsopts',
    name: 'Options Tests',
    component: TestsOptions
  },
  {
    path: '/kana',
    name: 'Tableau Kana+',
    component: kana
  }
]

export default new VueRouter({
  routes
})
