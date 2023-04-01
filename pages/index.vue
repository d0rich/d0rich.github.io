<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import {
  CharacterPose,
  MaskType,
  ActionFanItem
} from '@d0rich/nuxt-design-system/types'

// Use animation composables
const currentPose = ref<CharacterPose>('idle')
const rootRef = ref<HTMLElement>() as Ref<HTMLElement>
const {
  introNodeRefs,
  sectionsNodeRefs,
  currentSection,
  skillsNodeRefs,
  storyNodeRefs
} = useHomepageAnimations(rootRef)

// Intro block
const socialLinks = ref([
  { icon: 'ic:sharp-mail', link: 'mailto:dorich2000@gmail.com' },
  { icon: 'fa6-brands:linkedin', link: 'https://www.linkedin.com/in/d0rich/' },
  { icon: 'fa6-brands:github', link: 'https://github.com/d0rich' },
  { icon: 'fa6-brands:telegram', link: 'https://d0rich.t.me/' }
])
const actions: ActionFanItem<CharacterPose>[] = [
  {
    title: 'Sections',
    emit: 'action',
    attrs: {
      href: '#sections'
    }
  },
  {
    title: 'Skills',
    emit: 'profi',
    attrs: {
      href: '#skills'
    }
  },
  {
    title: 'Story',
    emit: 'idle',
    attrs: {
      href: '#story'
    }
  }
]

// Sections block
const sectionsLineColor = computed(() => {
  if (currentSection.value === 'portfolio') return 'fill-red-700'
  if (currentSection.value === 'blog') return 'fill-cyan-700'
  if (currentSection.value === 'resume') return 'fill-blue-700'
  return 'fill-green-700'
})

// Fetch data
interface SectionsParsedContent extends ParsedContent {
  title: string
  link: string
  mask: MaskType
}

const { data } = useAsyncData('homepage', async () => {
  const introPromise = queryContent('/homepage/intro').findOne()
  const sectionsPromise =
    queryContent<SectionsParsedContent>('/homepage/sections').find()
  const skillsPromise = queryContent('/homepage/skills').find()
  const storyIntroPromise = queryContent('/homepage/story/intro').findOne()
  const storyBlocksPromise = queryContent('/homepage/story/blocks')
    .sort({ date: -1 })
    .find()
  const [intro, sections, skills, storyIntro, storyBlocks] = await Promise.all([
    introPromise,
    sectionsPromise,
    skillsPromise,
    storyIntroPromise,
    storyBlocksPromise
  ])
  return {
    intro,
    sections,
    skills,
    story: {
      intro: storyIntro,
      blocks: storyBlocks
    }
  }
})
</script>

