<script setup lang="ts">
import { QueryBuilderParams, QueryBuilderWhere } from '@nuxt/content/dist/runtime/types'
import { BlogContent } from '@/components/blog/Tile.vue'

const { currentPage } = defineProps({
  currentPage: {
    type: Number,
    default: 1
  }
})

const itemsOnPage = 5

const config = useRuntimeConfig()

const filterObject: QueryBuilderWhere = config.public.isProd ? { _draft: { $not: true } } : {}

const { data: pagesCount } = useAsyncData(
  `blog/pages-count/${itemsOnPage}`,
  () => queryContent('/blog/').only('_path').where(filterObject).find(),
  {
    server: true,
    transform: (articles) => Math.ceil((articles.length) / itemsOnPage)
  }
)

const blogQuery: QueryBuilderParams = {
  path: '/blog',
  without: [ 'excerpt', 'body' ],
  // @ts-ignore
  // FIXME: QueryBuilderParams wrong type definition
  where: filterObject,
  limit: itemsOnPage,
  skip: (currentPage - 1) * itemsOnPage,
  sort: [
    { 'date': -1 }
  ]
}

</script>

<template>
  <div class="mb-96">
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
    
    <section v-if="pagesCount">
      <DPagination class="mx-auto my-10 max-w-md" v-if="pagesCount > 1"
                  :current-page="currentPage" 
                  :all-pages="pagesCount" base-link="/blog" />
      <nav>
        <ContentList :query="blogQuery" v-slot="{ list }: { list: BlogContent[] }">
          <BlogTile :article="article" v-for="article in list" :key="article._path" />
        </ContentList>
      </nav>
      <DPagination class="mx-auto my-10 max-w-md" v-if="pagesCount > 1"
                  :current-page="currentPage" 
                  :all-pages="pagesCount" base-link="/blog" />
    </section>
  </div>
</template>