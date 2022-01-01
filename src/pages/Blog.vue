<template>
  <Layout>
    <h1>My blog posts</h1>

    <post-card v-for="post in $page.posts.edges" :key="post.id"
               :post="post.node"
               class="my-2" />

    <h2>Pagination</h2>
    <v-pagination :length="$page.posts.pageInfo.totalPages" :value="$page.posts.pageInfo.currentPage" @input="changePage" />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
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
}
</page-query>

<script>
import { Pager } from 'gridsome'
import {Router} from "../router";
import PostCard from "../components/PostCard";

export default {
  components: {
    Pager, PostCard
  },
  methods: {
    changePage(page){
      this.$router.push(Router.blog(page))
    }
  },
  metaInfo: {
    title: 'View my blog posts'
  }
}
</script>