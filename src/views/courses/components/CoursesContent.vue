<template>
  <div class="courses-content">
    <van-swipe class="my-swipe" :autoplay="3500" indicator-color="white">
      <van-swipe-item v-for="item in activeAdList" :key="item.id">
        <van-image :src="item.img"></van-image>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getAllAds } from '@/services/courses'

export default {
  name: 'CoursesContent',
  data () {
    return {
      adList: [] // 轮播图列表
    }
  },
  created () {
    this.loadAds()
  },
  methods: {
    async loadAds () {
      const { data } = await getAllAds({
        spaceKeys: '999'
      })
      this.adList = data.content[0].adDTOList
    }
  },
  computed: {
    activeAdList () {
      return this.adList.filter(item => item.status === 1) // 分离出来状态码为1的项
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
