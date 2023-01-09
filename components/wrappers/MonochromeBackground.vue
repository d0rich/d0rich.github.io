<template>
  <Component :is="tag" class="w-full h-full">
    <div class="relative w-full h-full">
      <div class="absolute w-full h-full top-0" :class="bgClass" :style="bgStyle" />
      <div class="absolute w-full h-full top-0" :class="overlayClass" :style="overlayStyle" />
      <slot />
    </div>
  </Component>
</template>

<script lang="ts">

import { StyleValue } from 'vue';

export default defineComponent({
  name: 'MonochromeBackground',
  props: {
    bgClass: [String, Object as () => Record<string, boolean>],
    bgStyle: Object as () => StyleValue,
    overlayClass: [String, Object as () => Record<string, boolean>],
    overlayStyle: Object as () => StyleValue,
    tag: {
      type: String,
      default: 'div'
    }
  }
})
</script>