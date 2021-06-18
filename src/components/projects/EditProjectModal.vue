<template>
  <div v-if="isAuth">
    <v-btn block @click="showModal = ! showModal" color="accent darken-4">
      <slot />
    </v-btn>
    <v-dialog class="projectModal" v-model="showModal"
        transition="glitch-transition" persistent scrollable>
      <v-card>
        <v-form :disabled="load.project" @submit.prevent="sendForm" v-model="valid" ref="form">
          <v-toolbar color="primary">
            <slot />
            <v-spacer />
            <v-btn @click="showModal = !showModal" icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text style="background-color: #1e1e1e">
            <v-tabs align-with-title v-model="tab">
              <v-tab>Русский</v-tab>
              <v-tab>English</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <!-- Редактирование русского текста -->
              <v-tab-item>
                <v-card>
                  <v-card-text>
                    <v-file-input v-model="projectForm.image"
                                  prepend-icon="mdi-file-image"
                                  outlined dense
                                  :rules="[rules.requiredForNew(id)]"
                                  :accept="acceptImg.join(',')"
                                  label="Изображение" />
                    <v-text-field v-model="projectForm.stringId"
                                  :loading="load.stringId"
                                  :messages="[stringIdMessage]"
                                  @input="checkStringIdReq"
                                  outlined dense
                                  :rules="[rules.required]"
                                  label="Строковый ID" />
                    <v-text-field v-model="projectForm.title[0]"
                                  outlined dense
                                  :rules="[rules.required]"
                                  label="Русское название" />
                    <v-menu
                        :value="calendar.ru"
                        :close-on-content-click="false"
                        transition="glitch-transition"
                        offset-y
                        min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="projectForm.date"
                            label="Дата выполнения"
                            prepend-icon="mdi-calendar"
                            outlined dense
                            clearable
                            :rules="[rules.required]"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="projectForm.date"
                                     v-click-outside="calendar.ru = false"
                                     locale="ru-ru"
                                     first-day-of-week="1"
                                     no-title scrollable />
                    </v-menu>
                    <v-textarea v-model="projectForm.description[0]"
                                outlined dense
                                :rules="[rules.required]"
                                label="Русское описание" />
                    <v-text-field v-model="projectForm.url"
                                  outlined dense
                                  label="Ссылка на рабочий проект" />
                    <v-text-field v-model="projectForm.githubUrl"
                                  outlined dense
                                  label="Ссылка на Github" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Редактирование английского текста -->
              <v-tab-item>
                <v-card>
                  <v-card-text>
                    <v-file-input v-model="projectForm.image"
                                  prepend-icon="mdi-file-image"
                                  outlined dense
                                  :rules="[rules.requiredForNew(id)]"
                                  :accept="acceptImg.join(',')"
                                  label="Image" />
                    <v-text-field v-model="projectForm.stringId"
                                  :loading="load.stringId"
                                  :messages="[stringIdMessage]"
                                  @input="checkStringIdReq"
                                  outlined dense
                                  :rules="[rules.required]"
                                  label="String ID" />
                    <v-text-field v-model="projectForm.title[1]"
                                  outlined dense
                                  :rules="[rules.required]"
                                  label="English title" />
                    <v-menu
                        :value="calendar.en"
                        :close-on-content-click="false"
                        transition="glitch-transition"
                        offset-y
                        min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="projectForm.date"
                            label="Complete date"
                            prepend-icon="mdi-calendar"
                            outlined dense
                            clearable
                            :rules="[rules.required]"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="projectForm.date"
                                     v-click-outside="calendar.en = false"
                                     locale="en-en"
                                     first-day-of-week="1"
                                     no-title scrollable />
                    </v-menu>
                    <v-textarea v-model="projectForm.description[1]"
                                outlined dense
                                :rules="[rules.required]"
                                label="English description" />
                    <v-text-field v-model="projectForm.url"
                                  outlined dense
                                  label="Url to project" />
                    <v-text-field v-model="projectForm.githubUrl"
                                  outlined dense
                                  label="Github url" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <!-- Редактирование тегов -->
            <v-row no-gutters justify="center">
              <v-btn :loading="load.tags" :disabled="createTagErrors.length > 0"
                     :block="!this.headerOn" color="primary" class="ma-2 mt-0"
                     @click="createTagReq">
                {{ texts.tags.newTagBtn.text }}
              </v-btn>
              <v-autocomplete v-model="projectForm.tags"
                              :items="tags"
                              item-value="id"
                              item-text="text"
                              outlined dense
                              chips small-chips
                              :label="texts.tags.label.text"
                              multiple
                              :loading="load.tags"
                              @update:search-input="v => this.newTag = v"
              />
            </v-row>
            <!-- Редактирование технологий -->
            <v-row no-gutters justify="center">
              <v-btn :loading="load.technologies"
                     :block="!this.headerOn" color="primary" class="ma-2 mt-0"
                     @click="showCreateTech = !showCreateTech">
                {{ texts.techs.newTechBtn.text }}
              </v-btn>
              <v-autocomplete v-model="projectForm.technologies"
                              :items="technologies"
                              return-object
                              item-text="name"
                              outlined dense
                              :label="texts.techs.label.text"
                              :loading="load.technologies"
                              multiple chips small-chips
                              @update:search-input="v => this.newTechnology = v"
              />
            </v-row>
            <v-row no-gutters justify="end" v-for="tech in projectForm.technologies" :key="tech.id">
              <v-btn :loading="load.technologies" icon @click="delTechnology(tech.id)">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-text-field v-model="tech.name"
                            outlined dense
                            :loading="load.technologies"
                            :rules="[rules.required]"
                            :label="texts.techs.name.text" />
              <v-text-field v-model="tech.version"
                            outlined dense
                            :loading="load.technologies"
                            :rules="[rules.required]"
                            :label="texts.techs.version.text" />
              <v-text-field v-model="tech.url"
                            outlined dense
                            :loading="load.technologies"
                            :label="texts.techs.url.text" />
            </v-row>
          </v-card-text>
          <!-- Кнопки формы -->
          <v-card-actions style="background-color: #1e1e1e">
            <v-spacer />
            <v-btn :loading="load.project" class="mx-3" color="red" @click="showModal = !showModal">
              {{ texts.actions.close.text }}
            </v-btn>
            <v-btn :loading="load.project" class="mx-3" color="primary" type="submit">
              {{ texts.actions.save.text }}
            </v-btn>
          </v-card-actions>
        </v-form>
        <!-- Форма для создания технологии -->
        <v-dialog  v-model="showCreateTech" transition="glitch-transition" persistent>
          <v-form ref="createTechForm" v-model="createTechValid" @submit.prevent="createTechReq">
            <v-card>
              <v-toolbar color="primary">
                {{ texts.techs.newTechBtn.text }}
                <v-spacer />
                <v-btn @click="showCreateTech = !showCreateTech" icon>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-text-field v-model="createTechModel.name"
                              outlined dense
                              :loading="load.technologies"
                              :rules="[rules.required]"
                              :label="texts.techs.name.text" />
                <v-text-field v-model="createTechModel.url"
                              outlined dense
                              :loading="load.technologies"
                              :rules="[rules.required]"
                              :label="texts.techs.url.text" />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn class="mx-3" color="red" @click="showCreateTech = !showCreateTech">
                  {{ texts.actions.close.text }}
                </v-btn>
                <v-btn class="mx-3" color="primary" type="submit">
                  {{ texts.actions.save.text }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-dialog>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {Text} from "@/classes";

export default {
name: "EditProjectModal",
  props:{
    id: Number || undefined
  },
  data(){
    return{
      showModal: false,
      showCreateTech: false,
      valid: true,
      stringIdMessage: '',
      tab: null,
      calendar: {
        ru: false,
        en: false
      },
      acceptImg: ['.jpg', '.jpeg'],
      projectForm: {
        image: null,
        stringId: '',
        title: ['',''],
        date: '',
        description: ['', ''],
        url: '',
        githubUrl: '',
        tags: [],
        technologies: []
      },
      createTechValid: false,
      createTechModel:{
        name: '',
        url: ''
      },
      rules: {
        required: v => !!v || 'Attribute is required',
        requiredForNew: id => v => (!!v || !!id) || 'Attribute is required for new project'
      },
      load: {
        project: false,
        tags: false,
        technologies: false,
        stringId: false
      },
      tags: [],
      newTag: '',
      technologies: [],
      newTechnology: '',
      texts: {
        tags: {
          newTagBtn: new Text('Новый тег', 'New tag'),
          label: new Text('Теги', 'Tags')
        },
        techs: {
          newTechBtn: new Text('Новая технология', 'New technology'),
          label: new Text('Технологии', 'Technologies'),
          name: new Text('Название', 'Name'),
          version: new Text('Версия', 'Version'),
          url: new Text('Ссылка', 'Link')
        },
        actions: {
          close: new Text('Закрыть', 'Close'),
          save: new Text('Сохранить', 'Save')
        }
      }
    }
  },
  computed:{
    ...mapGetters(['headerOn']),
    createTagErrors(){
      const errors = []
      if (this.tags.some(tag => tag.text?.toLowerCase() === this.newTag?.toLowerCase().trim()))
        errors.push(`Tag "${this.newTag}" is already exist.`)
      if (!this.newTag?.trim())
        errors.push(`No tag to create`)
      return errors
    }
  },
  watch:{
    id(){
      this.fetchProject()
    }
  },
  methods:{
    async fetchProject(){
      this.load.project = true
      try {
        let res = await this.axios.get(`${this.apiUrl}/projects/get/byId/${this.id}`)
        this.projectForm.stringId = res.data.stringId
        this.projectForm.title = res.data.title
        this.projectForm.description = res.data.description
        this.projectForm.url = res.data.url
        this.projectForm.githubUrl = res.data.githubUrl
        this.projectForm.date = res.data.date
        this.projectForm.tags = res.data.tagId_tags.map(tag => tag.id)
        this.projectForm.technologies = res.data.technologyId_technologies.map(tech => {
          return {
            id: tech.id,
            name: tech.name,
            url: tech.url,
            version: tech.technologies_in_project.version
          }
        })
      }
      catch (e){this.getServerErrorMessage(e)}

      this.load.project = false
    },
    async sendForm(){
      this.$refs.form.validate()
      if (this.valid)
      {
        this.load.project = true
        try {
          const image = this.projectForm.image ? {
            buffer: Buffer.from(await this.projectForm.image.arrayBuffer()),
            type: this.projectForm.image.type.split('/')[1]
          } : undefined
          const result = await this.axios.post(`${this.apiUrl}/projects/edit`,
              {
                id: this.id,
                ...this.projectForm,
                image,
              }, this.authHeaders)
          console.log(result.data)
        }
        catch (e) {this.getServerErrorMessage(e)}
        this.load.project = false
        this.showModal = false
        this.$emit('updated')
      }

    },
    ...mapActions(['getServerErrorMessage']),
    ...mapActions(['getAllTags', 'createTag', 'getAllTechnologies', 'editTechnology', 'checkStringId']),
    async checkStringIdReq(){
      this.load.stringId = true
      if (await this.checkStringId({stringId: this.projectForm.stringId, id: this.id}))
        this.stringIdMessage = 'This id is not free'
      else this.stringIdMessage = 'Id is free'
      this.load.stringId = false
    },
    async createTagReq(){
      this.load.tags = true
      try{
        const createdTag = await this.createTag(this.newTag)
        this.tags.push(createdTag)
      }
      catch (e){
        console.log(this.getServerErrorMessage(e))
      }
      this.load.tags = false
    },
    delTechnology(id){
      const index = this.projectForm.technologies.findIndex( tech => tech.id === id )
      this.projectForm.technologies.splice(index, 1)
    },
    async createTechReq(){
      this.$refs.createTechForm.validate()
      if (this.createTechValid){
        this.load.technologies = true
        try{
          const newTechnology = await this.editTechnology(this.createTechModel)
          this.technologies.push(newTechnology)
          this.showCreateTech = !this.showCreateTech
        }
        catch (e){
          console.log(this.getServerErrorMessage(e))
        }
        this.load.technologies = false
      }
    }
  },
  async created() {
    this.load.tags = true
    this.load.technologies = true
    this.tags = await this.getAllTags()
    this.technologies = await this.getAllTechnologies()
    this.load.tags = false
    this.load.technologies = false
  }
}
</script>

<style scoped>
.projectModal{
  z-index: 10100;
  position: fixed;
}
</style>
