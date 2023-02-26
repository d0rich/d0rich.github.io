<script setup lang="ts">
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import {BlogContent} from '@/components/blog/Tile.vue'

const blogQuery: QueryBuilderParams = {
  path: '/blog',
  without: [ 'excerpt', 'body' ]
}

</script>

<template>
  <div>
    Blog

    <nav>
      <ContentList :query="blogQuery" v-slot="{ list }: { list: BlogContent[] }">
        <BlogTile :article="article" v-for="article in list" :key="article._path" />
      </ContentList>
    </nav>
  </div>
</template>