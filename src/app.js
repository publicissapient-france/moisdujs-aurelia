import {Grid} from './model/grid'

export class App {
    grid = new Grid([
        {
            title: 'Project Bootstrapping',
            slots: [{title: 'Webpack'}, {title: 'JSPM'}]
        },
        {
            title: 'Les 4 fantastiques framework Front',
            slots: [
                {title: 'Angular 2', speaker: 'Dmytro Podyachiy'},
                {title: 'Ember 2', speaker: 'Harry Jumeau'},
                {title: 'React', speaker: 'Abdelhakim Bachar'},
                {title: 'Aurelia', speaker: 'Alban Dauleu'}
            ]
        },
        {
            title: 'Qualité et performances Javascript',
            slots: [{title: 'Karma'}]
        },
        {
            title: 'Le cabinet de curiosité Javascript',
            slots: [{title: 'Electron'}, {title: 'Ramda'}, {title: 'Ethereum'}]
        }
    ]);

}
