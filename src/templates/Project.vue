<template>
  <layout>
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
      <back-btn class="ml-5 my-5" />
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
      <div class="markdown-body mb-8" id="article-area" v-html="$page.project.content" />
      <h2>Built with</h2>
      <nav class="tech-container">
        <v-btn v-for="tech in $page.project.technologies" :key="tech.id"
               class="mx-4 my-2"
               outlined text large
               :to="tech.path">
          {{tech.title}}
        </v-btn>
      </nav>
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
  }
}
</page-query>

<script>
import BackBtn from "../components/BackBtn";
import {Router} from "../router";

export default {
  name: "Project",
  components: {
    BackBtn
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
    return {
      title: this.$page.project.title
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
article{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 95vw;
}
@media screen and (max-width: 640px){
  .markdown-body{
    width: 95%;
  }
}
</style>