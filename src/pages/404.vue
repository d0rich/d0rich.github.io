<template>
  <div>
    <terminal enter-word="error404" class="mt-6">
      <div class="error--text">Oops, it seems, this page does not exist.</div>
      <v-btn :to="Router.home" class="mt-5" block color="primary">
        <v-icon>mdi-home</v-icon> To home page
      </v-btn>
    </terminal>
		<section class="disqus my-4">
			<h2>Chat for lost people</h2>
			<Disqus shortname="dorich" :pageConfig="pageConfig" />
		</section>
  </div>
</template>

<script>
import Terminal from "../components/Terminal";
import {Router} from "../router";
import { Disqus } from 'vue-disqus'

export default {
  name: "Error404",
  components:{
    Terminal, Disqus
  },
  data(){
    return{
      Router,
			pageConfig: {
				identifier: '404-chat',
				title: 'Chat for lost people'
			}
    }
  },
  metaInfo(){
    return {
      title: 'Oops! Page not Found',
      meta: [
        { key: 'description' , name: 'description',
          content: 'Page not found' },
        { key: 'og:title', property: 'og:title', content: 'Oops! Page not Found' },
        { key: 'og:description', property: 'og:description',
          content: 'Portfolio of Dorich, JavaScript developer'},
        { key: 'robots', name: 'robots', content: 'noindex,follow'}
      ]
    }
  }
}
</script>

<style scoped>
.disqus{
	width: 95%;
	max-width: 960px;
}
</style>
