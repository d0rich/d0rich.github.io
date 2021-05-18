<template>
  <div>
    <h1>{{block.title.text}}</h1>
    <p>{{block.text.text}}</p>
    <slot />
    <div>
      <img-with-ph v-for="(img, index) in block.images" :key="index"
                   :src="img.src"
                   :ph-src="img.phSrc"
        />
    </div>
  </div>
</template>

<script>
import {PageBlock} from "@/classes";

export default {
name: "PageBlock",
  props: {
    block: PageBlock
  }
}
</script>

<style scoped>

</style>
