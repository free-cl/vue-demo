// 全局自定义指令
import Vue from 'vue'

// 注册一个全局自定义指令v-input
Vue.directive('input', {
  // 当被绑定的元素插入到 DOM 中时
  inserted: (el, binding, vnode) => {
    el.addEventListener('input', function(e){
      const currentVm = vnode.context
      const funcName = binding.expression
      currentVm[funcName](e.target.value)
    }); 
  }
})