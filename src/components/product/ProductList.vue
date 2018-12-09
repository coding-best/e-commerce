<template>
  <div class="product-list">
    <!-- 标题 -->
    <div class="title">
      <div class="column"></div>
      <p>产品展示</p>
    </div>

    <!-- 产品展示 -->
    <div class="content">
      <div class="content-item" v-for="(item, index) in list" :key="index" >
        <img  class="content-item-img" :src="item.img" alt="商品" >
        <div class="content-price">
          <p>￥{{item.price}}</p>
          <p>{{item.trading}}人付款</p>
        </div>
        <div class="content-desc">
          <p>{{item.desc}}</p>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <div class="paging">
      <div class="prevPage"><p>上一页</p></div>
      <div class="pageNumber" :class="currentPage === index + 1 && 'active'" v-for="(item, index) in paging" :key="index" @click="checkoutPage(index + 1)">
        <p>{{index + 1}}</p>
      </div>
      <div class="nextPage"><p>下一页</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PruductList',
  data () {
    return {
      list: [{
        img: require('../../assets/home/goods-01.jpg'),
        price: 299,
        trading: 402,
        desc: '时尚创意闹钟LED电子钟儿童智能木头时钟时尚创意闹钟LED电子钟儿童智能木头时钟...'
      }, {
        img: require('../../assets/home/goods-02.jpg'),
        price: 299,
        trading: 402,
        desc: '时尚创意闹钟LED电子钟儿童智能木头时钟时尚创意闹钟LED电子钟儿童智能木头时钟...'
      }, {
        img: require('../../assets/home/goods-03.jpg'),
        price: 299,
        trading: 402,
        desc: '时尚创意闹钟LED电子钟儿童智能木头时钟时尚创意闹钟LED电子钟儿童智能木头时钟...'
      }, {
        img: require('../../assets/home/goods-04.jpg'),
        price: 299,
        trading: 402,
        desc: '时尚创意闹钟LED电子钟儿童智能木头时钟时尚创意闹钟LED电子钟儿童智能木头时钟...'
      }, {
        img: require('../../assets/home/goods-05.jpg'),
        price: 299,
        trading: 402,
        desc: '时尚创意闹钟LED电子钟儿童智能木头时钟时尚创意闹钟LED电子钟儿童智能木头时钟...'
      }, {
        img: require('../../assets/home/goods-06.jpg'),
        price: 299,
        trading: 402,
        desc: '时尚创意闹钟LED电子钟儿童智能木头时钟时尚创意闹钟LED电子钟儿童智能木头时钟...'
      }, {
        img: require('../../assets/home/goods-07.jpg'),
        price: 299,
        trading: 402,
        desc: '时尚创意闹钟LED电子钟儿童智能木头时钟时尚创意闹钟LED电子钟儿童智能木头时钟...'
      }, {
        img: require('../../assets/home/goods-08.jpg'),
        price: 299,
        trading: 402,
        desc: '时尚创意闹钟LED电子钟儿童智能木头时钟时尚创意闹钟LED电子钟儿童智能木头时钟...'
      }],
      paging: 5,
      currentPage: 1
    }
  },
  methods: {
    checkoutPage (e) {
      this.currentPage = e
    }
  }
}
</script>

<style lang="less">
.product-list {
  width: 1336px;
  margin: 0 auto;
  margin-top: 60px;
  .title {
    padding-bottom: 10px;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    align-items: center;
    .column {
      display: block;
      width: 4px;
      height: 18px;
      background: #ca0c26;
      margin-right: 10px;
    }
    p {
      font-size: 18px;
      font-weight: 700;
    }
  }
  .content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    .content-item {
      width: 300px;
      height: 400px;
      border-bottom: 1px solid #c2c2c2;
      margin: 0 16px;
      margin-top: 20px;
      transition: all .6s ease 0s;
      .content-item-img {
        max-width: 300px;
        max-height: 300px;
        transition: all 1s ease 0s;
      }
      .content-price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4px;
        p:first-child {
          color: #f40;
          font-weight: 700;
          font-size: 18px;
        }
        p:last-child {
          color: #888;
          font-size: 12px;
          font-weight: 400;
        }
      }
      .content-desc {
        padding-top: 4px;
        padding-left: 4px;
        p {
          text-align: left;
          font-size: 14px;
           overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    .content-item:hover {
      box-shadow: 0 0 16px #b1b1b1;
      transition: all .6s ease 0s;
      .content-item-img {
        transition: all .6s ease 0s;
        transform: translate(10px, -10px);
        box-shadow: 0 0 16px #b1b1b1;
      }
    }
  }
  .paging {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .prevPage, .nextPage {
      width: 74px;
      height: 42px;
      border: 1px solid rgb(228, 234, 236);
      cursor: pointer;
      transition: all .2s ease;
      p {
        text-align: center;
        line-height: 42px;
        font-size: 14px;
      }
    }
    .nextPage {
      border-left: none;
    }
    .pageNumber {
      width: 40px;
      height: 42px;
      border: 1px solid rgb(228, 234, 236);
      border-left: none;
      cursor: pointer;
      transition: all .4s ease;
      p {
        text-align: center;
        line-height: 42px;
        font-size: 14px;
        font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",Roboto,Arial,sans-serif;
      }
    }
    .pageNumber:hover, .prevPage:hover, .nextPage:hover {
      background-color: #ca0c26;
      transition: all .4s ease;
      color: #FFF;
      border-color: #ca0c26;
    }
    .active {
      background-color: #ca0c26;
      transition: all .4s ease;
      color: #FFF;
      border-color: #ca0c26;
    }
  }
}
</style>
