<template>
  <div class="px-5 pt-3">
    <section class="intro">
      <div class="intro__info">
        <h1>{{resume.header.text}}</h1>
        <div class="mb-3">{{resume.intro.text}}</div>
        <div>
          <div class="contact">
            <div class="contact__title">{{text.phone.text}}</div>
            <div class="contact__info">{{resume.phone.text}}</div>
          </div>
          <div class="contact">
            <div class="contact__title">{{text.email.text}}</div>
            <div class="contact__info">{{resume.email.text}}</div>
          </div>
          <div class="contact">
            <div class="contact__title">{{text.address.text}}</div>
            <div class="contact__info">{{resume.address.text}}</div>
          </div>
          <div class="contact">
            <div class="contact__title">{{text.social.text}}</div>
            <v-btn v-for="(social, index) in resume.social" :key="index"
                icon :href="social.link" target="_blank">
              <v-icon>{{social.icon}}</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="intro__photo">
        <img class="border-light--primary" :src="resume.photo.src" alt="Nikolay Dorofeev - Web Developer">
      </div>
    </section>
    <div class="hr" />
    <section class="skills block">
      <div class="block__column--text skills__description">
        <h1>{{text.skills.title.text}}</h1>
        <div>{{text.skills.subscription.text}}</div>
      </div>
      <div class="block__column--items skills__sections">
        <div class="border-light--primary section" v-for="(section, index) in resume.skills" :key="index" >
          <h2>{{section.title.text}}</h2>
          <div>{{section.skills.join(', ')}}</div>
        </div>
      </div>
    </section>
    <div class="hr" />
    <section class="block">
      <div class="block__column--text">
        <h1>{{text.experience.title.text}}</h1>
        <div>{{text.experience.subscription.text}}</div>
      </div>
      <div class="block__column--items time-notes">
        <div class="border-light--primary time-note" v-for="(note, index) in resume.experience" :key="index" >
          <div>
            <span class="time-note__title">{{note.title.text}} </span>
            <span class="time-note__place">{{note.place.text}}</span>
          </div>

          <div class="time-note__period">{{note.period.begin.text}} - {{note.period.end.text}}</div>
          <div class="time-note__description">{{note.description.text}}</div>
        </div>
      </div>
    </section>
    <div class="hr" />
    <section class="block">
      <div class="block__column--text">
        <h1>{{text.education.title.text}}</h1>
        <div>{{text.education.subscription.text}}</div>
      </div>
      <div class="block__column--items time-notes">
        <div class="border-light--primary time-note" v-for="(note, index) in resume.education" :key="index" >
          <div>
            <span class="time-note__title">{{note.title.text}} </span>
            <span class="time-note__place">{{note.place.text}}</span>
            </div>

          <div class="time-note__period">{{note.period.begin.text}} - {{note.period.end.text}}</div>
          <div class="time-note__description">{{note.description.text}}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
//import resumeObj from '@/data/about/resume'
import {Resume, Text} from "@/classes";
export default {
name: "Resume",
  data(){
    return{
      resume: new Resume(),
      text: {
        phone: new Text('Телефон','Phone'),
        email: new Text('Email', 'Email'),
        address: new Text('Адрес', 'Address'),
        social: new Text('Социальные сети','Social'),
        skills: {
          title: new Text('Навыки', 'Skills'),
          subscription: new Text('Я постоянно улучшаю свои умения и изучаю новые технологии, чтобы выполнять свою работу эффективнее.',
              'I am constantly exercising my skills and learning new technologies to do my job more efficiently.')
        },
        experience: {
          title: new Text('Опыт работы', 'Experience'),
          subscription: new Text('Я сотрудничаю с другими специалистами и компаниями, ' +
              'чтобы создавать восхитительные цифровые продукты, которые решают проблемы пользователей.',
              'I partner with other professionals and companies to create amazing digital products that solve user problems.')
        },
        education: {
          title: new Text('Образование', 'Education'),
          subscription: new Text('Всю свою жизнь я свято верил, что образование важно. Я каждый день стараюсь узнать что-то новое.',
              'All my life I have been driven by my strong belief that education is important. ' +
              'I try to learn something new every single day.')
        }
      }
    }
  },
  methods:{
    async fetchResume(){
      const response = await this.axios.get(`${this.apiUrl}/resume/get`)
      this.resume = new Resume(response.data)
      this.resume.photo.getSrc()
    }
  },
  created() {
    this.fetchResume()
  },
  metaInfo() {
    return {
      title: new Text('Резюме', 'Resume').text
    }
  }
}
</script>

<style scoped lang="scss">
.hr{
  margin: 3rem 0 ;
  width: 100%;
  height: 1px;
  border: var(--v-accent-base) solid;
  border-width: 2px  0 0 0  ;
  box-shadow: 0px 0px 15px 3px var(--v-accent-base);
}
.intro{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.intro__info{
  margin-right: 2rem;
  max-width: 700px;
}
.contact{
  display: flex;
  justify-content: flex-start;
}
.contact__title{
  display: flex;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  width: 10rem;
}
.contact__info{
  width: calc(100% - 10rem);
}
.intro__photo{
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    max-width: 15rem;
    min-width: 200px;
    min-height: 200px;
  }
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
.skills__sections{
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.section{
   font-size: 0.93rem;
   padding: 1em 2em;
   width: 22em;
   margin: 1em;
   background-color: var(--v-secondary-darken2);
 }
.time-notes{
  display: flex;
  flex-direction: column;
}
.time-note{
  padding: 0.5em 1em;
  margin: 1em 0;
}
.time-note__title{
  text-transform: capitalize;
  font-size: 1.2em;
  color: var(--v-accent-base);
}
.time-note__place{
  text-transform: capitalize;
  font-weight: 200;
  color: var(--v-secondary-lighten5)
}
.time-note__period{
  text-transform: capitalize;
  margin: .5em 0;
  font-weight: 700;
  font-size: 1.2em;
}
.time-note__description{
  font-style: italic;
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
  .section{
    width: 90%;
  }

}
</style>
