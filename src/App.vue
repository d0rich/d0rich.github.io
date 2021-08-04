<template>
  <v-app class="main-scroll" v-resize="onResize">
    <Header v-if="headerOn" />
    <BottomNavigation v-else />
    <transition name="glitch-transition">
      <div v-if="onPageLoad" class="loading-container">
        <loading />
      </div>
    </transition>
    <v-main>
      <transition name="glitch-transition" mode="out-in">
        <router-view v-if="!error404" class="page pa-2" />
        <div  class="page pa-2" v-else>
          <Error404 />
        </div>
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import ogImage from '../public/og-image.jpg'
import vkImage from '../public/vk-image.jpg'
import '@/assets/fonts/JetBrainsMono/fontface.css'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Loading from "@/components/Loading";
import Error404 from "@/views/Error404";
import {mapGetters, mapMutations, mapActions, mapState} from 'vuex'
import {Text} from "@/classes";
import {routesNames} from "@/data/constants";

export default {
  name: 'App',

  components: {
    Header, BottomNavigation,
    Footer, Loading, Error404
  },

  data: () => ({
    //
  }),
  computed:{
    ...mapGetters(['headerOn']),
    ...mapState(['error404']),
    title(){
      return new Text('Dorich - JavaScript Разработчик', 'Dorich - JavaScript Developer').text
    },
    description(){
      return new Text('Я - Николай Дорофеев, молодой JavaScript разработчик из Томска (Россия). ' +
          'У меня за плечами уже масса изученных технологий для создания визуальных интерфейсов, ' +
          'серверов, работы с базами данных. ' +
          'Создам веб приложения для бизнеса или присоединюсь к команде разработки.',
          'I am Nikolay Dorofeev, a young JavaScript developer from Tomsk (Russia). ' +
          'I already know a lot of technologies for creating visual interfaces, ' +
          'servers, working with databases. ' +
          'I will create web applications for business or join a development team.').text
    },
    alternate() {
      let routeParams = this.$route.path.split('/')
      routeParams[1] = 'ru'
      let ru = `${document.location.origin}/#${routeParams.join('/')}`
      routeParams[1] = 'en'
      let en = `${document.location.origin}/#${routeParams.join('/')}`
      return {ru, en}
    }
  },
  methods:{
    ...mapMutations(['getWindowWidth', "setLang"]),
    ...mapActions(["authByToken"]),
    onResize(){
      this.getWindowWidth(window.innerWidth)
    }
  },
  async beforeMount() {
    // console.log(this.$vuetify.theme.themes.dark)
    this.$store.dispatch("getAllResume")
    await this.authByToken(localStorage.getItem('token'))
    if (this.$store.getters.isAuth){
      this.$analytics.logEvent('login', {
        login: this.$store.state.login,
        lang: this.$route.params.lang || undefined,
        page_location: document.location,
        page_path: document.location.origin + '/#' + this.$route.path,
      })
      this.$analytics.setUserProperties({
        authorized: true
      })
      this.$analytics.setUserId(this.$store.state.login)
    }
    this.$analytics.setUserProperties({
      lang: this.$route.params.lang
    })
    this.$analytics.setCurrentScreen(this.$route?.name)
  },
  mounted() {
    const pageData = {
      lang: this.$route.params.lang || undefined,
      page_location: document.location,
      page_path: document.location.origin + '/#' + this.$route.path,
      page_referrer: document.referrer,
      page_referrer_name: 'external_source'
    }
    switch (this.$route.name) {
      case routesNames.HOME_PAGE:
        this.$analytics.logEvent('page_view', {
          ...pageData
        })
        break
      case routesNames.PORTFOLIO:
        this.$analytics.logEvent('page_view', {
          filters: JSON.stringify(this.$route.query),
          ...pageData
        })
        break
      case routesNames.PROJECT_PAGE:
        this.$analytics.logEvent('page_view', {
          project_id: this.$route.params.stringId || undefined,
          ...pageData
        })
        break
      case routesNames.RESUME_PAGE:
        this.$analytics.logEvent('page_view', {
          resume_id: this.$route.params.resumeId || undefined,
          ...pageData
        })
        this.$analytics.setUserProperties({
          interested_in_resume: true
        })
        break
      case routesNames.EDIT_RESUME_PAGE:
        this.$analytics.logEvent('page_view', {
          resume_id: this.$route.params.resumeId || undefined,
          query: JSON.stringify(this.$route.query),
          ...pageData
        })
        break
      case routesNames.BLOG_CONTROLLER:
        this.$analytics.logEvent('page_view', {
          ...pageData
        })
        break
      default:
        this.$analytics.logEvent('page_view', {
          route_name: this.$route.name,
          query: JSON.stringify(this.$route.query),
          ...pageData
        })
        break
    }
  },
  metaInfo() {
    return {
      title: this.title,
      titleTemplate: new Text('%s | Dorich - JavaScript Разработчик', '%s | Dorich - JavaScript Developer').text,
      htmlAttrs: {
        lang: this.lang,

      },
      meta: [
        { vmid: 'description' , name: 'description', content: this.description },
        {
          vmid: 'keywords', name: 'keywords',
          content: new Text('JavaScript разработчик, веб приложения для бизнеса, ' +
              'разработчик в Томске, фронтенд, бэкенд, фуллстак',
              'JavaScript developer, web applications for business, ' +
              'developer in Tomsk, frontend, backend, fullstack').text
        },
        { vmid: 'og:title', property: 'og:title', content: this.title },
        { vmid: 'og:description', property: 'og:description', content: this.description },
        { vmid: 'og:site_name', property: 'og:site_name', content: 'Dorich Dev'},
        { vmid: 'og:type', property: 'og:type', content: 'website'},
        { vmid: 'og:image', property: 'og:image', content: ogImage},
        { vmid: 'vk:image', property: 'vk:image', content: vkImage},
        { vmid: 'robots', name: 'robots', content: 'index,follow'}
      ],
      link: [
        { vmid: 'alter-en', rel: 'alternate', hreflang: 'en', href: this.alternate.en},
        { vmid: 'alter-ru', rel: 'alternate', hreflang: 'ru', href: this.alternate.ru}
      ]
    }

  }
};
</script>
<style>
@import "./styles/linkFormatter.css";
@import "./styles/cursor.css";
@import "./styles/scroll.scss";
@import "styles/borderLight.css";
#app{
  font-family: 'JetBrains Mono', Roboto, sans-serif;
  overflow: hidden;
}
.page{
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: auto;
}
.loading-container{
  pointer-events: none;
  position: fixed;
  z-index: 12000;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
}
.v-image__image--preload{
  filter: none;
}
@media screen and (max-width: 640px) {
  html{
    font-size: 13px;
  }
  #app{
    padding-bottom: 54px;
  }
}
</style>
