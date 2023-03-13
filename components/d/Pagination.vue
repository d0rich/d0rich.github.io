<script setup lang="ts">
const props = defineProps({
  currentPage: {
    type: Number,
    default: 1
  },
  allPages: {
    type: Number,
    required: true
  },
  baseLink: {
    type: String,
    required: true
  }
})

function getLinkToPage(page: number){
  if (page === 1)
    return props.baseLink
  return `${props.baseLink}/${page}`
}

const visiblePages = computed(() => {
  return Array.from({length: 7}, (_, i) => i - 3 + props.currentPage)
    .filter(num => num >= 1 && num <= props.allPages)
})

</script>

<template>
  <nav class="w-fit text-2xl font-bold">
    <DBtn class="inline-block mx-1" :to="getLinkToPage(currentPage - 1)" v-if="currentPage > 1">
      <Icon name="ic:baseline-arrow-back-ios" />
    </DBtn>
    <DBtn class="inline-block mx-1" :to="getLinkToPage(1)" v-if="!visiblePages.includes(1)">
      1
    </DBtn>
    <span class="mx-1" v-if="!visiblePages.includes(1)">
      ...
    </span>
    <DBtn class="inline-block mx-1" v-for="number in visiblePages" :key="number" :to="getLinkToPage(number)">
      {{ number }}
    </DBtn>
    <span class="mx-1" v-if="!visiblePages.includes(allPages)">
      ...
    </span>
    <DBtn class="inline-block mx-1" :to="getLinkToPage(allPages)" v-if="!visiblePages.includes(allPages)">
      {{ allPages }}
    </DBtn>
    <DBtn class="inline-block mx-1" :to="getLinkToPage(currentPage + 1)" v-if="currentPage < allPages">
      <Icon name="ic:baseline-arrow-forward-ios" />
    </DBtn>
  </nav>
</template>