<template>
  <div class="container">
    <Header />
    <ProductBanner />
    <Filters />
    <ProductList />
    <Foot />
  </div>
</template>

<script>
import Header from '../components/Header'
import Foot from '../components/Foot'
import ProductBanner from '../components/product/ProductBanner'
import Filters from '../components/product/Filters'
import ProductList from '../components/product/ProductList'
export default {
  name: 'product',
  data () {
    return {

    }
  },
  components: {
    Header,
    Foot,
    ProductBanner,
    Filters,
    ProductList
  }
}
</script>

<style lang="less">
</style>
