<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types"

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
  <div
    class="blog-tile overflow-x-hidden"
    :style="{
      '--page-bg-color': '#262626'
    }"
  >
    <div class="blog-tile__frame--top" />
    <div class="blog-tile__frame--bottom" />
    <NuxtLink class="blog-tile__link" :to="article._path">
      <div class="blog-tile__link__image-wrapper">
        <div
          class="blog-tile__link__image"
          :style="`background-image: url(${article.image});`"
        />
      </div>
      <div class="blog-tile__link-image-overlay" />
      <div style="height: 5rem; pointer-events: none" />
      <div class="max-w-2xl mx-auto px-3">
        <WrapperShape
          shape-class="bg-black bg-opacity-70"
          shape-style="clip-path: var(--shape-card);"
        >
          <div style="padding: var(--shape-card-padding)">
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
        </WrapperShape>
      </div>
      <div style="height: 5rem; pointer-events: none" />
    </NuxtLink>
  </div>
</template>

<style>
.blog-tile {
  @apply relative isolate;
}

.blog-tile__frame--top,
.blog-tile__frame--bottom {
  @apply absolute border-solid w-full h-8 z-50;
}

.blog-tile__frame--top {
  border-width: 2rem 100vw 0 0;
  border-color: var(--page-bg-color) transparent transparent transparent;
  @apply top-0;
}

.blog-tile__frame--bottom {
  border-width: 0 0 2rem 100vw;
  border-color: transparent transparent var(--page-bg-color) transparent;
  @apply bottom-0;
}

.blog-tile__link {
  overflow: hidden;
  @apply relative;
}

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
