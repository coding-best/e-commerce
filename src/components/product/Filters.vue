<template>
  <div class="filters">
    <!-- 系列筛选 -->
    <div class="filters-first">
      <ul class="filters-first-list">
        <li
          :class="active === index ? 'active' : ''"
          v-for="(item, index) in productList"
          :key="index"
          @click="switchProductList(index)"
        >{{item}}</li>
      </ul>
    </div>

    <!-- 分类筛选 -->
    <div class="filters-second">
      <div class="content">
        <div class="filters-second-title">
          <p>颜色分类：</p>
        </div>
        <ul class="filters-second-list">
          <li
            :class="active1 === index ? 'active' : ''"
            v-for="(item, index) in typeList"
            :key="index"
            @click="switchTypeList(index)"
          >{{item}}</li>
        </ul>
      </div>
    </div>

    <!-- 推荐，热门，最新，销量，价格等筛选 -->
    <div class="filters-third">
      <ul class="filters-third-ul">
        <li>
          <span>推荐</span>
          <div class="arrow"></div>
        </li>
        <li>
          <span>热门</span>
          <div class="arrow"></div>
        </li>
        <li>
          <span>最新</span>
          <div class="arrow"></div>
        </li>
        <li>
          <span>销量</span>
          <div class="arrow"></div>
        </li>
      </ul>
      <div class="filters-third-price">
        <span>价格：</span>
        <div class="interval">
          <input class="interval-min" value="" />
          <span>-</span>
          <input class="interval-max" value="" />
          <button class="interval-determine">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data () {
    return {
      productList: ['全部', '木头系列', '创意闹钟系列', '温湿度计闹钟系列', '台灯小闹钟系列'],
      typeList: ['全部', '竹木白灯', '白木白灯', '黑木白灯', '白木蓝灯充电款', '白木红灯充电款', '黑木红灯充电款', '竹木绿灯充电款', '薄荷绿', '樱桃粉', '白色【配USB电源线】'],
      active: 0,
      active1: 0
    }
  },

  methods: {
    switchProductList (e) {
      this.active = e
    },
    switchTypeList (e) {
      this.active1 = e
    }
  }
}
</script>

<style lang="less">
input, button {
  background: none;
  outline: none;
  border: 0px;
}
input:focus, button:focus {
  outline: none;
}

.filters {
  .filters-first {
    width: 1336px;
    height: 55px;
    margin: 0 auto;
    position: relative;
    border: 1px solid #e7eaf1;
    border-radius: 5px !important;
    box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);
    margin-top: 20px;
    margin-bottom: 40px;
    .filters-first-list {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 600px;
      line-height: 55px;
      li {
        cursor: pointer;
        text-decoration: none;
        display: block;
        font-size: 16px;
        font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial,
          "Microsoft YaHei", FreeSans, Arimo, "Droid Sans",
          "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3",
          Roboto, Arial, sans-serif;
      }
      li:hover {
        color: #ca0c26;
      }
      .active {
        color: #ca0c26;
      }
    }
  }
  .filters-second {
    width: 1336px;
    margin: 0 auto;
    margin-bottom: 30px;
    .content {
      border: 1px solid #ededed;
      border-bottom: none;
      border-top: none;
      display: flex;
      background-color: #e5e5e5;
      .filters-second-title {
        width: 100px;
        height: 100%;
        padding: 10px 20px;
        font-size: 14px;
        color: rgb(153, 153, 153);
      }
      .filters-second-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0 10px;
        background-color: #fafafa;
        li {
          cursor: pointer;
          padding: 10px 20px;
          color: #333333;
          font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial,
            "Microsoft YaHei", FreeSans, Arimo, "Droid Sans",
            "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3",
            Roboto, Arial, sans-serif;
          font-size: 14px;
        }
        li:hover {
          color: #ca0c26;
        }
        .active {
          color: #ca0c26;
        }
      }
    }
    .filters-second:last-child {
      border-bottom: 1px solid #ededed;
    }
    .filters-second:first-child {
      border-top: 1px solid #ededed;
    }
  }
  .filters-third {
    width: 1336px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .filters-third-ul {
      width: 300px;
      display: flex;
      justify-content: space-between;
      li {
        padding: 0 10px;
        color: #222222;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .arrow {
          width: 12px;
          height: 12px;
          margin-left: 2px;
          background-image: url('../../assets/product/arrow_bottom.png');
          background-size: cover;
        }
      }
      li:hover {
        color: #ca0c26;
        .arrow {
          background-image: url('../../assets/product/arrow_bottom_active.png');
        }
      }
    }
    .filters-third-price {
      margin-left: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        color: #222222;
        font-size: 14px;
      }
      .interval {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 300px;
        span {
          margin: 0 4px;
        }
        .interval-min,
        .interval-max {
          width: 90px;
          height: 36px;
          border: 1px solid #e4eaec;
          padding-left: 10px;
        }
        .interval-determine {
          background-color: #ca0c26;
          color: #ffffff;
          width: 58px;
          height: 38px;
          border-radius: .215rem;
          font-size: 14px;
          font-weight: 500;
          margin-left: 6px;
        }
        .interval-determine:active {
          background-color: #ca0c26;
          opacity: .8;
        }
      }
    }
  }
}
</style>
