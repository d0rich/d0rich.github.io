<template>
  <layout>
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
        <v-img v-if="$page.project.image" eager :aspect-ratio="3/2"
               min-width="300px" max-width="600px" width="90vw"
               class="border-light--primary align-self-center my-4"
               :src="$page.project.image" :alt="$page.project.title" />
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
      </div>

    </article>
  </layout>
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

export default {
  name: "Project",
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
    return {
      title: this.$page.project.title,
      meta: [
        { key: 'description' , name: 'description',
          content: this.$page.project.summary },
        {
          key: 'keywords', name: 'keywords',
          content: 'JavaScript developer, ' + this.$page.project.tags.map(t=>t.title).join(', ') + ', ' + this.$page.project.technologies.map(t=>t.title).join(', ')
        },
        { key: 'og:title', property: 'og:title', content: `${this.$page.project.title} | Dorich` },
        { key: 'og:description', property: 'og:description',
          content: this.$page.project.summary },
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
.markdown-body{
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
  .markdown-body{
    width: 95%;
  }
}
</style>