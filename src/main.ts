import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.mixin({
  data: function() {
    return {
      ServerLink:'http://localhost:8000'
    }
  },
  methods: {
    ImgLink(Path){return 'https://d0rich.github.io/assets/img/'+Path;},
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
