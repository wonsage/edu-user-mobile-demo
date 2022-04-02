<template>
  <div class="courses-content">
  <!-- 轮播图 -->
    <van-swipe class="home-swipe" :autoplay="4000" indicator-color="white">
      <van-swipe-item v-for="item in activeAdList" :key="item.id">
        <van-image :src="item.img"></van-image>
      </van-swipe-item>
    </van-swipe>
  <!-- 课程列表 -->
    <courses-content-list></courses-content-list>
  </div>
</template>

<script>
import { getAllAds } from '@/services/courses'
import CoursesContentList from './CoursesContentList.vue'

export default {
  components: { CoursesContentList },
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
.home-swipe {
  width: 100%;
}
.home-swipe .van-swipe-item {
  overflow: hidden;
  display: flex;
  justify-content: center;
}

// 定位课程列表
.courses-content-list {
  top: 240px;
  bottom: 50px;
}
</style>
