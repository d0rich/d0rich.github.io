<template>
  <Layout>
    <h1 class="mt-7">Blog posts filtered by tag</h1>
    <div class="hr"></div>
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
      <back-btn class="ml-5 my-5" />
    </nav>
    <nav>
      <h2>Posts tagged <span class="tag-highlight">#{{ $page.tag.title }}</span></h2>

      <post-card v-for="post in $page.tag.belongsTo.edges" :key="post.node.id"
                 :post="post.node"
                 class="my-2" />
    </nav>
    <nav>
      <v-pagination :length="$page.tag.belongsTo.pageInfo.totalPages"
                    :value="$page.tag.belongsTo.pageInfo.currentPage"
                    @input="changePage" />
    </nav>

    <nav class="align-self-start mt-5">
      <h2>All Tags</h2>
      <v-chip-group column>
        <v-chip
            v-for="tag in $page.tags.edges"
            :to="tag.node.path"
            :key="tag.node.id">
          #{{ tag.node.title }}
        </v-chip>
      </v-chip-group>
    </nav>
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
<style>
.tag-highlight{
  color: var(--v-info-base);
}
</style>