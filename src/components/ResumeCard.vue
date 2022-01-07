<template>
  <div class="resume-card">
    <v-card :to="resume.path">
      <v-img
             :aspect-ratio="3/2"
             :src="resume.image"
             :alt="resume.title"
             v-if="resume.image"
             eager />
      <v-card-title>{{resume.title}}</v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ResumeCard",
  props: {
    resume: {
      required: true,
      type: Object
    }
  }
}
</script>


<style scoped>
.resume-card{
  width: 100%;
  max-width: 400px;
}
</style>
<style lang="scss">
.resume-card{
  .v-card__text, .v-card__title {
    word-break: normal; /* maybe !important  */
  }
}

</style>