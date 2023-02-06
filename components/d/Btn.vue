<template>
  <Component class="d-btn" :is="currentComponent" :to="to" :href="href">
    <FocusHighlight :variant="highlight">
      <slot />
    </FocusHighlight>
  </Component>
</template>

<script lang="ts">

import FocusHighlight, { HighlightVariant } from '../wrapper/FocusHighlight.vue';

export default defineComponent({
  name: 'DButton',
  components: {
    FocusHighlight
  },
  props: {
    to: String,
    href: String,
    tag: {
      type: String,
      default: 'div'
    },
    highlight: {
      type: String as () => HighlightVariant
    }
  },
  setup({ to, href, tag }){
    const NuxtLink = resolveComponent('NuxtLink')
    return {
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
  @apply font-extrabold uppercase -rotate-6 select-none relative;
}

</style>
