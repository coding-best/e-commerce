<template>
  <div class="container">
    <Header />
    <ProductBanner />
    <ProductContent />
    <Foot />
  </div>
</template>

<script>
import Header from '../components/Header'
import Foot from '../components/Foot'
import ProductBanner from '../components/product/ProductBanner'
import ProductContent from '../components/showProduct/ProductContent'
export default {
  name: 'showProduct',
  data () {
    return {

    }
  },
  components: {
    Header,
    Foot,
    ProductBanner,
    ProductContent
  }
}
</script>

<style lang="less">
</style>
