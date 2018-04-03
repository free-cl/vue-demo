<template>
  <div class="activity-box">
    <div class="activity-menu">
      <div class="item" :class="{'active': activityState == 1}" @click="selectActivityState(1)">已报名</div>
      <div class="item" :class="{'active': activityState == 2}" @click="selectActivityState(2)">已结束</div>
      <div class="item" :class="{'active': activityState == 3}" @click="selectActivityState(3)">已定制</div>
    </div>
    <div class="activity-list">
      <div class="item" v-for="(item, index) in activityList" :key="index">
        <div class="logo" :style="{height:activityLogoHeight,backgroundImage:'url('+item.logo+')'}"></div>
        <div class="name overflow-ellipsis">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activityState: 1,
      activityList: [],
      activityLogoHeight: 0
    }
  },
  mounted() {
    this.selectActivityState(1)
    // 活动图片宽高比为5:2
    this.activityLogoHeight = (window.innerWidth - 40) * 0.4 + 'px'
  },
  methods: {
    selectActivityState(state) {
      this.activityState = state
      this.activityList = [
        { logo: 'http://who2o.cmbwh.mbcloud.com/statics/20171024113116780265.png', name: '象牙塔舞蹈' },
        { logo: 'http://who2o.cmbwh.mbcloud.com/statics/20170914045055234020.png', name: '宇凰国学馆' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.activity-box {
  background: #fff;
  margin-top: 10px;
  .activity-menu {
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    border-bottom: 1px solid #D8D8D8;
    .item {
      width: 33.3%;
      text-align: center;
      &.active {
        color: #48A0F2;
        border-bottom: 2px solid #48A0F2;
      }
    }
  }
  .activity-list {
    padding: 20px;
    .item {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .logo {
        background-size: cover;
        background-position: center;
      }
      .name {
        background: #000;
        color: #fff;
        padding: 5px 10px;
        text-align: center;
      }
    }
  }
}
</style>