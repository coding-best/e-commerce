<template>
  <div class="homeGoods">
    <div class="title">
      <p>新品上市</p>
    </div>
    <div class="goods">
      <div class="goods-item" v-for="(item, index) in goodsItem" :key="index">
        <router-link to="showProduct">
          <img class="goods-item-image" :src="item.img" alt="shop">
          <div class="goods-item-title">
            <p>{{item.title}}</p>
          </div>
          <div class="goods-item-price">
            <p>${{item.minPrice}}</p>
            <p>${{item.maxPrice}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeGoods',
  data () {
    return {
      goodsItem: [{
        title: '智能木头时钟 时尚创意闹钟LED电子钟儿童智能木头时钟',
        img: require('../../assets/home/goods-01.jpg'),
        maxPrice: 120,
        minPrice: 40
      }, {
        title: '智能木头时钟 时尚创意闹钟LED电子钟儿童智能木头时钟',
        img: require('../../assets/home/goods-02.jpg'),
        maxPrice: 120,
        minPrice: 40
      }, {
        title: '智能木头时钟 时尚创意闹钟LED电子钟儿童智能木头时钟',
        img: require('../../assets/home/goods-03.jpg'),
        maxPrice: 120,
        minPrice: 40
      }, {
        title: '智能木头时钟 时尚创意闹钟LED电子钟儿童智能木头时钟',
        img: require('../../assets/home/goods-04.jpg'),
        maxPrice: 120,
        minPrice: 40
      }, {
        title: '智能木头时钟 时尚创意闹钟LED电子钟儿童智能木头时钟',
        img: require('../../assets/home/goods-05.jpg'),
        maxPrice: 120,
        minPrice: 40
      }, {
        title: '智能木头时钟 时尚创意闹钟LED电子钟儿童智能木头时钟',
        img: require('../../assets/home/goods-06.jpg'),
        maxPrice: 120,
        minPrice: 40
      }, {
        title: '智能木头时钟 时尚创意闹钟LED电子钟儿童智能木头时钟',
        img: require('../../assets/home/goods-07.jpg'),
        maxPrice: 120,
        minPrice: 40
      }, {
        title: '智能木头时钟 时尚创意闹钟LED电子钟儿童智能木头时钟',
        img: require('../../assets/home/goods-08.jpg'),
        maxPrice: 120,
        minPrice: 40
      }]
    }
  }
}
</script>

<style lang="less">
.homeGoods {
  margin-bottom: 20px;
  .title {
    margin: 0 auto;
    p {
      text-align: center;
      font-size: 1.715rem;
    }
  }
  .goods {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 50px;
    max-width: 1336px;
    .goods-item {
      cursor: pointer;
      max-width: 300px;
      max-height: 380px;
      width: auto;
      height: auto;
      margin: 10px;
      border: 1px solid #ededed;
      transition: all 0.4s ease;
      .goods-item-image {
        max-width: 300px;
        max-height: 300px;
        width: auto;
        height: auto;
        object-fit: cover;
      }
      .goods-item-title {
        margin: 0 20px;
        p {
          text-align: left;
          font-size: 14px;
          color: #333;
        }
      }
      .goods-item-price {
        margin: 4px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        p:first-child {
          text-align: left;
          font-size: 18px;
          color: #eb0927;
          font-weight: 500;
        }
        p:last-child {
          text-align: left;
          font-size: 14px;
          color: #999999;
          text-decoration: line-through;
          font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial,
            "Microsoft YaHei", FreeSans, Arimo, "Droid Sans",
            "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3",
            Roboto, Arial, sans-serif;
          margin-left: 8px;
          margin-bottom: 3px;
        }
      }
    }
    .goods-item:hover {
      border: 1px solid #ca0c26;
      transition: all 0.4s ease;
    }
  }
}
</style>
