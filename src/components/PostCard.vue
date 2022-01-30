<template>
  <v-card :to="post.path" class="news-card" :style="{paddingLeft: post.image ? 0 : undefined}">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
				<div>
					<v-card-title class="news-card__title" v-html="post.title" />
					<v-card-subtitle>
						<time>{{post.date}}</time>
					</v-card-subtitle>
				</div>
        <v-card-text v-html="post.summary" />
				<div class="pa-2">
					<v-chip small class="ma-1" v-for="tag in post.tags" :key="tag.id">
						#{{tag.title}}
					</v-chip>
				</div>
      </div>
			<v-img :src="post.image"
						 :alt="post.title"
						 v-if="post.image"
						 max-width="150"
						 eager
						 min-height="100%"/>
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

<style>
.news-card .v-card__title{
	word-break: unset;
}
</style>
