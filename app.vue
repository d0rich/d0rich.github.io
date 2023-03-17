<template>
  <NuxtLayout>
    <NuxtPage :key="key" />
  </NuxtLayout>
  <BigBangButtonAnimation class="z-50" />
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
  setup() {
    useFaviconAnimation()
    const { key } = useTransitionAnimationWorkaround()
    useHead({
      titleTemplate(title: string | undefined) {
        if (title) return `${title} | d0rich`
        else return 'd0rich developer'
      }
    })
    return {
      key
    }
  }
})
</script>
