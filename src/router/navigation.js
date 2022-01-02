import {Router} from "./index";

export const navigation = {
    resume: {
        text: 'Resume',
        route: Router.empty
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
        text: 'Projects',
        route: Router.empty
    }
}
