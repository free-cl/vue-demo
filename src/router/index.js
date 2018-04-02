import Vue from 'vue'
import Router from 'vue-router'
import publishNote from '@/components/publishNote'
import my from '@/components/my/index'

Vue.use(Router)

export default new Router({
  routes: [
    {//发表游记
      path: '/publishNote',
      name: 'publishNote',
      component: publishNote
    },
    {//我的
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
