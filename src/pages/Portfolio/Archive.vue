<template>
  <div>
    <h1 class="text-center mt-7">Archive</h1>
    <div class="hr" />
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
    </nav>

    <nav class="repos-container">
      <GitHubRepository v-for="repo in repos" :key="repo.id" :repo="repo" />
    </nav>

    <nav class="text-center mt-4">
      <v-pagination :length="$page.repos.pageInfo.totalPages"
                    :value="$page.repos.pageInfo.currentPage"
                    @input="changePage" />
    </nav>
  </div>
</template>

<page-query>
query Repos ($page: Int) {
  repos: allRepository (sortBy: "created_at", filter: { archived: { eq: true } }, order: DESC, perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        full_name
        owner {
          login
          type
          html_url
          avatar_url
        }
        description
        html_url
        stargazers_count
        language {
          name
          color
          icon
        }
        releases {
          name
          tag_name
          html_url
        }
      }
    }
  }

}
</page-query>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<script>
import {Router} from "../../router";
import ProjectBlock from "../../components/ProjectBlock";
import {metaMixin} from "../../mixins/meta";
import GitHubRepository from "../../components/github/GitHubRepository";

export default {
  name: "Repositories",
  components: {
    GitHubRepository,
    ProjectBlock
  },
  data(){
    return{
      breadcrumbs: [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio()},
        {text: 'archive', href: Router.archive(), disabled: true},
      ]
    }
  },
  computed: {
    repos(){
      return this.$page.repos.edges.map(r => r.node)
    }
  },
  methods: {
    changePage(page){
      this.$router.push(Router.archive(page))
    }
  },
  mixins: [metaMixin],
  metaInfo() {
    return this.createMetaInfo({
      title: 'Repositories',
      description: 'Relevant repositories of Dorich, software developer',
      ogTitle: 'Repositories by Dorich',
      ogPath: `/portfolio/archive/${this.$page.repos.pageInfo.currentPage > 1 ? this.$page.repos.pageInfo.currentPage + '/' : '' }`
    })
  }
}
</script>

<style scoped>
.repos-container{
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 640px) {
  .repos-container{
    grid-template-columns: 1fr;
  }
}
</style>
