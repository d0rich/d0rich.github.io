<template>
  <Component :is="currentComponent" :to="blockLinks ? '#' : to" :href="href" class="d-btn">
    <FocusHighlight>
      <slot />
    </FocusHighlight>
  </Component>
</template>

<script lang="ts">

import FocusHighlight from './wrappers/FocusHighlight.vue';

export default defineComponent({
  name: 'Button',
  components: {
    FocusHighlight
  },
  props: {
    to: String,
    href: String,
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup({ to, href, tag }){
    const NuxtLink = resolveComponent('NuxtLink')
    const { blockLinks } = usePageTransitionState()
    return {
      blockLinks,
      currentComponent: computed(() => {
        if (to || href) return NuxtLink
        return tag
      })
    }
  }
})

</script>

<style>

.d-btn{
  @apply font-extrabold uppercase -rotate-6 cursor-pointer select-none;
}

</style>
