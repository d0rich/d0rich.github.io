<template>
  <div>
    <h1 class="text-center mt-7">{{texts.title.text}}</h1>
    <EditProjectModal @updated="fetch" class="align-self-start">
      {{texts.createBtn.text}}
    </EditProjectModal>
    <header class="projects-header">{{texts.header.text}}</header>
    <div class="hr" />
    <div class="mx-5">
      <span>
        <v-icon color="accent">
        mdi-lightbulb
      </v-icon>
      {{texts.filterTip.text}}
      </span>
    </div>
    <div class="mx-md-5 mx-sm-1">
      <v-chip-group class="mt-5" color="accent" multiple v-model="chosenTags">
        <v-chip :value="tag.id" v-for="tag in tags" :key="tag.id"
                @input="logToggleTag(tag.text, $event)">
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
        header: new Text('Здесь вы можете ознакомиться с проектами, к которым я, ' +
            'JavaScript разработчик Николай Дорофеев (d0rich), приложил руку.',
        'Here you can see the projects that I, JavaScript developer Nikolay Dorofeev (d0rich), had a hand in.'),
        createBtn: new Text('Создать проект', 'Create project'),
        filterTip: new Text('Вы можете выбрать интересующие вас теги и вывести проекты, которые их содержат.',
              'You can select the tags you are interested in and display the projects containing them.'),
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
      if (this.$route.query.tags)
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
    },
    logToggleTag(tag_name, value){
      this.$analytics.logEvent('update_projects_filter', {
        toggle_tag: tag_name,
        tag_value: value,
        all_filters: this.chosenTags.map(tagId => this.tags.find(tag => tag.id === tagId).text)
      })
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
    this.getTagsForFilters().then(tags => {
      this.tags = tags
    })
    await this.fetch()
  },
  computed:{
    title(){
      return new Text('Проекты', 'Projects').text
    },
    description(){
      return new Text('На этой странице вы можете ознакомиться с проектами ' +
          'JavaScript разработчика Николая Дорофеева (d0rich) из Томска (Россия).',
          'On this page you can see the projects ' +
          'of the JavaScript developer Nikolay Dorofeev (d0rich) from Tomsk (Russia).').text
    },
    keywords(){
      return new Text('JavaScript разработка, веб приложения, ',
          'JavaScript development, web applications, ').text + this.tags.map(tag => tag.text).join(', ')
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: 'description' , name: 'description', content: this.description },
        {
          vmid: 'keywords', name: 'keywords',
          content: this.keywords
        },
        { vmid: 'og:title', property: 'og:title', content: this.title },
        { vmid: 'og:description', property: 'og:description', content: this.description },
        { vmid: 'robots', name: 'robots', content: 'index,follow'}
      ]
    }
  }
}
</script>

<style scoped>
.projects-header{
  max-width: 800px;
  margin: 1rem auto 0 auto;
  font-size: 1.2rem;
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
