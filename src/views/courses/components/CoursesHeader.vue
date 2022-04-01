<template>
  <div class="courses-header">
    <van-image :src="require('@/assets/wu_index_logo.png')"></van-image>
  </div>
</template>

<script>
export default {
  name: 'CoursesHeader'
}
</script>

<style lang="scss" scoped>
.courses-header {
  // height: 50px;
  background-color: orange;
}
.van-image {
  width: 180px;
  margin-left: 15px;
}
</style>
