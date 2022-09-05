<template>
  <div>

		<EnterBlock2 class="text-center">
			<span style="font-size: 1.7rem;" class="mx-3">Hello, my name is Nikolay Dorofeev.</span>
			<span style="font-size: 1.7rem;" class="ma-3">I am
				<span class="cursor" style="font-size: 2.3rem; font-weight: bold">Ultimate developer</span>
      </span>
			<span style="font-size: 1.7rem;" class="mx-3">It is my personal site.</span>
		</EnterBlock2>


		<section class="block2 mt-16">
			<Terminal reveal enter-word="hello world" @revealed="show.block2info = true">
				<h1 class="align-self-start cursor--on-hover">Hello world!</h1>
				<p class="align-self-start cursor--on-hover">
					Here you can see my
					<router-link class="link" :to="Router.projects()">portfolio</router-link>, familiarize with my
					<router-link class="link" :to="Router.allResume()">resume</router-link> , read
					<router-link class="link" :to="Router.blog()">news</router-link> from my developer life.
				</p>
			</Terminal>

			<div class="block2__info">
				<div class="info-row">
					<img src="/img/dorich.jpg" alt="d0rich" class="border-light--accent my-photo" />
					<div class="block2__info__text">
						<h1>Little about me</h1>
						<p>
							My name is Nikolay Dorofeev, I am a ultimate software developer, now I am a 4th year student at
							TPU in the direction of "Information systems and technologies in business and industry".
						</p>
						<p>
							I am ultimate software developer. I like to create services that can help people.
							I have tried quite wide range of technologies in order to learn it.
							I am focused at Node.js ecosystem, but it is not my limit.
						</p>
						<v-btn :to="Router.resume()" color="primary">More info</v-btn>
					</div>
				</div>
			</div>
		</section>


		<!-- Секция с контактами и характеристиками -->
		<section class="js-objects-block">
			<div class="js-objects-block__contacts py-8">
				<!-- Мои контакты -->
				<h1>My contacts</h1>
				<div class="contacts__btns">
					<v-btn v-for="contact in contacts" :key="contact.text"
                 dark
								 :href="contact.href" target="_blank"
								 class="pa-10" large
								 tile outlined :block="!headerOn">
            <span>
              <v-icon>{{contact.icon}}</v-icon>  {{contact.text}}
            </span>
					</v-btn>
				</div>
			</div>

			<div class="js-objects">
				<JSObjectWindow class="mb-3 mx-3"
                        v-for="(object, name) in jsObjects"
												:name="name"
												:object="object" />
			</div>
		</section>

    <div class="hr my-16"></div>

    <section class="block4">
      <h1 class="text-center">Last Posts</h1>
      <div class="block4__posts">
        <post-card v-for="post in $page.posts.edges" :key="post.node.id"
                   :post="post.node"
                   class="my-2" />
      </div>

      <v-btn :to="Router.blog()" class="align-self-end my-5" large color="primary">
        To blog
        <v-icon>
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </section>

		<div class="hr my-16"></div>

		<section class="block3">
			<h1 class="text-center">Last projects</h1>
			<nav class="block3__projects">
        <ProjectBlock :project="project.node"
                      v-for="project in $page.projects.edges" :key="project.node.id" />
			</nav>
			<v-btn :to="Router.projects()" class="align-self-end my-5" large color="primary">
				To portfolio
				<v-icon>
					mdi-chevron-right
				</v-icon>
			</v-btn>
		</section>

  </div>
</template>

<page-query>
query HomePageInfo {
  posts: allPost (sortBy: "date", order: DESC, limit: 5) {
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        image
        path
				tags {
					title
				}
      }
    }
  }
  projects: allProject (sortBy: "date", order: DESC, limit: 3) {
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        image
        path
        tags {
          title
        }
      }
    }
  }
}
</page-query>

<script>
import Terminal from "~/components/Terminal"
import JSObjectWindow from "~/components/pages/JSObjectWindow";
import EnterBlock2 from "~/components/pages/EnterBlock2";
import ProjectBlock from "../components/ProjectBlock";
import PostCard from "../components/PostCard";
import { mapGetters } from 'vuex'

export default {
	name: 'Home',
	components: {
		Terminal, EnterBlock2,
		JSObjectWindow, PostCard, ProjectBlock
	},
	data(){
		return{
      jsObjects: {
        person: {
          name: 'Nikolay',
          surname: 'Dorofeev',
          age: this.getAge(new Date(2000,6,4)),
          status: 'Employee'
        },
        developer: {
          nickname: 'd0rich',
          frontend: 'Vue.js, Nuxt.js, Flutter',
          backend: 'Node.js, SQL, NoSQL, GraphQL',
          operations: 'Docker, Kubernetes',
          architecture: 'Monolithic, Microservice'
        }
      },
			contacts: [
				{ href: 'mailto:dorich2000@gmail.com', icon: 'mdi-email', text: 'email' },
				{ href: 'https://github.com/d0rich', icon: 'mdi-github', text: 'github' },
				{ href: 'https://twitter.com/d0rich_dev', icon: 'fa-twitter', text: 'twitter' },
				{ href: 'https://t.me/d0rich', icon: 'fa-telegram', text: 'telegram' },
			],
			show: {
				block2info: false
			}
		}
	},
  methods: {
    getAge(birthDate) {
      let today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  },
	computed:{
		...mapGetters(['headerOn'])
	},
	metaInfo() {
		return {
			title: 'Dorich - Ultimate Developer',
      titleTemplate: '%s',
			meta: [
				{ key: 'og:url', property: 'og:url', content: 'https://d0rich.github.io/'},
				{ key: 'og:title', property: 'og:title', content: 'Dorich - All You Need to Know' }
			]
		}
	},

}
</script>

<style scoped lang="scss">
@import "../assets/styles/font";
.block2{
	min-height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.block2__info{
	margin: 2rem 0;
	transition: opacity .5s ease;
	.info-row{
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		margin-bottom: 2rem;
	}

	.my-photo{
		width: 15rem;
		margin: 0 10px 10px 0;
	}
	.block2__info__text{
		margin: 0 1rem;
	}

}
.js-objects-block{
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	width: 100vw;
	padding: 3rem 0;
	background-size: cover;
	background-attachment: fixed;
	background-image: url("/img/home/bgs/contacts-bg.jpg");

	.js-objects{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
    align-items: center;
	}
}
.js-objects-block__contacts{
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgba(0,0,0,.9);
	margin-bottom: 2rem;
	width: 100%;
	h1{
		padding: 0.5rem 1rem;
		text-align: center;
	}
}
.contacts__btns{
	padding: 0.5rem 1rem;
	max-width: 800px;
	min-width: 300px;
	width: 95vw;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: .5rem;
}
.block3{
	position: relative;
	min-height: 400px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.block3__projects{
	min-height: 200px;
	min-width: 10px;
	margin-top: 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 1rem;
	justify-items: center;
	align-items: start;
}
.block4{
	position: relative;
	min-height: 400px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.block4__posts{
	margin: 2rem 0;
	width: 100%;
}
@media screen and (max-width: 550px){
	.block2__info{

		.info-row{
			flex-direction: column;
			align-items: center;
		}
	}
}
@media screen and (max-width: 1080px) {
	.block3__projects{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
}

@media screen and (max-width: 640px) {
	.block3__projects{
		display: grid;
		grid-template-columns: 1fr;
	}
	.contacts__btns{
		display: flex;
		flex-direction: column;
		justify-content: unset;
	}
}
</style>

