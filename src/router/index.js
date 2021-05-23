import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About/index'
import Blog from "@/views/Blog"
import PortfolioIndex from '@/views/Portfolio/index'
import Projects from "@/views/Portfolio/Projects";
import Resume from "@/views/About/Resume";
import AboutMain from "@/views/About/Main";
import LangRouter from "@/views/LangRouter";

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    component: LangRouter,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: { scrollToTop: true }
      },
      {
        path: 'about',
        component: About,
        meta: { scrollToTop: true },
        children: [
          {
            path: '',
            name: 'AboutIndex',
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
        path: 'blog',
        name: 'Blog',
        component: Blog,
        meta: { scrollToTop: true }
      },
      {
        path: 'portfolio',
        component: PortfolioIndex,
        meta: { scrollToTop: true },
        children: [
          {
            path: '',
            name: 'PortfolioIndex',
            component: Projects,
            meta: { scrollToTop: true }
          },
        ]
      },

    ]
  },

  {
    path: '/*',
    redirect: { name: "Home", params: {lang: localStorage.getItem('lang') || 'en'}}
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  if (to.meta.scrollToTop) {
    if (to.name !== from.name)
      setTimeout(() => window.scrollTo(0, 0), 300)
  }
})

export default router
