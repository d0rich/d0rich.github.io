<template>
  <v-card>
    <a :href="project.projectLink" target="_blank" class="youtrack-card__title">
      <v-toolbar color="primary" v-ripple>
        <v-toolbar-title>
          <v-avatar tile class="mr-3">
            <g-image :src="project.iconUrl" />
          </v-avatar>
          <span v-text="project.name" />
        </v-toolbar-title>
        <v-spacer />
        <v-icon>mdi-chevron-right</v-icon>
      </v-toolbar>
    </a>
    <v-card-text v-html="project.description" class="youtrack-card__content" />
      <v-list dense nav class="youtrack-card__agiles">
        <v-subheader>Agiles</v-subheader>
        <v-list-item v-for="agile in project.agiles" :key="agile.id"
                     :href="agile.agileLink" target="_blank" >
          <v-list-item-icon>
            <v-icon v-text="'mdi-view-dashboard-variant'" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="agile.name"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue'
import {CustomProject} from "../../plugins-ts/gridsome-source-youtrack/types";
export default Vue.extend({
  name: "YoutrackProject",
  props: {
    project: {
      type: Object as PropType<Partial<CustomProject>>,
      required: true
    }
  }
})
</script>

<style scoped>
.youtrack-card__title{
  user-select: none;
  text-decoration: none;
}
.youtrack-card__content{
  font-family: "Roboto", sans-serif;
}
.youtrack-card__agiles a{
  text-decoration: none;
}
</style>