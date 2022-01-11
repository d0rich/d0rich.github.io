<template>
  <layout>
    <terminal enter-word="error404" class="mt-6">
      <div class="error--text">Oops, it seems, this page does not exist.</div>
      <v-btn :to="Router.home" class="mt-5" block color="primary">
        <v-icon>mdi-home</v-icon> To home page
      </v-btn>
    </terminal>
  </layout>
</template>

<script>
import Terminal from "../components/Terminal";
import {Router} from "../router";

export default {
  name: "Error404",
  components:{
    Terminal
  },
  data(){
    return{
      Router
    }
  },
  metaInfo(){
    return {
      title: 'Oops',
      meta: [
        { key: 'description' , name: 'description',
          content: 'Page not found' },
        { key: 'og:title', property: 'og:title', content: 'Oops | Dorich' },
        { key: 'og:description', property: 'og:description',
          content: 'Portfolio of Dorich, JavaScript developer'},
        { key: 'robots', name: 'robots', content: 'noindex,follow'}
      ]
    }
  }
}
</script>

<style scoped>

</style>