<template>
  <div class="border-light--primary time-note">
    <div>
      <span class="time-note__title">{{timeNote.title.text}} </span>
      <span class="time-note__place">{{timeNote.place.text}}</span>
    </div>

    <div class="time-note__period">{{timeNote.period.begin.text}} - {{timeNote.period.end.text}}</div>
    <div class="time-note__description">{{timeNote.description.text}}</div>
  </div>
</template>

<script>
import {TimeNote} from "@/classes";

export default {
name: "TimeNote",
  props: {
    timeNote: {
      required: true,
      type: TimeNote
    }
  }
}
</script>

<style scoped>
.time-note{
  padding: 0.5em 1em;
  margin: 1em 0;
}
.time-note__title{
  text-transform: capitalize;
  font-size: 1.2em;
  color: var(--v-accent-base);
}
.time-note__place{
  text-transform: capitalize;
  font-weight: 200;
  color: var(--v-secondary-lighten5)
}
.time-note__period{
  margin: .5em 0;
  font-weight: 700;
  font-size: 1.2em;
}
.time-note__description{
  font-style: italic;
}
</style>
