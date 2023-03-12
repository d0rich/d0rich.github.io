<script setup lang="ts">
import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface TimeNote extends ParsedContent {
  place: {
    title: string
    link?: string
  }
  daterange: {
    start: string
    end?: string
  }
}

defineProps<{
  timenote: TimeNote
}>()
</script>

<template>
  <Card>
    <CardTitle>
      {{ timenote.title }}
      <template #extra>
        <Component :is="timenote.place.link ? 'a' : 'span'" 
                    :href="timenote.place.link" target="_blank"
                    class="timenote__place-link" >
          {{ timenote.place.title }}
        </Component>
      </template>
    </CardTitle>
    <p class="text-blue-600 dark:text-blue-300 print:text-sm">
      <time :datetime="timenote.daterange.start">
        {{ dateToMonthYear(timenote.daterange.start) }}
      </time>
      -
      <time :datetime="timenote.daterange.end">
        {{ timenote.daterange.end ? dateToMonthYear(timenote.daterange.end) : 'Present' }}
      </time>
      <span v-if="timenote.daterange.start">
        ({{ formatYearMonthDateDiff(new Date(timenote.daterange.start), new Date(timenote.daterange.end ?? new Date())) }})
      </span>
    </p>
    <ContentRenderer class="resume-time-note__content" :value="timenote" />
  </Card>
</template>

<style>
a.timenote__place-link {
  @apply underline;
}
.resume-time-note__content {
  @apply prose dark:prose-invert
        prose-p:my-0
        prose-ul:my-0 prose-li:my-0;
}
</style>