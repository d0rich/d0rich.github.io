<script setup lang="ts">
import { NavItem, QueryBuilderParams, ParsedContent } from '@nuxt/content/dist/runtime/types';
const blogQuery: QueryBuilderParams = {
  path: '/blog',
  without: [ 'excerpt', 'body' ]
  // where: [
  //   { _path: /^\/blog/ }
  // ]
}

</script>

<template>
  <div>
    Blog

    <nav>
      <ContentList :query="blogQuery" v-slot="{ list }: { list: ParsedContent[] }">
        <NuxtLink v-for="article in list" :key="article._path" :to="article._path">
          <div>
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
          </div>
        </NuxtLink>
      </ContentList>
    </nav>
  </div>
</template>