<template>
  <v-app v-resize="onResize">
    <Header v-if="headerOn" />
    <BottomNavigation v-else />
    <v-main>
      <router-view />
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
    ...mapMutations(['getWindowWidth']),
    onResize(){
      this.getWindowWidth(window.innerWidth)
    }
  },
  beforeMount() {
    console.log(this.$vuetify.theme.themes.dark)

  },
  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s | d0rich'
  }
};
</script>
<style>
#app{
  font-family: 'JetBrains Mono', Roboto, sans-serif;
}
</style>
