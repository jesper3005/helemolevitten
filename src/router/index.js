import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import ShopPage from '@/pages/ShopPage'
import Confirmation from '@/pages/Confirmation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      exact: true,
      meta: {
        title: 'Helemolevitten'
      }
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
