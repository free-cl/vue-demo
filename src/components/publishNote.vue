<template>
  <div>
    <div class="publish-item note-item">
      <img class="img" src="../assets/notebook.png"/>
      <div class="text">写游记</div>
    </div>
    <div class="publish-item video-item">
      <img class="img" src="../assets/video.png"/>
      <div class="text">发视频</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'posterPre',
  methods: {
    // 选择图片
    selectImg(e) {
      
    },
    // 修改祝福文字
    updatePosterWord(posterWord) {
      this.$store.commit('SET_POSTERWORD', posterWord)
    }
  }
}
</script>

<style lang="scss" scoped>
.publish-item {
  margin: 30px auto;
  width: 92%;
  padding: 60px 0;
  border-radius: 10px;
  &.note-item {
    background: #98f0f9;
  }
  &.video-item {
    background: #a8eb8f;
  }
  .img {
    width: 40px;
    display: block;
    margin: 0 auto 10px;
  }
  .text {
    color: #fff;
    text-align: center;
  }
}
</style>