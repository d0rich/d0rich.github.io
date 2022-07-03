<template>
	<div>

	</div>
</template>

<page-query>

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

export default {
	name: "Lifeline",
	components: {

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
		}
	},
	mixins: [metaMixin],
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

<style scoped>
.projects-container{
	margin-top: 2rem;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	align-items: start;
}
@media screen and (max-width: 1080px) {
	.projects-container{
		grid-template-columns: 1fr 1fr;
	}
}

@media screen and (max-width: 640px) {
	.projects-container{
		grid-template-columns: 1fr;
	}
}
</style>
