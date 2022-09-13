<template>
  <div v-if="!month.events.length" class="month" :passed="isMonthPassed"
       @mouseover="showTooltip" @mouseleave="$emit('hide-tooltip')" />
  <a v-else class="month" :passed="isMonthPassed"
     :href="`#${month.events[0].id}`"
     @mouseover="showTooltip" @mouseleave="$emit('hide-tooltip')" />
</template>

<script lang="ts">
import {timeMixin} from "../mixins/time";
import Vue from "vue";
import {LifelineMonth} from "../plugins-ts/gridsome-source-lifeline/types";

export default Vue.extend({
  props: {
    month: {
      type: Object as () => LifelineMonth,
      required: true
    }
  },
  name: "LifeBlock",
  mixins: [timeMixin],
  computed: {
    isMonthPassed(): boolean{
      return new Date(this.month.date || 0) < new Date()
    }
  },
  methods: {
    showTooltip(event: MouseEvent){
      let content = `<div>Year: ${this.month.yearOfLife}, month: ${this.month.numberInYear}</div>`
      for ( let note of this.month.events ){
        // @ts-ignore
        content += `<div>${this.formatDate(note.date)} ${note.title}</div>`
      }
      this.$emit('show-tooltip', {
        content, x: event.pageX, y: event.pageY - 56 * this.$store.getters.headerOn
      })
    }
  }
})
</script>

<style>
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

a.month[passed], .month.month--has-events {
  background-color: var(--v-accent-base);
}
</style>
