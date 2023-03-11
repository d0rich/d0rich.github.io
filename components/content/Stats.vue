<script setup lang="ts">
import Stats from '../Stats.vue'

type Props = InstanceType<typeof Stats>['$props']

const props = defineProps<{
  groupTitle?: string,
  titles: string[],
  values: number[]
}>()
</script>

<template>
  <span>
    <div class="hidden print:block">
      <div>{{ groupTitle }}</div>
      <ul>
        <li v-for="skill, index in titles" :key="skill">
          {{ skill }}: {{ values[index] }}
        </li>
      </ul>
    </div>
    <Stats v-bind="props" class="print:hidden">
      <template #icon-1><slot name="icon-1" /></template>
      <template #icon-2><slot name="icon-2" /></template>
      <template #icon-3><slot name="icon-3" /></template>
      <template #icon-4><slot name="icon-4" /></template>
      <template #icon-5><slot name="icon-5" /></template>
    </Stats>
  </span>
  
</template>