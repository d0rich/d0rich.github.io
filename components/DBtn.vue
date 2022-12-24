<template>
  <NuxtLink to="/" class="font-semibold uppercase -rotate-6">
    <FocusHighlight>
      <slot />
    </FocusHighlight>
  </NuxtLink>
</template>

<script lang="ts">

import FocusHighlight from './wrappers/FocusHighlight.vue';

export default defineComponent({
  name: 'Button',
  components: {
    FocusHighlight
  }
})

</script>
