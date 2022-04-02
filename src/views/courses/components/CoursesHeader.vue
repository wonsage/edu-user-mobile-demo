<template>
  <div class="courses-header">
    <van-image
      :src="require('@/assets/wu_index_logo.png')"
      fit="contain"
    ></van-image>
  </div>
</template>

<script>
export default {
  name: 'CoursesHeader'
}
</script>

<style lang="scss" scoped>
.courses-header {
  background-color: orange;
}
.van-image {
  display: block; // 解决img父元素自动撑高，底部多5px的问题。
  width: 180px;
  margin-left: 15px;
}
</style>
