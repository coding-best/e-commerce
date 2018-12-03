import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Product from '@/pages/product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
