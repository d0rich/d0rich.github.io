<template>
  <div class="border-light--primary skills-note">
    <h2>{{skillsField.name}}</h2>
    <p>{{skillsField.items.join(', ')}}</p>
  </div>
</template>

<script>
export default {
  name: "SkillsBlock",
  props: {
    skillsField: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
.skills-note{
  font-size: 0.93rem;
  padding: 1em 2em;
  width: 22em;
  margin: 1em;
  background-color: var(--v-secondary-darken2);
}
@media screen and (max-width: 900px) {
  .skills-note{
    width: 90%;
  }
}
</style>
