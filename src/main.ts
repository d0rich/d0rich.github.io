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
      //ServerLink:'https://dorich-prod-site-server.herokuapp.com'
      ServerLink: 'http://localhost:8000'
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
  },
  beforeCreate(){
    if(this.$route.params.lan != 'en' && this.$route.params.lan != 'ru')
    {
      if (!localStorage.lan){
        localStorage.lan = 'en';
      }
      this.$route.params.lan = localStorage.lan;
    }
    if(this.$route.params.prof != 'videomaker' && this.$route.params.prof != 'programmer')
    {
      if (!localStorage.prof){
        localStorage.prof = 'videomaker';
      }
      this.$route.params.prof = localStorage.prof;
    }
    this.$router.push(this.$route);
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
