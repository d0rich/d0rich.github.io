<template>
  <div class="border-light--primary skills-note">
    <h2>{{skillsNote.title.text}}</h2>
    <div>{{skillsNote.skills.join('; ')}}</div>
  </div>
</template>

<script>

import {SkillsSection} from "@/classes";

export default {
name: "SkillsNote",
  props: {
    skillsNote: {
      required: true,
      type: SkillsSection
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
