<script setup lang="ts">
const slug = clearSlug(useRoute().params.slug as string[])

const { data: doc } = useAsyncData(['blog', ...slug].join('/'), () =>
  queryContent('blog', ...slug).findOne()
)

const { itemsOnPage } = getBlogPostsNavConfig()
const filterObject = getBlogPostsFilterObject()

const { data: position } = useAsyncData(
  ['blog', ...slug, 'position'].join('/'),
  () =>
    queryContent('/blog')
      .only('_path')
      .where({
        ...filterObject,
        date: { $gte: doc.value?.date }
      })
      .find(),
  {
    server: true,
    transform: (result) => result.length,
    watch: [doc]
  }
)

const linkToBlog = computed(() => {
  return getLinkToPaginatedPage(
    '/blog',
    Math.floor((position.value ?? 1) / itemsOnPage + 1)
  )
})
</script>

<template>
  <div v-if="doc" class="pb-[50vh] pt-10">
    <AsyncSafeSeoWithOg :title="doc.title" :description="doc.description" />
    <div class="blog-article">
      <nav>
        <DBigBangButton text="< Back" :to="linkToBlog" />
      </nav>
      <time v-if="doc.date">{{ dateToDayMonthYear(doc.date) }}</time>
    </div>
    <ContentRenderer :value="doc" tag="article" class="blog-article" />
  </div>
</template>

<style>
.blog-article {
  @apply prose dark:prose-invert font-sans
         md:prose-lg
         mx-auto px-3 sm:px-0
         dark:prose-headings:text-cyan-400 dark:prose-a:text-inherit
         dark:prose-p:first-letter:bg-cyan-800
         dark:prose-blockquote:border-cyan-400
         dark:marker:text-cyan-400;
}

.blog-article blockquote p::before {
  content: none;
}
</style>
