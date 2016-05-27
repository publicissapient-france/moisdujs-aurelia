import {Grid} from './model/grid'

export class App {
    grid = new Grid([
        {theme: 'Project Bootstrapping', slots: [{title: 'Webpack'}, {title: 'JSPM'}]},
        {
            theme: 'Les 4 fantastiques framework Front',
            slots: [{title: 'Angular2'}, {title: 'Ember2'}, {title: 'Aurelia'}]
        },
        {theme: 'Qualité et performances Javascript', slots: [{title: 'Karma'}]},
        {
            theme: 'Le cabinet de curiosité Javascript',
            slots: [{title: 'Electron'}, {title: 'Ramda'}, {title: 'Ethereum'}]
        }
    ]);

}
