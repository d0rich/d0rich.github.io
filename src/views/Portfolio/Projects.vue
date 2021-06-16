<template>
  <div>
    <h1 class="text-center mt-7">{{texts.title.text}}</h1>
    <EditProjectModal @updated="fetch" class="align-self-start">{{texts.createBtn.text}}</EditProjectModal>
    <div class="hr" />
    <div class="mx-md-5 mx-sm-1">
      <v-chip-group class="mt-5" color="accent" multiple v-model="chosenTags">
        <v-chip :value="tag.id" v-for="tag in tags" :key="tag.id">
          {{tag.text}}
        </v-chip>
      </v-chip-group>
      <v-btn :loading="onPageLoad" color="primary" @click="fetch">
        <v-icon>mdi-filter</v-icon>
        {{texts.filterBtn.text}}
      </v-btn>
    </div>

    <transition-group name="glitch-transition" class="projects-container">
      <ProjectBlock :project="project" :chosen-tags="chosenTags"
              v-for="project in projects" :key="project.id" />
    </transition-group>
    <v-pagination v-if="pages > 1" class="mt-9"
                  @input="fetch"
                  v-model="page" :length="pages" />
  </div>
</template>

<script>
import EditProjectModal from "@/components/projects/EditProjectModal";
import ProjectBlock from "@/components/projects/ProjectBlock";
import {Text} from "@/classes";
import {mapActions} from 'vuex'
export default {
name: "Projects",
  components:{
    EditProjectModal, ProjectBlock
  },
  data(){
    return {
      page: 1,
      texts: {
        title: new Text('Мои проекты', 'My projects'),
        createBtn: new Text('Создать проект', 'Create project'),
        filterBtn: new Text('Фильтр по тегам', 'Filter by tags')
      },
      pages: 1,
      projects: [],
      tags: [],
      chosenTags: [],
      lastFilters: []
    }
  },
  watch: {
    '$route.fullPath'(){
      this.page = +this.$route.query.page
      this.chosenTags = JSON.parse(this.$route.query.tags)
      this.fetch()
    }
  },
  methods: {
    ...mapActions(['getTagsForFilters', 'getProjects']),
    async fetch(){
      if (this.chosenTags.sort().join() !== this.lastFilters.sort().join())
        this.page = 1
      if (JSON.stringify(this.$route.query) !== JSON.stringify(
          { page: this.page.toString(), tags: JSON.stringify(this.chosenTags) }
          ))
        await this.$router.push({...this.$route, query: { page: this.page.toString(), tags: JSON.stringify(this.chosenTags) }})
      this.turnPageLoad(true)
      this.lastFilters = this.chosenTags
      let projectsData = await this.getProjects({page: this.page, onPage: 6, tags: this.chosenTags})
      this.projects = projectsData.projects
      this.pages = projectsData.pages
      this.turnPageLoad(false)
    }
  },
  async created() {
    if (!this.$route.query.page) {
      await this.$router.replace({...this.$route, query: { ...this.$route.query, page: '1' }})
    }
    if (!this.$route.query.tags) {
      await this.$router.replace({...this.$route, query: { ...this.$route.query, tags: '[]' }})
    }
    this.page = +this.$route.query.page
    this.chosenTags = JSON.parse(this.$route.query.tags)
    this.tags = await this.getTagsForFilters()
    await this.fetch()
  },
  metaInfo() {
    return {
      title: new Text('Проекты', 'Projects').text
    }
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
