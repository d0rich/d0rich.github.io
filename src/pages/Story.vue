<template>
	<div>
		<h1 class="mt-7">Story</h1>
		<div class="hr"></div>
		<nav class="align-self-start">
			<v-breadcrumbs :items="breadcrumbs"/>
		</nav>
		<section class="page-content">
      <LifeInBlocks :showed-tags="filters.filter(f => f.show).map(f => f.tag)">
        <h2 class="mt-2">Filter events by topics</h2>
        <div v-for="filter in filters" :key="filter.tag">
          <v-switch v-model="filter.show" :label="filter.topic"
                    class="mb-n1"
                    inset hide-details dense />
        </div>
      </LifeInBlocks>
			<v-timeline :dense="!showOppositeDates">
				<v-timeline-item v-for="note in notes" :key="note.id"
                         v-show="isNoteShowed(note.story_filter_tag)"
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
              <div v-if="note.story_filter_tag" class="my-2">
                <v-chip outlined color="accent" small
                        v-text="getTopicTitle(note.story_filter_tag)"
                        :link="!!getTopicLink(note.story_filter_tag)"
                        :to="getTopicLink(note.story_filter_tag)" />
              </div>
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
        story_filter_tag
        story_topic_tag
        story_icon
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
import {defineComponent} from '@vue/composition-api'
import {Router} from "../router";
import {metaMixin} from "../mixins/meta";
// @ts-ignore
import LifeInBlocks from "../components/LifeInBlocks";
import {timeMixin} from "../mixins/time";
import {LifelineEvent} from "../plugins-ts/gridsome-source-lifeline/types";

type Filter = {
  tag: string
  topic: string
  show: boolean
}

export default defineComponent({
	name: "StoryPage",
	components: {
		LifeInBlocks
	},
	data(){
		return{
			breadcrumbs: [
				{text: 'd0rich', href: Router.home},
				{text: 'story', href: Router.story(), disabled: true},
			],
      filters: [] as Filter[]
		}
	},
	methods: {
    getIconForNote(note: LifelineEvent){
      if (note.story_icon)
        return note.story_icon
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
    },
    isNoteShowed(filter_tag: string): boolean{
      if (!filter_tag) return true
      // @ts-ignore
      return this.filters.some((filter: Filter) => filter.tag === filter_tag && filter.show)
    },
    getTopicTitle(filter_tag: string): string {
      // @ts-ignore
      const notes: LifelineEvent[] = this.notes
      const topicTitle = notes.find(note => note.story_topic_tag === filter_tag)?.title
      return topicTitle || 'Self Education'
    },
    getTopicLink(filter_tag: string): string | null {
      // @ts-ignore
      const notes: LifelineEvent[] = this.notes
      const topicId = notes.find(note => note.story_topic_tag === filter_tag)?.id
      return topicId ? `#${topicId}` : null
    }
	},
	computed: {
		showOppositeDates(){
			return this.$store.state.windowWidth > 1000
		},
    notes(): LifelineEvent[]{
      // @ts-ignore
      const notes: LifelineEvent[] = this.$page.events.edges.map((e: any) => e.node)
      return notes
    }
	},
	mixins: [metaMixin, timeMixin],
  created() {
    const filters: Filter[] = []
    // @ts-ignore
    const notes: LifelineEvent[] = this.notes
    const allFilterTags = new Set<string>()
    notes.forEach(note => allFilterTags.add(note.story_filter_tag))
    allFilterTags.forEach(tag => {
      if (tag) {
        filters.push({
          tag,
          topic: notes.find(note => note.story_topic_tag === tag)?.title || 'Self Education',
          show: true
        })
      }
    })
    this.filters = filters
  },
  metaInfo() {
    // @ts-ignore
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
