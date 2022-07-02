<template>
  <div>
    <nav>
      <v-breadcrumbs class="align-self-start" :items="breadcrumbs"/>
      <v-btn color="primary" class="ml-5 my-5 align-self-start"
             :to="Router.blog()" exact>
        <v-icon>
          mdi-chevron-left
        </v-icon>
        Back
      </v-btn>
    </nav>
    <article>
      <div style="max-width: 100%">
        <h1>{{ $page.post.title }} </h1>
        <p>Posted on {{ $page.post.date }}</p>
        <v-chip-group>
          <v-chip
              v-for="tag in $page.post.tags"
              :to="tag.path"
              :key="tag.id">
            #{{ tag.title }}
          </v-chip>
        </v-chip-group>
        <div class="d-flex justify-center">
          <v-img v-if="$page.post.image" eager :aspect-ratio="3/2"
                 min-width="300px" max-width="600px" width="100%"
                 class="border-light--primary  my-4"
                 :src="$page.post.image" :alt="$page.post.title" />
        </div>

      </div>
      <div class="hr" />
			<VueRemarkContent class="markdown-body mb-8" id="article-area" />
			<section class="disqus">
				<Disqus shortname="dorich" />
			</section>

    </article>
  </div>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
		summary
    date (format: "MMMM D, Y")
    image
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import {Router} from "../router";
import { Disqus } from 'vue-disqus'
import { metaMixin } from "../mixins/meta";

export default {
	components: {
		Disqus
	},
  computed:{
    breadcrumbs(){
      return [
        {text: 'd0rich', href: Router.home},
        {text: 'blog', href: Router.blog()},
        {text: 'posts', disabled: true},
        {text: this.$page.post.title , disabled: true},
      ]
    },
  },
	mixins: [metaMixin],
  metaInfo() {
    const description = this.$page.post.summary ||
        this.$page.post.content.replace(/<[^>]+>/g, '').substring(0, 250) + '...'
		return this.createMetaInfo({
			title: this.$page.post.title,
			description: this.$page.post.summary,
			keywords: this.$page.post.tags.map(t=>t.title),
			ogTitle: `Blog Post: ${this.$page.post.title}`,
			image: this.$page.post.image,
			ogPath: this.$page.post.path
		})
  }
}
</script>

<style scoped>
.markdown-body, .disqus{
  width: 100%;
  max-width: 1020px;
}
article{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;
}
@media screen and (max-width: 640px){
  .markdown-body, .disqus{
    width: 95%;
  }
}
</style>
