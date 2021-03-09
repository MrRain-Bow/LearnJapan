import Vue from 'vue'
import VueRouter from 'vue-router'

import Accueil from '@/vue/Accueil.vue'

import TestsOptions from '@/vue/testOpts.vue'
import Test from '@/vue/test.vue'
import TestResult from '@/vue/testResult.vue'

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
    name: 'OptionsTests',
    component: TestsOptions
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    props: true
  },
  {
    path: '/testResult',
    name: 'TestResult',
    component: TestResult,
    props: true
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
