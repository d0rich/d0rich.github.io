import {Router} from "./index";

export const navigation = {
    resume: {
        text: 'Resume',
        route: Router.empty
    },
    news: {
        text: 'News',
        route: Router.blog()
    },
    home: {
        text: 'Dorich',
        route: Router.home
    },
    portfolio: {
        text: 'Portfolio',
        route: Router.empty
    }
}
