import request from '@/utils/request'

// 根据广告位获取对应广告，用于首页获取轮播广告
export const getAllAds = params => {
  return request({
    method: 'GET',
    url: '/front/ad/getAllAds',
    params
  })
}

// 分页获取课程内容，用于首页
export const getQueryCourses = data => {
  return request({
    method: 'POST',
    url: '/boss/course/getQueryCourses', // 这里用了后台管理网页的接口
    data
  })
}
