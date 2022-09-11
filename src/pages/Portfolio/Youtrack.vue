<template>
  <div>
    <h1 class="text-center mt-7">YouTrack projects</h1>
    <div class="hr" />
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
      <v-btn color="primary" class="ml-5 my-5 align-self-start"
             :to="Router.portfolio()" exact>
        <v-icon>
          mdi-chevron-left
        </v-icon>
        Back
      </v-btn>
    </nav>

    <nav class="repos-container">
      <YoutrackProject v-for="project in projects" :key="project.id" :project="project" />
    </nav>

    <nav class="text-center mt-4">
      <v-pagination :length="$page.projects.pageInfo.totalPages"
                    :value="$page.projects.pageInfo.currentPage"
                    @input="changePage" />
    </nav>
  </div>
</template>

<page-query>
query Repos ($page: Int) {
  projects: allYoutrackProject (sortBy: "id", perPage: 6, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        name
        description
        iconUrl
        projectLink
        agiles{
          name
          agileLink
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
import YoutrackProject from "../../components/youtrack/YoutrackProject";

export default {
  name: "Repositories",
  components: {
    YoutrackProject,
    ProjectBlock
  },
  data(){
    return{
      breadcrumbs: [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio()},
        {text: 'youtrack', href: Router.youtrack(), disabled: true},
      ]
    }
  },
  computed: {
    projects(){
      return this.$page.projects.edges.map(r => r.node)
    }
  },
  methods: {
    changePage(page){
      this.$router.push(Router.youtrack(page))
    }
  },
  mixins: [metaMixin],
  metaInfo() {
    return this.createMetaInfo({
      title: 'Tracked Projects',
      description: 'Tracked projects of Dorich, software developer',
      ogTitle: 'Dorich\'s tracked projects',
      ogPath: `/portfolio/repos/${this.$page.projects.pageInfo.currentPage > 1 ? this.$page.projects.pageInfo.currentPage + '/' : '' }`
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
