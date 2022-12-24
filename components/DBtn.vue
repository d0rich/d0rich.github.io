<template>
  <NuxtLink to="/" class="btn">
    <Highlight>
      <slot />
    </Highlight>
  </NuxtLink>
</template>

<script lang="ts">

import Highlight from './wrappers/Highlight.vue';

export default defineComponent({
  name: 'Button',
  components: {
    Highlight
  }
})

</script>
