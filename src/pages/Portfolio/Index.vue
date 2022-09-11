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
                     class="projects-card__image transition-swing" />
          </div>
        </v-card>
      </v-col>
    </v-row>
    <!-- GitHub -->
    <div class="d-flex align-center mb-4 mt-12 px-8 full-width">
      <div class="hr"></div>
      <div class="d-flex align-center mx-4">
        <v-avatar>
          <v-icon x-large>mdi-github</v-icon>
        </v-avatar>
        GitHub
      </div>
      <div class="hr"></div>
    </div>
    <section class="d-flex flex-wrap mt-4">
      <div class="col mx-1">
        <SectionBlock :to="reposLink"
                      status="PARSED"
                      name="Relevant Repositories"
                      description="Projects I'm currently working on"
                      icon="mdi-book-variant" />
      </div>
      <div class="col mx-1">
        <SectionBlock :to="archiveLink"
                      status="PARSED"
                      name="Archive"
                      description="Archive of my old GitHub repositories"
                      icon="mdi-archive" />
      </div>
    </section>
    <div class="d-flex align-center mb-4 mt-12 px-8 full-width">
      <div class="hr"/>
      <g-image :src="youtrackImage" class="mx-4" />
      <div class="hr"/>
    </div>
    <section class="col">
      <SectionBlock :to="youtrackLink"
                    status="WORK IN PROGRESS"
                    name="Projects in work"
                    description="All public projects and agiles from my YouTrack server"
                    icon="mdi-calendar" />
    </section>
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
import SectionBlock from "../../components/portfolio/SectionBlock";
import youtrackImage from '../../assets/youtrack.svg'

export default {
  name: "Portfolio",
  components: { SectionBlock },
  data(){
    return{
      breadcrumbs: [
        {text: 'd0rich', href: Router.home},
        {text: 'portfolio', href: Router.portfolio(), disabled: true}
      ],
      youtrackImage
    }
  },
  computed: {
    projectsLink: () => Router.projects(),
    reposLink: () => Router.repositories(),
    archiveLink: () => Router.archive(),
    youtrackLink: () => Router.youtrack(),
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
.full-width{
  width: 100%;
}
.projects-card{
  text-decoration: none;
}
.projects-card__image{
  width: 25%;
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