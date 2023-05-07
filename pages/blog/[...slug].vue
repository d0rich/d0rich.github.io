<script setup lang="ts">
import { Disqus } from 'vue-disqus'

const slug = clearSlug(useRoute().params.slug as string[])

const { data: doc } = useAsyncData(['blog', ...slug].join('/'), () =>
  queryContent('blog', ...slug).findOne()
)

const { itemsOnPage, filter } = useBlogNavigationConfig()

const { data: position } = useAsyncData(
  ['blog', ...slug, 'position'].join('/'),
  () =>
    queryContent('/blog')
      .only('_path')
      .where({
        ...filter,
        date: { $gte: doc.value?.date }
      })
      .find(),
  {
    server: true,
    transform: (result) => result.length,
    watch: [doc]
  }
)

const { getLinkToPaginatedPage } = useDPaginationUtils()

const linkToBlog = computed(() => {
  return getLinkToPaginatedPage(
    '/blog',
    Math.floor((position.value ?? 1) / (itemsOnPage - 1) + 1)
  )
})
</script>

<template>
  <div v-if="doc" class="pb-[50vh] pt-10">
    <AsyncSafeSeoWithOg :title="doc.title" :description="doc.description" />
    <div class="blog-article blog-fonts">
      <nav>
        <DBigBangButton text="< Back" :to="linkToBlog" />
      </nav>
      <time v-if="doc.date">{{ dateToDayMonthYear(doc.date) }}</time>
    </div>
    <ContentRenderer :value="doc" tag="article" class="blog-article blog-fonts" />
    <Disqus class="blog-fonts max-w-screen-md mx-auto px-3 mt-32" :identifier="doc._path" />
  </div>
  <Error404 v-else />
</template>

<style>
.blog-article {
  @apply max-w-screen-md
         mx-auto px-3
         dark:prose-headings:text-cyan-400
         dark:[&_p]:first-letter:bg-cyan-800
         dark:[&_:not(blockquote)_p]:first-letter:bg-transparent
         dark:marker:text-cyan-400;
}

.blog-fonts {
  @apply [&_p]:!font-sans [&_a]:!font-sans [&_em]:!font-sans [&_li]:!font-sans
         [&_ul]:!font-sans [&_ol]:!font-sans [&_blockquote]:!font-sans
         [&_strong]:!font-sans [&_del]:!font-sans [&_hr]:!font-sans
         [&_table]:!font-sans [&_thead]:!font-sans [&_tbody]:!font-sans [&_tr]:!font-sans
         [&_th]:!font-sans [&_td]:!font-sans [&_sup]:!font-sans [&_sub]:!font-sans
         [&_h1]:!font-sans [&_h2]:!font-sans [&_h3]:!font-sans [&_h4]:!font-sans [&_h5]:!font-sans [&_h6]:!font-sans;
}
</style>
