<template>
  <div class="award-list">
    <ul class="award-list-ul">
      <li class="award-list-item" v-for="(item, index) in awardlist" :key="index">
        <img class="award-list-image" src="../../assets/home/goods-08.jpg" alt="">
        <div class="background">
          <div class="desc">
            <div class="time">
              <p>{{item.time}}</p>
            </div>
            <div class="row"></div>
            <div class="title">
              <h2>{{item.title}}</h2>
            </div>
            <div class="content">
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Awardlist',
  data () {
    return {
      awardlist: [{
        time: '2018-11-12',
        title: '获得国家高新技术认证',
        content: '2017年10月对表来说是振奋人心的一天，因为旗下机芯公司通过审核，获得了 “国家高新技术企业 ” 认定证书，这标志着机芯公司由此正式迈入高新技术企业行列。旗下子公司精瑞机芯，是唯一一家生产全款式钟表机芯的企业，已获得多项国家发明...'
      }, {
        time: '2018-11-12',
        title: '获得国家高新技术认证',
        content: '2017年10月对表来说是振奋人心的一天，因为旗下机芯公司通过审核，获得了 “国家高新技术企业 ” 认定证书，这标志着机芯公司由此正式迈入高新技术企业行列。旗下子公司精瑞机芯，是唯一一家生产全款式钟表机芯的企业，已获得多项国家发明...'
      }, {
        time: '2018-11-12',
        title: '获得国家高新技术认证',
        content: '2017年10月对表来说是振奋人心的一天，因为旗下机芯公司通过审核，获得了 “国家高新技术企业 ” 认定证书，这标志着机芯公司由此正式迈入高新技术企业行列。旗下子公司精瑞机芯，是唯一一家生产全款式钟表机芯的企业，已获得多项国家发明...'
      }]
    }
  }
}
</script>

<style lang="less">
li {
  list-style: none;
}

p,
h2 {
  text-align: left;
}

.award-list {
  margin-top: 80px;
  margin-bottom: 80px;
  .award-list-ul {
    width: 1150px;
    max-width: 1336px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .award-list-item {
      position: relative;
      width: 346px;
      height: 346px;
      .award-list-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 346px;
        height: 346px;
      }
      .background {
        background: rgb(242, 242, 242);
        position: absolute;
        top: 0;
        left: 0;
        width: 276px;
        height: 296px;
        opacity: 1;
        transform: translate(0, 0);
        transition: all 0.4s ease;
        padding: 25px 35px;
        p {
          text-align: left;
        }
        .time {
          margin-top: 20px;
          p {
            color: #333;
            font-size: 14px;
            font-family: "Lucida Grande", Helvetica, Arial, "Microsoft YaHei",
              FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei",
              "Hiragino Sans GB", "Hiragino Sans GB W3", Roboto, Arial,
              sans-serif;
          }
        }
        .row {
          width: 15px;
          height: 1px;
          background: #ca0c26;
          margin-bottom: 25px;
          margin-top: 3px;
        }
        .title {
          h2 {
            font-size: 20px;
            color: #222222;
          }
        }
        .content {
          margin-top: 4px;
          margin-bottom: 20px;
          p {
            font-size: 14px;
            color: #333333;
            font-family: "Lucida Grande", Helvetica, Arial, "Microsoft YaHei",
              FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei",
              "Hiragino Sans GB", "Hiragino Sans GB W3", Roboto, Arial,
              sans-serif;
          }
        }
        .more {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 130px;
          height: 30px;
          box-shadow: 0 0 10px rgba(12, 3, 6, 0.13);
          cursor: pointer;
          p {
            margin-left: 30px;
            color: rgb(202, 12, 38);
            font-family: "Avenir", Helvetica, Arial, sans-serif;
          }
          .more-background {
            width: 30px;
            height: 30px;
            background-color: #ca0c26;
            display: flex;
            justify-content: center;
            align-items: center;
            .right {
              width: 18px;
              height: 18px;
              background-image: url("../../assets/home/more.png");
              background-size: 100%;
              background-repeat: no-repeat;
            }
          }
        }
      }
      .background:hover {
        opacity: 0.8;
        background: rgb(202, 12, 38);
        transform: translate(6%, 6%);
        transition: all 0.4s ease;
        p,
        h2 {
          color: #fff;
          transition: all 0.4s ease;
        }
        .row {
          background: #fff;
          transition: all 0.4s ease;
        }
      }
    }
  }
}
</style>
