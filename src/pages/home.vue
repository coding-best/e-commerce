<template>
  <div class="container">
    <Header />
    <HomeSwiper />
    <HomeGoods />
    <SeriesProducts />
    <Award />
    <AwardList />
    <Foot />
  </div>
</template>

<script>
import Header from '../components/Header'
import HomeSwiper from '../components/home/HomeSwiper'
import HomeGoods from '../components/home/HomeGoods'
import SeriesProducts from '../components/home/SeriesProducts'
import Award from '../components/home/Award'
import AwardList from '../components/home/AwardList'
import Foot from '../components/Foot'
export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {
    Header,
    HomeSwiper,
    HomeGoods,
    SeriesProducts,
    Award,
    AwardList,
    Foot
  }
}
</script>

<style lang="less">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
