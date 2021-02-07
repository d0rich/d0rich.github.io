<template>
  <nav>
    <LangSwitcher />
    <v-bottom-navigation class="bottom-nav" color="primary lighten-1">
      <v-btn active-class="nav-btn" :to="navigation.blog.route"  >
      <span>
        {{navigation.blog.text.getText(lang)}}<span style="opacity: 0" class="cursor">_</span>
      </span>
        <v-icon>mdi-message</v-icon>
      </v-btn>

      <v-btn active-class="nav-btn" :to="navigation.about.route"  >
      <span>
        {{navigation.about.text.getText(lang)}}<span style="opacity: 0" class="cursor">_</span>
      </span>
        <v-icon>mdi-account</v-icon>
      </v-btn>



      <v-btn active-class="nav-btn" exact :to="navigation.home.route"  >
      <span>
        {{navigation.home.text.getText(lang)}}<span style="opacity: 0" class="cursor">_</span>
      </span>
        <v-icon>mdi-console-line</v-icon>
      </v-btn>

      <v-btn active-class="nav-btn" :to="navigation.portfolio.route"  >
      <span>
        {{navigation.portfolio.text.getText(lang)}}<span style="opacity: 0" class="cursor">_</span>
      </span>
        <v-icon>mdi-file-presentation-box</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </nav>

</template>

<script>
import {navigation} from '@/data/navigation'
import LangSwitcher from "@/components/LangSwitcher";
export default {
name: "BottomNavigation",
  components:{
    LangSwitcher
  },
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
