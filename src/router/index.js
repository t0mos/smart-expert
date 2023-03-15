import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseSelect from '../components/BaseSelect.vue'
import BaseTooltip from '../components/BaseTooltip.vue'
import PageNotFound from '../components/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BaseSelect',
    component: BaseSelect,
  },
  {
    path: '/tooltip',
    name: 'BaseTooltip',
    component: BaseTooltip,
  },
  {
    path: "*",
    name: 'PageNotFound',
    component: PageNotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})

export default router
