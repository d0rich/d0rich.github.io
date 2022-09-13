<template>
  <div class="flex row justify-space-around flex-wrap-reverse">
    <div class="life-blocks ma-2">
      <LifeBlock v-for="month of months" :key="month.number" :month="month"
                 @show-tooltip="showTooltip" @hide-tooltip="tooltip.show = false" />
    </div>
		<div class="ma-2">
			<h2>Legend:</h2>
			<div class="legend">
				<v-icon class="ma-1">mdi-cursor-default-outline</v-icon> <span>- hover block to get more info</span>
				<div class="month ma-1"/> <span> - future months of my life</span>
				<div class="month ma-1" passed /> <span> - passed months of my life</span>
				<div class="month ma-1 month--has-events" passed /> <span> - passed months with events (clickable)</span>
			</div>

		</div>
    <transition name="glitch-transition" >
      <div class="v-tooltip__content "
           ref="tooltip"
           :class="{menuable__content__active: tooltip.show}"
           v-html="tooltip.content"
           v-show="tooltip.show"
           :style="{ left: `${tooltip.x}px`, top: `calc(${tooltip.y}px + 0.7rem)` }"
           style="z-index: 8;"/>
    </transition>

  </div>

</template>

<static-query>
query month{
  months: allLifelineMonth(sortBy: "date", order: ASC){
    edges{
      node{
        number
        numberInYear
        year
        yearOfLife
        date
        events{
          id
          title
        }
      }
    }
  }
}
</static-query>

<script lang="ts">
// @ts-ignore
import LifeBlock from "./LifeBlock";
import {timeMixin} from "../mixins/time";
import Vue from 'vue'
import {LifelineMonth} from "../plugins-ts/gridsome-source-lifeline/types";

export default Vue.extend({
	name: "LifeInBlocks",
  components: {LifeBlock},
	props: {
		notes: Array
	},
	data() {
		return {
			birthdate: new Date(2000, 6, 4),
			averageLifeYears: 65,
      tooltip: {
        content: '',
        x: 0,
        y: 0,
        show: false
      }
    }
	},
  computed: {
    months(): LifelineMonth[] {
      // @ts-ignore
      return this.$static.months.edges.map((e: any) => e.node)
    }
  },
	mixins: [timeMixin],
	methods: {
    showTooltip(event: any) {
      this.tooltip = {...this.tooltip, content: event.content, show: true}
      setTimeout(() => {
        // @ts-ignore
        const tooltipWidth = this.$refs?.tooltip?.clientWidth || 0
        const windowWidth = this.$store.state.windowWidth
        const x = event.x - tooltipWidth / 2
        this.tooltip = {...this.tooltip,
          x: x < 0 ? 0 : x + tooltipWidth > windowWidth ? windowWidth - tooltipWidth : x,
          y: event.y}
      }, 1)

    }
  },
})
</script>

<style scoped>
.life-blocks {
	display: grid;
	grid-template-columns: repeat(24, 1fr);
	grid-gap: 3px;
	width: fit-content;
}
.legend{
	display: grid;
	grid-template-columns: 1rem 1fr;
	grid-gap: .1rem;
	align-items: center;
}
</style>
