/**
 * Created by albandauleu on 26/05/2016.
 */
export class Grid {
    columns = [];
    themes = [];

    constructor(columns) {
        this.columns = columns;
        this.themes = this.columns.map(column => column.theme);
    }

    addSlot(slot) {
        let found = this.columns.filter(column => column.theme === slot.theme);
        if (found.length) {
            found[0].slots.push({title: slot.title});
        }
    }
}

export class Slot {
    theme = '';
    title = '';
}

export class SlotColumn {
    theme = '';
    slots = [];
}
