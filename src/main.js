// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// v2.0
import Vuetify from 'vuetify'
import vuetify from "~/plugins/vuetify"
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import store from '~/store'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  Vue.use(Vuetify)
  Vue.use(Vuex)

  appOptions.vuetify = new Vuetify(vuetify)
  appOptions.store = new Vuex.Store(store)

  Vue.mixin({
    methods:{
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

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
