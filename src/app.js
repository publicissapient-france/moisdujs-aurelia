import {Grid} from './model/grid'

export class App {
    grid = new Grid([
        {
            theme: 'Project Bootstrapping',
            slots: [{title: 'Webpack'}, {title: 'JSPM'}]
        },
        {
            theme: 'Les 4 fantastiques framework Front',
            slots: [
                {title: 'Angular 2', speaker: 'Dmytro Podyachiy'},
                {title: 'Ember 2', speaker: 'Harry Jumeau'},
                {title: 'React', speaker: 'Abdelhakim Bachar'},
                {title: 'Aurelia', speaker: 'Alban Dauleu'}
            ]
        },
        {
            theme: 'Qualité et performances Javascript',
            slots: [{title: 'Karma'}]
        },
        {
            theme: 'Le cabinet de curiosité Javascript',
            slots: [{title: 'Electron'}, {title: 'Ramda'}, {title: 'Ethereum'}]
        }
    ]);

}
