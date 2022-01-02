<template>
  <layout>
    <v-breadcrumbs class="align-self-start" :items="breadcrumbs"/>
    <back-btn class="ml-5 my-5 align-self-start" />
    <article>
      <h1>Projects tagged {{ $page.tag.title }}</h1>

      <div class="projects-container">
        <project-block v-for="project in $page.tag.belongsTo.edges" :key="project.node.id"
                      :project="project.node" class="my-2"/>
      </div>

      <v-pagination :length="$page.tag.belongsTo.pageInfo.totalPages"
                    :value="$page.tag.belongsTo.pageInfo.currentPage"
                    @input="changePage" />
    </article>
  </layout>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: projectTag (id: $id) {
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
  name: "ProjectTag",
  components:{
    ProjectBlock, BackBtn
  },
  computed:{
    breadcrumbs(){
      return [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio()},
        {text: 'tags', disabled: true},
        {text: this.$page.tag.title , disabled: true},
      ]
    }
  },
  methods: {
    changePage(page){
      this.$router.push(Router.projectTag(this.$page.tag.title, page))
    }
  },
  metaInfo() {
    return {
      title: `Project Tag: ${this.$page.tag.title}`
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