<template>
  <div class="container">
    <Header />
    <ProductBanner />
    <Filters />
    <ProductList />
    <!-- <foot /> -->
  </div>
</template>

<script>
import Header from '../components/Header'
import foot from '../components/foot'
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
    foot,
    ProductBanner,
    Filters,
    ProductList
  }
}
</script>

<style lang="less">
</style>
