<template>
  <div id="app">
    <router-view/>
    <div class="box">示例</div>
  </div>
</template>

<script>
import request from '@/utils/request'
request({
  method: 'GET',
  url: '/front/ad/getAdList'
})
export default {
}
</script>

<style lang="scss">
.box {
  width: 100px;
  height: 100px;
}
</style>
