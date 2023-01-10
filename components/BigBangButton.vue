<template>
  <Component :is="currentTag" :to="to" class="big-bang-button" @click="onClick">
    <span v-for="symbol, index in symbols" :key="index" v-text="symbol" />
  </Component>
</template>

<script lang="ts">
export default defineComponent({
  name: 'BigBangButton',
  emits: ['click'],
  props: {
    text: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'button'
    },
    to: {
      type: String
    }
  },
  setup({ text, tag, to }, ctx){
    const NuxtLink = resolveComponent('NuxtLink')
    const animationText = useBigBangButtonAnimationText()
    return {
      currentTag: computed(() => {
        return to ? NuxtLink : tag
      }),
      symbols: computed(() => text.split('')),
      onClick(event: MouseEvent){
        animationText.value = text
        ctx.emit('click', event)
      }
    }
  }
})

</script>

<style>
.big-bang-button{
  @apply text-3xl font-bold uppercase;
}

.big-bang-button:hover > span{
  @apply inline-block transition-all;
}


.big-bang-button:hover > span:nth-of-type(4n+1){
  @apply rotate-12 translate-x-1 -translate-y-2;
}
.big-bang-button:hover > span:nth-of-type(4n+2){
  @apply -rotate-6 translate-y-3;
}
.big-bang-button:hover > span:nth-of-type(4n+3){
  @apply -rotate-12 translate-x-1 -translate-y-2;
}
.big-bang-button:hover > span:nth-of-type(4n+4){
  @apply -rotate-6 translate-x-1 -translate-y-1;
}
.big-bang-button:hover > span:first{
  @apply rotate-12 -translate-x-2 -translate-y-2;
}
</style>