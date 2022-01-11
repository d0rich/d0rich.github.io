<template>
  <layout>
    <h1 class="text-center mt-7">Portfolio</h1>
    <div class="hr" />
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
    </nav>

    <nav class="projects-container">
      <ProjectBlock :project="project.node"
                    v-for="project in $page.projects.edges" :key="project.node.id" />
    </nav>

    <nav class="text-center mt-4">
      <v-pagination :length="$page.projects.pageInfo.totalPages"
                    :value="$page.projects.pageInfo.currentPage"
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

    <nav  class="align-self-start mt-4">
      <h2>All Technologies</h2>
      <v-chip-group column>
        <v-chip
            v-for="tech in $page.technologies.edges"
            :to="tech.node.path"
            :key="tech.node.id">
          {{ tech.node.title }}
        </v-chip>
      </v-chip-group>
    </nav>

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
  tags: allProjectTag (sortBy: "title", order: ASC) {
    edges {
      node {
        title
        path
      }
    }
  }
  technologies: allTechnology (sortBy: "title", order: ASC) {
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
    title: 'Portfolio',
    meta: [
      { key: 'description' , name: 'description',
        content: 'Portfolio of Dorich, JavaScript developer' },
      { key: 'og:title', property: 'og:title', content: 'Blog | Dorich' },
      { key: 'og:description', property: 'og:description',
        content: 'Portfolio of Dorich, JavaScript developer'},
      { key: 'og:url', property: 'og:url', content: `https://d0rich.github.io/portfolio/${this.$page.projects.pageInfo.currentPage}/`},
      { key: 'robots', name: 'robots', content: 'noindex,follow'}
    ]
  }
}
</script>

<style scoped>
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