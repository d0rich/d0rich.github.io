// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// v2.0
// Vuetify
import Vuetify from 'vuetify'
import vuetify from "~/plugins/vuetify"
import 'vuetify/dist/vuetify.min.css'
// Vuex
import Vuex from 'vuex'
import store from '~/store'
// Router
import {Router} from "./router";
// CompositionAPI
import VueCompositionAPI from '@vue/composition-api'
// Layout
import DefaultLayout from '~/layouts/Default.vue'


export default function (Vue, { appOptions, head }) {
  head.meta.push({
    name: 'google-site-verification',
    content: 'EPJeLQdX2LPTsEMv34e1U_qzfrNVuvuoB4Xn_10xnfw'
  })

  head.meta.push({
    name: 'yandex-verification',
    content: '70389b477fa77d75'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css',
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
  Vue.use(VueCompositionAPI)

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
    },
    computed:{
      Router: () => Router
    }
  })

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
