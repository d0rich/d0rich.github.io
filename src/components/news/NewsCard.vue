<template>
  <v-list-item :to="newsRoute" class="news-card">
    <v-img :src="news.image.src"
           :lazy-src="news.image.phSrc"
           :alt="news.image.alt.text"
           class="news-card__image"
           max-height="6rem"
           min-height="100%"
           max-width="10rem" />
    <v-list-item-content>
      <v-list-item-title>
        {{news.title.text}}
      </v-list-item-title>
      <v-list-item-subtitle class="mb-2">
        {{news.createdAt.toLocaleDateString(this.lang, dateOptions)}}
      </v-list-item-subtitle>
      <v-list-item-subtitle>
        {{news.contentShort.text}}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import {routesNames} from "@/data/constants";

export default {
  name: "NewsCard",
  props: {
    news: {
      type: Object,
      required: true,
    }
  },
  data(){
    return{
      dateOptions: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      },
    }
  },
  computed:{
    newsRoute(){
      return {
        name: routesNames.NEWS_PAGE,
        params: {
          year: this.news.createdAt.getFullYear(),
          month: this.news.createdAt.getMonth() + 1,
          date: this.news.createdAt.getDate(),
          stringId: this.news.stringId
        }
      }
    }
  }
}
</script>

<style scoped>
.news-card{
  width: 100%;
  padding-left: 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--v-secondary-darken1);
}

.news-card__image{
  margin-right: 1rem;
}
</style>
