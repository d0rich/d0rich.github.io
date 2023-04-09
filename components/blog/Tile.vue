<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface BlogContent extends ParsedContent {
  image?: string
  date?: Date
  tags?: string[]
}

defineProps<{
  article: BlogContent
}>()
</script>

<template>
  <DWrapShape
    class="scale-90 hover:scale-100 transition-transform"
    shape-class="bg-black bg-opacity-70"
    shape-style="clip-path: var(--shape-card--dense);"
  >
    <template #bg-overlay>
      <!-- <div class="absolute inset-0 bg-cyan-400" style="clip-path: var(--shape-card--dense__outline);" /> -->
    </template>
    <NuxtLink
      :to="article._path"
      class="block"
      style="padding: var(--shape-card--dense__padding)"
    >
      <div class="p-2">
        <div class="text-right font-bold">
          <time>{{ dateToDayMonthYear(article.date) }}</time>
        </div>
        <h2 class="text-3xl font-bold text-cyan-200 mb-2">
          {{ article.title }}
        </h2>

        <p>
          {{ article.description }}
        </p>

        <div class="text-right mt-3 -mr-5">
          <DChip
            v-for="tag in article.tags"
            :key="tag"
            class="blog-tile__link__tag"
          >
            #{{ tag }}
          </DChip>
        </div>
      </div>
    </NuxtLink>
  </DWrapShape>
</template>

<style>
.blog-tile__link__image-wrapper {
  @apply absolute inset-0 w-full h-full overflow-hidden -z-20;
}

.blog-tile__link__image {
  transition: all 0.5s ease-in-out;
  width: 100%;
  height: 100%;
  @apply bg-cover bg-center;
}

.blog-tile__link:hover .blog-tile__link__image {
  width: 120%;
  height: 120%;
  transform: translate(-10%, -10%) rotate(-2deg);
}

.blog-tile__link-image-overlay {
  background-color: var(--page-bg-color);
  @apply absolute -z-10 inset-0 opacity-50 bg-cyan-800;
}

.blog-tile__link__tag {
  @apply mx-1 text-lg font-bold bg-cyan-600;
}
</style>
