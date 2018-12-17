<template>
  <div class="homeSwiper">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide class="slide-1">
        <img src="../../assets/home/product-1.jpg" alt="img1">
      </swiper-slide>
      <swiper-slide class="slide-2">
        <img src="../../assets/home/product-2.jpg" alt="img2">
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1">
        <img src="../../assets/home/product-1.jpg" alt="img1">
      </swiper-slide>
      <swiper-slide class="slide-2">
        <img src="../../assets/home/product-2.jpg" alt="img1">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0,
        slideToClickedSlide: true
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="less">
.homeSwiper {
  width: 100%;
  height: auto;
  max-height: 100%;
  margin-top: 150px;
  background-color: #fff;
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.gallery-top {
  height: 80% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 20% !important;
  box-sizing: border-box;
  padding: 0;
  transform: translateY(-110%);
}
.gallery-thumbs .swiper-slide {
  width: 16%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
