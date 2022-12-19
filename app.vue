<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
export default defineComponent({
  name: 'App',
  setup(){
    definePageMeta({
      colorMode: 'dark'
    })
  }
})
</script>
