<template>
  <v-sheet outlined rounded
           class="github-repo pa-2">
    <div class="github-repo__name">
      <v-icon>mdi-book</v-icon>
      <a class="font-weight-black github-repo__link"
         :href="repo.html_url" target="_blank">{{repo.name}}</a>
    </div>
    <div class="text-subtitle-2 text--secondary my-1" v-text="repo.description"/>
    <div class="mt-2 text--secondary">
      {{repo.language}} <span v-if="repo.stargazers_count"><v-icon>mdi-star</v-icon>{{repo.stargazers_count}}</span>
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
      type: Object as PropType<Repository>,
      required: true
    }
  }
})
</script>

<style scoped>
.github-repo {
  font-family: "Roboto", sans-serif;
  max-width: 600px;
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