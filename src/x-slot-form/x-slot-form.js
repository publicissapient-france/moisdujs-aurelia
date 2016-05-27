import {bindable} from 'aurelia-framework';
import {Slot} from '../model/grid'

export class XSlotForm {
  @bindable grid;
  slot = new Slot();

  onClickAddSlot() {
    this.grid.addSlot(this.slot);
    this.reset();
  };

  reset() {
    this.slot.theme = this.grid.themes[0];
    this.slot.title = '';
  }
}
