<template>
  <div class="px-5 pt-3" :class="{'loading--glitch': onPageLoad}" >
    <h1>Редактирование</h1>
    <!-- Основная информация -->
    <section class="intro">
      <div class="intro__info">
        <multi-lang-text-field v-model="resume.header"
                               outlined dense
                               :label="text.edit.header.text" />
        <multi-lang-text-field v-model="resume.spec"
                               outlined dense
                               :label="text.edit.spec.text" />
        <div class="mb-3">
          <multi-lang-text-field v-model="resume.intro" label="Вводный текст"
                                 textarea outlined />
        </div>
        <div class="contacts">
          <div class="contact__title">{{text.phone.text}}</div>
          <div class="contact__info">
            <v-text-field v-model="resume.phone" outlined dense />
          </div>
          <div class="contact__title">{{text.email.text}}</div>
          <div class="contact__info">
            <v-text-field v-model="resume.email" outlined dense />
          </div>
          <div class="contact__title">{{text.address.text}}</div>
          <div class="contact__info">
            <multi-lang-text-field v-model="resume.address" outlined dense />
          </div>
          <div class="contact__title">{{text.social.text}}</div>
          <div>
            <v-select multiple :items="all.social"
                      v-model="chosenSocial"
                      outlined chips
                      item-text="title.text" item-value="id" />
          </div>
        </div>
      </div>
      <div class="intro__photo">
        <v-img class="border-light--primary"
               width="100vw"
               max-width="15rem"
               min-width="100px" min-height="100px"
               :src="resume.photo.src"
               :lazy-src="resume.photo.phSrc"
               :alt="resume.photo.alt.text"/>
      </div>
    </section>
    <p class="error--text">{{errors.mainInfo}}</p>
    <p class="success--text">{{successes.mainInfo.text}}</p>
    <v-btn @click="saveMainInfo" color="green" class="mt-2" block :loading="load.mainInfo">
      {{ text.edit.save.text }}
    </v-btn>
    <!-- Информация о навыках -->
    <div class="hr" />
    <section class="skills block">
      <div class="block__column--text skills__description">
        <h1>{{text.skills.title.text}}</h1>
        <div>{{text.skills.subscription.text}}</div>
        <p class="error--text">{{errors.skills}}</p>
        <p class="success--text">{{successes.skills.text}}</p>
        <v-btn @click="saveSkills" color="green" class="mt-2" block :loading="load.skills">
          {{ text.edit.save.text }}
        </v-btn>
      </div>
      <div class="block__column--items skills__skills-notes">
        <edit-skills-note v-for="(note, index) in resume.skills" :key="index"
                          :note="note"
                          @delete="resume.skills.splice(index, 1)"
                          @saved="resume.skills[index] = $event" />
        <v-col class="align-self-center">
          <v-btn @click="newSkillsNote" block color="primary" class="my-1" >
            <v-icon>mdi-plus</v-icon>
            {{text.edit.addSkill.text}}
          </v-btn>
          <v-select :items="skillsToAdd" clearable
                    item-text="title.text" item-value="id"
                    v-model="chosenSkill"
                    outlined dense />
        </v-col>

      </div>
    </section>
    <div class="hr" />
    <section class="block">
      <div class="block__column--text">
        <h1>{{text.experience.title.text}}</h1>
        <div>{{text.experience.subscription.text}}</div>

      </div>
      <div class="block__column--items time-notes">
        <edit-time-note v-for="(note, index) in resume.experience" :key="index"
                   :time-note="note" />
      </div>
    </section>
    <div class="hr" />
    <section class="block">
      <div class="block__column--text">
        <h1>{{text.education.title.text}}</h1>
        <div>{{text.education.subscription.text}}</div>
      </div>
      <div class="block__column--items time-notes">
        <edit-time-note v-for="(note, index) in resume.education" :key="index"
                   :time-note="note" />
      </div>
    </section>
  </div>
</template>

<script>
import resumeObj from '@/data/about/resumeFake'
import resumeText from '@/data/about/resume'
import {Resume, Text} from "@/classes";
import {fake} from "@/data/fake";
import {mapActions} from 'vuex'
import EditTimeNote from "@/components/resume/EditTimeNote";
import EditSkillsNote from "@/components/resume/EditSkillsNote";
import MultiLangTextField from "@/components/custom_inputs/MultiLangTextField";

