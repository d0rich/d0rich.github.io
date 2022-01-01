<template>
  <nav>
    <v-bottom-navigation class="bottom-nav" color="primary lighten-1">
      <v-btn active-class="nav-btn" :to="navigation.news.route"  >
        <span>
          {{ navigation.news.text }}<span style="opacity: 0" class="cursor">_</span>
        </span>
        <v-icon>mdi-newspaper-variant</v-icon>
      </v-btn>

      <v-btn active-class="nav-btn" exact :to="navigation.resume.route"  >
        <span>
          {{ navigation.resume.text }}<span style="opacity: 0" class="cursor">_</span>
        </span>
        <v-icon>mdi-account</v-icon>
      </v-btn>



      <v-btn active-class="nav-btn" exact :to="navigation.home.route"  >
        <span>
          {{navigation.home.text}}<span style="opacity: 0" class="cursor">_</span>
        </span>
        <v-icon>mdi-console-line</v-icon>
      </v-btn>

      <v-btn active-class="nav-btn" :to="navigation.portfolio.route"  >
        <span>
          {{navigation.portfolio.text}}<span style="opacity: 0" class="cursor">_</span>
        </span>
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
