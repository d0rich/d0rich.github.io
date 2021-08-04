import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from "firebase/app"
import "firebase/analytics"
const firebaseConfig = {
  apiKey: "AIzaSyCvD4pqcejJqPMU7e571ocPj1dphEUBDEg",
  authDomain: "dorich-js.firebaseapp.com",
  projectId: "dorich-js",
  storageBucket: "dorich-js.appspot.com",
  messagingSenderId: "1011414719090",
  appId: "1:1011414719090:web:172747536c42112683c0eb",
  measurementId: "G-V7B6TEMZXB"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
Vue.prototype.$analytics = firebase.analytics()

import VueMeta from 'vue-meta'
Vue.use(VueMeta, {
  tagIDKeyName: 'vmid'
})

import axios from 'axios'
import VueAxios from 'vue-axios'
//axios.defaults.baseURL = 'http://127.0.0.1:3000/api/'
//axios.defaults.baseURL = 'https://dorich-server.herokuapp.com/api/'
axios.defaults.baseURL = 'https://dorich-js.appspot.com/api/'
axios.defaults.headers = {

}
Vue.use(VueAxios, axios)

import vuetify from './plugins/vuetify';

import './styles/transitions.scss'
import './styles/loadings.scss'
import { createSimpleTransition } from 'vuetify/lib/components/transitions/createTransition'
Vue.component('scale-transition', createSimpleTransition('scale-transition'))

import {mapState, mapMutations, mapGetters} from "vuex";
Vue.mixin({
  computed:{
    ...mapState(['lang', "onPageLoad"]),
    ...mapGetters(['isAuth', "authHeaders"]),
    routeNow(){
      return this.$route.name
    }
  },
  methods:{
    ...mapMutations(["turnPageLoad", 'setError404']),
    timeout(ms){
      return new Promise(resolve => {
        setTimeout(() =>resolve(), ms)
      })
    },
    timeoutRand(ms){
      return new Promise(resolve => {
        setTimeout(() =>resolve(), ms * (1 - 0.1 + Math.random() * 0.2))
      })
    },
    logContact(contact, c_location){
      this.$analytics.logEvent('get_contact', {
        contact: contact,
        contact_location: c_location
      })
      this.$analytics.setUserProperties({
        want_contact: true
      })
    },
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
