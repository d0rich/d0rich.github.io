<template>
  <div>
    <h1 class="text-center mt-7">Projects</h1>
    <div class="hr" />
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
    </nav>

    <nav class="repos-container">
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

  </div>
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

export default {
  name: "Projects",
  components: {
    ProjectBlock
  },
  data(){
    return{
      breadcrumbs: [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio()},
        {text: 'projects', href: Router.projects(), disabled: true},
      ]
    }
  },
  methods: {
    changePage(page){
      this.$router.push(Router.projects(page))
    }
  },
	mixins: [metaMixin],
  metaInfo() {
		return this.createMetaInfo({
			title: 'Projects',
			description: 'Projects of Dorich, software developer',
			ogTitle: 'Portfolio by Dorich',
			ogPath: `/portfolio/projects/${this.$page.projects.pageInfo.currentPage > 1 ? this.$page.projects.pageInfo.currentPage + '/' : '' }`
		})
  }
}
</script>

<style scoped>
.repos-container{
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: start;
}
@media screen and (max-width: 1080px) {
  .repos-container{
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 640px) {
  .repos-container{
    grid-template-columns: 1fr;
  }
}
</style>
