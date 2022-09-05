import {Router} from "./index";

export const navigation = {
    resume: {
        text: 'Resume',
        route: Router.allResume()
    },
    news: {
        text: 'Blog',
        route: Router.blog()
    },
    home: {
        text: 'Dorich',
        route: Router.home
    },
    portfolio: {
        text: 'Portfolio',
        route: Router.portfolio()
    },
    lifeline: {
        text: 'Story',
        route: Router.lifeline()
    }
}
