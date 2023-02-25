<template>
  <div>
    <ContentDoc tag="article" class="blog-article" />
  </div>
</template>

<script lang="ts">

export default defineComponent({
  setup(){
    
  }
})

</script>

<style>
.blog-article{
  @apply prose dark:prose-invert font-sans
         mx-auto px-3 sm:px-0;
}
</style>