<template>
  <div class="border-light--primary time-note">
    <div>
      <span class="time-note__title">{{expNote.spec}} </span>
      <span class="time-note__place">{{expNote.place}}</span>
    </div>

    <div class="time-note__period">
      <span>
        <time v-if="isDate(expNote.date.begin)" :datetime="expNote.date.begin">{{ transformDate(expNote.date.begin) }}</time>
        <time v-else >{{ expNote.date.begin }}</time>
      </span>
      -
      <span>
        <time v-if="isDate(expNote.date.end)" :datetime="expNote.date.end">{{ transformDate(expNote.date.end) }}</time>
        <time v-else >{{ expNote.date.end }}</time>
      </span>
    </div>
    <div class="time-note__description">
      <p>{{expNote.description}}</p>
      <a v-if="expNote.certificate" :href="expNote.certificate" target="_blank">Certificate</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpBlock",
  props: {
    expNote: {
      required: true,
      type: Object
    }
  },
  methods:{
    isDate(string){
      return +new Date(string) > 0
    },
    transformDate(date){
      return new Date(date).toLocaleDateString('en', { month: "long", year: "numeric" })
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