export default {
name: "ResumeEdit",
  components: {
    EditTimeNote, EditSkillsNote, MultiLangTextField
  },
  data(){
    return{
      resume: new Resume(resumeObj),
      fakeImg: fake.img,
      text: resumeText,
      load: {
        skills: false,
        mainInfo: false
      },
      all: {
        social: [],
        skills: [],
        experience: [],
        education: []
      },
      chosenSkill: null,
      chosenSocial: [],
      socialIdMessage: '',
      errors: {
        mainInfo: '',
        skills: ''
      },
      successes: {
        mainInfo: new Text(),
        skills: new Text()
      }
    }
  },
  computed: {
    skillsToAdd(){
      return this.all.skills.filter(skill => !this.resume.skills.find(s => s.id === skill.id))
    }
  },
  watch: {
    $route(newRoute, oldRoute){
      if (newRoute.params.resumeId !== oldRoute.params.resumeId)
        this.fetch()
    }
  },
  methods:{
    ...mapActions(["getResumeById", "setResume", "getServerErrorMessage"]),
    ...mapActions(['getAllSkillsNotes', 'getSkillsNote']),
    ...mapActions(['getSocial', 'getAllSocials', 'checkSocialId', 'setSocial']),
    successText(writeTime = new Date()){
      const saveTime = new Date(writeTime._seconds * 1000 + writeTime._nanoseconds / 10**6)
      return new Text(
          `Успешно сохранено ${saveTime.toLocaleString('ru-ru')}`,
          `Successfully saved ${saveTime.toLocaleString('en-en')}`)
    },
    async fetch(){
      this.turnPageLoad(true)
      try {
        this.resume = await this.getResumeById(this.$route.params.resumeId)
        this.chosenSocial = this.resume.social.map(s => s.id)
      }
      catch (e) {
        this.setError404(e)
      }
      this.turnPageLoad(false)
    },
    async saveMainInfo(){
      this.load.mainInfo = true
      try {
        const res = await this.setResume({
          id: this.resume.id,
          header: this.resume.header,
          spec: this.resume.spec,
          intro: this.resume.intro,
          phone: this.resume.phone,
          email: this.resume.email,
          address: this.resume.address,
          social: this.chosenSocial.map(s => {
            return {
              id: s
            }
          })
        })
        this.successes.mainInfo = this.successText(res._writeTime)
        this.errors.mainInfo = ''
      }
      catch (e) {
        this.errors.mainInfo = await this.getServerErrorMessage(e)
        this.successes.mainInfo = ''
      }
      this.load.mainInfo = false
    },
    async saveSkills(){
      this.load.skills = true
      try {
         const res = await this.setResume({
          id: this.resume.id,
          skills: this.resume.skills
              .filter(s => !s.new)
              .map(s => { return { id: s.id } })
        })
        this.successes.skills = this.successText(res._writeTime)
        this.errors.skills = ''
      }
      catch (e) {
        this.errors.skills = await this.getServerErrorMessage(e)
        this.successes.skills = new Text()
      }
      this.load.skills = false
    },
    async newSkillsNote(){
      if (!this.chosenSkill)
        this.resume.skills.push({
          new: true,
          id: '',
          title: new Text(),
          skills: []
        })
      else {
        const newSkill = await this.getSkillsNote(this.chosenSkill)
        console.log(newSkill)
        this.resume.skills.push(newSkill)
        newSkill.new = false
      }
    }
  },
  async created() {
    this.fetch()
    this.all.skills = await this.getAllSkillsNotes()
    this.all.social = await this.getAllSocials()
  },
  metaInfo() {
    return {
      title: new Text('Резюме', 'Resume').text
    }
  }
}
</script>
<style scoped lang="scss">

.intro{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.intro__info{
  margin-right: 2rem;
  max-width: 700px;
}
.contacts{
  display: grid;
  grid-template-columns: 3fr 5fr;
  align-items: center;
}
.contact__title{
  font-weight: bold;
  text-transform: uppercase;
}
.contact__info a{
  color: inherit;
  text-decoration: underline;
}
.intro__photo{
  display: flex;
  justify-content: center;
  align-items: center;
}
.block{
  display: flex;
}
.block__column--text{
  min-width: 15em;
  width: 40%;
  margin-right: 2em;
}
.block__column--items{
  display: flex;
  flex-direction: column;
}
.skills__skills-notes{
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.time-notes{
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 900px) {
  .intro{
    flex-direction: column-reverse;
  }
  .block{
    flex-direction: column;
  }
  .block__column--text{
    width: unset;
  }
}
</style>
