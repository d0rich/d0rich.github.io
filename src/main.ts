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
      ServerLink:'https://dorich-prod-site.herokuapp.com'
    }
  },
  methods: {
    ImgLink(Path){return 'https://d0rich.github.io/assets/img/'+Path;},
    ScrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')