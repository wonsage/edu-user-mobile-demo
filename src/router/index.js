import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: login */'@/views/login')
  },
  {
    path: '/', // 首页课程页
    name: 'courses',
    component: () => import(/* webpackChunkName: courses */'@/views/courses')
  },
  {
    path: '/study',
    name: 'study',
    component: () => import(/* webpackChunkName: study */'@/views/study')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: user */'@/views/user')
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import(/* webpackChunkName: error-page */'@/views/error-page')
  }
]

const router = new VueRouter({
  routes
})

export default router
