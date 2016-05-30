import './event.css';
import {bindable} from 'aurelia-framework';

export class Event {
    @bindable title;
    @bindable slots;
}
