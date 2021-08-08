<template>
  <div>
    <h1 class="text-center mt-7">{{texts.title.text}}</h1>
    <news-editor @updated="fetch">
      {{texts.createNews.text}}
    </news-editor>
    <div class="hr" />
    <v-list class="news-feed" link>
      <news-card class="my-3" v-for="news in newsFeed" :news="news" :key="news.id" />
    </v-list>

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
        createNews: new Text('Создать новость', 'Create news')
      },
      newsFeed: [],
      page: 1,
      pages: 1,
      onPage: 10
    }
  },
  methods: {
    ...mapActions(['getNewsFeed']),
    async fetch(){
      this.turnPageLoad(true)
      this.lastFilters = this.chosenTags
      let newsData = await this.getNewsFeed({page: this.page, onPage: 6 })
      this.newsFeed = newsData.news
      this.pages = newsData.pages
      this.turnPageLoad(false)
      console.log(this.newsFeed)
    }
  },
  async created(){
    this.fetch()
  }
}
</script>

<style scoped>
.news-feed{
  width: 100%;
  background-color: unset;
}
</style>
