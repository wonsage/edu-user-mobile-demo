// 对 Axios 再封装，便于使用
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://edufront.lagounews.com' // 网址基地址
})

export default request
