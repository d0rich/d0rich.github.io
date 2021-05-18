import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: 1000,
    lang: localStorage.getItem('lang') || 'en',
    onPageLoad: false,
    apiUrl: 'http://127.0.0.1:3000/api',
    //apiUrl: 'https://dorich-server.herokuapp.com/api',
    login: null,
    token: null
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
    },
    turnPageLoad(state, loading = false){
      state.onPageLoad = loading
    },
    setUser(state, authData = { login: '', token: '' }){
      state.login = authData.login
      state.token = authData.token
      localStorage.setItem('token', authData.token)
    },
    delUser(state){
      state.login = ''
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    getServerErrorMessage(state, err){
      if (err.response) {
        return err.response.data
      } else if (err.request) {
        return 'Problem with server connection'
      } else {
        // anything else
      }
    },
    async authByPwd({commit, state, dispatch}, authData = { login: '', password: ''}){
      try {
        const authResult = await axios.post(`${state.apiUrl}/auth/byPwd`, authData)
        commit("setUser", { login: authData.login, token: authResult.data.token })
      }
      catch (e) {
        return dispatch("getServerErrorMessage", e)
      }
    },
    async authByToken({commit, state, dispatch}, token){
      try {
        const authResult = await axios.post(`${state.apiUrl}/auth/byToken`, {token})
        commit("setUser", { login: authResult.data.login, token: token })
      }
      catch (e) {
        return dispatch("getServerErrorMessage", e)
      }
    },
    async logout({commit, state, dispatch}){
      try {
        await axios.post(`${state.apiUrl}/auth/logout`, {token: localStorage.getItem('token')})
        commit("delUser")
      }
      catch (e) {
        return dispatch("getServerErrorMessage", e)
      }
    }
  },
  modules: {
  }
})
