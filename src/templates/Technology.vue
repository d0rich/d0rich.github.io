<template>
  <div>
    <h1 class="mt-7">Projects filtered by technology</h1>
    <div class="hr"></div>
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

    <nav>
      <h1>Projects where <span class="tech-highlight">{{ $page.technology.title }}</span> is used</h1>

      <div class="projects-container">
        <project-block v-for="project in $page.technology.belongsTo.edges" :key="project.node.id"
                       :project="project.node" class="my-2"/>
      </div>
    </nav>

    <nav>
      <v-pagination :length="$page.technology.belongsTo.pageInfo.totalPages"
                    :value="$page.technology.belongsTo.pageInfo.currentPage"
                    @input="changePage" />
    </nav>

    <nav class="align-self-start mt-3">
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
  </div>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  technology: technology (id: $id) {
    title
    belongsTo (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Project {
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
import ProjectBlock from "../components/ProjectBlock";
import {Router} from "../router";

export default {
  name: "Technology",
  components:{
    ProjectBlock
  },
  computed:{
    breadcrumbs(){
      return [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio()},
        {text: 'technologies', disabled: true},
        {text: this.$page.technology.title , disabled: true},
      ]
    }
  },
  methods: {
    changePage(page){
      this.$router.push(Router.projectTech(this.$page.technology.title, page))
    }
  },
  metaInfo() {
    return {
      title: `Technology: ${this.$page.technology.title}`,
      meta: [
        { key: 'description' , name: 'description',
          content: `All projects of Dorich that use ${this.$page.technology.title}` },
        { key: 'og:title', property: 'og:title', content: `Technology: ${this.$page.technology.title} | Dorich` },
        { key: 'og:description', property: 'og:description',
          content: `All projects of Dorich that use ${this.$page.technology.title}`},
        { key: 'og:url', property: 'og:url', content: `https://d0rich.github.io/portfolio/technologies/${this.$page.technology.title}/${this.$page.technology.belongsTo.pageInfo.currentPage > 1 ? this.$page.technology.belongsTo.pageInfo.currentPage + '/':''}`},
        { key: 'robots', name: 'robots', content: 'noindex,follow'}
      ]
    }
  },
}
</script>

<style scoped>
.tech-highlight{
  color: var(--v-info-base);
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
