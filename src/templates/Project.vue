<template>
  <layout>
    <v-breadcrumbs class="align-self-start" :items="breadcrumbs"/>
    <back-btn class="ml-5 my-5 align-self-start" />
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
               min-width="300px" max-width="600px" width="100%"
               class="border-light--primary align-self-center my-4"
               :src="$page.project.image" :alt="$page.project.title" />
      </div>
      <div class="hr" />
      <div class="markdown-body mb-8" id="article-area" v-html="$page.project.content" />
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