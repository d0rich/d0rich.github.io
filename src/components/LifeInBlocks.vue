<template>
  <div>
    <div class="life-blocks">
      <LifeBlock v-for="month of months" :key="month.number" :month="month"
                 @show-tooltip="showTooltip" @hide-tooltip="tooltip.show = false" />
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

<script>
import {idMixin} from "../mixins/id";
import LifeBlock from "./LifeBlock";

export default {
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
	mixins: [idMixin],
	computed: {
		deathdate(){
			const birthdate = new Date(this.birthdate)
			birthdate.setFullYear(birthdate.getFullYear() + this.averageLifeYears)
			return birthdate
		},
		months(){
			const numberOfMonthes = this.averageLifeYears * 12
			const months = []
			for (let monthNumber = 0; monthNumber < numberOfMonthes; monthNumber++ ) {
				const date = new Date(this.birthdate)
				date.setMonth(date.getMonth() + monthNumber)
				const startOfYear = new Date(date)
				startOfYear.setMonth(this.birthdate.getMonth(), this.birthdate.getDate())
				months.push({
					number: monthNumber + 1,
					numberInYear: this.birthdate.getMonth() <= date.getMonth() ? date.getMonth() - this.birthdate.getMonth() + 1 : date.getMonth() + 12 - this.birthdate.getMonth() + 1,
					year: date.getFullYear(),
					yearOfLife: this.birthdate.getMonth() <= date.getMonth() ? date.getFullYear() - this.birthdate.getFullYear() + 1 : date.getFullYear() - this.birthdate.getFullYear(),
					passed: date < new Date(),
					events: this.notes.filter(note => {
						const noteDate = new Date(note.date)
						return date.getMonth() === noteDate.getMonth() && date.getFullYear() === noteDate.getFullYear()
					})
				})
			}
			return months
		}
	},
	methods: {
		weeksBetween(d1, d2) {
			return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
		},
    showTooltip(event) {
      this.tooltip = {...this.tooltip, content: event.content, show: true}
      setTimeout(() => {
        const tooltipWidth = this.$refs?.tooltip?.clientWidth || 0
        const windowWidth = this.$store.state.windowWidth
        const x = event.x - tooltipWidth / 2
        this.tooltip = {...this.tooltip,
          x: x < 0 ? 0 : x + tooltipWidth > windowWidth ? windowWidth - tooltipWidth : x,
          y: event.y}
      }, 1)

    }
  }
}
</script>

<style scoped>
.life-blocks {
	display: grid;
	grid-template-columns: repeat(24, 1fr);
	grid-gap: 3px;
	width: fit-content;
}

</style>
