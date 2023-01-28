<template>
  <div id="preloadedImages" />
  <NuxtLayout>
    <NuxtPage :key="key" />
  </NuxtLayout>
  <BigBangButtonAnimation class="z-50" />
</template>

<script lang="ts">
export default defineComponent({
  name: 'App',
  setup(){    
    useFaviconAnimation()
    const { key } = useTransitionAnimationWorkaround()
    useHead({
      titleTemplate(title: string | undefined){
        if (title)
          return `${title} | d0rich`
        else
          return 'd0rich developer'
      },
    })
    return {
      key
    }
  }
})
</script>

<style>
#preloadedImages {
  width: 0px;
  height: 0px;
  display: inline;
  background-image: url(~/assets/img/character/action.webp),
                    url(~/assets/img/character/action-color.webp),
                    url(~/assets/img/character/action-outline.webp),
                    url(~/assets/img/character/action-outline-color.webp),
                    url(~/assets/img/character/idle.webp),
                    url(~/assets/img/character/idle-color.webp),
                    url(~/assets/img/character/idle-outline.webp),
                    url(~/assets/img/character/idle-outline-color.webp),
                    url(~/assets/img/character/profi.webp),
                    url(~/assets/img/character/profi-color.webp),
                    url(~/assets/img/character/profi-outline.webp),
                    url(~/assets/img/character/profi-outline-color.webp),
                    url();
}
</style>