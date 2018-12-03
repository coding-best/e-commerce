<template>
  <div class="award">
    <div class="top">
      <img src="../../assets/home/goods-01.jpg" alt="" width="430" height="430">
      <div class="desc">
        <div class="time">
          <p>2018-11-12</p>
        </div>
        <div class="row"></div>
        <div class="title">
          <h2>获得国家高新技术认证</h2>
        </div>
        <div class="content">
          <p>2017年10月对表来说是振奋人心的一天，因为旗下机芯公司通过审核，获得了 “国家高新技术企业 ” 认定证书，这标志着机芯公司由此正式迈入高新技术企业行列。旗下子公司精瑞机芯，是唯一一家生产全款式钟表机芯的企业，已获得多项国家发明专利。成功研发制造具有自主知识产权的“陀飞轮”机芯，刷新了深圳钟表业</p>
        </div>
        <div class="more">
          <p>more</p>
          <div class="more-background"><div class="right"></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less">
.award {
  .top {
    max-width: 1150px;
    display: flex;
    justify-content: space-between;
    .desc {
      max-width: 670px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 50px;
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
            "Hiragino Sans GB", "Hiragino Sans GB W3", Roboto, Arial, sans-serif;
        }
      }
      .row {
        width: 15px;
        height: 1px;
        background: #ca0c26;
        margin: 25px 0;
      }
      .title {
        h2 {
          font-size: 20px;
          color: #222222;
        }
      }
      .content {
        margin-top: 50px;
        margin-bottom: 20px;
        p {
          font-size: 14px;
          color: #333333;
          font-family: "Lucida Grande", Helvetica, Arial, "Microsoft YaHei",
            FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei",
            "Hiragino Sans GB", "Hiragino Sans GB W3", Roboto, Arial, sans-serif;
        }
      }
      .more {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 130px;
        height: 30px;
        box-shadow: 0 0 10px rgba(12,3,6,.13);
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
            background-image: url('../../assets/home/more.png');
            background-size: 100%;
            background-repeat: no-repeat;
          }
        }
      }
    }
  }
}
</style>
