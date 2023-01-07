<template>
  <Component class="d-btn" :is="currentComponent" :to="to" :href="href">
    <FocusHighlight>
      <slot />
    </FocusHighlight>
  </Component>
</template>

<script lang="ts">

import FocusHighlight from './wrappers/FocusHighlight.vue';

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

.d-btn, .d-btn button{
  @apply font-extrabold uppercase -rotate-6 select-none;
}

</style>
