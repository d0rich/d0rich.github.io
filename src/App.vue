<template>
  <v-app class="main-scroll" v-resize="onResize">
    <Header v-if="headerOn" />
    <BottomNavigation v-else />
    <transition name="glitch-transition">
      <div v-if="onPageLoad" class="loading-container">
        <loading />
      </div>
    </transition>
    <v-main>
      <transition name="glitch-transition" mode="out-in">
        <router-view v-if="!error404" class="page pa-2" />
        <div  class="page pa-2" v-else>
          <Error404 />
        </div>
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import '@/assets/fonts/JetBrainsMono/fontface.css'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Loading from "@/components/Loading";
import Error404 from "@/views/Error404";
import {mapGetters, mapMutations, mapActions, mapState} from 'vuex'
import {Text} from "@/classes";
export default {
  name: 'App',

  components: {
    Header, BottomNavigation,
    Footer, Loading, Error404
  },

  data: () => ({
    //
  }),
  computed:{
    ...mapGetters(['headerOn']),
    ...mapState(['error404'])
  },
  methods:{
    ...mapMutations(['getWindowWidth', "setLang"]),
    ...mapActions(["authByToken"]),
    onResize(){
      this.getWindowWidth(window.innerWidth)
    }
  },
  beforeMount() {
    // console.log(this.$vuetify.theme.themes.dark)
    this.authByToken(localStorage.getItem('token'))
  },
  metaInfo() {
    return {
      title: new Text('Dorich - JavaScript Разработчик', 'Dorich - JavaScript Developer').text,
      titleTemplate: new Text('%s | Dorich - JavaScript Разработчик', '%s | Dorich - JavaScript Developer').text,
      htmlAttrs: {
        lang: this.lang
      }
    }

  }
};
</script>
<style>
@import "./styles/linkFormatter.css";
@import "./styles/cursor.css";
@import "./styles/scroll.scss";
@import "styles/borderLight.css";
#app{
  font-family: 'JetBrains Mono', Roboto, sans-serif;
  overflow: hidden;
}
.page{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: auto;
}
.loading-container{
  pointer-events: none;
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}
.v-image__image--preload{
  filter: none;
}
@media screen and (max-width: 640px) {
  html{
    font-size: 13px;
  }
  #app{
    padding-bottom: 54px;
  }
}
</style>
