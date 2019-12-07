import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import Confirmation from '@/pages/Confirmation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      exact: true,
    },
    {
      path: '/shop',
      name: 'ShopPage',
      component: ShopPage,
      exact: true,
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation,
      exact: true,
    }
  ]
})
