<template>
	<div>
		<h1 class="mt-7">Story</h1>
		<div class="hr"></div>
		<nav class="align-self-start">
			<v-breadcrumbs :items="breadcrumbs"/>
		</nav>
		<section class="page-content">
			<LifeInBlocks />
			<v-timeline :dense="!showOppositeDates">
				<v-timeline-item v-for="(note, index) in notes" :key="note.id"
                         :id="note.id"
												 large
                         :icon="getIconForNote(note)">
					<time slot="opposite"
						:class="`font-weight-bold text-h4 primary--text text--lighten-2`"
						:datetime="note.date"
						v-text="formatDate(note.date)" />

					<div class="note__content py-4">
						<div class="pr-4">
							<h2 :class="`headline font-weight-light mb-1 accent--text`" v-text="note.title"/>
							<time :class="`text-h5 primary--text text--lighten-2`"
										v-if="!showOppositeDates"
										:datetime="note.date"
										v-text="formatDate(note.date)" />
							<div v-html="note.content" />
							<v-btn v-if="note.postPath" :to="note.postPath" color="primary">More</v-btn>
						</div>
						<g-image class="note__image border-light--primary" v-if="note.image" :src="note.image"/>
					</div>
				</v-timeline-item>
			</v-timeline>
		</section>

	</div>
</template>

<page-query>
query notes{
	events: allLifelineEvent(sortBy: "date", order: ASC){
		edges{
			node{
        id
				postPath
				title
				date
				image
				tags{
					title
				}
				content
			}
		}
	}
}
</page-query>

<static-query>
query {
	metadata {
		siteUrl
	}
}
</static-query>

<script lang="ts">
import {Router} from "../router";
import {metaMixin} from "../mixins/meta";
// @ts-ignore
import LifeInBlocks from "../components/LifeInBlocks";
import {timeMixin} from "../mixins/time";
import Vue from 'vue'
import {LifelineEvent} from "../plugins-ts/gridsome-source-lifeline/types";

export default Vue.extend({
	name: "StoryPage",
	components: {
		LifeInBlocks
	},
	data(){
		return{
			breadcrumbs: [
				{text: 'd0rich', href: Router.home},
				{text: 'story', href: Router.story(), disabled: true},
			]
		}
	},
	methods: {
    getIconForNote(note: LifelineEvent){
			if (note.tags.some(t => t.title === 'Database'))
				return 'mdi-database'
			if (note.tags.some(t => t.title === 'Development'))
				return 'mdi-code-braces'
			if (note.tags.some(t => t.title === 'Job'))
				return 'mdi-briefcase'
      if (note.tags.some(t => t.title === 'Learning'))
        return 'mdi-flask'
			if (note.tags.some(t => t.title === 'Education'))
				return 'mdi-school'
      return ''
    }
	},
	computed: {
		showOppositeDates(){
			return this.$store.state.windowWidth > 1000
		},
    notes(): LifelineEvent[]{
      // @ts-ignore
      return this.$page.events.edges.map((e: any) => e.node)
    }
	},
	mixins: [metaMixin, timeMixin],
  // @ts-ignore
  metaInfo() {
		return this.createMetaInfo({
			title: 'Story',
			description: 'Story of Dorich, JavaScript developer',
			ogTitle: 'Story by Dorich',
			ogPath: `/story/`
		})
	}
})
</script>

<style>
html{
	scroll-behavior: smooth;
}
</style>

<style scoped>

.page-content {
	max-width: 100vw;
}

.note__content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: 'Roboto', sans-serif;
}

.note__image {
	max-width: 25vw;
	width: 200px;
	height: auto;
}

@media screen and (max-width: 1080px) {

}

@media screen and (max-width: 640px) {

}
</style>
