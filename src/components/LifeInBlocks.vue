<template>
	<div class="life-blocks">
		<v-tooltip bottom v-for="month of months" :key="month.number">
			<template v-slot:activator="{ on, attrs }">
				<div v-if="!month.events.length" class="month" :passed="month.passed"
						 v-bind="attrs"
						 v-on="on"  />
				<a v-else class="month" :passed="month.passed"
						 :href="`#${textToId(month.events[0].title)}`"
						 v-bind="attrs"
						 v-on="on"  />
			</template>
			<div>
				<div>Year: {{month.yearOfLife}}, month: {{month.numberInYear}}</div>
				<div v-for="note in month.events" :key="textToId(note.title)">
					{{new Date(note.date).toLocaleDateString('de')}} {{note.title}}
				</div>
			</div>

		</v-tooltip>

	</div>
</template>

<script>
import {idMixin} from "../mixins/id";

export default {
	name: "LifeInBlocks",
	props: {
		notes: Array
	},
	data() {
		return {
			birthdate: new Date(2000, 6, 4),
			averageLifeYears: 65
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
