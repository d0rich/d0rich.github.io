<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      onBeforeLeave,
      onAfterEnter
    }" />
  </NuxtLayout>
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
  setup(){
    const { blockLinks } = usePageTransitionState()
    return {
      // FIXME: It is workaround for nuxt transition bug
      onBeforeLeave: () => {
        blockLinks.value = true
      },
      onAfterEnter: () => {
        blockLinks.value = false
      }
    }
  }
})
</script>