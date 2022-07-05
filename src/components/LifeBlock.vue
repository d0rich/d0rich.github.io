<template>
  <div v-if="!month.events.length" class="month" :passed="month.passed"
       @mouseover="showTooltip" @mouseleave="$emit('hide-tooltip')" />
  <a v-else class="month" :passed="month.passed"
     :href="`#${textToId(month.events[0].title)}`"
     @mouseover="showTooltip" @mouseleave="$emit('hide-tooltip')" />
</template>

<script>
import {idMixin} from "../mixins/id";

export default {
  props: {
    month: Object
  },
  name: "LifeBlock",
  mixins: [idMixin],
  methods: {
    showTooltip(event){
      const monthData = this.month
      let content = `<div>Year: ${monthData.yearOfLife}, month: ${monthData.numberInYear}</div>`
      for ( let note of monthData.events ){
        content += `<div>${new Date(note.date).toLocaleDateString('de')} ${note.title}</div>`
      }
      this.$emit('show-tooltip', {
        content, x: event.pageX, y: event.pageY - 56 * this.$store.getters.headerOn
      })
    }
  }
}
</script>

<style scoped>
.month {
  width: .7rem;
  height: .7rem;
  border: solid 1px #e7e7e7;
  border-radius: .1rem;
  background-color: var(--v-secondary-base);
}

.month[passed] {
  background-color: var(--v-primary-base);
}

a.month[passed] {
  background-color: var(--v-accent-base);
}
</style>