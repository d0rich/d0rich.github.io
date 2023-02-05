<template>
  <div class="-mt-20">
    <!-- Intro block -->
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
    <!-- Block about sections -->
    <WrapperBackground tag="section" id="sections" 
          class="bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-center"
          overlay-class="backdrop-saturate-50 bg-neutral-900 bg-opacity-90">
      <template #svg>
        <svg :ref="(el) => { sectionsNodeRefs.svg.value = el as (SVGElement & SVGSVGElement) }" 
              height="100%" width="100%"
              class="absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900" 
              viewBox="90 0 10 100" preserveAspectRatio="xMaxYMax">
          <polygon :ref="(el) => { sectionsNodeRefs.line.value = el as SVGPolygonElement }" 
                    class="transition-colors" :class="sectionsLineColor" />
        </svg>
      </template>
      <h1>Sections</h1>
      <div class="section-description" :ref="el => { sectionsNodeRefs.portfolio.value = el as Element }">
        <Mask mask="spider" color 
            class="section-description__image" />
        <div class="section-description__text ">
          <BigBangButton to="/projects" text="Projects" class="underline" />
          <p>
            The Projects section showcases my expertise and capabilities as an IT specialist. 
            This section highlights a diverse range of my completed and ongoing IT projects, 
            demonstrating my proficiency in various fields such as programming, web development, 
            mobile development, and cloud computing. 
          </p>
          <p>
            Each project is described in detail, including its goals, technical specifications, 
            and possibilities. Visitors to this section will gain a 
            comprehensive understanding of my technical skills and experience, and can see how I have 
            applied my knowledge and creativity to deliver innovative and effective solutions. 
          </p>
          <p>
            Whether you are a potential employer or just interested in my work, 
            the Projects section of my personal 
            website is a <NuxtLink class="underline" to="/projects">must-see</NuxtLink>.     
          </p>
        </div>
      </div>
      <div class="section-description" :ref="el => { sectionsNodeRefs.blog.value = el as Element }">
        <Mask mask="owl" color 
            class="section-description__image" />
        <div class="section-description__text ">
          <BigBangButton to="/blog" text="Blog" class="underline" />
          <p>
            The Blog section is a platform for me to share my thoughts, 
            insights, and expertise on various topics related to information technology. 
            Here, I share my knowledge and experience with a wider audience, and offer a glimpse 
            into the latest trends and developments in the field. 
          </p>
          <p>
            Whether you are a fellow 
            IT professional, a student, or simply a curious reader, the Blog section of my personal 
            website offers a wealth of information and inspiration. 
            <NuxtLink class="underline" to="/blog">Browse</NuxtLink> 
            through my blog posts and see how I am contributing to the growth and advancement of 
            the information technology industry.   
          </p>
        </div>
        
      </div>
      <div class="section-description" :ref="el => { sectionsNodeRefs.resume.value = el as Element }">
        <Mask mask="wolf" color 
            class="section-description__image" />
        <div class="section-description__text ">
          <BigBangButton to="/resume" text="Resume" class="underline" />
          <p>
            The Resume section displays my professional background 
            and qualifications as an IT specialist. It includes information about my education, 
            employment history, skills, and notable projects. The section serves as a resource 
            for potential employers and showcases my expertise in the field of information technology. 
            Browse through my resume to <NuxtLink class="underline" to="/resume">see</NuxtLink> how I can 
            bring value to your organization.     
          </p>
        </div>
      </div>
      
    </WrapperBackground>
    <WrapperBackground tag="section" id="story" 
          overlay-class="story__bg-overlay">
      <h1>Story</h1>
      <div class="flex items-start justify-center">
        <Character pose="idle" class="character" />
        <WrapperShape
            class="bubble-1" 
            filter-class="sharp-shadow ss-neutral-50 ss-r-1 ss-b-1"
            shape-class="bubble-1__shape">
          <div class="bubble-1__text">
            <p>
              Right now you can get know my current skills and experience, 
              but it is way far away the moment of beginning.
            </p>
            <p>
              Discover the journey of my IT growth: from novice to specialist.
            </p>
          </div>
        </WrapperShape>
      </div>
      <div class="story-blocks" 
           :ref="(el) => { storyNodeRefs.storyContainer.value = el as Element }">
        <svg :ref="(el) => { storyNodeRefs.svg.value = el as (SVGElement & SVGSVGElement) }" 
              height="100%" width="100%"
              class="story-progress" 
              viewBox="0 0 10 100">
          <polygon :ref="(el) => { storyNodeRefs.linePlaceholder.value = el as SVGPolygonElement }" 
                    class="fill-black" />
          <polygon :ref="(el) => { storyNodeRefs.line.value = el as SVGPolygonElement }" 
                    class="fill-white" />
        </svg>
        <div style="height: 300vh;">
          <Card mode="homepage-story">
            <CardTitle>
              <template #extra>
                {{ new Date().toLocaleDateString() }}
              </template>
              You found me
            </CardTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur id eius incidunt earum enim. Est eligendi obcaecati quasi rerum sapiente eius natus distinctio, ipsam voluptas neque animi maxime provident, velit, libero doloribus delectus numquam voluptatibus quaerat. Ratione, consequatur nostrum, eaque magni, ipsa molestiae a provident rerum repellat quae totam repellendus!
            </p>
          </Card>
        </div>
      </div>
    </WrapperBackground>
    <section style="height: 50vh;" />
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
    const { sectionsNodeRefs, currentSection } = useSectionsDescriptionAnimation()
    const { storyNodeRefs } = useStoryAnimation()
    const actions: ActionFanItem<CharacterPose>[] = [
      { title: 'Sections', to: '#sections', emit: 'action' },
      { title: 'About me', to: '#about', emit: 'profi' },
      { title: 'Story', to: '#story', emit: 'idle' }
    ]
    onBeforeRouteLeave(() => {
      showHeader.value = true
    })
    return {
      introNodeRefs, sectionsNodeRefs, storyNodeRefs,
      currentPose,
      actions,
      sectionsLineColor: computed(() => {
        if (currentSection.value === 'portfolio')
          return 'fill-red-700'
        if (currentSection.value === 'blog')
          return 'fill-cyan-700'
        if (currentSection.value === 'resume')
          return 'fill-blue-700'
        return 'fill-green-700'
      }) 
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
#sections h1{
  @apply text-center text-7xl sm:text-8xl font-serif pt-3 mb-5 sm:mb-9 mx-2 font-bold;
}

