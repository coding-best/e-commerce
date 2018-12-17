<template>
  <div class="productContent">
    <!-- 左侧产品缩略图 -->
    <ul class="commodity">
      <li v-for="(item, index) in goodsList" :key="index" >
        <img :src="item.img">
      </li>
    </ul>

    <!-- 中间产品展示 -->
    <div class="current-show">
      <img src="../../assets/home/goods-01.jpg">
    </div>

    <!-- 右侧购买产品 -->
    <div class="product-intro">
      <h1>智能木头时钟</h1>
      <p class="desc">时尚创意闹钟LED电子钟儿童智能木头时钟</p>
      <ul class="product-para-1">
        <li><p>材质外壳: <span>木</span></p></li>
        <li><p>显示方式: <span>液晶数字显示</span></p></li>
      </ul>
      <div class="price">
        <div class="actual">
          <span>$</span>
          <span>40.00</span>
        </div>
        <div class="origin">
          <del>$69.00</del>
        </div>
      </div>
      <div class="product-para-2">
        <span>颜色分类</span>
        <ul class="selectpara">
          <li>竹木白灯</li>
          <li>白木白灯</li>
          <li>黑木白灯</li>
        </ul>
      </div>
      <div class="product-para-3">
        <span>数量</span>
        <div class="input-group">
          <div class="reduce">-</div>
          <input class="total" type="text" value="1">
          <div class="add">+</div>
        </div>
        <span>库存 99 件</span>
      </div>
      <div class="product-para-4">
        <div class="product-tocart">
          <p>加入购物车</p>
        </div>
        <div class="product-favorite">
          <p>加入收藏</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productContent',
  data () {
    return {
      goodsList: [{
        name: 'goods-01',
        img: require('../../assets/home/goods-01.jpg')
      }, {
        name: 'goods-02',
        img: require('../../assets/home/goods-02.jpg')
      }, {
        name: 'goods-03',
        img: require('../../assets/home/goods-03.jpg')
      }, {
        name: 'goods-04',
        img: require('../../assets/home/goods-04.jpg')
      }, {
        name: 'goods-05',
        img: require('../../assets/home/goods-05.jpg')
      }]
    }
  }
}
</script>

<style lang="less">
.productContent {
  width: 1336px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 30px 0;
  .commodity::-webkit-scrollbar {
    display: none;
  }
  .commodity {
    width: 110px;
    height: 424px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: scroll;
    margin-right: 40px;
    li {
      width: 108px;
      height: 108px;
      margin-bottom: 15px;
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .current-show {
    width: 424px;
    height: 424px;
    margin-right: 60px;
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .product-intro {
    width: 560px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 28px;
    h1 {
      font-size: 28px;
      color: #222222;
      margin-bottom: 12px;

    }
    .desc {
      font-size: 1rem;
      color: #333333;
      margin-bottom: 16px;
    }
    .product-para-1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        width: 280px;
        text-align: left;
        p {
          color: #76838f;
          font-size: 1rem;
        }
        span {
          margin-left: 10px;
        }
      }
    }
    .price {
      display: flex;
      align-items: flex-end;
      margin-top: 12px;
      .actual {
        span:first-child {
          color: #ed1313;
          font-size: 18px;
        }
        span:last-child {
          color: #ed1313;
          font-size: 30px;
        }
      }
      .origin {
        margin-bottom: 6px;
        margin-left: 20px;
        del {
          font-size: 1rem;
          color: #ed1313;
        }
      }
    }
    .product-para-2 {
      text-align: left;
      margin-top: 16px;
      span {
        color: #9e9e9e;
        font-size: 1rem;
      }
      .selectpara {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 7px;
        li {
          width: 86px;
          height: 36px;
          border: 1px solid #e4eaec;
          color: #76838f;
          font-size: 1rem;
          line-height: 36px;
          margin-right: 10px;
          text-align: center;
          cursor: pointer;
        }
        .active {
          color: #ed1313;
          border-color: #ed1313;
        }
      }
    }
    .product-para-3 {
      text-align: left;
      margin-top: 16px;
      span {
        color: #9e9e9e;
        font-size: 1rem;
      }
      .input-group {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px 0;
        .reduce {
          width: 42px;
          height: 36px;
          background-color: #e4eaec;
          border-color: #e4eaec;
          color: #76838f;
          border-radius: 4px 0 0 4px;
          line-height: 36px;
          text-align: center;
          cursor: pointer;
        }
        .total {
          width: 66px;
          height: 34px;
          text-align: center;
          border: 1px solid #e4eaec;
        }
        .add {
          width: 42px;
          height: 36px;
          background-color: #e4eaec;
          border-color: #e4eaec;
          border-radius: 0 4px 4px 0;
          color: #76838f;
          line-height: 36px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .product-para-4 {
      display: flex;
      flex-direction: row;
      margin-top: 16px;
      .product-tocart {
        height: 40px;
        padding: 0 30px;
        background-color: #ed1313;
        margin-right: 20px;
        text-align: center;
        cursor: pointer;
        p {
          font-size: 1.286rem;
          color: #FFF;
          line-height: 40px;
        }
      }
      .product-favorite {
        height: 40px;
        padding: 0 30px;
        background-color: #f4b066;
        text-align: center;
        cursor: pointer;
        p {
          font-size: 1.286rem;
          color: #FFF;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
