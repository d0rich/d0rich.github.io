<template>
  <v-card min-width="300px" width="100%" max-width="400px"
          :to="{name: 'Project', params: { stringId: project.stringId }}">
    <v-img height="200px" :src="project.image.src" :lazy-src="project.image.phSrc" :alt="project.image.alt.text" />
    <v-card-title>{{project.title.text}}</v-card-title>
    <v-card-subtitle>
      {{texts.date.text}}: {{project.date.toLocaleDateString()}}
    </v-card-subtitle>
    <v-divider v-if="project.tags.length > 0" />
    <v-card-text v-if="project.tags.length > 0">
      <v-chip :color="chosenTags.some(id => id === tag.id)? 'primary':''"
              class="ma-1" v-for="tag in project.tags" :key="tag.id">
        {{tag.text}}
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
import {Text} from "@/classes";

export default {
name: "ProjectBlock",
  props: {
    project: {
      required: true,
      type: Object
    },
    chosenTags: {
      type: Array
    }
  },
  data(){
    return{
      texts: {
        date: new Text('Дата', 'Date')
      },
    }
  }
}
</script>

<style scoped>

</style>
