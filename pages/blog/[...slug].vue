<template>
  <div>
    <ContentDoc  v-slot="{ doc }">
      <div class="blog-article">
        <img :src="doc.image" />
      </div>
      <ContentRenderer :value="doc" tag="article" class="blog-article" />
    </ContentDoc>
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