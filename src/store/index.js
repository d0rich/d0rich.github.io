import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: 1000,
    lang: 'ru',
    //apiUrl: 'http://127.0.0.1:3000/api',
    apiUrl: 'https://dorich-server.herokuapp.com/api',

  },
  getters: {
    headerOn(state){
      return state.windowWidth > 640
    }
  },
  mutations: {
    getWindowWidth(state, width){
      state.windowWidth = width
    },
    setLang(state, lang){
      state.lang = lang
      localStorage.setItem('lang', lang)
    }
  },
  actions: {
  },
  modules: {
  }
})
