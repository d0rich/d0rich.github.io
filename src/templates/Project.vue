<template>
  <div>
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
      <v-btn color="primary" class="ml-5 my-5 align-self-start"
             :to="Router.projects()" exact>
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
        <VueRemarkContent class="mb-8" id="article-area" />
        <h2 v-if="$page.project.related.length">Related links</h2>
        <div class="row row--dense mt-2 mb-5">
          <div class="col-lg-4 col-sm-6 col-12" v-for="link in $page.project.related" :key="link.href">
            <v-list-item class="v-sheet--outlined rounded text-decoration-none"
                         :href="link.href"
                         target="_blank" >
              <v-list-item-icon v-if="link.icon">
                <v-icon>{{link.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-wrap">
                  {{link.title}}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
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
import {metaMixin} from "../mixins/meta";

export default {
  name: "Project",
	components: {
		Disqus
	},
  computed:{
    breadcrumbs(){
      return [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.projects()},
        {text: 'projects', disabled: true},
        {text: this.$page.project.title , disabled: true},
      ]
    }
  },
	mixins: [metaMixin],
  metaInfo() {
		return this.createMetaInfo({
			title: this.$page.project.title,
			description: this.$page.project.summary,
			keywords: [...this.$page.project.tags.map(t=>t.title), ...this.$page.project.technologies.map(t=>t.title)],
			ogTitle: `IT Project: ${this.$page.project.title}`,
			image: this.$page.project.image,
			ogPath: this.$page.project.path
		})
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
