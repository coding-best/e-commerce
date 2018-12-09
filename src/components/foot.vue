<template>
  <footer class="foot">
    <div class="content">
      <div class="nav-list">
        <p>关于我们</p>
        <p>联系我们</p>
        <p>解决方案</p>
        <p>亚马逊</p>
      </div>
      <div class="social-list">
        <img src="../assets/home/icon-google.png" alt="" width="16" height="16">
        <img src="../assets/home/icon-Twitter.png" alt="" width="16" height="16">
        <img src="../assets/home/icon-facebook.png" alt="" width="16" height="16">
        <img src="../assets/home/icon-ins.png" alt="" width="16" height="16">
      </div>
      <div class="made-in">
        <p>Made in China</p>
        <img src="../assets/home/China.png" alt="" width="18" height="12">
      </div>
      <div class="registered-trademark">
        <p>© 2018 Stack Inc.</p>
        <p>Privacy Policy</p>
        <p>Legal</p>
      </div>
    </div>
  </footer>
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
  height: 322px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    width: 1140px;
    height: 184px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .nav-list {
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
      p {
        padding: 0 20px;
        color: #666666;
        font-size: 14px;
        font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;
      }
    }
    .social-list {
      img {
        padding: 0 10px;
      }
    }
    .made-in {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 13px;
      p {
        font-size: 12px;
        color: #666666;
        margin-right: 6px;
      }
    }
    .registered-trademark {
      display: flex;
      justify-content: center;
      p {
        padding: 0 10px;
        font-size: 12px;
        color: #666666;
        opacity: .5;
      }
    }
  }
}
</style>
