<template>
	<v-app class="main-scroll" v-resize="onResize">
		<Header v-if="headerOn" />
		<BottomNavigation v-else />
		<v-main>
			<transition name="glitch-transition" appear mode="out-in">
				<div class="page px-4">
					<slot />
				</div>
			</transition>
		</v-main>
		<Footer />
	</v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import '~/assets/fonts/JetBrainsMono/fontface.css'
import '~/assets/styles/font.scss'
import '~/assets/styles/links.scss'
import '~/assets/styles/transitions.scss'
import '~/assets/styles/article.scss'
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
import BottomNavigation from "~/components/layout/BottomNavigation";
import {mapGetters, mapMutations} from 'vuex'

export default {
	name: 'DefaultLayout',

	components: {
		Header, BottomNavigation,
		Footer,
	},

	data: () => ({
		//
	}),
	computed:{
		...mapGetters(['headerOn']),
	},
	methods:{
		...mapMutations(['getWindowWidth']),
		onResize(){
			this.getWindowWidth(window.innerWidth)
		}
	},
  mounted() {
    //console.log(document.location.href)
    //console.log(this.$ga.app.automaticDataCollectionEnabled)
  },
  updated() {
    //console.log(document.location.href)
  }
};
</script>

<style>
@import "../assets/styles/cursor.css";
@import "../assets/styles/scroll.scss";
@import "../assets/styles/borderLight.css";
#app{
	font-family: 'JetBrains Mono', Roboto, sans-serif;
	overflow: hidden;
}
#bottom-navigation{
  display: none;
}
.page{
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1080px;
	margin: auto;
}
.loading-container{
	pointer-events: none;
	position: fixed;
	z-index: 12000;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
}
.v-image__image--preload{
	filter: none;
}
@media screen and (max-width: 640px) {
  #header{
    display: none;
  }
  #bottom-navigation{
    display: block;
  }
	html{
		font-size: 13px;
	}
	#app{
		padding-bottom: 54px;
	}
}
</style>

