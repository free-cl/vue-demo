import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { qryActivityState } from '@/api'

const store = new Vuex.Store({
  state: {
    isLogin: false// 用户是否登录
  },

  mutations: {
    SET_ISLOGIN: (state, flag) => {
      state.isLogin = flag
    }
  },

  actions: {
    QryActivityState({ commit }) {
      qryActivityState({}).then(response => {
        commit('SET_ISLOGIN',response.LoginState)
      }).catch(error => {
        
      })
    }
  }
})

export default store