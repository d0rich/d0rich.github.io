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
  name: "404",
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
      title: 'Error 404 - Page not found'
    }
  }
}
</script>

<style scoped>

</style>