<template>
  <v-list-item :to="post.path" class="news-card" :style="{paddingLeft: post.image ? 0 : undefined}">
    <v-img :src="post.image"
           :alt="post.title"
           v-if="post.image"
           eager
           class="news-card__image"
           max-height="6rem"
           min-height="100%"
           max-width="10rem" />
    <v-list-item-content>
      <v-list-item-title>
        {{post.title}}
      </v-list-item-title>
      <v-list-item-subtitle class="mb-2">
        <time :datetime="post.date">{{ post.date }}</time>
      </v-list-item-subtitle>
      <v-list-item-subtitle>
        {{post.summary}}
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import {Router} from "../router";
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.news-card{
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--v-secondary-darken1);
}

.news-card__image{
  margin-right: 1rem;
}
</style>