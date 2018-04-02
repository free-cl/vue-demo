import axios from 'axios'
import { Indicator, MessageBox } from 'mint-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  Indicator.open('加载中...')
  return config
}, error => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    Indicator.close()
    const res = response.data
    if (res.ReturnCode !== '000000') {
      if (res.ReturnMsg) {
        MessageBox.alert(res.ReturnMsg)
      } else {
        MessageBox.alert('系统未知错误')
      }
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    Indicator.close()
    MessageBox.alert('太火爆了吧，稍安勿躁，亲，再试试')
    return Promise.reject(error)
  }
)

export default service
