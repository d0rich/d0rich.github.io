<script setup lang="ts">
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import {BlogContent} from '@/components/blog/Tile.vue'

const blogQuery: QueryBuilderParams = {
  path: '/blog',
  without: [ 'excerpt', 'body' ]
}

</script>

<template>
  <div class="">
    <div class="relative isolate px-3 max-w-3xl mx-auto my-10 overflow-hidden">
      <div class="max-w-lg">
        <h1 class="text-6xl sm:text-8xl font-serif mb-5 text-cyan-300">Blog</h1>
        <p class="first-letter:bg-cyan-600">
          Welcome to my blog! Here you will find news, articles, and insights 
          related to software development, programming languages, technology trends, and more. 
          My goal is to provide informative and engaging content that is useful for developers of all levels.
        </p>
      </div>
      <Mask mask="owl" color outline 
        class="h-full absolute top-0 right-0 -z-10 brightness-[25%] sm:brightness-100 transition-all" />
    </div>
    

    <nav>
      <ContentList :query="blogQuery" v-slot="{ list }: { list: BlogContent[] }">
        <BlogTile :article="article" v-for="article in list" :key="article._path" />
      </ContentList>
    </nav>
  </div>
</template>