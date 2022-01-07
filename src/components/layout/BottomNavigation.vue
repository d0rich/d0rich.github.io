<template>
  <nav>
    <v-bottom-navigation class="bottom-nav" color="primary lighten-1">
      <v-btn active-class="cursor-active-box" :to="navigation.news.route"  >
        <span class="cursor--on-active">{{ navigation.news.text }}</span>
        <v-icon>mdi-newspaper-variant</v-icon>
      </v-btn>

      <v-btn active-class="cursor-active-box" :to="navigation.resume.route"  >
        <span class="cursor--on-active">{{ navigation.resume.text }}</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>



      <v-btn active-class="cursor-active-box" exact :to="navigation.home.route"  >
        <span class="cursor--on-active">{{navigation.home.text}}</span>
        <v-icon>mdi-console-line</v-icon>
      </v-btn>

      <v-btn active-class="cursor-active-box" :to="navigation.portfolio.route"  >
        <span class="cursor--on-active">{{navigation.portfolio.text}}</span>
        <v-icon>mdi-folder-star</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </nav>

</template>

<script>
import {navigation} from '~/router/navigation'
export default {
name: "BottomNavigation",
  data(){
    return{
      navigation: navigation
    }
  }
}
</script>

<style scoped>
.bottom-nav{
  position: fixed;
  bottom: 0;
  z-index: 10000;
}

</style>
