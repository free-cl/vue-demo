<template>
  <div>
    <div class="my-info">
      <img class="headpic" :src="headpic"/>
      <div class="name-row info-row">
        <span>{{username}}</span>
        <span class="seperate-line">|</span>
        <span>领队</span>
      </div>
      <div class="score-row info-row">
        <span>300积分</span>
        <span class="seperate-line">|</span>
        <span>5优惠券</span>
      </div>
    </div>

    <div class="menu-box">
      <div class="menu-item">
        <div class="icon">
          <img src="../../assets/team.png"/>
        </div>
        <div class="text">团队定制</div>
      </div>
      <div class="menu-item">
        <div class="icon">
          <img src="../../assets/notebook.png"/>
        </div>
        <div class="text">游记</div>
      </div>
      <div class="menu-item">
        <div class="icon">
          <img src="../../assets/ticket.png"/>
        </div>
        <div class="text">优惠券</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headpic: 'http://thirdwx.qlogo.cn/mmopen/ldQOPoAq6QWY2kgEnqlnLxq3Pz6KuaOgKcia4jf39n4a8sCYEZRibwcJicQ6heVAYxf5t3Z21X2l8AKq4FYJS7KGvGdsbkyCze6/132',
      username: '张三'
    }
  }
}
</script>

<style lang="scss" scoped>
.my-info {
  background: #48A0F2;
  padding: 20px 0;
  .headpic {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .info-row {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    &.name-row {
      margin: 10px 0;
    }
    .seperate-line {
      margin: 0 10px;
    }
  }
}

.menu-box {
  padding: 20px 0;
  background: #fff;
  display: flex;
  .menu-item {
    width: 33.3%;
    .icon {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: #48A0F2;
      padding: 10px;
      margin: 0 auto 10px;
      img {
        width: 26px;
        height: 26px;
        display: block;
      }
    }
    .text {
      text-align: center;
    }
  }
}
</style>