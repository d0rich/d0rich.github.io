<template>
  <terminal enter-word="error404">
    <div class="error--text">{{texts.message.text}}</div>
    <v-btn :to="{name: routesNames.HOME_PAGE, params: {lang}}" @click="setError404(false)" class="mt-5" block color="primary">
      {{texts.toMain.text}}
    </v-btn>
  </terminal>
</template>

<script>
import Terminal from "@/components/Terminal";
import {Text} from "@/classes";
import {routesNames} from "@/data/constants";

export default {
name: "Error404",
  components: {Terminal},
  data(){
    return {
      routesNames,
      texts: {
        message: new Text('Упс, похоже, что этой страницы не существует :(.',
            'Oops, it seems, this page does not exist.'),
        toMain: new Text('На главную страницу', 'To the home page')
      }
    }
  },
  watch:{
    '$route'(){
      this.setError404(false)
    }
  },
  computed: {
    lang(){
      return localStorage.getItem('lang') || 'en'
    }
  },
  mounted() {
    this.$analytics.logEvent('error_404', {
      query: JSON.stringify(this.$route.query),
      lang: this.$route.params.lang,
      page_location: document.location,
      page_path: this.$route.path,
      page_full_path: this.$route.fullPath
    })
  }
}
</script>

<style scoped>

</style>
