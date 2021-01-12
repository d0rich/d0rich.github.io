import Vue from 'vue'
import App from './App.vue'


import router from './router'

import store from './store'

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import vuetify from './plugins/vuetify';


Vue.mixin({
  computed:{
    routeNow(){
      return this.$route.name
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
