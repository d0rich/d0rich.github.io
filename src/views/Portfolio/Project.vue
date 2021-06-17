<template>
  <div>
    <h1 class="text-center mt-7">{{texts.title.text}}</h1>
    <EditProjectModal :id="id" @updated="fetch">{{texts.editProject.text}}</EditProjectModal>
    <DeleteProject class="my-2" :id="id" :string-id="stringId" @deleted="$router.push({name: 'PortfolioIndex'})">
      {{texts.delete.text}}
    </DeleteProject>
    <div class="hr" />
    <nav>
      <v-btn class="ml-5" color="primary" @click="goBack()">
        <v-icon>
          mdi-chevron-left
        </v-icon>
        {{texts.backBtn.text}}
      </v-btn>
    </nav>
    <article class="mt-6">
      <v-img v-if="image"
             min-width="300px" max-width="600px" width="100%" max-height="30vh"
             class="border-light--primary align-self-center"
          :src="image.src" :lazy-src="image.phSrc" :alt="image.alt.text" />
      <div class="project-text-container">
        <h1 class="text-center mt-5 mb-3">{{title.text}}</h1>
        <section class="ml-sm-7 project__date">
          {{texts.date.text}}: {{date.toLocaleDateString()}}
        </section>
        <section class="mx-sm-5 mb-3">
          <v-chip class="ma-2" color="primary" v-for="tag in tags" :key="tag.id">
            {{tag.text}}
          </v-chip>
        </section>
        <section>
          <p v-for="(str, index) in description.text.split('\n')" :key="index">
            {{str}}
          </p>
        </section>
        <section class="project__extra">
          <div class="extra__technologies" v-if="technologies.length > 0">
            <h2>{{texts.technologies.text}}:</h2>
            <ul>
              <v-list-item v-for="tech in technologies" :key="tech.id"
                           :href="tech.url" target="_blank">
                {{tech.name}} - v{{tech.version}}
              </v-list-item>
            </ul>
          </div>
          <div class="extra__links" v-if="githubUrl || url">
            <h2>{{texts.links.text}}:</h2>
            <ul>
              <v-list-item v-if="url" :href="url" target="_blank">
                <v-list-item-icon>
                  <v-icon>mdi-desktop-mac-dashboard</v-icon>
                </v-list-item-icon>
                {{texts.projectLink.text}}
              </v-list-item>
              <v-list-item v-if="githubUrl" :href="githubUrl" target="_blank">
                <v-list-item-icon>
                  <v-icon>mdi-github</v-icon>
                </v-list-item-icon>
                {{texts.githubUrl.text}}
              </v-list-item>
            </ul>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import {ImageModel, Text} from "@/classes";
import EditProjectModal from "@/components/projects/EditProjectModal";
import DeleteProject from "@/components/projects/DeleteProject";

export default {
  name: "Project",
  components: {
    DeleteProject,
    EditProjectModal
  },
  data(){
    return{
      texts: {
        editProject: new Text('Редактировать  проект', 'Edit project'),
        title: new Text('Просмотр проекта', 'View project'),
        backBtn: new Text('Назад к проектам', 'Back to projects'),
        date: new Text('Дата', 'Date'),
        technologies: new Text('Технологии', 'Technologies'),
        links: new Text('Ссылки', 'Links'),
        projectLink: new Text('Рабочий проект', 'Working project'),
        githubUrl: new Text('Исходники на Github', 'Source code on Github'),
        delete: new Text('Удалить проект', 'Delete project')
      },
      id: 0,
      stringId: '',
      title: new Text('Проект','Project'),
      image: null,
      description: new Text('', ''),
      url: '',
      githubUrl: '',
      date: new Date(),
      tags: [],
      technologies: [],
      prevRoute: null
    }
  },
  methods:{
    async getProject(stringId){
      let res = await this.axios.get(`${this.apiUrl}/projects/get/byStringId/${stringId}`)
      let project = res.data
      this.id = project.id
      this.stringId = project.stringId
      this.title = Text.fromArr(project.title)
      this.image = new ImageModel({
          src: project.imgUrl[0],
          phSrc: project.imgUrl[1],
          alt: Text.fromArr(project.title)
        })
      this.description = Text.fromArr(project.description)
      this.url = project.url
      this.githubUrl = project.githubUrl
      this.date = new Date(project.date)
      this.tags = project.tagId_tags.map(tag => {
        return {id: tag.id, text: tag.text}
      })
      this.technologies = project.technologyId_technologies.map(tech => {
        return {
          name: tech.name,
          url: tech.url,
          version: tech.technologies_in_project.version
        }
      })
    },
    goBack(){
      if (this.prevRoute.name === 'PortfolioIndex')
        this.$router.go(-1)
      else this.$router.push({ name: 'PortfolioIndex' })
    },
    async fetch(){
      this.turnPageLoad(true)
      try {
        await this.getProject(this.$route.params.stringId)
      }
      catch (e){
        this.setError404(true)
      }
      this.turnPageLoad(false)
    }
  },
  async created(){
    await this.fetch()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  computed:{
    keywords(){
      return new Text('JavaScript разработка, веб приложения, ',
          'JavaScript development, web applications, ').text + this.tags.map(tag => tag.text).join(', ')
    }
  },
  metaInfo() {
    return {
      title: this.title.text,
      meta: [
        {
          vmid: 'description' , name: 'description',
          content: this.description.text.substr(0, 180) + '...'
        },
        {
          vmid: 'keywords', name: 'keywords',
          content: this.keywords
        },
        { vmid: 'og:title', property: 'og:title', content: this.title.text },
        { vmid: 'og:image', property: 'og:image', content: this.image?.src },
        { vmid: 'vk:image'},
        {
          vmid: 'og:description', property: 'og:description',
          content: this.description.text.substr(0, 180) + '...'
        },
        { vmid: 'robots', name: 'robots', content: 'index,follow'}
      ]
    }
  }
}
</script>

<style scoped>
article{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project-text-container{
  width: 75%;
  min-width: 300px;
  max-width: 1000px;
}
.project__date{
  color: var(--v-accent-darken1);
  font-size: 1.1em;
}
.project__extra{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.project__extra ul{
  padding: 0;
}
@media screen and (max-width: 640px){
  .project-text-container{
    width: 95%;
  }
}
</style>
