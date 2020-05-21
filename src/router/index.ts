import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectPage from '../views/ProjectPage.vue'
import Prices from '../views/Prices.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectPage',
    component: ProjectPage
  },
  {
    path: '/prices',
    component: Prices
  }
]

const router = new VueRouter({
  routes
})

export default router
