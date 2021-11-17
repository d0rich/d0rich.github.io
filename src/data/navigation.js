import {routesNames} from "~/data/constants";

export const navigation = {
    resume: {
        text: 'Resume',
        route: { name: routesNames.RESUME_PAGE }
    },
    news: {
        text: 'News',
        route: { name: routesNames.NEWS_CONTROLLER }
    },
    home: {
        text: 'Dorich',
        route: { name: routesNames.HOME_PAGE }
    },
    portfolio: {
        text: 'Portfolio',
        route: { name: routesNames.PORTFOLIO }
    }
}
