import axios from 'axios';
import { ElMessage } from 'element-plus';
const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

request.interceptors.request.use((config:any) => {
  return config;
})

request.interceptors.response.use( (response:any) => {
  const res = response.data
  if (res.code.toString().charAt(0) !== '2') {
    // 处理业务错误
    ElMessage({
      message: res.message || 'Error',
      type: 'error',
      duration: 5 * 1000
    })

    // 特殊状态码处理
    if (res.code === 401) {
      // 处理token过期
      // useUserStore().logout()
      // window.location.reload() // 或跳转到登录页
    }

    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    // 返回核心数据（根据后端数据结构调整）
    return res.data
  }
},
error => {
  // 处理HTTP网络错误
  let message = ''
  const status = error.response?.status
  console.log("🚀 ~ error:", error.response.data.message)

  switch (status) {
    case 400:
      message = '请求错误'
      break
    case 401:
      message = '未授权，请重新登录'
      // useUserStore().logout()
      break
    case 403:
      message = '拒绝访问'
      break
    case 404:
      message = '请求地址出错'
      break
    case 408:
      message = '请求超时'
      break
    case 500:
      message = '服务器内部错误'
      break
    case 501:
      message = '服务未实现'
      break
    case 502:
      message = '网关错误'
      break
    case 503:
      message = '服务不可用'
      break
    case 504:
      message = '网关超时'
      break
    case 505:
      message = 'HTTP版本不受支持'
      break
    default:
      // 网络错误
      if (!window.navigator.onLine) {
        message = '网络连接异常'
      } else {
        message = '未知错误'
      }
  }

  ElMessage({
    message: error.response?.data.message || error.message,
    type: 'error',
    duration: 5 * 1000
  })

  return Promise.reject(error)
})


export default request;