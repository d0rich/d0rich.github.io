<template>
  <Layout>
    <article>
      <h1>Posts tagged {{ $page.tag.title }}</h1>

      <post-card v-for="post in $page.tag.belongsTo.edges" :key="post.node.id"
                 :post="post.node"
                 class="my-2" />

      <v-pagination :length="$page.tag.belongsTo.pageInfo.totalPages"
                    :value="$page.tag.belongsTo.pageInfo.currentPage"
                    @input="changePage" />
    </article>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 10) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            title
            image
            path
            summary
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import PostCard from "../components/PostCard";
import {Router} from "../router";
export default {
  components:{
    PostCard
  },
  methods: {
    changePage(page){
      this.$router.push(Router.tag(this.$page.tag.title, page))
    }
  },
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`
    }
  },
}
</script>