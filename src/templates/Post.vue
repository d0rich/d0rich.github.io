<template>
  <Layout>
    <nav  class="ml-5 my-5 align-self-start">
      <v-btn color="primary" :to="Router.blog()" exact>
        <v-icon>
          mdi-chevron-left
        </v-icon>
        To News
      </v-btn>
    </nav>
    <article>
      <div>
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
        <v-img v-if="$page.post.image"
               min-width="300px" max-width="600px" width="100%" max-height="30vh" min-height="200px"
               class="border-light--primary align-self-center my-4"
               :src="$page.post.image" :alt="$page.post.title" />
      </div>
      <div class="hr" />
      <div class="markdown-body mb-8" id="article-area" v-html="$page.post.content" />
    </article>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
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

<script>
import {Router} from "../router";
export default {
  data(){
    return{
      Router
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style scoped>
article{
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 640px){
  .markdown-body{
    width: 95%;
  }
}
</style>