import Vue from 'vue'
import App from './App.vue'


import router from './router'

import store from './store'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.headers = {

}
Vue.use(VueAxios, axios)

import ImgWithPh from "@/components/ImgWithPh";
Vue.component('img-with-ph', ImgWithPh)

import vuetify from './plugins/vuetify';

import './styles/transitions.scss'
import './styles/loadings.scss'
import { createSimpleTransition } from 'vuetify/lib/components/transitions/createTransition'
Vue.component('scale-transition', createSimpleTransition('scale-transition'))

import {mapState, mapMutations, mapGetters} from "vuex";
Vue.mixin({
  computed:{
    ...mapState(['lang', "apiUrl", "onPageLoad"]),
    ...mapGetters(['isAuth', "authHeaders"]),
    routeNow(){
      return this.$route.name
    }
  },
  methods:{
    ...mapMutations(["turnPageLoad"]),
    timeout(ms){
      return new Promise(resolve => {
        setTimeout(() =>resolve(), ms)
      })
    },
    timeoutRand(ms){
      return new Promise(resolve => {
        setTimeout(() =>resolve(), ms * (1 - 0.1 + Math.random() * 0.2))
      })
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
