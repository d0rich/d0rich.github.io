<script setup lang="ts">
import {TimeNote} from '~~/components/resume/TimeNote.vue'

useHead({
  title: 'Resume'
})

const { data: contacts, error: contactsError } = useAsyncData(
  'resume/contacts',
  () => queryContent('/resume/contacts').findOne()
)

const { data: education, error: educationError } = useAsyncData(
  'resume/education',
  () => queryContent<TimeNote>('/resume/education')
                    .sort({ 'daterange.end': -1 })
                    .find()
)

const { data: work, error: workError } = useAsyncData(
  'resume/work',
  () => queryContent<TimeNote>('/resume/work')
                    .sort({ 'daterange.end': -1 })
                    .find()
)

const { data: skills, error: skillsError } = useAsyncData(
  'resume/skills',
  () => queryContent('/resume/skills').find()
)

const error = contactsError || educationError || workError || skillsError
</script>

<template>
  <div>
    <DevOnly>
      <div class="text-white bg-red-600 overflow-x-auto">
        <div>{{ error }}</div>
        <pre>{{ error?.stack }}</pre>
      </div>
    </DevOnly>
    
    <DBtn href="/resume/united.pdf" tag="a" class="print:hidden">Print</DBtn>

    <article id="resume-container" class="max-w-4xl mx-auto px-3 font-serif">
      <h1 class="text-2xl dark:text-blue-300 print:hidden">Resume</h1>
      <section class="py-3 relative isolate overflow-hidden">
        <div class="max-w-xl">
          <div class="text-4xl sm:text-6xl mb-1">Nikolay Dorofeev</div>
          <div class="text-3xl dark:text-blue-300 text-blue-700 mb-1">Software Engineer</div>
          <p>
            Software Engineer with experience in wide range of technologies. 
            I collaborate seamlessly with team members and stakeholders 
            throughout the software development lifecycle.
          </p>
        </div>
        <Mask mask="wolf" color outline 
          class="h-full absolute top-0 right-0 -z-10 brightness-[25%] md:brightness-100 transition-all print:hidden" />
      </section>
      <ContentRenderer :value="contacts" v-if="contacts"
                      tag="section" class="[&>span]:m-2 print:bg-neutral-800 print:text-white" />
      <section id="skills" v-if="skills">
        <h2 class="resume-page__section-title">Skills</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 print:grid-cols-3">
          <ContentRenderer v-for="skillset in skills" :key="skillset._id" :value="skillset" />
        </div>
      </section>
      <div class="grid md:grid-cols-2 gap-x-20">
        <section id="work-experience" v-if="work">
          <h2 class="resume-page__section-title">Work Experience</h2>
          <ResumeTimeNote class="my-3 print:my-8" v-for="workPlace in work" :key="workPlace._id" :timenote="workPlace"/>
        </section>
        <section id="education" v-if="education">
          <h2 class="resume-page__section-title">Education</h2>
          <ResumeTimeNote class="my-3 print:my-8" v-for="eduPlace in education" :key="eduPlace._id" :timenote="eduPlace"/>
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