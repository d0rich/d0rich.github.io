<template>
  <layout>
    <h1 class="mt-7">Projects filtered by tag</h1>
    <div class="hr"></div>
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
      <back-btn class="ml-5 my-5" />
    </nav>

    <nav>
      <h2 class="mt-4">Projects tagged <span class="tag-highlight">#{{ $page.tag.title }}</span></h2>
      <div class="projects-container">
        <project-block v-for="project in $page.tag.belongsTo.edges" :key="project.node.id"
                       :project="project.node" class="my-2"/>
      </div>
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
  tags: allProjectTag (sortBy: "title", order: ASC) {
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
.tag-highlight{
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