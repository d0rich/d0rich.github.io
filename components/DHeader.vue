<template>
  <div class="sharp-shadow ss-neutral-50 ss-b-1">
    <header>
    </header>
  </div>
  
</template>

<script lang="ts">
export default defineComponent({
  name: 'DHeader'
})
</script>

<style>

header{
  clip-path: polygon(0 0, 
    0 100%, 
    11% calc(100% - 7px), 
    25% calc(100% - 1px), 
    30% calc(100% - 4px), 
    43% calc(100% - 0px), 
    56% calc(100% - 6px), 
    62% calc(100% - 9px), 
    70% calc(100% - 7px), 
    89% calc(100% - 6px), 
    92% calc(100% - 9px), 
    100% calc(100% - 10px), 
    100% 0);
  @apply dark:bg-neutral-900 w-full h-16;
}

</style>