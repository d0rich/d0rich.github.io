import {Text} from "@/classes/text";

export const navigation = {
    about: {
        text: new Text('Обо мне', 'About me'),
        route: { name: 'AboutIndex' }
    },
    blog: {
        text: new Text('Блог', 'Blog'),
        route: { name: 'Blog' }
    },
    home: {
        text: new Text('Dorich', 'Dorich'),
        route: { name: 'Home' }
    },
    portfolio: {
        text: new Text('Портфолио', 'Portfolio'),
        route: { name: 'PortfolioIndex' }
    }
}
