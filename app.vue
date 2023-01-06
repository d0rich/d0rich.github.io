<template>
  <NuxtLayout>
    <NuxtPage :key="key" />
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
  setup(){    
    useFaviconAnimation()
    const { key } = useTransitionAnimationWorkaround()
    return {
      key
    }
  }
})
</script>