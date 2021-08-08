import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import NewsFeed from "@/views/News/Feed"
import News from "@/views/News/News";
import NewsController from "@/views/News/NewsController";
import PortfolioIndex from '@/views/Portfolio/index'
import Projects from "@/views/Portfolio/Projects";
import Project from "@/views/Portfolio/Project";
import Resume from "@/views/Resume/Resume";
import ResumeEdit from "@/views/Resume/ResumeEdit";
import ResumeIndex from "@/views/Resume";
import LangRouter from "@/views/LangRouter";

Vue.use(VueRouter)
import {routesNames} from "@/data/constants";

const routes = [
  {
    path: '/:lang',
    component: LangRouter,
    children: [
      {
        path: '',
        name: routesNames.HOME_PAGE,
        component: Home,
        meta: { scrollToTop: true }
      },
      {
        path: 'resume',
        name: routesNames.RESUME_CONTROLLER,
        component: ResumeIndex,
        meta: { scrollToTop: true },
        children: [
          {
            path: ':resumeId',
            name: routesNames.RESUME_PAGE,
            component: Resume,
            meta: { scrollToTop: true },
          },
          {
            path: ':resumeId/edit',
            name: routesNames.EDIT_RESUME_PAGE,
            component: ResumeEdit,
            meta: { scrollToTop: true }
          }
        ]
      },
      {
        path: 'news',
        component: NewsController,
        children: [
          {
            path: '',
            name: routesNames.NEWS_CONTROLLER,
            component: NewsFeed,
            meta: { scrollToTop: true },
          },
          {
            path: ':year/:month/:date/:stringId',
            name: routesNames.NEWS_PAGE,
            component: News,
            meta: { scrollToTop: true }
          }
        ]
      },
      {
        path: 'portfolio',
        component: PortfolioIndex,
        meta: { scrollToTop: true },
        children: [
          {
            path: '',
            name: routesNames.PORTFOLIO,
            component: Projects,
            meta: { scrollToTop: true }
          },
          {
            path: ':stringId',
            name: routesNames.PROJECT_PAGE,
            component: Project,
            meta: { scrollToTop: true }
          },
        ]
      },

    ]
  },

  {
    path: '/*',
    redirect: { name: routesNames.HOME_PAGE, params: {lang: localStorage.getItem('lang') || 'en'}}
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  if (to.meta.scrollToTop) {
    if (to.name !== from.name) {
      // setTimeout(() => window.scrollTo(0, 0), 300)
    }
  }
})

export default router
