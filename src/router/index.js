import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Product from '@/pages/product'
import ShowProduct from '@/pages/showProduct'

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
    }, {
      path: '/showProduct',
      name: 'showProduct',
      component: ShowProduct
    }
  ]
})
