<template>
  <div>
    <h1 class="mt-7">Projects filtered by tag</h1>
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
  </div>
</template>

<page-query>
query Tag ($id: ID!, $page: Int) {
  tag: projectTag (id: $id) {
    title
    belongsTo (page: $page, perPage: 6,
			sortBy: "date", order: DESC) @paginate {
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

<static-query>
query {
	metadata {
		siteUrl
	}
}
</static-query>

<script>
import ProjectBlock from "../components/ProjectBlock";
import {Router} from "../router";
import {metaMixin} from "../mixins/meta";

export default {
  name: "ProjectTag",
  components:{
    ProjectBlock
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
	mixins: [metaMixin],
  metaInfo() {
		return this.createMetaInfo({
			title: `Project Tag: ${this.$page.tag.title}`,
			description: `All projects of Dorich with tag #${this.$page.tag.title}`,
			keywords: [this.$page.tag.title],
			ogTitle: `Tag for IT Projects: ${this.$page.tag.title}`,
			ogPath: `/portfolio/tags/${this.$page.tag.title}/${this.$page.tag.belongsTo.pageInfo.currentPage > 1 ? this.$page.tag.belongsTo.pageInfo.currentPage + '/': '' }`
		})
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
