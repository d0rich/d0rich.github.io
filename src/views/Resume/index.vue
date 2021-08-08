<template>
  <div>
    <v-dialog max-width="500px" width="90%" v-model="showModal">
      <v-form v-model="valid" ref="createResumeForm"
              :disabled="load.createResume" @submit.prevent="createResume">
        <v-card>
          <v-toolbar dense color="primary">
            <v-toolbar-title>{{text.addResume.text}}</v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="showModal = false">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <p>{{text.inputFreeResumeId.text}}</p>
            <v-text-field outlined dense v-model="newResumeId"
                          autocomplete="off"
                          @input="checkId" :rules="rules"
                          :error-messages="createResumeErrors"
                          :loading="load.id" label="id" />
            <p class="error--text">{{errMessage}}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn :disabled="!valid" color="primary" block
                   :loading="load.createResume" type="submit">
              {{text.createResume.text}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <div class="btns">
      <v-btn v-for="resume in resumes" :key="resume.id"
          class="ma-2" text :to="{name: routesNames.RESUME_PAGE, params: { resumeId: resume.id }}" >
        {{resume.spec.text}}
      </v-btn>
      <v-btn v-if="$store.getters.isAuth" class="ma-2" @click="showModal=true">
        <v-icon>mdi-plus</v-icon> {{text.addResume.text}}
      </v-btn>
    </div>
    <router-view />
  </div>
</template>

<script>
import {Text} from "@/classes";
import {routesNames} from "@/data/constants";
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  name: "ResumeIndex",
  data(){
    return{
      routesNames,
      valid: false,
      showModal: false,
      newResumeId: '',
      freeId: false,
      errMessage: '',
      load: {
        id: false,
        createResume: false
      },
      text: {
        addResume: new Text('Новое резюме', 'New resume'),
        inputFreeResumeId: new Text('Введите свободный id резюме.', 'Input free resume id.'),
        createResume: new Text('Создать резюме', 'Create resume')
      },
      rules: [
          v => !!v || 'Id is required'
      ]
    }
  },
  computed:{
    ...mapState({
      resumes: state => state.resume.resumeCollection
    }),
    ...mapGetters(["isAuth"]),
    createResumeErrors(){
      const errors = []
      if (!this.freeId) errors.push('Id is not free')
      return errors
    },
    resumeNow(){
      return this.$route.params.resumeId
    }
  },
  watch: {
    async isAuth(){
      await this.getAllResume()
    },
    async resumeNow(value){
      if (!value)
        await this.$router.replace({ name: routesNames.RESUME_PAGE, params: { resumeId: this.resumes[0].id } })
    }
  },
  methods: {
    ...mapActions(["getAllResume", 'checkResumeId', 'setResume', 'getServerErrorMessage']),
    async createResume(){
      this.$refs.createResumeForm.validate
      if (this.valid){
        this.load.createResume = true
        try {
          await this.setResume({
            id: this.newResumeId,
            show: false,
            header: {ru: "Николай Дорофеев", en: "Nikolay Dorofeev"},
            spec: {ru: this.newResumeId, en: this.newResumeId},
            intro: {en: "", ru: ""},
            phone: "",
            email: "",
            address: {en: "", ru: ""},
            social: [],
            skills: [],
            experience: [],
            education: []
          })
          this.showModal = false
          await this.getAllResume()
          await this.$router.push({ name: routesNames.EDIT_RESUME_PAGE, params: { resumeId: this.newResumeId } })
        }
        catch (e) {
          this.errMessage = await this.getServerErrorMessage(e)
        }
        this.load.createResume = false
      }
    },
    async checkId(){
      this.load.id = true
      this.freeId = false
      this.freeId = !await this.checkResumeId(this.newResumeId)
      this.load.id = false
    }
  },
  async created() {
    await this.getAllResume()
    if (!this.$route.params.resumeId)
      await this.$router.replace({ name: routesNames.RESUME_PAGE, params: { resumeId: this.resumes[0].id } })
  }
}
</script>

<style scoped>
.btns{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 2rem;
}
</style>
