<template>
  <div class="-mt-20">
    <section style="height: 200vh;">
      <div class="sticky top-0">
        <div :ref="(el) => { introNodeRefs.main.value = elFromNodeRef(el) }" 
                class="relative w-screen max-w-full h-screen">
          <div :ref="(el) => { introNodeRefs.bg.value = elFromNodeRef(el) }"
              class="absolute h-full w-full top-0 left-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[1]" />
          <WrappersShape class="absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]" 
                          shape-class="intro-shape" 
                          :ref="(el) => { introNodeRefs.text.value = componentFromNodeRef(el) }">
            <div class="p-10 text-xl font-serif text-center">
              My name is Nikolay Dorofeev<br/>
              I am Software Developer<br/>
              also known as <code>d0rich</code><br/>
            </div>
            
          </WrappersShape>

        </div>
        <WrappersMonochromeBackground
              dots :dots-style="{ clipPath: 'polygon(20% 100%, 100% 100%, 100% 0%)' }"
              class="bg-[url('~/assets/img/bg/code1.jpg')] bg-cover bg-fixed bg-center" 
              overlay-class="backdrop-blur backdrop-saturate-0 bg-green-600 bg-opacity-40">
          <div id="home-intro-section">
            <svg :ref="(el) => { introNodeRefs.svg.value = el as (SVGElement & SVGSVGElement) | null }" 
                  height="100%" width="100%"
                  class="absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900" 
                  viewBox="80 0 20 100" preserveAspectRatio="xMaxYMax">
              <polygon :ref="(el) => { introNodeRefs.line.value = el as SVGPolygonElement | null }" 
                        class="fill-white" />
            </svg>
            <div class="absolute top-0 left-0 w-fit">
              <Persona :persona="mainPersona" 
                      class="sm:h-96 sm:w-96 max-w-sm md:w-full md:h-auto md:max-w-lg
                            sharp-shadow ss-br-3 ss-neutral-50 
                            -ml-20 sm:ml-auto mt-20 transition-all" />
              <ActionsFan :actions="actions" side="right" 
                          class="absolute top-2/3 left-1/2 w-2/3 sm:left-2/3 z-10 text-xl md:text-2xl"
                          filter-class="sharp-shadow ss-br-3 ss-neutral-50"
                          @action-focus="mainPersona = $event" 
                          @action-unfocus="mainPersona = 'main-idle'" />
            </div>
          </div>
        </WrappersMonochromeBackground>
      </div>
    </section>
    
    <section style="height: 200vh;" />
  </div>
</template>

<script lang="ts">
import { PersonaName } from '~~/components/Persona.vue';
import { ActionFanItem } from '~~/components/ActionsFan.vue';

export default defineComponent({
  name: 'HomePage',
  setup(){
    const mainPersona = ref<PersonaName>('main-idle')
    const { showHeader } = useLayoutState()
    const { introNodeRefs } = useIntroBlockAnimation()
    const actions: ActionFanItem<PersonaName>[] = [
      { title: 'Sections', to: '#sections', emit: 'main-action' },
      { title: 'About me', to: '#about', emit: 'main-profi' },
      { title: 'Story', to: '#story', emit: 'main-idle' }
    ]
    onMounted(() => {
      showHeader.value = false
    })
    onBeforeRouteLeave(() => {
      showHeader.value = true
    })
    return {
      introNodeRefs,
      mainPersona,
      actions
    }
  }

})

</script>

<style>
.intro-shape {
  clip-path: polygon(3% 3%, 100% 0%, 95% 95%, 0% 100%);
  animation: intro-shape-clip-path 5s linear infinite;
  @apply backdrop-invert bg-neutral-900 bg-opacity-60;
}

@keyframes intro-shape-clip-path {
  0%, 100% {
    clip-path: polygon(3% 3%, 100% 0%, 95% 95%, 0% 100%);
  }
  25% {
    clip-path: polygon(5% 3%, 96% 4%, 96% 97%, 0 99%);
  }
  50% {
    clip-path: polygon(3% 2%, 100% 0, 90% 94%, 1% 91%);
  }
  75% {
    clip-path: polygon(4% 7%, 96% 1%, 99% 99%, 8% 95%);
  }
}

#home-intro-section{
  width: 100vw;
  max-width: 100%;
  height: 75vh;
  min-height: 35rem;
  overflow: hidden;
  @apply relative;
}
</style>

