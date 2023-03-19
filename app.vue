<script setup lang="ts">
useFaviconAnimation()
const { key } = useTransitionAnimationWorkaround()

const description = 'Small web portal of an experienced IT specialist.'

useHead({
  titleTemplate(title: string | undefined) {
    if (title) return `${title} • d0rich`
    else return 'd0rich: dream developer'
  },
  meta: [
    {
      name: 'keywords',
      content: [
        'developer',
        'Georgia',
        'hire',
        'IT',
        'informational technologies',
        'web',
        'frontend',
        'backend',
        'system analyst'
      ].join(', ')
    }
  ]
})

useSeoMeta({
  description,
  ogDescription: description,
  author: 'Nikolay Dorofeev',
  generator: 'Nuxt 3',
  // colorScheme: 'dark',
  ogSiteName: 'd0rich',
  ogImage: 'https://d0rich.me/og/image.jpg',
  ogUrl: computed(() => 'https://d0rich.me' + useRoute().path)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage :key="key" />
  </NuxtLayout>
  <DBigBangButtonAnimation class="z-50" />
</template>
