<template>
  <div class="project-block">
    <v-card :to="project.path">
      <v-img height="200px"
             :src="project.image"
             :alt="project.title"
             v-if="project.image"
             eager />
      <v-card-title>{{project.title}}</v-card-title>
      <v-card-subtitle>
        <time :datetime="project.date">{{ project.date }}</time>
      </v-card-subtitle>
      <v-divider v-if="project.tags.length > 0" />
      <v-card-text v-if="project.tags.length > 0">
        <v-chip class="ma-1" v-for="tag in project.tags" :key="tag.id">
          #{{tag.title}}
        </v-chip>
      </v-card-text>
    </v-card>
  </div>

</template>

<script>

export default {
name: "ProjectBlock",
  props: {
    project: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.project-block{
  min-width: 300px;
  width: 100%;
  max-width: 400px;
}
</style>
<style lang="scss">
.project-block{
  .v-card__text, .v-card__title {
    word-break: normal; /* maybe !important  */
  }
}

</style>
