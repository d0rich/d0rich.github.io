<template>
  <div>
    <h1 class="text-center mt-7">{{texts.title.text}}</h1>
    <news-editor :id="id" @updated="fetch">
      {{texts.edit.text}}
    </news-editor>
    <div class="hr" />
    <nav>
      <v-btn class="ml-5" color="primary" :to="{name: routesNames.NEWS_CONTROLLER}" >
        <v-icon>
          mdi-chevron-left
        </v-icon>
        {{texts.backBtn.text}}
      </v-btn>
    </nav>
    <article>
      <v-img v-if="image"
             min-width="300px" max-width="600px" width="100%" max-height="30vh" min-height="200px"
             class="border-light--primary align-self-center"
             :src="image.src" :lazy-src="image.phSrc" :alt="image.alt.text" />
      <div class="news-text-container">
        <h1 class="text-center mt-5 mb-3">{{title.text}}</h1>
        <section class="ml-sm-7 news__date">
          {{createdAt.toLocaleDateString(this.lang, dateOptions)}}
        </section>
        <section class="article-content mb-8" v-html="content.text" />
      </div>
    </article>
  </div>
</template>

<script>
import {ImageModel, Text} from "@/classes";
import {routesNames} from "@/data/constants";
import NewsEditor from "@/components/news/NewsEditor";
export default {
  name: "News",
  components: {
    NewsEditor
  },
  data(){
    return {
      texts: {
        title: new Text('Новость', 'News'),
        edit: new Text('Редактировать', 'Edit'),
        backBtn: new Text('К новостям', 'To news')
      },
      id: 0,
      stringId: '',
      title: new Text(),
      content: new Text(),
      image: new ImageModel(),
      createdAt: new Date(),
      dateOptions: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
      routesNames
    }
  },
  methods: {
    async getNews(stringId){
      let res = await this.axios.get(`/news/get/byStringId/${stringId}`)
      return {
        id: res.data.id,
        stringId: res.data.stringId,
        title: Text.fromArr(res.data.title),
        createdAt: new Date(res.data.createdAt),
        image: new ImageModel({
          src: res.data.image[0],
          phSrc: res.data.image[1],
          alt: Text.fromArr(res.data.title)
        }),
        content: Text.fromArr(res.data.content)
      }
    },
    async fetch(){
      this.turnPageLoad(true)
      try {
        const news = await this.getNews(this.$route.params.stringId)
        this.id = news.id
        this.stringId = news.stringId
        this.title = news.title
        this.createdAt = news.createdAt
        this.image = news.image
        this.content = news.content
      }
      catch (e){
        this.setError404(true)
      }
      this.turnPageLoad(false)
    }
  },
  async created(){
    await this.fetch()
  }
}
</script>

<style scoped>
article{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.news-text-container{
  width: 75%;
  min-width: 300px;
  max-width: 1000px;
}
.news__date{
  color: var(--v-accent-darken1);
  font-size: 1.1em;
}
</style>
