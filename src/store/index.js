import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import {projects} from "@/store/projects";
import {resume} from "@/store/resume";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: 1000,
    lang: localStorage.getItem('lang') || 'en',
    onPageLoad: false,
    login: null,
    token: null,
    error404: false
  },
  getters: {
    lang(state){
      return state.lang
    },
    headerOn(state){
      return state.windowWidth > 640
    },
    isAuth(state){
      return !!state.token
    },
    authHeaders(state){
      return {
        headers: {
          Authorization: state.token
        }
      }
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
    },
    setError404(state, error = false){
      state.error404 = error
    }
  },
  actions: {
    getServerErrorMessage(state, err){
      if (err.response) {
        console.log(err.response.data)
        return err.response.data
      } else if (err.request) {
        console.log('Problem with server connection')
        return 'Problem with server connection'
      } else {
        // anything else
      }
    },
    async authByPwd({commit, dispatch}, authData = { login: '', password: ''}){
      try {
        const authResult = await axios.post(`/auth/byPwd`, authData)
        commit("setUser", { login: authData.login, token: authResult.data.token })
      }
      catch (e) {
        return dispatch("getServerErrorMessage", e)
      }
    },
    async authByToken({commit, dispatch}, token){
      try {
        const authResult = await axios.post(`/auth/byToken`, {token})
        commit("setUser", { login: authResult.data.login, token: token })
      }
      catch (e) {
        return dispatch("getServerErrorMessage", e)
      }
    },
    async logout({commit, dispatch}){
      try {
        await axios.post(`/auth/logout`, {token: localStorage.getItem('token')})
        commit("delUser")
      }
      catch (e) {
        return dispatch("getServerErrorMessage", e)
      }
    },
    async bufferFromFile(store, file){
      return {
        buffer: Buffer.from(await file.arrayBuffer()),
        type: file.type.split('/')[1]
      }
    }
  },
  modules: {
    resume,
    projects,
  }
})
