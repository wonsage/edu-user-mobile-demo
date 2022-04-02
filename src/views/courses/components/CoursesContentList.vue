<template>
  <div class="courses-content-list">
    <van-pull-refresh
      v-model="refreshing"
      @refresh="refreshCoursesList"
      success-text="刷新成功"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="loadCoursesList"
      >
        <van-cell v-for="course in coursesList" :key="course.id">
          <van-image :src="course.courseImgUrl" fit="cover"></van-image>
          <div class="course-info">
            <h3 v-text="course.courseName"></h3>
            <p class="course-preview" v-html="course.previewFirstField"></p>
            <p class="course-price-container">
              <span class="course-discounts">¥{{ course.discounts }}</span>
              <s class="course-price">¥{{ course.price }}</s>
            </p>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getQueryCourses } from '@/services/courses'
export default {
  name: 'CoursesContentList',
  data () {
    return {
      coursesList: [],
      refreshing: false, // 下拉刷新标识
      loading: false, // 上滑加载标识
      finished: false,
      currentPage: 0,
      pageSize: 15
    }
  },
  methods: {
    // 加载事件
    async loadCoursesList () {
      const { data } = await getQueryCourses({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        courseName: '',
        status: 1 // 查看上架课程
      })
      if (data.data && data.data.records && data.data.records.length) {
        this.coursesList.push(...data.data.records)
      }
      this.currentPage++ // 页码自增
      if (data.data.records.length < this.pageSize) { // 响应数据量不足时，关闭时间触发开关
        this.finished = true
      }
      this.loading = false // 事件触发函数的结束意味着加载结束
    },
    async refreshCoursesList () {
      this.currentPage = 1 // 重置页码为1
      const { data } = await getQueryCourses({
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        courseName: '',
        status: 1
      })
      if (data.data && data.data.records && data.data.records.length) {
        this.coursesList = data.data.records // 直接赋值
      }
      this.refreshing = false // 刷新结束
    }
  }
}
</script>

<style lang="scss" scoped>
// 列表固定
.courses-content-list {
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

// 课程展示样式
.van-cell__value {
  display: flex;
  height: 100px;
  .van-image {
    width: 75px;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  }
  .course-info {
    display: flex;
    flex-direction: column;
    flex: 1; // 图片已固定宽度，文字占满剩余。
    // height: 100%;
    padding: 0 16px;
    .course-preview {
      flex-grow: 1; // 中间的预览信息占满剩余高度。
      overflow: hidden;
    }
    p, h3 {
      margin: 0;
    }
    .course-discounts {
      color: #ff7452;
      margin-right: 10px;
      font-size: 0.5rem;
    }
  }
}
</style>
