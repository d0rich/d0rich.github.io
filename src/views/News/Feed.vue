<template>
  <div>
    <h1 class="text-center mt-7">{{texts.title.text}}</h1>
    <news-editor @updated="fetch">
      {{texts.createNews.text}}
    </news-editor>
    <header class="news-header">{{texts.header.text}}</header>
    <div class="hr" />
    <v-pagination v-if="pages > 1" class="mt-9"
                  @input="fetch"
                  v-model="page" :length="pages" />
    <v-list class="news-feed" link>
      <news-card class="my-3" v-for="news in newsFeed" :news="news" :key="news.id" />
    </v-list>
    <v-pagination v-if="pages > 1" class="mt-9"
                  @input="fetch"
                  v-model="page" :length="pages" />
  </div>
</template>

<script>
import {Text} from "@/classes";
import NewsEditor from "@/components/news/NewsEditor";
import NewsCard from "@/components/news/NewsCard";
import {mapActions} from "vuex";
export default {
name: "NewsFeed",
  components:{
     NewsEditor, NewsCard
  },
  data(){
    return {
      texts: {
        title: new Text('Новости', 'News'),
        createNews: new Text('Создать новость', 'Create news'),
        header: new Text('Здесь представлены новости из программисткой части жизни ' +
            'JavaScript разработчика Николая Дорофеева (d0rich).',
            'Here you can see the news from programmer life of JavaScript developer Nikolay Dorofeev (d0rich).'),
      },
      newsFeed: [],
      page: 1,
      pages: 1,
      onPage: 10
    }
  },
  watch: {
    '$route.fullPath'(){
      this.page = +this.$route.query.page
      this.fetch()
    }
  },
  methods: {
    ...mapActions(['getNewsFeed']),
    async fetch(){
      if (this.page != this.$route.query.page)
        await this.$router.push({...this.$route, query: { page: this.page.toString() }})
      this.turnPageLoad(true)
      this.lastFilters = this.chosenTags
      let newsData = await this.getNewsFeed({page: this.page, onPage: 10 })
      this.newsFeed = newsData.news
      this.pages = newsData.pages
      this.turnPageLoad(false)
      console.log(this.newsFeed)
    }
  },
  async created(){
    if (!this.$route.query.page) {
      await this.$router.replace({...this.$route, query: { ...this.$route.query, page: '1' }})
    }
    this.page = +this.$route.query.page
    await this.fetch()
  },
  computed:{
    title(){
      return new Text('Новости', 'News').text
    },
    description(){
      return new Text('Здесь представлены новости из программисткой части жизни ' +
          'JavaScript разработчика Николая Дорофеева (d0rich) из Томска (Россия).',
          'On this page you can see the news from the programmer life ' +
          'of the JavaScript developer Nikolay Dorofeev (d0rich) from Tomsk (Russia).').text
    },
    keywords(){
      return new Text('JavaScript разработка, веб приложения, новости',
          'JavaScript development, web applications, news').text
    }
  },
  metaInfo() {
    return {
      title: this.title,
      meta: [
        { vmid: 'description' , name: 'description', content: this.description },
        {
          vmid: 'keywords', name: 'keywords',
          content: this.keywords
        },
        { vmid: 'og:title', property: 'og:title', content: this.title },
        { vmid: 'og:description', property: 'og:description', content: this.description },
        { vmid: 'robots', name: 'robots', content: 'index,follow'}
      ]
    }
  }
}
</script>

<style scoped>
.news-header{
  max-width: 800px;
  margin: 1rem auto 0 auto;
  font-size: 1.2rem;
}
.news-feed{
  width: 100%;
  background-color: unset;
}
</style>
