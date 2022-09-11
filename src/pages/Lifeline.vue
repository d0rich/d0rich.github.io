<template>
	<div>
		<h1 class="mt-7">Lifeline</h1>
		<div class="hr"></div>
		<nav class="align-self-start">
			<v-breadcrumbs :items="breadcrumbs"/>
		</nav>
		<section class="page-content">
			<LifeInBlocks :notes="notes" />
			<v-timeline :dense="!showOppositeDates">
				<v-timeline-item v-for="(note, index) in notes" :key="textToId(note.title)"
                         :id="textToId(note.title)"
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
							<p v-if="note.summary" v-text="note.summary"/>
							<div v-else v-html="note.content" />
							<v-btn v-if="note.path" :to="note.path" color="primary">More</v-btn>
						</div>
						<g-image class="note__image border-light--primary" v-if="note.image" :src="note.image"/>
					</div>
				</v-timeline-item>
			</v-timeline>
		</section>

	</div>
</template>

<page-query>
query notesFromBlog{
	blogPosts: allPost(filter: {
		include_to_lifeline: { eq: true }
	}, sortBy: "date", order: ASC){
		edges{
			node{
				path
				title
				date
				image
				tags{
					title
				}
				summary
			}
		}
	}

	lifeNotes: allLifeNote{
		edges {
			node {
				title
				date
				tags { title }
				image
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

<script>
import {Router} from "../router";
import {metaMixin} from "../mixins/meta";
import LifeInBlocks from "../components/LifeInBlocks";
import {idMixin} from "../mixins/id";
import {timeMixin} from "../mixins/time";

export default {
	name: "Lifeline",
	components: {
		LifeInBlocks
	},
	data(){
		return{
			breadcrumbs: [
				{text: 'd0rich', href: Router.home},
				{text: 'story', href: Router.lifeline(), disabled: true},
			],
      notes: []
		}
	},
	methods: {
		changePage(page){
			this.$router.push(Router.projects(page))
		},
    getIconForNote(note){
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
		}
	},
	mixins: [metaMixin, idMixin, timeMixin],
  created() {
    const blogNotes = this.$page.blogPosts.edges.map(e => e.node)
    const lifeNotes = this.$page.lifeNotes.edges.map(e => e.node)
    this.notes = [...blogNotes, ...lifeNotes].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    })
  },
  metaInfo() {
		return this.createMetaInfo({
			title: 'Story',
			description: 'Story of Dorich, JavaScript developer',
			ogTitle: 'Story by Dorich',
			ogPath: `/lifeline/`
		})
	}
}
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
