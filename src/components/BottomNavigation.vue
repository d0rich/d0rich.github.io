<template>
  <v-bottom-navigation class="bottom-nav" color="primary lighten-1">
    <v-btn value="about" :to="{ name: 'About' }"  >
      <span>About<span style="opacity: 0" :class="{cursor: routeNow === 'About'}">_</span></span>
      <v-icon>mdi-information</v-icon>
    </v-btn>

    <v-btn value="blog" :to="{ name: 'Blog' }">
      <span>Blog<span style="opacity: 0" :class="{cursor: routeNow === 'Blog'}">_</span></span>
      <v-icon>mdi-message</v-icon>
    </v-btn>

    <v-btn value="home" :to="{ name: 'Home' }">
      <span>Dorich<span style="opacity: 0" :class="{cursor: routeNow === 'Home'}">_</span></span>
      <v-icon>mdi-console-line</v-icon>
    </v-btn>

    <v-btn value="portfolio" :to="{ name: 'Portfolio' }">
      <span>Portfolio<span style="opacity: 0" :class="{cursor: routeNow === 'Portfolio'}">_</span></span>
      <v-icon>mdi-file-presentation-box</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
name: "BottomNavigation",
  data(){
    return{
    }
  }
}
</script>

<style scoped>
@import '../styles/cursor.css';
.bottom-nav{
  position: fixed;
  bottom: 0;
  z-index: 10000;
}

</style>
