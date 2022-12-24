<template>
  <header>
    <Shape filter-class="sharp-shadow ss-neutral-50 ss-b-2 ss-r-3"
          shape-class="dark:bg-neutral-900"
          :shape-style="{
            clipPath: 'polygon(10px 0, 0 100%, 100% calc(100% - 10px), 100% 13px)'
          }">
      <div class="w-full h-16 flex justify-evenly items-center overflow-visible">
        <DBtn>Blog</DBtn>
        <DBtn>Resume</DBtn>
        <DBtn>Dorich</DBtn>
        <DBtn>Portfolio</DBtn>
      </div>
    </Shape>
  </header>
  
  
  
</template>

<script lang="ts">

import Shape from '~~/components/wrappers/Shape.vue';

export default defineComponent({
  name: 'DHeader',
  components: {
    Shape
  }
})
</script>

<style>

</style>