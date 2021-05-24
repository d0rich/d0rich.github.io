<template>
  <div>
    <h1 class="text-center mt-7">{{texts.title.text}}</h1>
    <div class="hr" />
    <v-btn class="ml-5" color="primary" :to="{ name: 'PortfolioIndex' }">
      <v-icon>
        mdi-chevron-left
      </v-icon>
      {{texts.backBtn.text}}
    </v-btn>
    <article class="mt-6">
      <v-img v-if="image"
             min-width="300px" max-width="600px" width="100%" max-height="30vh"
             class="border-light--primary align-self-center"
          :src="image.src" :lazy-src="image.phSrc" :alt="image.alt.text" />
      <div class="project-text-container">
        <h1 class="text-center mt-5 mb-3">{{title.text}}</h1>
        <div class="ml-sm-7 project__date">
          {{texts.date.text}}: {{date.toLocaleDateString()}}
        </div>
        <div class="mx-sm-5 mb-3">
          <v-chip class="ma-2" color="primary" v-for="tag in tags" :key="tag.id">
            {{tag.text}}
          </v-chip>
        </div>
        <section>
          <p v-for="(str, index) in description.text.split('\n')" :key="index">
            {{str}}
          </p>
        </section>
        <div class="project__extra">
          <div class="extra__technologies">
            <h2>{{texts.technologies.text}}:</h2>
            <ul>
              <v-list-item v-for="tech in technologies" :key="tech.id"
                           :href="tech.url" target="_blank">
                {{tech.name}} - v{{tech.version}}
              </v-list-item>
            </ul>
          </div>
          <div class="extra__links">
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
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import {ImageModel, Text} from "@/classes";

export default {
  name: "Project",
  data(){
    return{
      texts: {
        title: new Text('Просмотр проекта', 'View project'),
        backBtn: new Text('Назад к проектам', 'Back to projects'),
        date: new Text('Дата', 'Date'),
        technologies: new Text('Технологии', 'Technologies'),
        links: new Text('Ссылки', 'Links'),
        projectLink: new Text('Рабочий проект', 'Working project'),
        githubUrl: new Text('Исходники на Github', 'Source code on Github')
      },
      id: 0,
      title: new Text('Проект','Project'),
      image: null,
      description: new Text('', ''),
      url: '',
      githubUrl: '',
      date: new Date(),
      tags: [],
      technologies: []
    }
  },
  methods:{
    async getProject(stringId){
      let res = await this.axios.get(`${this.apiUrl}/projects/get/byId/${stringId}`)
      let project = res.data
      this.id = project.id
      this.title = Text.fromArr(project.title)
      this.image = new ImageModel({
          src: project.imgUrl[0],
          phSrc: project.imgUrl[1],
          alt: Text.fromArr(project.title)
        })
      this.description = Text.fromArr(project.description)
      this.url = project.url
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
    async fetch(){
      this.turnPageLoad(true)
      await this.getProject(this.$route.params.stringId)
      this.turnPageLoad(false)
    }
  },
  async created(){
    await this.fetch()
  },
  metaInfo() {
    return {
      title: this.title.text
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
