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
    <p class="dark:text-blue-300">
      <time :datetime="timenote.daterange.start">
        {{ dateToMonthYear(timenote.daterange.start) }}
      </time>
      -
      <time :datetime="timenote.daterange.end">
        {{ timenote.daterange.end ? dateToMonthYear(timenote.daterange.end) : 'Present' }}
      </time>
    </p>
    <ContentRenderer class="prose dark:prose-invert" :value="timenote" />
  </Card>
</template>

<style>
a.timenote__place-link {
  @apply underline;
}

</style>