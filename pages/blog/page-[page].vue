<script setup lang="ts">
import BlogPage from './index.vue'
const route = useRoute()
const currentPage = Number(route.params.page)
</script>

<template>
  <BlogPage :current-page="currentPage" />
</template>