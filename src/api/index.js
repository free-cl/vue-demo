import request from '@/utils/request'

// 登录
export function userLogin(data) {
  return request({
    url: 'login.do',
    method: 'post',
    data
  })
}

// 微信JS-SDK使用权限签名
export function sdkSign(data) {
  return request({
    url: 'sdkSign.do',
    method: 'post',
    data
  })
}