import Vue from 'vue'
import VueRouter from 'vue-router'

import Accueil from '@/vue/Accueil.vue'

import TestsOptions from '@/vue/testOpts.vue'
import kana from '@/vue/kana.vue'

import Test from '@/vue/test.vue'

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
    path: '/test',
    name: 'Test',
    component: Test
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
