<template>
  <layout>
    <v-breadcrumbs class="align-self-start" :items="breadcrumbs"/>
    <h1 class="text-center mt-7">Portfolio</h1>
    <div class="hr" />
    <h2 class="align-self-start">All Tags</h2>
    <v-chip-group  class="align-self-start">
      <v-chip
          v-for="tag in $page.tags.edges"
          :to="tag.node.path"
          :key="tag.node.id">
        #{{ tag.node.title }}
      </v-chip>
    </v-chip-group>
    <h2 class="align-self-start mt-4">All Technologies</h2>
    <v-chip-group  class="align-self-start">
      <v-chip
          v-for="tech in $page.technologies.edges"
          :to="tech.node.path"
          :key="tech.node.id">
        {{ tech.node.title }}
      </v-chip>
    </v-chip-group>

    <div class="projects-container">
      <ProjectBlock :project="project.node"
                    v-for="project in $page.projects.edges" :key="project.node.id" />
    </div>

    <h2>Pagination</h2>
    <v-pagination :length="$page.projects.pageInfo.totalPages"
                  :value="$page.projects.pageInfo.currentPage"
                  @input="changePage" />
  </layout>
</template>

<page-query>
query PortfolioInfo ($page: Int) {
  projects: allProject (sortBy: "date", order: DESC, perPage: 6, page: $page) @paginate {
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
        tags {
          title
        }
      }
    }
  }
  tags: allProjectTag (sortBy: "id", order: ASC) {
    edges {
      node {
        title
        path
      }
    }
  }
  technologies: allTechnology (sortBy: "id", order: ASC) {
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
import ProjectBlock from "../components/ProjectBlock";

export default {
  name: "Projects",
  components: {
    ProjectBlock
  },
  data(){
    return{
      breadcrumbs: [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio(), disabled: true},
      ]
    }
  },
  methods: {
    changePage(page){
      this.$router.push(Router.portfolio(page))
    }
  },
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>

<style scoped>
.projects-header{
  max-width: 800px;
  margin: 1rem auto 0 auto;
  font-size: 1.2rem;
}
.projects-container{
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: start;
}
@media screen and (max-width: 1080px) {
  .projects-container{
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 640px) {
  .projects-container{
    grid-template-columns: 1fr;
  }
}
</style>