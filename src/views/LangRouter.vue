<template>
  <router-view />
</template>

<script>
import {languages} from "@/data/languages";
import {Text} from "@/classes/text";
import {mapMutations} from 'vuex'
import router from "@/router";

export default {
name: "LangRouter",
  data(){
    return{
      languages: languages,
      tooltip: new Text('Выбать язык', 'Choose language')
    }
  },
  methods:{
    ...mapMutations(['setLang'])
  },
  watch:{
    lang(){
      this.$route.params.lang = this.lang
      router.push({ ...this.$route })
    }
  },
  created() {
    const langToSet = this.languages.find((lang) => this.$route.params.lang === lang.short)
    if (langToSet) this.setLang(langToSet.short)
    else this.setLang(localStorage.getItem('lang') || 'en')
  }
}
</script>

<style scoped>

</style>
