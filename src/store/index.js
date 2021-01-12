import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: 1000
  },
  getters: {
    headerOn(state){
      return state.windowWidth > 640
    }
  },
  mutations: {
    getWindowWidth(state, width){
      state.windowWidth = width
    }
  },
  actions: {
  },
  modules: {
  }
})
