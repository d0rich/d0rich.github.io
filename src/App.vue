<template>
  <v-app class="main-scroll" v-resize="onResize">
    <Header v-if="headerOn" />
    <BottomNavigation v-else />
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
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'App',

  components: {
    Header, BottomNavigation, Footer
  },

  data: () => ({
    //
  }),
  computed:{
    ...mapGetters(['headerOn'])
  },
  methods:{
    ...mapMutations(['getWindowWidth', "setLang"]),
    onResize(){
      this.getWindowWidth(window.innerWidth)
    }
  },
  beforeMount() {
    console.log(this.$vuetify.theme.themes.dark)
    this.setLang(localStorage.getItem('lang') || 'en')
  },
  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s | d0rich'
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
@media screen and (max-width: 640px) {
  html{
    font-size: 13px;
  }
  #app{
    padding-bottom: 54px;
  }
}
</style>
