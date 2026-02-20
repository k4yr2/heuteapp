import { GridSize } from "../data/core";
import { HeuteDayboard } from "./dayboard";

class HeuteDomain {
    #dayboard : HeuteDayboard;

    constructor() {
        this.#dayboard = new HeuteDayboard();
    }

    public get dayboard(): HeuteDayboard {
        return this.#dayboard;
    }
}

export const heuteApp = new HeuteDomain();