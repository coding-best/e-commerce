<template>
  <div class="foot">
    <div class="content">
      <div class="left">
        <div class="left-item">
          <p>公众号</p>
          <img src="../assets/home/qrcode01.png" alt="qrcode" width="86" height="86">
        </div>
        <div class="left-item">
          <p>小程序</p>
          <img src="../assets/home/qrcode02.png" alt="qrcode" width="86" height="86">
        </div>
      </div>
      <div class="right">
        <div class="text">
          <p>联系我们</p>
        </div>
        <div class="text">
          <img src="../assets/home/phone_icon.png" alt="" width="20" height="18">
          <p>0755-26969828</p>
        </div>
        <div class="text">
          <img src="../assets/home/mail_icon.png" alt="" width="17" height="12">
          <p>583175694@qq.com</p>
        </div>
        <div class="text">
          <img src="../assets/home/address_icon.png" alt="" width="14" height="18">
          <p>深圳市南山区桃源村</p>
        </div>
        <a href="" class="text">
            <p>Copyright © 2017-2018 桃源村 粤ICP备16113487号-2</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="less">
a {
  text-decoration: none;
  color: #fff;
}
.foot {
  position: relative;
  width: 100%;
  height: 241px;
  background: rgba(#ca0c26, .8);
  .content {
    width: 739px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    transform: translateX(10%);
    .left {
      width: 222px;
      display: flex;
      justify-content: space-between;
      .left-item {
        p {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(254, 255, 255, 1);
          margin-bottom: 32px;
          margin-top: 60px;
        }
      }
    }
    .right {
      width: 400px;
      margin-top: 60px;
      .text {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 8px;
        img {
          margin-right: 10px;
        }
        p {
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(254, 255, 255, 1);
          text-align: left;
        }
      }
      .text:first-child {
        margin-bottom: 28px;
        p {
          font-size: 14px;
        }
      }
      .text:nth-child(4) {
        margin-bottom: 28px;
        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
