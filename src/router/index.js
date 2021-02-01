import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About'
import Blog from "@/views/Blog"
import Portfolio from "@/views/Portfolio";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { scrollToTop: true }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { scrollToTop: true }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { scrollToTop: true }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: { scrollToTop: true }
  },
  {
    path: '/*',
    redirect: "Home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  if (to.meta.scrollToTop) {
    setTimeout(() => window.scrollTo(0, 0), 300)

  }
})

export default router
