import {bindable} from 'aurelia-framework';
import {Slot} from '../slot/slot'

export class SlotForm {
    @bindable grid;
    slot = new Slot();

    addSlot() {
        this.grid.addSlot(this.slot);
        this.reset();
    };

    reset() {
        this.slot.eventTitle = this.grid.eventTitles[0];
        this.slot.title = '';
        this.slot.speaker = '';
    }
}
