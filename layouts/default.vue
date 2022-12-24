<template>
  <div id="default-layout">
    <div class="fixed w-full" >
      <DHeader class="mx-auto max-w-xl" />
    </div>
    <main class="pt-20">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">

import DHeader from './components/DHeader.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    DHeader
  }
})
</script>

<style>
#default-layout{
  @apply w-full h-full overflow-x-hidden;
}
</style>