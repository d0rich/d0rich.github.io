<script setup lang="ts">
import { ResumeData } from '~~/server/routes/api/resume/data'

definePageMeta({
  path: '/resume/:type(.*(?<!\\.pdf\\)$)?'
})

const resumeType = computed(() => useRoute().params.type as string)

const { data, error } = useFetch<ResumeData>('/api/resume/data', {
  query: { resumeType: resumeType.value }
})

const printResumeLink = computed(() => {
  return `/api/resume/Nikolay_Dorofeev-${data.value?.lead.title}.pdf`
})

const { data: resumeList } = useAsyncData(
  'resume/all',
  () =>
    queryContent('/resume/leads')
      .only(['_path' as const, 'title' as const])
      .find(),
  {
    transform: (results) =>
      results.map((r) => {
        if (r._path) r._path = r._path.replace('/resume/leads', '/resume')
        return r
      })
  }
)
</script>

<template>
  <div>
    <Head v-if="data">
      <Title>Resume: {{ data.lead.title }}</Title>
      <Meta property="og:title" :content="`Resume: ${data.lead.title}`" />
      <Meta name="description" :content="data.lead.description" />
      <Meta property="og:description" :content="data.lead.description" />
    </Head>
    <DevOnly>
      <div class="text-white bg-red-600 overflow-x-auto">
        <div>{{ error }}</div>
        <pre>{{ error?.stack }}</pre>
      </div>
    </DevOnly>

    <article
      v-if="data"
      id="resume-container"
      class="max-w-4xl mx-auto px-3 font-serif"
    >
      <h1 class="text-2xl inline-block dark:text-blue-300 print:hidden mb-5">
        Resume
      </h1>
      <nav class="flex flex-wrap print:hidden gap-4 md:gap-8">
        <DBtn
          v-for="resume in resumeList"
          :key="resume._path"
          class="max-w-[9rem] text-center"
          :to="resume._path"
          >{{ resume.title }}</DBtn
        >
      </nav>
      <section class="py-3 relative isolate overflow-hidden">
        <div class="max-w-xl">
          <div class="text-4xl sm:text-6xl mb-1">Nikolay Dorofeev</div>
          <div>
            <span class="text-3xl dark:text-blue-300 text-blue-700 mb-1">{{
              data.lead.title
            }}</span>
            <DBtn
              class="print:!hidden ml-6 pb-2"
              :href="printResumeLink"
              target="_blank"
              >Print</DBtn
            >
          </div>
          <ContentRenderer :value="data.lead" />
        </div>
        <DMask
          mask="wolf"
          color
          outline
          class="h-full absolute top-0 right-0 -z-10 brightness-[25%] md:brightness-100 transition-all print:hidden"
        />
      </section>
      <ContentRenderer
        :value="data.contacts"
        tag="section"
        class="[&>span]:m-2 print:bg-neutral-800 print:text-white"
      />
      <section id="skills">
        <h2 class="resume-page__section-title">Skills</h2>
        <TransitionGroup
          name="skills-list"
          tag="div"
          class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 print:grid-cols-3 print:text-sm"
        >
          <ContentRenderer
            v-for="skillset in data.skills"
            :key="skillset._id"
            :value="skillset"
          />
        </TransitionGroup>
      </section>
      <div class="grid md:grid-cols-2 gap-x-20">
        <section id="work-experience">
          <h2 class="resume-page__section-title">Work Experience</h2>
          <ResumeTimeNote
            v-for="workPlace in data.work"
            :key="workPlace._id"
            class="my-3 print:my-8"
            :timenote="workPlace"
          />
        </section>
        <section id="education">
          <h2 class="resume-page__section-title">Education</h2>
          <ResumeTimeNote
            v-for="eduPlace in data.education"
            :key="eduPlace._id"
            class="my-3 print:my-8"
            :timenote="eduPlace"
          />
        </section>
      </div>
    </article>
  </div>
</template>

<style scoped>
section {
  @apply my-10 print:my-2;
}
</style>

<style>
.resume-page__section-title {
  @apply text-5xl text-blue-700 dark:text-blue-300 mb-2
    print:text-2xl print:mt-4;
}

@media print {
  html {
    font-size: 12px;
  }
}
</style>

<!-- Animation -->
<style>
.skills-list-move, /* apply transition to moving elements */
.skills-list-enter-active,
.skills-list-leave-active {
  transition: all 0.5s ease;
}

.skills-list-enter-from,
.skills-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.skills-list-leave-active {
  position: absolute;
}
</style>
