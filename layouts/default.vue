<template>
  <DHeader />
  <slot />
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