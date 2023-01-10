<template>
  <div id="preloadedImages" />
  <NuxtLayout>
    <NuxtPage :key="key" />
  </NuxtLayout>
  <BigBangButtonAnimation />
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
  background-image: url(~/assets/img/personas/MainBW.webp),
                    url(~/assets/img/personas/ActionBW.webp),
                    url(~/assets/img/personas/ProfiBW.webp),
                    url(~/assets/img/personas/ArachnitectBW.webp),
                    url(~/assets/img/personas/TyrionBW.webp),
                    url(~/assets/img/personas/YodaBW.webp),
                    url();
}
</style>