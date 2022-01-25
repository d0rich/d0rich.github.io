<template>
  <div>
    <h1 class="mt-7">My blog</h1>
    <div class="hr"></div>
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
    </nav>

    <nav class="posts-container">
      <post-card v-for="post in $page.posts.edges" :key="post.node.id"
                 :post="post.node"
                 class="my-2" />
    </nav>

    <nav>
      <v-pagination :length="$page.posts.pageInfo.totalPages"
                    :value="$page.posts.pageInfo.currentPage"
                    @input="changePage" />
    </nav>


    <nav class="align-self-start mt-5">
      <h2>All tags</h2>
      <v-chip-group  column>
        <v-chip
            v-for="tag in $page.tags.edges"
            :to="tag.node.path"
            :key="tag.node.id">
          #{{ tag.node.title }}
        </v-chip>
      </v-chip-group>
    </nav>
  </div>
</template>

<page-query>
query BlogInfo ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        image
        path
      }
    }
  }
  tags: allTag (sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<script>
import {Router} from "../router";
import PostCard from "../components/PostCard";

export default {
  components: {
    PostCard
  },
  data(){
    return{
      breadcrumbs: [
        {text: 'd0rich', href: Router.home},
        {text: 'blog', href: Router.blog(), disabled: true},
      ]
    }
  },
  methods: {
    changePage(page){
      this.$router.push(Router.blog(page))
    }
  },
  metaInfo() {
    return {
      title: 'Blog',
      meta: [
        { key: 'description' , name: 'description',
          content: 'Blog of Dorich, JavaScript developer' },
        { key: 'og:title', property: 'og:title', content: 'Blog by Dorich' },
        { key: 'og:description', property: 'og:description',
          content: 'Blog of Dorich, JavaScript developer'},
        { key: 'og:url', property: 'og:url', content: `https://d0rich.github.io/blog/${this.$page.posts.pageInfo.currentPage > 1 ? this.$page.posts.pageInfo.currentPage + '/' : ''}`},
        { key: 'robots', name: 'robots', content: 'noindex,follow'}
      ]
    }
  }
}
</script>
<style scoped>
.posts-container{
	width: 100%;
}
</style>
