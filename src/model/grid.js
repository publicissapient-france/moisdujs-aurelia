/**
 * Created by albandauleu on 26/05/2016.
 */
export class Grid {
    events = [];
    eventTitles = [];

    constructor(events) {
        this.events = events;
        this.eventTitles = this.events.map(event => event.title);
    }

    addSlot(slot) {
        let found = this.events.filter(event => event.title === slot.eventTitle);
        if (found.length) {
            found[0].slots.push({
                title: slot.title,
                speaker: slot.speaker
            });
        }
    }
}