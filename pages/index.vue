<template>
  <div class="-mt-20">
    <section style="height: 200vh;" :ref="(el) => { introNodeRefs.section.value = el as Element }">
      <div class="sticky top-0">
        <div :ref="(el) => { introNodeRefs.main.value = el as Element }" 
                class="relative w-screen max-w-full h-screen">
          <div :ref="(el) => { introNodeRefs.bg.value = el as Element }"
              class="absolute h-full w-full top-0 left-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]" />
          <WrapperShape class="absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]" 
                          shape-class="intro-shape" 
                          :ref="(el) => { introNodeRefs.text.value = componentFromNodeRef(el) }">
            <div class="p-10 text-xl font-serif text-center">
              My name is Nikolay Dorofeev<br/>
              I am Software Developer<br/>
              also known as <code>d0rich</code><br/>
            </div>
            
          </WrapperShape>

        </div>
        <WrapperBackground
              dots :dots-style="{ clipPath: 'polygon(20% 100%, 100% 100%, 100% 0%)' }"
              class="bg-[url('~/assets/img/bg/it-office.png')] bg-cover bg-center" 
              overlay-class="backdrop-saturate-0 bg-green-900 bg-opacity-90">
          <template #svg>
            <svg :ref="(el) => { introNodeRefs.svg.value = el as (SVGElement & SVGSVGElement) | null }" 
                  height="100%" width="100%"
                  class="absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900" 
                  viewBox="80 0 20 100" preserveAspectRatio="xMaxYMax">
              <polygon :ref="(el) => { introNodeRefs.line.value = el as SVGPolygonElement | null }" 
                        class="fill-white" />
            </svg>
          </template>
          <div id="home-intro-section">
            <div class="absolute top-0 left-0 w-fit">
              <Character :pose="currentPose" 
                      class="sm:h-96 sm:w-96 max-w-sm md:w-full md:h-auto md:max-w-lg
                            sharp-shadow ss-br-3 ss-neutral-400 
                            -ml-20 sm:ml-auto mt-20 transition-all" />
              <ActionsFan :actions="actions" side="right" 
                          class="absolute top-2/3 left-1/2 w-2/3 sm:left-2/3 z-10 text-xl md:text-2xl"
                          filter-class="sharp-shadow ss-br-3 ss-neutral-50"
                          @action-focus="currentPose = $event" 
                          @action-unfocus="currentPose = 'idle'" />
            </div>
          </div>
        </WrapperBackground>
      </div>
    </section>
    <WrapperBackground tag="section" id="sections" 
          class="bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-center"
          overlay-class="backdrop-saturate-50 bg-neutral-900 bg-opacity-90">
      <template #svg>
        <svg :ref="(el) => { sectionsNodeRefs.svg.value = el as (SVGElement & SVGSVGElement) }" 
              height="100%" width="100%"
              class="absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900" 
              viewBox="90 0 10 100" preserveAspectRatio="xMaxYMax">
          <polygon :ref="(el) => { sectionsNodeRefs.line.value = el as SVGPolygonElement }" 
                    class="fill-green-600" />
        </svg>
      </template>
      <div class="section-description">
        <Mask mask="spider" color 
            class="section-description__image" />
        <div class="section-description__text ">
          <p>
            The IT Portfolio section displays past and current projects in information 
            technology including web development, mobile app development, software development, 
            cloud computing, and more. Each project provides an overview of client's requirements, 
            approach and outcome. The portfolio showcases ability to deliver high-quality and 
            innovative solutions. Browse through the portfolio to see the capabilities and experience 
            in information technology.        
          </p>
        </div>
      </div>
      <div class="section-description">
        <Mask mask="owl" color 
            class="section-description__image" />
        <p class="section-description__text ">
          The Personal IT Blog offers valuable insights, tips and tutorials on the latest 
          trends and technologies in information technology. Written by experts, 
          the blog covers topics like programming, web development, mobile development, 
          cloud computing and more. It's a great resource for professionals and 
          enthusiasts to stay updated and gain new skills. Browse through the 
          articles and start learning today.        
        </p>
      </div>
      <div class="section-description">
        <Mask mask="wolf" color 
            class="section-description__image" />
        <p class="section-description__text ">
          The IT Specialist Resume section presents my skills, qualifications and experience 
          as an IT professional. It includes information about my education, experience, skills, 
          and achievements in various fields such as programming, web development, mobile 
          development, cloud computing. The section is designed for potential employers who 
          are looking for a qualified IT professional. Browse my resume to see if my qualifications 
          match the requirements for your open IT positions.      
        </p>
      </div>
      
    </WrapperBackground>
    <section style="height: 200vh;" />
  </div>
</template>

<script lang="ts">
import { CharacterPose } from '~~/components/Character.vue';
import { ActionFanItem } from '~~/components/ActionsFan.vue';

export default defineComponent({
  name: 'HomePage',
  setup(){
    const currentPose = ref<CharacterPose>('idle')
    const { showHeader } = useLayoutState()
    const { introNodeRefs } = useIntroBlockAnimation()
    const { sectionsNodeRefs } = useSectionsDescriptionAnimation()
    const actions: ActionFanItem<CharacterPose>[] = [
      { title: 'Sections', to: '#sections', emit: 'action' },
      { title: 'About me', to: '#about', emit: 'profi' },
      { title: 'Story', to: '#story', emit: 'idle' }
    ]
    onMounted(() => {
      showHeader.value = false
    })
    onBeforeRouteLeave(() => {
      showHeader.value = true
    })
    return {
      introNodeRefs, sectionsNodeRefs,
      currentPose,
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

<style>
.section-description{
  @apply md:flex justify-around items-end;
}

.section-description__image{
  @apply max-w-full w-96 sharp-shadow ss-r-2 ss-b-1 self-start;
}

.section-description__text{
  @apply font-serif max-w-lg lg:max-w-xl p-10;
  text-shadow: var(--tw-shadow-color) 1px 0 2rem;
}

.section-description:nth-of-type(1) .section-description__image{
  @apply ss-red-800;
}

.section-description:nth-of-type(1) .section-description__text{
  @apply shadow-red-600;
}

.section-description:nth-of-type(2){
  @apply flex-row-reverse;
}

.section-description:nth-of-type(2) .section-description__image{
  @apply ss-cyan-800;
}

.section-description:nth-of-type(2) .section-description__text{
  @apply shadow-cyan-600;
}

.section-description:nth-of-type(3) .section-description__image{
  @apply ss-blue-800;
}

.section-description:nth-of-type(3) .section-description__text{
  @apply shadow-blue-600;
}
</style>

