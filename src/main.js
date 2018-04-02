// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './permission' // 页面访问权限控制
import './utils/directive' // 全局自定义指令
import './utils/filter' // 全局过滤器
import '@/styles/index.scss' // 全局通用样式

import { MessageBox } from 'mint-ui' // 弹出式提示框(错误提示)
import { Toast } from 'mint-ui'; // 简短的消息提示框(成功提示)
import 'mint-ui/lib/style.css'
Object.defineProperty(Vue.prototype, '$messageBox', { value: MessageBox })
Object.defineProperty(Vue.prototype, '$toast', { value: Toast })
/*import { Loadmore } from 'mint-ui' //下拉/上拉刷新
Vue.component(Loadmore.name, Loadmore)*/

import { sdkSign } from '@/api'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted() {
    console.log('main-start')
  },
  methods: {
    // 需要使用微信JS-SDK的页面必须先注入配置信息
    configJssdk() {
      const currentUrl=location.href.split('#')[0]
      sdkSign({ Url:currentUrl }).then(response => {
        wx.config({
          debug: false, // 关闭调试模式,调用的所有api的返回值不会在客户端alert出来
          appId: appId, // 必填，公众号的唯一标识
          timestamp: response.Timestamp, // 必填，生成签名的时间戳
          nonceStr: response.Noncestr, // 必填，生成签名的随机串
          signature: response.Signature,// 必填，签名
          jsApiList: [
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
          ] // 必填，需要使用的JS接口列表
        })
      }).catch(error => {
        
      })
    },
    // 配置可以将页面分享给微信好友和朋友圈
    setShareInfo(shareData) {
      shareData.success = () => {
        this.$toast('分享成功')
			}
			wx.ready(function(){
				wx.showMenuItems({
				    menuList: ['menuItem:share:appMessage','menuItem:share:timeline'] // 要显示的菜单项，所有menu项见附录3
				});
				wx.onMenuShareAppMessage(shareData);//分享给朋友
				wx.onMenuShareTimeline(shareData);//分享到朋友圈
			})
    },
    //获取url中的搜索参数
		getQueryObj() {
			const query = location.search.substr(1)
			const paramArr = query.split('&')
      const queryObj = {}
      for (let i = 0; i < paramArr.length; i++) {
        const paramItem = paramArr[i]
        const pos = paramItem.indexOf('=')
        if (pos == -1) {
          continue
        }
        const name = paramItem.substr(0, pos)
				const value = decodeURIComponent(paramItem.substr(pos + 1)) // 解码
				queryObj[name] = value
      }
			return queryObj
		}
  }
})
