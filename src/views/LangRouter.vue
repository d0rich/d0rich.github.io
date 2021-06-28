<template>
  <router-view />
</template>

<script>
import {languages} from "@/data/languages";
import {Text} from "@/classes/text";
import {routesNames} from "@/data/constants";
import {mapMutations} from 'vuex'

export default {
name: "LangRouter",
  data(){
    return{
      languages: languages,
      tooltip: new Text('Выбать язык', 'Choose language')
    }
  },
  computed: {
    lang(){
      return this.$route.params.lang
    }
  },
  methods:{
    ...mapMutations(['setLang'])
  },
  watch:{
   lang(v){
      this.$analytics.logEvent('switch_lang', {
        lang: v
      })
     this.$analytics.setUserProperties({
       lang: v
     })
    }
  },
  created() {
    const langToSet = this.languages.find((lang) => this.$route.params.lang === lang.short)
    if (langToSet) this.setLang(langToSet.short)
    else this.setLang(localStorage.getItem('lang') || 'en')
  },
  beforeRouteUpdate(to, from, next){
    try {
      const pageData = {
        lang: to.params.lang || undefined,
        page_location: document.location,
        page_path: document.location.origin + '/#' + to.path,
        page_referrer: from ? document.location.origin + '/#' + from.fullPath : document.referrer,
        page_referrer_name: from.name || 'external_source',
        ignore_referrer: !from
      }
      switch (to.name) {
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
            project_id: to.params.stringId || undefined,
            ...pageData
          })
          break
        case routesNames.RESUME_PAGE:
          this.$analytics.logEvent('page_view', {
            resume_id: to.params.resumeId || undefined,
            ...pageData
          })
          this.$analytics.setUserProperties({
            interested_in_resume: true
          })
          break
        case routesNames.EDIT_RESUME_PAGE:
          this.$analytics.logEvent('page_view', {
            resume_id: to.params.resumeId || undefined,
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
            route_name: to.name,
            query: JSON.stringify(this.$route.query),
            ...pageData
          })
          break
      }
      if (to?.params?.lang !== from?.params?.lang)
        this.$analytics.setUserProperties({
          lang: this.$route.params.lang
        })
      if (to?.name !== from?.name)
        this.$analytics.setCurrentScreen(to?.name)
    }
        // eslint-disable-next-line no-empty
    catch (e) {}
    next()
  },
}
</script>

<style scoped>

</style>
