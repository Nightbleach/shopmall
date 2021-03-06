
// 定义这个request函数，用到网络请求时 直接调用这个request函数，进行网络请求
import axios from 'axios'

export function request (config) {
  // 1 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 5000
  })
  // 2.1 axios 请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })
  // 2.2 相应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })
  // 3 发送真正的网络请求
  return instance(config)
}
