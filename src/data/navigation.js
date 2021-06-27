import {Text} from "@/classes/text";
import {routesNames} from "@/data/constants";

export const navigation = {
    about: {
        text: new Text('Обо мне', 'About me'),
        route: { name: routesNames.ABOUT_MAIN_PAGE }
    },
    blog: {
        text: new Text('Блог', 'Blog'),
        route: { name: routesNames.BLOG_CONTROLLER }
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
