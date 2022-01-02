<template>
  <Layout>
    <h1>My blog posts</h1>
    <v-breadcrumbs class="align-self-start" :items="breadcrumbs"/>
    <v-chip-group  class="align-self-start">
      <v-chip
          v-for="tag in $page.tags.edges"
          :to="tag.node.path"
          :key="tag.node.id">
        #{{ tag.node.title }}
      </v-chip>
    </v-chip-group>
    <post-card v-for="post in $page.posts.edges" :key="post.node.id"
               :post="post.node"
               class="my-2" />

    <h2>Pagination</h2>
    <v-pagination :length="$page.posts.pageInfo.totalPages"
                  :value="$page.posts.pageInfo.currentPage"
                  @input="changePage" />
  </Layout>
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
  tags: allTag (sortBy: "title") {
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
  metaInfo: {
    title: 'Blog'
  }
}
</script>