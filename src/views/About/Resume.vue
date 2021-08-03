<template>
  <div class="px-5 pt-3" :class="{'loading--glitch': onPageLoad}" >
    <section class="intro">
      <div class="intro__info">
        <h1>{{resume.header.text}} - {{resume.spec.text}}</h1>
        <p v-if="$store.getters.isAuth">{{resume.show ? text.show.text: text.notShow.text}}</p>
        <v-btn class="mb-3" color="primary" :to="{ name: routesNames.EDIT_RESUME_PAGE }" v-if="$store.getters.isAuth">
          {{text.edit.goToEdit.text}}
        </v-btn>
        <div class="mb-3">
          <p v-for="(p, index) in resume.intro.text.split('\n')" :key="index">
            {{p}}
          </p>
        </div>
        <div class="contacts">
          <div class="contact__title">{{text.phone.text}}</div>
          <div class="contact__info">{{resume.phone}}</div>
          <div class="contact__title">{{text.email.text}}</div>
          <div class="contact__info">
            <a :href="`mailto:${resume.email}`" target="_blank"
               @click="logContact('email', `${$route.name}: ${$route.params.resumeId}`)" >
              {{resume.email}}
            </a>
          </div>
          <div class="contact__title">{{text.address.text}}</div>
          <div class="contact__info">{{resume.address.text}}</div>
          <div class="contact__title">{{text.social.text}}</div>
          <div>
            <v-btn v-for="(social, index) in resume.social" :key="index"
                   icon :href="social.link" target="_blank"
                   @click="logContact(social.title.en, `${$route.name}: ${$route.params.resumeId}`)">
              <v-icon>{{social.icon}}</v-icon>
            </v-btn>
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
    <div class="hr" />
    <section class="skills block">
      <div class="block__column--text skills__description">
        <h1>{{text.skills.title.text}}</h1>
        <div>{{text.skills.subscription.text}}</div>
      </div>
      <div class="block__column--items skills__skills-notes">
        <skills-note v-for="(note, index) in resume.skills" :key="index"
                     :skills-note="note" />
      </div>
    </section>
    <div class="hr" />
    <section class="block">
      <div class="block__column--text">
        <h1>{{text.experience.title.text}}</h1>
        <div>{{text.experience.subscription.text}}</div>
      </div>
      <div class="block__column--items time-notes">
        <time-note v-for="(note, index) in resume.experience" :key="index"
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
        <time-note v-for="(note, index) in resume.education" :key="index"
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
import TimeNote from "@/components/resume/TimeNote";
import SkillsNote from "@/components/resume/SkillsNote";
import {routesNames} from "@/data/constants";

export default {
name: "Resume",
  components: {
    TimeNote, SkillsNote
  },
  data(){
    return{
      resume: new Resume(resumeObj),
      fakeImg: fake.img,
      text: resumeText,
      routesNames
    }
  },
  watch: {
    $route(newRoute, oldRoute){
      if (newRoute.params.resumeId !== oldRoute.params.resumeId)
        this.fetch()
    }
  },
  methods:{
    ...mapActions(["getResumeById"]),
    async fetch(){
      this.turnPageLoad(true)
      try {
        this.resume = new Resume(await this.getResumeById(this.$route.params.resumeId))
      }
      catch (e) {
        this.setError404(e)
      }
      this.turnPageLoad(false)
    }
  },
  async created() {
    await this.fetch()
  },
  computed:{
    title(){
      return new Text(`${this.resume.spec.ru} - Резюме`, `${this.resume.spec.en} - Resume`)
    },
    description(){
      return this.resume.intro
    },
    keywords(){
      return new Text(`JavaScript разработка, веб приложения, ${this.resume.skills.map(s => s.title.ru).join(', ')}`,
          `JavaScript development, web applications, ${this.resume.skills.map(s => s.title.en).join(', ')}`)
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
          content: this.keywords.text
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
  grid-template-columns: 2fr 5fr;
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
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.block__column--text{
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
    display: flex;
    flex-direction: column;
  }
  .block__column--text{
    width: unset;
  }
}
</style>
