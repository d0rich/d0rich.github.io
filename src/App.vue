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
        <router-view class="page pa-2" />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import '@/assets/fonts/JetBrainsMono/fontface.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";
import Loading from "@/components/Loading";
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {Text} from "@/classes";
export default {
  name: 'App',

  components: {
    Header, BottomNavigation,
    Footer, Loading
  },

  data: () => ({
    //
  }),
  computed:{
    ...mapGetters(['headerOn'])
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
      title: new Text('JavaScript Разработчик', 'JavaScript Developer').text,
      titleTemplate: '%s | Dorich',
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
  z-index: 9000;
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
