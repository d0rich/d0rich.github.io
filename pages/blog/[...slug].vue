<template>
  <div class="pb-[50vh] pt-10">
    <ContentDoc v-slot="{ doc }">
      <div class="blog-article">
        <time v-if="doc.date">{{ dateToDayMonthYear(doc.date) }}</time>
      </div>
      <ContentRenderer :value="doc" tag="article" class="blog-article" />
    </ContentDoc>
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
