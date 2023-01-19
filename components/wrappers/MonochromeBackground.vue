<template>
  <Component :is="tag" class="w-full h-full">
    <div class="relative w-full h-full">
      <div class="absolute w-full h-full top-0" :class="bgClass" :style="bgStyle" />
      <div class="absolute w-full h-full top-0" :class="overlayClass" :style="overlayStyle" />
      <div v-if="dots" class="absolute w-full h-full top-0 bg-dotted" 
          :class="dotsClass" :style="dotsStyle" />
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
    dotsClass: [String, Object as () => Record<string, boolean>],
    dotsStyle: Object as () => StyleValue,
    dots: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    }
  }
})
</script>

<style>
.bg-dotted{
  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(0)" opacity="0.2" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>');
  background-size: 2rem;
}

</style>