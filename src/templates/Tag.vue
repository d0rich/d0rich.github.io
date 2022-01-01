<template>
  <Layout>
    <v-breadcrumbs class="align-self-start" :items="breadcrumbs"/>
    <back-btn class="ml-5 my-5 align-self-start" />
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
import BackBtn from "../components/BackBtn";
import {Router} from "../router";
export default {
  components:{
    PostCard, BackBtn
  },
  computed:{
    breadcrumbs(){
      return [
        {text: 'd0rich', href: Router.home},
        {text: 'blog', href: Router.blog()},
        {text: 'tags', disabled: true},
        {text: this.$page.tag.title , disabled: true},
      ]
    }
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