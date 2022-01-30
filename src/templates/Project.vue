<template>
  <div>
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
      <v-btn color="primary" class="ml-5 my-5 align-self-start"
             :to="Router.portfolio()" exact>
        <v-icon>
          mdi-chevron-left
        </v-icon>
        Back
      </v-btn>
    </nav>
    <article>
      <div style="max-width: 100%">
        <h1>{{ $page.project.title }} </h1>
        <p>Posted on {{ $page.project.date }}</p>
        <v-chip-group>
          <v-chip
              v-for="tag in $page.project.tags"
              :to="tag.path"
              :key="tag.id">
            #{{ tag.title }}
          </v-chip>
        </v-chip-group>
				<div class="d-flex justify-center">
					<v-img v-if="$page.project.image" eager :aspect-ratio="3/2"
								 min-width="300px" max-width="600px" width="90vw"
								 class="border-light--primary my-4"
								 :src="$page.project.image" :alt="$page.project.title" />
				</div>

      </div>
      <div class="hr" />
      <div class="markdown-body">
        <div class="mb-8" id="article-area" v-html="$page.project.content" />
        <h2 v-if="$page.project.related.length">Related links</h2>
        <ul class="related-links">
          <v-list-item
              v-for="(link, i) in $page.project.related"
              :key="i"
              :href="link.href" target="_blank"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.title"/>
            </v-list-item-content>
          </v-list-item>
        </ul>
        <h2>Built with</h2>
        <nav class="tech-container">
          <v-btn v-for="tech in $page.project.technologies" :key="tech.id"
                 class="mx-4 my-2"
                 outlined text large
                 :to="tech.path">
            {{tech.title}}
          </v-btn>
        </nav>
				<section class="disqus my-4">
					<Disqus shortname="dorich" />
				</section>
      </div>

    </article>
  </div>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    date (format: "MMMM D, Y")
    image
    content
    summary
    tags {
      title
      path
    }
    technologies {
      title
      path
    }
    related {
      title
      icon
      href
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

export default {
  name: "Project",
	components: {
		Disqus
	},
  computed:{
    breadcrumbs(){
      return [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio()},
        {text: 'projects', disabled: true},
        {text: this.$page.project.title , disabled: true},
      ]
    }
  },
  metaInfo() {
    const description = this.$page.project.summary ||
        this.$page.project.content.replace(/<[^>]+>/g, '').substring(0, 250) + '...'
    return {
      title: this.$page.project.title,
      meta: [
        { key: 'description' , name: 'description',
          content: description },
        {
          key: 'keywords', name: 'keywords',
          content: 'developer, informational technologies, IT, ' + this.$page.project.tags.map(t=>t.title).join(', ') + ', ' + this.$page.project.technologies.map(t=>t.title).join(', ')
        },
        { key: 'og:title', property: 'og:title', content: `IT Project: ${this.$page.project.title}` },
        { key: 'og:description', property: 'og:description',
          content: description },
        { key: 'og:url', property: 'og:url', content: this.$static.metadata.siteUrl + this.$page.project.path},
        { key: 'og:image', property: 'og:image', content: this.$static.metadata.siteUrl + this.$page.project.image},
        { key: 'vk:image', property: 'vk:image', content: this.$static.metadata.siteUrl + this.$page.project.image},
      ]
    }
  }
}
</script>

<style scoped>
.tech-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.markdown-body,.disqus{
  width: 100%;
  max-width: 1020px;
}
.related-links{
  width: 100%;
  margin-bottom: 2rem;
  padding: 0;
}
article{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;
}
@media screen and (max-width: 640px){
  .markdown-body,.disqus{
    width: 95%;
  }
}
</style>
