<template>
  <component :is="blockTag" class="month" :passed="isMonthPassed"
             :href="`#${idLink}`"
             @mouseover="showTooltip" @mouseleave="$emit('hide-tooltip')" />
</template>

<script lang="ts">
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
  computed: {
    isMonthPassed(): boolean{
      return new Date(this.month.date || 0) < new Date()
    },
    blockTag(): 'div' | 'a' {
      if (this.month.events.length) return 'a'
      return 'div'
    },
    idLink(): string | undefined {
      return this.month.events[0]?.id
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
    },
    formatDate(date: Date | string){
      const dateInternal = new Date(date)
      return dateInternal.toLocaleDateString('en-GB')
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
