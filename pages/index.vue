<script setup lang="ts">
// Use animation composables
const rootRef = ref<HTMLElement>() as Ref<HTMLElement>
const { skillsNodeRefs, storyNodeRefs } = useHomepageAnimations(rootRef)

const { data } = useAsyncData('homepage', async () => {
  const skillsPromise = queryContent('/homepage/skills').find()
  const storyIntroPromise = queryContent('/homepage/story/intro').findOne()
  const storyBlocksPromise = queryContent('/homepage/story/blocks')
    .sort({ date: -1 })
    .find()
  const [skills, storyIntro, storyBlocks] = await Promise.all([
    skillsPromise,
    storyIntroPromise,
    storyBlocksPromise
  ])
  return {
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
    <HomepageB1Intro />
    <!-- Block about sections -->
    <HomepageB2Sections />
    <!-- Block about skills -->
    <DWrapBackground
      id="skills"
      :ref="el => skillsNodeRefs.block.value = el as ComponentPublicInstance"
      tag="section"
      class="overflow-hidden"
      overlay-class="skills__bg-overlay"
    >
      <template #svg>
        <div class="relative w-full h-full max-w-3xl mx-auto">
          <DAnimationHypnosis
            :ref="el => skillsNodeRefs.bgSpinner.value = el as ComponentPublicInstance"
            class="absolute inset-0 mx-auto right-2/3 top-[12%] w-80 -rotate-12"
          />
          <DAnimationHypnosis
            class="absolute inset-0 m-auto left-1/4 bottom-64 w-96 rotate-12"
          />
          <DAnimationHypnosis class="absolute -left-40 bottom-5 w-96" />
        </div>
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
      <template #svg>
        <div class="sticky top-[25vh] mt-28 w-full h-screen overflow-hidden">
          <div class="mx-auto max-w-3xl">
            <DAnimationSpinner class="h-[50vh] -ml-[20vh]" />
          </div>
        </div>
      </template>
      <div class="pt-20" />
      <h1>Story</h1>
      <div class="max-w-7xl px-3 mx-auto -mb-10 sm:-mb-32">
        <div class="flex items-center justify-center">
          <img
            src="~/assets/img/avatar-transparent-frame.webp"
            class="character"
          />
          <DWrapShape class="bubble-1" shape-class="bubble-1__shape">
            <template #bg-overlay>
              <div
                class="absolute inset-0 bg-white"
                style="clip-path: var(--shape-bubble--right__outline)"
              />
            </template>
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
         -ml-20 sm:ml-[unset] transition-all;
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
  @apply grid justify-start max-w-3xl mx-auto;
}

#story .story-blocks__cards {
  padding-bottom: 60vh;
  overflow: hidden;
  @apply pr-3;
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
