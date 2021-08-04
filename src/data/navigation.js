import {Text} from "@/classes/text";
import {routesNames} from "@/data/constants";

export const navigation = {
    resume: {
        text: new Text('Резюме', 'Resume'),
        route: { name: routesNames.RESUME_PAGE }
    },
    news: {
        text: new Text('Новости', 'News'),
        route: { name: routesNames.NEWS_CONTROLLER }
    },
    home: {
        text: new Text('Dorich', 'Dorich'),
        route: { name: routesNames.HOME_PAGE }
    },
    portfolio: {
        text: new Text('Портфолио', 'Portfolio'),
        route: { name: routesNames.PORTFOLIO }
    }
}
