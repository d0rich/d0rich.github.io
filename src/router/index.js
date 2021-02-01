import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About/About'
import Blog from "@/views/Blog"
import Portfolio from "@/views/Portfolio";
import Resume from "@/views/About/Resume";
import AboutMain from "@/views/About/AboutMain";

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
    component: About,
    meta: { scrollToTop: true },
    children: [
      {
        path: '',
        name: 'About',
        component: AboutMain,
        meta: { scrollToTop: true }
      },
      {
        path: 'resume',
        name: 'Resume',
        component: Resume,
        meta: { scrollToTop: true }
      }
    ]
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
