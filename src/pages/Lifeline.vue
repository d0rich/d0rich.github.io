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
                         :icon="getIconForNote(note)">
						<span slot="opposite"
							:class="`font-weight-bold primary--text`"
							v-text="new Date(note.date).toLocaleDateString('de')" />
					<div class="py-4">
						<h2 :class="`headline font-weight-light mb-4 primary--text`">
							{{ note.title }}
						</h2>
						<span :class="`font-weight-bold`"
									v-if="!showOppositeDates"
									v-text="new Date(note.date).toLocaleDateString('de')" />
						<div class="note__content">
							<div>
								<p v-if="note.summary">{{note.summary}}</p>
								<p v-else v-html="note.content" />
								<v-btn v-if="note.path" :to="note.path" color="primary">More</v-btn>
							</div>
							<g-image class="note__image border-light--primary" :src="note.image"/>
						</div>
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

export default {
	name: "Lifeline",
	components: {
		LifeInBlocks
	},
	data(){
		return{
			breadcrumbs: [
				{text: 'd0rich', href: Router.home},
				{text: 'lifeline', href: Router.lifeline(), disabled: true},
			]
		}
	},
	methods: {
		changePage(page){
			this.$router.push(Router.portfolio(page))
		},
    getIconForNote(note){
      if (note.tags.some(t => t.title === 'Learning'))
        return 'mdi-flask'
      return ''
    }
	},
	computed: {
		notes(){
			const blogNotes = this.$page.blogPosts.edges.map(e => e.node)
			const lifeNotes = this.$page.lifeNotes.edges.map(e => e.node)
			return [...blogNotes, ...lifeNotes].sort((a, b) => {
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
		showOppositeDates(){
			return this.$store.state.windowWidth > 1000
		}
	},
	mixins: [metaMixin, idMixin],
	metaInfo() {
		return this.createMetaInfo({
			title: 'Lifeline',
			description: 'Lifeline of Dorich, JavaScript developer',
			ogTitle: 'Lifeline by Dorich',
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
