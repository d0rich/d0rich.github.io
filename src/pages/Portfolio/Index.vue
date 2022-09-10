<template>
  <div>
    <h1 class="text-center mt-7">Portfolio</h1>
    <div class="hr" />
    <nav class="align-self-start">
      <v-breadcrumbs :items="breadcrumbs"/>
    </nav>
    <!-- Projects -->
    <v-row no-gutters>
      <v-col>
        <v-card :to="projectsLink" class="projects-card">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                HAND WRITTEN
              </div>
              <v-list-item-title class="mb-1">
                <h2>Projects</h2>
              </v-list-item-title>
              <v-list-item-subtitle class="text" v-text="'Most important projects for me'"/>
            </v-list-item-content>

            <v-list-item-avatar
                tile
                color="primary"
                size="80"
            >
              <v-icon large>mdi-briefcase</v-icon>
            </v-list-item-avatar>
          </v-list-item>
          <div class="d-flex">
            <g-image v-for="(project, i) in projects" :key="project.id"
                     :src="project.image"
                     :style="{ zIndex: projects.length - i }"
                     class="projects-card__image" />
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- GitHub -->
    <div class="d-flex flex-wrap mt-4">
      <div class="col mx-1">
        <v-card :to="reposLink" class="projects-card">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                PARSED
              </div>
              <v-list-item-title class="mb-1">
                <h2>Relevant Repositories</h2>
              </v-list-item-title>
              <v-list-item-subtitle class="text" v-text="'Projects I\'m currently working on'"/>
            </v-list-item-content>

            <v-list-item-avatar tile color="primary" size="80">
              <v-icon large>mdi-github</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </div>
      <div class="col mx-1">
        <v-card :to="projectsLink" class="projects-card">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                PARSED
              </div>
              <v-list-item-title class="mb-1">
                <h2>Archive</h2>
              </v-list-item-title>
              <v-list-item-subtitle class="text" v-text="'Archive of my old GitHub repositories'"/>
            </v-list-item-content>

            <v-list-item-avatar tile color="primary" size="80">
              <v-icon x-large>mdi-github</v-icon>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>

<page-query>
query Portfolio {
  projects: allProject (sortBy: "date", order: DESC, limit: 4) {
    edges {
      node {
        id
        image
      }
    }
  }
}
</page-query>

<script>
import {Router} from "../../router";
import {metaMixin} from "../../mixins/meta";

export default {
  name: "Portfolio",
  data(){
    return{
      breadcrumbs: [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio(), disabled: true}
      ]
    }
  },
  computed: {
    projectsLink: () => Router.projects(),
    reposLink: () => Router.repositories(),
    projects() {
      return this.$page.projects.edges.map(edge => edge.node)
    }
  },
  mixins: [metaMixin],
  metaInfo() {
    return this.createMetaInfo({
      title: 'Portfolio',
      description: 'Portfolio of Dorich, JavaScript developer',
      ogTitle: 'Portfolio by Dorich',
      ogPath: `/portfolio`
    })
  }
}
</script>

<style scoped>
.projects-card{
  text-decoration: none;
}
.projects-card__image{
  width: 25%;
  transition: all ease-in-out .5s;
}

.projects-card__image:last-of-type{
  box-shadow: 0 0 0 7px var(--v-accent-base);
}

.projects-card:hover .projects-card__image:not(:last-of-type){
  margin-right: max(-6vw, -40px);
}

.projects-card:hover .projects-card__image:last-of-type{
  margin-right: calc(min(6vw, 40px) * 3);
  box-shadow: calc(min(6vw, 40px) * 2) 0 0 max(-20px, -5vw) var(--v-primary-base);
}

</style>