<template>
  <div v-if="data" ref="rootRef" class="-mt-20">
    <AsyncSafeSeoWithOg og-title="Homepage" />
    <!-- Intro block -->
    <section
      :ref="(el) => { introNodeRefs.section.value = el as Element }"
      style="height: 200vh"
    >
      <div class="sticky top-0">
        <div
          :ref="(el) => { introNodeRefs.main.value = el as Element }"
          class="relative w-screen max-w-full h-screen"
        >
          <div
            :ref="(el) => { introNodeRefs.bg.value = el as Element }"
            class="absolute h-full w-full top-0 left-0 bg-[url('~/assets/img/bg/d-bw.webp')] bg-cover bg-center z-[2]"
          />
          <DWrapShape
            :ref="
              (el) => {
                introNodeRefs.text.value = componentFromNodeRef(el)
              }
            "
            class="absolute w-fit top-1/3 left-0 right-0 mx-auto z-[3]"
            shape-class="intro-shape"
          >
            <ContentRenderer
              tag="div"
              :value="data.intro"
              class="p-10 text-xl font-serif text-center"
            />
          </DWrapShape>
        </div>
        <DWrapBackground
          dots
          :dots-style="{ clipPath: 'polygon(20% 100%, 100% 100%, 100% 0%)' }"
          class="bg-[url('~/assets/img/bg/it-office.png')] bg-cover bg-center"
          overlay-class="backdrop-saturate-0 bg-green-900 bg-opacity-90"
        >
          <template #svg>
            <DAnimationHypnosis class="absolute landscape:h-full m-auto inset-0" path-class="fill-white" />
            <svg
              :ref="(el) => { introNodeRefs.svg.value = el as (SVGElement & SVGSVGElement) | null }"
              height="100%"
              width="100%"
              class="absolute inset-0 w-full max-w-6xl mx-auto h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900"
              viewBox="80 0 20 100"
              preserveAspectRatio="xMaxYMax"
            >
              <polygon
                :ref="(el) => { introNodeRefs.line.value = el as SVGPolygonElement | null }"
                class="fill-white"
              />
            </svg>
            <DAnimationAccordion class="absolute bottom-8 -right-20 sm:right-5 -rotate-12 w-[clamp(300px,_33%,_500px)]" />
          </template>
          <div id="home-intro-section">
            <div class="relative h-full max-w-7xl mx-auto">
              <DCharacter
                :pose="currentPose"
                shape-class="fill-black"
                class="absolute self-end h-full -ml-20 sm:ml-auto mt-20 transition-all"
              />
              <DActionsFan
                :actions="actions"
                side="right"
                class="absolute top-1/2 left-1/3 w-1/2 md:w-1/3 max-w-xs z-10 text-xl md:text-2xl"
                filter-class="sharp-shadow ss-br-3 ss-neutral-50"
                @action-focus="currentPose = $event"
              />
              <div class="absolute inset-0 text-3xl md:text-4xl">
                <DWrapShape
                  v-for="(socialLink, index) in socialLinks"
                  :key="index"
                  :ref="(el) => { introNodeRefs.socials.value[index] = el as ComponentPublicInstance }"
                  class="absolute -top-1/3 left-1/2"
                  shape-class="d-chip bg-black"
                  filter-class="sharp-shadow ss-br-2 ss-white"
                >
                  <DBtn :href="socialLink.link" target="_blank">
                    <Icon :name="socialLink.icon" class="m-[0.4em]" />
                  </DBtn>
                </DWrapShape>
              </div>
            </div>
          </div>
        </DWrapBackground>
      </div>
    </section>
    <!-- Block about sections -->
    <DWrapBackground
      id="sections"
      tag="section"
      class="bg-[url('~/assets/img/bg/hightech-city.png')] bg-cover bg-center"
      overlay-class="backdrop-saturate-50 bg-neutral-900 bg-opacity-90"
    >
      <template #svg>
        <DAnimationFloatingLetter class="absolute w-56 inset-0 left-1/3 mx-auto" :path-class="sectionsLineColor" />
        <DAnimationFloatingLetter class="absolute w-32 inset-0 bottom-1/2 right-2/3 m-auto" :path-class="sectionsLineColor" />
        <DAnimationFloatingLetter class="absolute w-52 inset-0 left-1/3 m-auto" :path-class="sectionsLineColor" />
        <DAnimationFloatingLetter class="absolute w-60 inset-0 bottom-1/3 left-3/4 m-auto" :path-class="sectionsLineColor" />
        <DAnimationFloatingLetter class="absolute w-48 inset-0 top-1/2 right-1/3 m-auto" :path-class="sectionsLineColor" />
        <DAnimationFloatingLetter class="absolute w-96 inset-0 top-3/4 left-1/4 m-auto" :path-class="sectionsLineColor" />
        <svg
          :ref="(el) => { sectionsNodeRefs.svg.value = el as (SVGElement & SVGSVGElement) }"
          height="100%"
          width="100%"
          class="absolute top-0 w-full h-full sharp-shadow ss-r-4 ss-b-2 ss-neutral-900"
          viewBox="70 0 10 100"
          preserveAspectRatio="xMidYMin"
        >
          <polygon
            :ref="(el) => { sectionsNodeRefs.line.value = el as SVGPolygonElement }"
            class="transition-colors"
            :class="sectionsLineColor"
          />
        </svg>
      </template>
      <div class="pt-20" />
      <h1>Sections</h1>
      <div class="w-full max-w-6xl mx-auto overflow-hidden">
        <div
          v-for="(doc, index) in data.sections"
          :key="doc._id"
          :ref="el => { sectionsNodeRefs.sections.value[index] = el as Element}"
          class="section-description"
        >
          <DMask
            :ref="el => sectionsNodeRefs.sectionsMasks.value[index] = el as ComponentPublicInstance"
            :mask="doc.mask"
            color
            class="section-description__image"
          />
          <div
            :ref="el => sectionsNodeRefs.sectionsContent.value[index] = el as Element"
            class="section-description__text"
          >
            <DBigBangButton
              :to="doc.link"
              :text="doc.title"
              class="underline"
            />
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </div>
    </DWrapBackground>
    <!-- Block about skills -->
    <DWrapBackground
      id="skills"
      tag="section"
      class="overflow-hidden"
      overlay-class="skills__bg-overlay"
      :ref="el => skillsNodeRefs.block.value = el as ComponentPublicInstance"
    >
      <template #svg>
        <DAnimationSpinner class="absolute inset-0 mx-auto right-2/3 top-64 w-96" :ref="el => skillsNodeRefs.bgSpinner.value = el as ComponentPublicInstance" />
        <DAnimationAccordion class="absolute inset-0 m-auto right-1/4 bottom-1/2 w-[60vw] rotate-[126deg]" />
        <DAnimationHypnosis class="absolute inset-0 m-auto left-1/4 bottom-64 w-96 rotate-12" />
        <DAnimationSpinner class="absolute inset-0 my-auto -left-[150vh] top-2/3 w-[200vh]" />
        <DAnimationAccordion class="absolute inset-0 m-auto left-1/4 top-3/4 w-[100vw] rotate-[36deg]" />
      </template>
      <div class="pt-20" />
      <h1>Skills</h1>
      <div class="max-w-7xl mx-auto px-3">
        <ContentRenderer
          v-for="(doc, index) in data.skills"
          :key="doc._id"
          :ref="el => skillsNodeRefs.skillsGroups.value[index] = el as ComponentPublicInstance"
          tag="div"
          class="skills-group"
          :value="doc"
        />
      </div>
      <div style="height: 20vh" />
    </DWrapBackground>

    <DWrapBackground id="story" tag="section" overlay-class="story__bg-overlay">
      <div class="pt-20" />
      <h1>Story</h1>
      <div class="max-w-7xl px-3 mx-auto -mb-10 sm:-mb-32">
        <div class="flex items-start justify-start">
          <DCharacter pose="profi" class="character" />
          <DWrapShape
            class="bubble-1"
            filter-class="sharp-shadow ss-neutral-50 ss-r-1 ss-b-1"
            shape-class="bubble-1__shape"
          >
            <ContentRenderer
              :value="data.story.intro"
              tag="div"
              class="bubble-1__text"
            />
          </DWrapShape>
        </div>
      </div>
      <div
        :ref="(el) => { storyNodeRefs.storyContainer.value = el as Element }"
        class="story-blocks"
      >
        <svg
          :ref="(el) => { storyNodeRefs.svg.value = el as (SVGElement & SVGSVGElement) }"
          height="100%"
          width="100%"
          class="story-progress"
          viewBox="0 0 10 100"
        >
          <polygon
            :ref="(el) => { storyNodeRefs.linePlaceholder.value = el as SVGPolygonElement }"
            class="fill-black"
          />
          <polygon
            :ref="(el) => { storyNodeRefs.line.value = el as SVGPolygonElement }"
            class="fill-white"
          />
        </svg>
        <div class="story-blocks__cards">
          <DCard
            v-for="(doc, index) in data.story.blocks"
            :key="doc._id"
            :ref="el => storyNodeRefs.cards.value[index] = el as ComponentPublicInstance"
            mode="homepage-story"
            class="my-20"
          >
            <DCardTitle>
              <template #extra>
                {{ dateToMonthYear(doc.date) }}
              </template>
              {{ doc.title }}
            </DCardTitle>
            <ContentRenderer :value="doc" />
          </DCard>
        </div>
      </div>
    </DWrapBackground>
  </div>
