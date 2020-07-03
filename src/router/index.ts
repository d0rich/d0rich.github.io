import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectPage from '../views/ProjectPage.vue'
import Prices from '../views/Prices.vue'
import Loader from '../components/Loader.vue'
import Error404 from '../views/Error404.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect: { name: 'Home' }
  },
  {
    path: '/:lan/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/:lan/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/:lan/projects/:id',
    name: 'ProjectPage',
    component: ProjectPage
  },
  {
    path: '/:lan/prices',
    name: 'Prices',
    component: Prices
  },
  {
    path: '/:lan/preloader',
    name: 'Pre',
    component: Loader
  },
  {
    path: '/:lan/error404',
    name: 'Error404',
    component: Error404
  },
  {
    path:'*',
    redirect: { name: 'Error404' }
  }
]

const router = new VueRouter({
  routes
})

export default router
