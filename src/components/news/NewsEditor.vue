<template>
  <div v-if="isAuth">
    <v-btn block @click="showModal = ! showModal" color="accent darken-4">
      <slot />
    </v-btn>
    <v-dialog class="projectDialog" v-model="showModal"
              max-width="1200px"
              transition="glitch-transition" persistent scrollable>
      <v-card>
        <v-form :disabled="load.news" @submit.prevent="sendForm" v-model="valid" ref="form">
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
                    <v-file-input v-model="newsForm.image"
                                  prepend-icon="mdi-file-image"
                                  outlined dense
                                  :rules="[rules.requiredForNew(id)]"
                                  :accept="acceptImg.join(',')"
                                  label="Изображение" />
                    <v-text-field v-model="newsForm.stringId"
                                  :loading="load.stringId"
                                  :messages="[stringIdMessage]"
                                  @input="checkStringIdReq"
                                  outlined dense
                                  :rules="[rules.required]"
                                  label="Строковый ID" />
                    <v-text-field v-model="newsForm.title[0]"
                                  outlined dense
                                  :rules="[rules.required]"
                                  label="Русское название" />
                    <html-editor class="mb-5" v-model="newsForm.content[0]" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <!-- Редактирование английского текста -->
              <v-tab-item>
                <v-card>
                  <v-card-text>
                    <v-file-input v-model="newsForm.image"
                                  prepend-icon="mdi-file-image"
                                  outlined dense
                                  :rules="[rules.requiredForNew(id)]"
                                  :accept="acceptImg.join(',')"
                                  label="Image" />
                    <v-text-field v-model="newsForm.stringId"
                                  :loading="load.stringId"
                                  :messages="[stringIdMessage]"
                                  @input="checkStringIdReq"
                                  outlined dense
                                  :rules="[rules.required]"
                                  label="String ID" />
                    <v-text-field v-model="newsForm.title[1]"
                                  outlined dense
                                  :rules="[rules.required]"
                                  label="English title" />
                    <html-editor class="mb-5" v-model="newsForm.content[1]" />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card-text>
          <!-- Кнопки формы -->
          <v-card-actions style="background-color: #1e1e1e">
            <v-spacer />
            <v-btn :loading="load.news" class="mx-3" color="red" @click="showModal = !showModal">
              {{ texts.actions.close.text }}
            </v-btn>
            <v-btn :loading="load.news" class="mx-3" color="primary" type="submit">
              {{ texts.actions.save.text }}
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import {Text} from "@/classes";
import HtmlEditor from "@/components/HtmlEditor";

export default {
  name: "NewsEditor",
  components: {
    HtmlEditor
  },
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
      acceptImg: ['.jpg', '.jpeg'],
      newsForm: {
        image: null,
        stringId: '',
        title: ['',''],
        content: ['', ''],
      },
      rules: {
        required: v => !!v || 'Attribute is required',
        requiredForNew: id => v => (!!v || !!id) || 'Attribute is required for new project'
      },
      load: {
        news: false,
        stringId: false
      },
      texts: {
        actions: {
          close: new Text('Закрыть', 'Close'),
          save: new Text('Сохранить', 'Save')
        }
      }
    }
  },
  computed:{
    ...mapGetters(['headerOn'])
  },
  watch:{
    id(){
      this.fetchProject()
    }
  },
  methods:{
    ...mapActions(['bufferFromFile']),
    async fetchProject(){
      this.load.news = true
      try {
        let res = await this.axios.get(`/news/get/byId/${this.id}`)
        this.newsForm.stringId = res.data.stringId
        this.newsForm.title = res.data.title
        this.newsForm.content = res.data.content
      }
      catch (e){this.getServerErrorMessage(e)}

      this.load.news = false
    },
    async sendForm(){
      this.$refs.form.validate()
      if (this.valid)
      {
        this.load.news = true
        try {
          const image = this.newsForm.image ? await  this.bufferFromFile(this.newsForm.image) : undefined
          const result = await this.axios.post(`/news/edit`,
              {
                id: this.id,
                ...this.newsForm,
                image,
              }, this.authHeaders)
          console.log(result.data)
        }
        catch (e) {this.getServerErrorMessage(e)}
        this.load.news = false
        this.showModal = false
        this.$emit('updated')
      }

    },
    ...mapActions(['getServerErrorMessage']),
    ...mapActions(['checkNewsStringId']),
    async checkStringIdReq(){
      this.load.stringId = true
      if (await this.checkNewsStringId({stringId: this.newsForm.stringId, id: this.id}))
        this.stringIdMessage = 'This id is not free'
      else this.stringIdMessage = 'Id is free'
      this.load.stringId = false
    },
  },
  async created() {

  }
}
</script>

<style scoped>
.projectDialog{
  z-index: 10100;
  position: fixed;
}
</style>

