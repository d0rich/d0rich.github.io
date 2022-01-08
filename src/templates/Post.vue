<template>
  <Layout>
    <v-breadcrumbs class="align-self-start" :items="breadcrumbs"/>
    <back-btn class="ml-5 my-5 align-self-start" />
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
        <v-img v-if="$page.post.image" eager :aspect-ratio="3/2"
               min-width="300px" max-width="600px" width="100%"
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
import BackBtn from "../components/BackBtn";
export default {
  components: {
    BackBtn
  },
  computed:{
    breadcrumbs(){
      return [
        {text: 'd0rich', href: Router.home},
        {text: 'blog', href: Router.blog()},
        {text: 'posts', disabled: true},
        {text: this.$page.post.title , disabled: true},
      ]
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
.markdown-body{
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
  .markdown-body{
    width: 95%;
  }
}
</style>