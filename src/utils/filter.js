// 全局过滤器
import Vue from 'vue'

// 将x.00转化为整数
Vue.filter('getInteger', function(value) {
    if (!value) {
        return 0
    }
    return parseInt(value)
})