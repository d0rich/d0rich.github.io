<template>
  <div>
    <Terminal v-if="inDev" enter-word="watch portfolio">
      <div class="error--text">
        {{text.text}}
      </div>
    </Terminal>
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
        {{texts.filterBtn.text}}
      </v-btn>
    </div>

    <transition-group name="glitch-transition" class="projects-container">
      <ProjectBlock :project="project" :chosen-tags="chosenTags"
              v-for="project in projects" :key="project.id" />
    </transition-group>
    <v-pagination v-if="pages>1" @input="fetch" class="mt-9" v-model="page" :length="pages" />
  </div>
</template>

<script>
import Terminal from "@/components/Terminal";
import EditProjectModal from "@/components/projects/EditProjectModal";
import ProjectBlock from "@/components/projects/ProjectBlock";
import {ImageModel, Text} from "@/classes";
import {mapActions} from 'vuex'
export default {
name: "Projects",
  components:{
    Terminal, EditProjectModal, ProjectBlock
  },
  data(){
    return {
      inDev: false,
      page: 1,
      textDev: new Text('Упс, портфолио ещё в разработке :(',
                     'Oops, it seems portfolio is still in development :('),
      texts: {
        title: new Text('Мои проекты', 'My projects'),
        createBtn: new Text('Создать проект', 'Create project'),
        filterBtn: new Text('Проекты по тегам', 'Projects with tags')
      },
      pages: 1,
      projects: [],
      tags: [],
      chosenTags: [],
      lastFilters: []
    }
  },
  watch: {
    'page'(){
      //this.$router.push({name: 'PortfolioIndex',query: {page: this.page.toString()}})
    }
  },
  methods: {
    ...mapActions(['getAllTags']),
    async getProjects(page = 1, onPage = 6, tags = []){
      let res =
          await this.axios.get(`${this.apiUrl}/projects/get/all?page=${page}&onPage=${onPage}&tags=${tags.join(',')}`)
      let projects = res.data.projects
      this.pages = res.data.pages
      return projects.map(project => {
        return {
          id: project.id,
          stringId: project.stringId,
          date: new Date(project.date),
          title: Text.fromArr(project.title),
          image: new ImageModel({
            src: project.imgUrl[0],
            phSrc: project.imgUrl[1],
            alt: Text.fromArr(project.title)
          }),
          tags: project.tagId_tags.map(tag => {
            return {id: tag.id, text: tag.text}
          })
        }
      })
    },
    async fetch(){
      this.turnPageLoad(true)
      if (this.chosenTags.sort().join() !== this.lastFilters.sort().join())
        this.page = 1
      this.lastFilters = this.chosenTags
      this.projects = await this.getProjects(this.page, 6, this.chosenTags)
      this.tags = await this.getAllTags()
      this.turnPageLoad(false)
    }
  },
  async created() {
    if (!this.$route.query.page)
      this.$route.query.page = '1'
    this.page = +this.$route.query.page
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
