<template>
  <div class="header">
    <div class="content">
      <div class="langlist">
        <p>简体中文</p>
      </div>
      <div class="logo"></div>
      <div class="login">
        <ul class="login-list">
          <li>登录</li>
          <li>购物车</li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <ul class="nav-list">
        <router-link to="/">
          <li>网站首页</li>
        </router-link>
        <li @mouseover="displayDrawer(0)" @mouseout="hiddenDrawer(0)">关于我们</li>
        <router-link to="product">
          <li @mouseover="displayDrawer(1)" @mouseout="hiddenDrawer(1)">产品展示</li>
        </router-link>
        <li>客户案例</li>
        <li @mouseover="displayDrawer(2)" @mouseout="hiddenDrawer(2)">联系我们</li>
        <li @mouseover="displayDrawer(3)" @mouseout="hiddenDrawer(3)">解决方案</li>
        <li>亚马逊</li>
      </ul>
    </div>
    <div class="navlist" :class="active ? 'slidown': 'slidup'" @mouseover="displayDrawer(current)" @mouseout="hiddenDrawer(current)">
      <div class="navlist-left">
        <ul class="navlist-left-item" v-for="(value, key) in navList[current]" :key="key">
          <li>{{key}}</li>
          <li v-for="(item, index) in value" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="column"></div>
      <div class="navlist-right">
        <ul class="navlist-right-item" v-for="(value, key) in hotSeriesList" :key="key">
          <li>{{key}}</li>
          <li v-for="(item, index) in value" :key="index">{{item}}</li>
        </ul>
        <img class="navlist-right-img" src="../assets/home/1542077584.jpg" alt="image" width="150" height="150">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navList: [{
        '公司简介': [],
        '品质要求': [],
        '联系我们': ['售后服务', '定制流程']
      }, {
        '木头钟系列': ['经典款木头钟', '充电款木头钟'],
        '创意闹钟系列': [],
        '温湿度计闹钟系列': [],
        '台灯小闹钟系列': [],
        '床头小闹钟系列': []
      }, {
        '售后服务': [],
        '定制流程': []
      }, {
        '常见问题': [],
        '客户评价': []
      }
      ],

      hotSeriesList: {
        '木头钟系列': ['经典款木头钟', '充电款木头钟']
      },
      active: false,
      current: 0
    }
  },

  methods: {
    displayDrawer (e) {
      setTimeout(() => {
        this.active = true
      }, 10)
      this.current = e
    },
    hiddenDrawer (e) {
      setTimeout(() => {
        this.active = false
      }, 10)
    }
  }
}
</script>

<style lang="less">
a {
  text-decoration:none;
  color:#333;
}
@media (min-width:0px) and (max-width: 768px) {
  .header {
    display: none;
  }
}
@media (min-width: 769px){
  .header {
    width: 100%;
    height: 150px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .content {
      position: relative;
      width: 100%;
      height: 74px;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      padding-top: 20px;
      margin: 0 auto;
      background-color: #fff;
      z-index: 999;
      .langlist {
        margin-left: 60px;
      }
      .login {
        margin-right: 60px;
        .login-list {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .logo {
        background-image: url("../assets/home/1541664631.png");
        background-size: cover;
        width: 130px;
        height: 74px;
      }
    }
    .nav {
      position: relative;
      width: 100%;
      height: 56px;
      line-height: 56px;
      margin: 0 auto;
      background-color: #fff;
      z-index: 999;
      display: flex;
      justify-content: center;
      .nav-list {
        width: 650px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          cursor: pointer;
          height: 100%;
          width: 86px;
          color: rgb(34, 34, 34);
          font-size: 14px;
          font-family: FuturaLT-Heavy, NotoSansCJKsc-demilight,
            NotoSansCJKsc-Normal, PingFangSC-Regular, "Hiragino Sans GB",
            "微软雅黑", "Microsoft YaHei", sans-serif;
        }
        li:hover {
          color: #ca0c26;
          font-weight: 500;
          transition: all 0.1s ease;
        }
      }
    }
    .navlist {
      width: 100%;
      height: 215px;
      background-color: #fff;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding-top: 20px;
      z-index: 5;
      .navlist-left {
        width: 900px;
        display: flex;
        justify-content: flex-start;
        .navlist-left-item {
          li {
            cursor: pointer;
            width: 180px;
            margin-bottom: 30px;
            font-size: 12px;
            line-height: 12px;
            color: rgb(51, 51, 51);
          }
          li:first-child {
            margin-bottom: 40px;
            font-size: 14px;
          }
        }
      }
      .navlist-right {
        height: 100%;
        display: flex;
        justify-content: space-between;
        // align-items: center;
        .navlist-right-item {
          li {
            width: 180px;
            margin-bottom: 30px;
            font-size: 12px;
            line-height: 12px;
            color: rgb(51, 51, 51);
          }
          li:first-child {
            margin-bottom: 40px;
            font-size: 14px;
          }
        }
        .navlist-right-img {
          margin-left: 50px;
        }
      }
      .column {
        width: 1px;
        height: 160px;
        background-color: rgb(224, 224, 224);
      }
    }

    @keyframes slidown {
      from {
        transform: translateY(-20%);
        opacity: 0;
      }

      to {
        transform: translateY(0%);
        opacity: 1;
      }
    }

    .slidown {
      display: flex;
      animation: slidown 0.2s ease both;
    }

    @keyframes slidup {
      from {
        transform: translateY(0%);
        opacity: 1;
      }

      to {
        transform: translateY(-100%);
        opacity: 0;
      }
    }

    .slidup {
      display: flex;
      animation: slidup 0.2s ease both;
    }
  }
}
</style>