.section-description{
  @apply flex flex-col md:flex-row justify-around items-end;
}

.section-description__image{
  @apply max-w-full w-96 sharp-shadow ss-r-2 ss-b-1 self-start;
}

.section-description__text{
  @apply font-serif max-w-lg lg:max-w-xl p-10 pt-0;
  text-shadow: var(--tw-shadow-color) 1px 0 2rem;
}

.section-description__text > p {
  @apply mb-3;
}

.section-description__text > p::first-letter{
  background-color: var(--tw-shadow-color);
}

.section-description:nth-of-type(1) .section-description__image{
  @apply ss-red-800;
}

.section-description:nth-of-type(1) .section-description__text{
  @apply shadow-red-600;
}

.section-description:nth-of-type(2){
  @apply md:flex-row-reverse;
}

.section-description:nth-of-type(2) .section-description__image{
  @apply ss-cyan-800 self-end;
}

.section-description:nth-of-type(2) .section-description__text{
  @apply shadow-cyan-600 sm:text-right self-start;
}

.section-description:nth-of-type(3) .section-description__image{
  @apply ss-blue-800;
}

.section-description:nth-of-type(3) .section-description__text{
  @apply shadow-blue-600;
}
</style>

<style>
#story {
  @apply font-dialog bg-[url('~/assets/img/bg/timeline.png')] bg-cover bg-center;
}

#story .story__bg-overlay {
  background: 
    url('~/assets/img/character/idle-shape-white.svg') fixed,
    rgb(202 138 4 / var(--tw-bg-opacity));
  background-position-x: calc(60vw - 50vh);
  background-position-y: -25vh;
  background-size: auto 150vh;
  background-repeat: no-repeat;
  @apply backdrop-saturate-50 bg-opacity-90;
}

#story h1{
  @apply text-center text-7xl sm:text-8xl pt-3 mb-5 sm:mb-9 mx-2 font-bold;
}

#story .character {
  @apply sm:h-96 sm:w-96 max-w-sm h-auto md:max-w-lg
         -ml-20 transition-all;
}

#story .bubble-1 {
  @apply max-w-md w-2/3 
    -ml-40 sm:-ml-20 
    sm:text-lg;
}

#story .bubble-1__shape {
  @apply bg-black bg-opacity-90;
  clip-path: polygon(
    0 calc(100% - 20px),
    20px calc(100% - 10px),
    25px calc(100% - 15px),
    45px calc(100% - 5px),
    70px calc(100% - 10px),
    100% 100%,
    calc(100% - 40px) 0,
    45px 30px,
    40px calc(100% - 30px),
    20px calc(100% - 45px),
    18px calc(100% - 25px)
  );
}

#story .bubble-1__text {
  padding: 35px 45px 15px 50px;
  @apply font-semibold;
}

#story .bubble-1__text > p {
  @apply mb-3;
}
#story .story-blocks {
  grid-template-columns:  auto 1fr;
  column-gap: 1rem;
  @apply grid justify-start mx-3;
}
#story .story-progress {
  position: sticky;
  top: 15vh;
  height: 70vh;
  @apply  sharp-shadow ss-r-3 ss-b-1 ss-yellow-900;
}
</style>