</template>

<!-- Intro -->
<style>
.intro-shape {
  clip-path: polygon(3% 3%, 100% 0%, 95% 95%, 0% 100%);
  animation: intro-shape-clip-path 5s linear infinite;
  @apply backdrop-invert bg-neutral-900 bg-opacity-60;
}

@keyframes intro-shape-clip-path {
  0%,
  100% {
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

#home-intro-section {
  width: 100%;
  height: 75vh;
  min-height: 35rem;
  overflow: hidden;
  @apply relative max-w-6xl mx-auto;
}
</style>

<!-- Sections -->
<style>
#sections h1 {
  @apply text-center text-7xl sm:text-8xl font-serif pt-3 mb-5 sm:mb-9 mx-2 font-bold;
}

.section-description {
  @apply flex flex-col md:flex-row justify-around items-end;
}

.section-description__image {
  @apply max-w-full w-96 sharp-shadow ss-r-2 ss-b-1 self-start;
}

.section-description__text {
  @apply font-serif max-w-lg lg:max-w-xl p-10 pt-0;
  text-shadow: var(--tw-shadow-color) 1px 0 0;
}

.section-description__text > p {
  @apply mb-3;
}

.section-description__text > p::first-letter {
  background-color: var(--tw-shadow-color);
}

.section-description:nth-of-type(1) .section-description__image {
  @apply ss-red-800;
}

