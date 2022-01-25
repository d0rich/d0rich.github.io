<template>
  <v-card :to="post.path" class="news-card" :style="{paddingLeft: post.image ? 0 : undefined}">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="news-card__title" v-html="post.title" />
        <v-card-text v-html="post.summary" />
      </div>
      <v-avatar
          class="ma-3"
          size="125"
          tile
      >
        <v-img :src="post.image"
               :alt="post.title"
               v-if="post.image"
               eager
               class="news-card__image"
               max-height="6rem"
               min-height="100%"
               max-width="10rem" />
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
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

</style>
