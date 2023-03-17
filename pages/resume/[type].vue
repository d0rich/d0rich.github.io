<script setup lang="ts">
import {ResumeData} from '~~/server/routes/api/resume/data'

useHead({
  title: 'Resume'
})

definePageMeta({
  path: '/resume/:type(.*(?<!\\.pdf\\)$)?'
})

const resumeType = computed(() => useRoute().params.type as string)

const { data, error } = useFetch<ResumeData>(
  '/api/resume/data', 
  { 
    query: { resumeType: resumeType.value } 
  }
)
</script>

<template>
  <div>
    <DevOnly>
      <div class="text-white bg-red-600 overflow-x-auto">
        <div>{{ error }}</div>
        <pre>{{ error?.stack }}</pre>
      </div>
    </DevOnly>

    <article id="resume-container" v-if="data" class="max-w-4xl mx-auto px-3 font-serif">
      <h1 class="text-2xl inline-block dark:text-blue-300 print:hidden">Resume</h1>
      <section class="py-3 relative isolate overflow-hidden">
        <div class="max-w-xl">
          <div class="text-4xl sm:text-6xl mb-1">Nikolay Dorofeev</div>
          <div>
            <span class="text-3xl dark:text-blue-300 text-blue-700 mb-1">{{ data.lead.title }}</span>
            <DBtn class="print:!hidden ml-6 pb-2" href="/resume/test.pdf" target="_blank">Print</DBtn>
          </div>
          <ContentRenderer :value="data.lead" />
        </div>
        <Mask mask="wolf" color outline 
          class="h-full absolute top-0 right-0 -z-10 brightness-[25%] md:brightness-100 transition-all print:hidden" />
      </section>
      <ContentRenderer :value="data.contacts"
                      tag="section" class="[&>span]:m-2 print:bg-neutral-800 print:text-white" />
      <section id="skills">
        <h2 class="resume-page__section-title">Skills</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 print:grid-cols-3 print:text-sm">
          <ContentRenderer v-for="skillset in data.skills" :key="skillset._id" :value="skillset" />
        </div>
      </section>
      <div class="grid md:grid-cols-2 gap-x-20">
        <section id="work-experience">
          <h2 class="resume-page__section-title">Work Experience</h2>
          <ResumeTimeNote class="my-3 print:my-8" v-for="workPlace in data.work" :key="workPlace._id" :timenote="workPlace"/>
        </section>
        <section id="education">
          <h2 class="resume-page__section-title">Education</h2>
          <ResumeTimeNote class="my-3 print:my-8" v-for="eduPlace in data.education" :key="eduPlace._id" :timenote="eduPlace"/>
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