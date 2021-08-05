<template>
  <div>
    <EnterBlock2 class="text-center">
      <span style="font-size: 1.7rem;" class="mx-3">{{data.block1.p1.t1.text}}</span>
      <span style="font-size: 1.7rem;" class="ma-3">{{data.block1.p1.t2.text}}
        <span style="font-size: 2.3rem; font-weight: bold">{{data.block1.p1.t3.text}}<span class="cursor--active">_</span></span>
      </span>
      <span style="font-size: 1.7rem;" class="mx-3">{{data.block1.p1.t4.text}}</span>
    </EnterBlock2>
    <section class="block2 mt-16">
        <Terminal reveal enter-word="hello world" @revealed="show.block2info = true">
          <h1 class="align-self-start cursor-on-hover">{{data.block2.terminal.h1.text}}<span class="cursor">_</span></h1>
          <p class="align-self-start cursor-on-hover">
            {{data.block2.terminal.t1.text}}
            <router-link class="link" :to="{name: routesNames.PORTFOLIO}">{{data.block2.terminal.t2.text}}</router-link>{{data.block2.terminal.t3.text}}
            <router-link class="link" :to="{name: routesNames.RESUME_PAGE}">{{data.block2.terminal.t4.text}}</router-link>{{data.block2.terminal.t5.text}}
            <router-link class="link" :to="{name: routesNames.NEWS_CONTROLLER}">{{data.block2.terminal.t6.text}}</router-link>{{data.block2.terminal.t7.text}}<span class="cursor">_</span>
          </p>
        </Terminal>
        <div class="block2__info">
          <div class="info-row">
            <img :src="data.block2.my_photo" alt="d0rich" class="border-light--accent my-photo" />
            <div class="block2__info__text">
              <h1>{{data.block2.h1.text}}</h1>
              <p v-for="(text, index) in data.block2.p1.text.split('\n')" :key="index" >{{text}}</p>
              <v-btn :to="{name: routesNames.RESUME_PAGE}" color="primary">{{btns.myInfo.text}}</v-btn>
            </div>
          </div>
        </div>
    </section>
    <!-- Секция с контактами и характеристиками -->
    <section class="js-objects-block" :style="{backgroundImage: `url('${data.block2.bg}'`}">
      <div class="js-objects-block__contacts py-8">
        <!-- Мои контакты -->
        <h1>{{data.block2.contactsHeader.text}}</h1>
        <div class="contacts__btns">
          <v-btn v-for="contact in data.block2.contacts" :key="contact.text"
                 :href="contact.href" target="_blank"
                 class="pa-10" large
                 tile outlined :block="!headerOn"
                 @click="logContact(contact.text, $route.name)" >
            <span>
              <v-icon>{{contact.icon}}</v-icon>  {{contact.text}}
            </span>
          </v-btn>
        </div>
      </div>

      <div class="js-objects">
        <!-- Мои характеристики программисткими объектами -->
        <JSObjectWindow class="mb-3 mx-3"
                        v-for="(object, index) in data.block2.objects"
                        :key="index"
                        :object="object" />
      </div>
    </section>

    <div class="hr my-16"></div>

    <section class="block3">
      <h1 class="text-center">{{data.block3.title.text}}</h1>
      <transition-group name="glitch-transition" class="block3__projects">
        <ProjectBlock :project="project"
                      v-for="project in projects" :key="project.id" />
      </transition-group>
      <v-btn :to="{name: routesNames.PORTFOLIO}" class="align-self-end my-5" large color="primary">
        {{btns.myInfo.text}}
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </v-btn>
      <v-overlay :opacity="0" absolute :value="load.projects">
        <Loading />
      </v-overlay>
    </section>


  </div>
</template>

<script>
import homepage from '@/data/home'
import Terminal from "@/components/Terminal"
import JSObjectWindow from "@/components/JSObjectWindow";
import EnterBlock2 from "@/components/home/EnterBlock2";
import ProjectBlock from "@/components/projects/ProjectBlock";
import Loading from "@/components/Loading";
import {Text} from "@/classes/text";
import {routesNames} from "@/data/constants";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Terminal, EnterBlock2,
    JSObjectWindow, Loading, ProjectBlock
  },
  data(){
    return{
      routesNames,
      data: homepage,
      btns: {
        myInfo: new Text('Узнать больше', 'More info')
      },
      show: {
        block2info: false
      },
      load: {
        projects: true
      },
      projects: []
    }
  },
  methods: {
    ...mapActions(['getProjects']),
    async fetchProjects(){
      this.load.projects = true
      this.projects = (await this.getProjects({page: 1, onPage: 3})).projects
      this.load.projects = false
    }
  },
  created(){
    this.fetchProjects()
    this.turnPageLoad(false)
  },
  computed:{
    ...mapGetters(['headerOn'])
  },
  metaInfo() {
    return {
      title: new Text('Главная', 'Home').text,
      meta: [
        { vmid: 'og:url', property: 'og:url', content: 'https://d0rich.github.io/'},
      ]
    }
  },

}
</script>
<style scoped lang="scss">
@import "../styles/font";
.block2{
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block2__info{
  margin: 2rem 0;
  transition: opacity .5s ease;
  .info-row{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  .my-photo{
    width: 15rem;
    margin: 0 10px 10px 0;
  }
  .block2__info__text{
    margin: 0 1rem;
  }

}
.js-objects-block{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  padding: 3rem 0;
  background-size: cover;
  background-attachment: fixed;

  .js-objects{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
 }
.js-objects-block__contacts{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0,0,0,.9);
  margin-bottom: 2rem;
  width: 100%;
  h1{
    padding: 0.5rem 1rem;
    text-align: center;
  }
}
.contacts__btns{
  padding: 0.5rem 1rem;
  max-width: 800px;
  min-width: 300px;
  width: 95vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: .5rem;
}
.block3{
  position: relative;
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block3__projects{
  min-height: 200px;
  min-width: 10px;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: start;
}
@media screen and (max-width: 550px){
  .block2__info{

    .info-row{
      flex-direction: column;
      align-items: center;
    }
  }
}
@media screen and (max-width: 1080px) {
  .block3__projects{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media screen and (max-width: 640px) {
  .block3__projects{
    display: grid;
    grid-template-columns: 1fr;
  }
  .contacts__btns{
    display: flex;
    flex-direction: column;
    justify-content: unset;
  }
}
</style>
