import { HeuteDayboard } from "./dayboard";

export class HeuteApp {
    #dayboard : HeuteDayboard;

    constructor() {
        this.#dayboard = new HeuteDayboard();
    }

    public get dayboard(): HeuteDayboard {
        return this.#dayboard;
    }
}

export const heuteApp = new HeuteApp();