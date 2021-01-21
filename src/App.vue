<template>
  <v-app class="main-scroll" v-resize="onResize">
    <Header v-if="headerOn" />
    <BottomNavigation v-else />
    <v-main>
      <router-view class="page pa-2" />
    </v-main>
  </v-app>
</template>

<script>
import '@/assets/fonts/JetBrainsMono/fontface.css'
import Header from "@/components/Header";
import BottomNavigation from "@/components/BottomNavigation";
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'App',

  components: {
    Header, BottomNavigation
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
</style>
