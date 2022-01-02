<template>
  <layout>
    <v-breadcrumbs class="align-self-start" :items="breadcrumbs"/>
    <back-btn class="ml-5 my-5 align-self-start" />
    <article>
      <h1>Projects where {{ $page.technology.title }} is used</h1>

      <div class="projects-container">
        <project-block v-for="project in $page.technology.belongsTo.edges" :key="project.node.id"
                       :project="project.node" class="my-2"/>
      </div>

      <v-pagination :length="$page.technology.belongsTo.pageInfo.totalPages"
                    :value="$page.technology.belongsTo.pageInfo.currentPage"
                    @input="changePage" />
    </article>
  </layout>
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
}
</page-query>

<script>
import ProjectBlock from "../components/ProjectBlock";
import BackBtn from "../components/BackBtn";
import {Router} from "../router";

export default {
  name: "Technology",
  components:{
    ProjectBlock, BackBtn
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
      title: `Technology: ${this.$page.technology.title}`
    }
  },
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