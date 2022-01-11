<template>
  <Layout>
    <h1 class="mt-7">Blog posts filtered by tag</h1>
    <div class="hr"></div>
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
      <v-btn color="primary" class="ml-5 my-5 align-self-start"
             :to="Router.blog()" exact>
        <v-icon>
          mdi-chevron-left
        </v-icon>
        Back
      </v-btn>
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
import {Router} from "../router";
export default {
  components:{
    PostCard
  },
  computed:{
    breadcrumbs(){
      return [
        {text: 'd0rich', href: Router.home},
        {text: 'blog', href: Router.blog()},
        {text: 'tags', disabled: true},
        {text: this.$page.tag.title , disabled: true},
      ]
    },
  },
  methods: {
    changePage(page){
      this.$router.push(Router.tag(this.$page.tag.title, page))
    }
  },
  metaInfo() {
    return {
      title: `Tag: ${this.$page.tag.title}`,
      meta: [
        { key: 'description' , name: 'description',
          content: `All posts of Dorich with tag #${this.$page.tag.title}` },
        { key: 'og:title', property: 'og:title', content: `Tag: ${this.$page.tag.title} | Dorich` },
        { key: 'og:description', property: 'og:description',
          content: `All posts of Dorich with tag #${this.$page.tag.title}`},
        { key: 'og:url', property: 'og:url', content: `https://d0rich.github.io/blog/tags/${this.$page.tag.title}/${this.$page.tag.belongsTo.pageInfo.currentPage > 1 ? this.$page.tag.belongsTo.pageInfo.currentPage + '/' : ''}`},
        { key: 'robots', name: 'robots', content: 'noindex,follow'}
      ]
    }
  },
}
</script>
<style>
.tag-highlight{
  color: var(--v-info-base);
}
</style>