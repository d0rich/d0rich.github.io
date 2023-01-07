<template>
  <div>
    <div class="d-shape">
      <div class="d-shape__bg-filter" :class="filterClass" :style="filterStyle">
        <div class="d-shape__bg-wrapper">
          <div class="d-shape__bg" :class="shapeClass" :style="shapeStyle" />
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">

import { StyleValue } from 'vue';

export default defineComponent({
  name: 'Shape',
  props: {
    shapeClass: [String, Object as () => Record<string, boolean>],
    shapeStyle: Object as () => StyleValue,
    filterClass: [String, Object as () => Record<string, boolean>],
    filterStyle: Object as () => StyleValue
  }
})

</script>

<style>
.d-shape, .d-shape > *{
  @apply relative;
}

.d-shape__bg-filter{
  @apply absolute top-0 left-0 w-full h-full;
}

.d-shape__bg-wrapper{
  @apply relative w-full h-full;
}

.d-shape__bg{
  @apply absolute w-full h-full;
}

</style>