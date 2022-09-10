<template>
  <v-sheet outlined rounded
           class="github-repo pa-2">
    <div class="d-flex flex-column">
      <div class="github-repo__name">
        <v-icon class="mr-2">mdi-book</v-icon>
        <a class="font-weight-black github-repo__link"
           :href="repo.html_url" target="_blank">{{repo.name}}</a>
        <span v-if="repo.releases.length" class="ml-1 text--secondary text-caption">
          {{repo.releases[0].tag_name}}
        </span>
      </div>
      <div class="text-subtitle-1 text--secondary my-1" v-text="repo.description"/>
      <v-spacer />
      <div class="mt-2 text--secondary d-flex">
        <span v-if="repo.language" class="d-flex align-center mr-2">
          <v-icon small :color="repo.language.color">mdi-circle</v-icon>{{repo.language.name}}
        </span>
        <span v-if="repo.stargazers_count" class="d-flex align-center mr-2">
          <v-icon small>mdi-star</v-icon>{{repo.stargazers_count}}
        </span>
      </div>
    </div>
    <div v-if="repo.language" class="pl-3">
      <v-avatar tile>
        <g-image :src="repo.language.icon"></g-image>
      </v-avatar>
    </div>

  </v-sheet>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import { Repositories, Repository } from "../../plugins-ts/gridsome-source-d0rich-github/types";

export default Vue.extend({
  name: "GitHubRepository",
  props: {
    repo: {
      type: Object as PropType<Partial<Repository>>,
      required: true
    }
  }
})
</script>

<style scoped>
.github-repo {
  font-family: "Roboto", sans-serif;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
}
.github-repo__name {
  font-family: 'JetBrains Mono', monospace;
}
.github-repo__link {
  text-decoration: none;
}
.github-repo__link:hover{
  text-decoration: underline;
}
</style>