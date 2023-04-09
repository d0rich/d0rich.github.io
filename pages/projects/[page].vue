<script setup lang="ts">
definePageMeta({
  path: '/projects/:page(\\d+)?'
})

const route = useRoute()

const currentPage = computed(() => Number(route.params.page || 1))

const { data } = useAsyncData(`/projects/pages/${currentPage.value}`, () =>
  $fetch(`/api/projects/${currentPage.value}`)
)
</script>

<template>
  <div>
    <AsyncSafeSeoWithOg title="Projects" />
    <div class="relative isolate px-3 max-w-3xl mx-auto my-10 overflow-hidden">
      <div class="max-w-lg">
        <h1 class="text-6xl sm:text-8xl font-serif mb-5 text-red-300">
          Projects
        </h1>
        <p class="first-letter:bg-red-600">Work in progress.</p>
        <p>
          Docs template for projects will be created. Then all projects docs
          websites will be aggregated on this page.
        </p>
      </div>
      <DMask
        mask="spider"
        color
        outline
        class="h-full absolute top-0 right-0 -z-10 brightness-[25%] sm:brightness-100 transition-all"
      />
    </div>
    <section v-if="data">
      <DPagination
        v-if="data._pagesCount > 1"
        class="mx-auto my-10 max-w-md"
        :current-page="currentPage"
        :all-pages="data._pagesCount"
        base-link="/projects"
      />
      <nav>
        <ProjectsTile
          v-for="project in data.items"
          :key="project.url"
          :project="project"
        />
      </nav>
      <DPagination
        v-if="data._pagesCount > 1"
        class="mx-auto my-10 max-w-md"
        :current-page="currentPage"
        :all-pages="data._pagesCount"
        base-link="/projects"
      />
    </section>
  </div>
</template>