.section-description:nth-of-type(1) .section-description__text {
  @apply shadow-red-600;
}

.section-description:nth-of-type(2) {
  @apply md:flex-row-reverse;
}

.section-description:nth-of-type(2) .section-description__image {
  @apply ss-cyan-800 self-end;
}

.section-description:nth-of-type(2) .section-description__text {
  @apply shadow-cyan-600 sm:text-right self-start;
}

.section-description:nth-of-type(3) .section-description__image {
  @apply ss-blue-800;
}

.section-description:nth-of-type(3) .section-description__text {
  @apply shadow-blue-600;
}
</style>

<!-- Skills -->
<style>
#skills .skills__bg-overlay {
  background: var(--d-card-x-ray--action__white),
    rgb(14 116 144 / var(--tw-bg-opacity));
  @apply backdrop-saturate-50 bg-opacity-90;
}
</style>

<style scoped>
#skills {
  @apply font-dialog bg-[url('~/assets/img/bg/skills.png')] bg-cover bg-fixed bg-center;
}

#skills h1 {
  background: var(--d-card-x-ray--action__color),
    rgb(255 255 255 / var(--tw-bg-opacity));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  @apply text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold;
}

#skills .skills-group {
  @apply flex flex-col-reverse items-center md:flex-row
         mb-36;
}

#skills .skills-group:nth-child(2n) {
  @apply md:flex-row-reverse;
}

#skills .skills-group > :nth-child(1) {
  @apply md:w-1/3;
}

#skills .skills-group > :nth-child(2) {
  @apply md:w-2/3;
}
</style>

<!-- Story -->
<style>
#story {
  @apply font-dialog bg-[url('~/assets/img/bg/timeline.png')] bg-fixed bg-cover bg-center;
}

#story .story__bg-overlay {
  background: var(--d-card-x-ray--idle__white),
    rgb(202 138 4 / var(--tw-bg-opacity));
  @apply backdrop-saturate-50 bg-opacity-90;
}

#story h1 {
  background: var(--d-card-x-ray--idle__color),
    rgb(255 255 255 / var(--tw-bg-opacity));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  @apply text-center text-7xl sm:text-8xl pt-3 sm:mb-9 mx-2 mb-20 font-bold;
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
  clip-path: var(--shape-bubble--right);
}

#story .bubble-1__text {
  padding: var(--shape-bubble--right__padding);
  @apply font-semibold;
}

#story .bubble-1__text > p {
  @apply mb-3;
}
#story .story-blocks {
  grid-template-columns: auto 1fr;
  column-gap: clamp(1rem, 5vw, 3rem);
  margin-left: auto;
  @apply grid justify-start max-w-3xl mr-3 sm:mr-32 lg:mr-[20%];
}

#story .story-blocks__cards {
  padding-bottom: 60vh;
  overflow: hidden;
}

#story .story-progress {
  position: sticky;
  top: 15vh;
  margin-top: 15vh;
  margin-bottom: 15vh;
  height: 70vh;
  @apply sharp-shadow ss-r-3 ss-b-1 ss-yellow-900 ml-3;
}
</style>
