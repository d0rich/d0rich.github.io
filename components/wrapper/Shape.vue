<template>
  <Component :is="tag">
    <div class="d-shape">
      <div class="d-shape__bg-filter" :class="filterClass" :style="filterStyle">
        <div class="d-shape__bg-wrapper">
          <div class="d-shape__bg" :class="shapeClass" :style="shapeStyle" />
        </div>
      </div>
      <slot />
    </div>
  </Component>
</template>

<script lang="ts">

import { StyleValue } from 'vue';

export default defineComponent({
  name: 'Shape',
  props: {
    shapeClass: [String, Object as () => Record<string, boolean>],
    shapeStyle: Object as () => StyleValue,
    filterClass: [String, Object as () => Record<string, boolean>],
    filterStyle: Object as () => StyleValue,
    tag: {
      type: String,
      default: 'div'
    }
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

<!-- Global shapes -->
<style>
:root {
  --shape-bubble: polygon(
    0 calc(100% - 20px),
    20px calc(100% - 10px),
    25px calc(100% - 15px),
    45px calc(100% - 5px),
    70px calc(100% - 10px),
    100% 100%,
    calc(100% - 40px) 0,
    45px 30px,
    40px calc(100% - 30px),
    20px calc(100% - 45px),
    18px calc(100% - 25px)
  )
}
</style>