import HeuteBoard from "./board";

class HeuteDomain {
    #dayboard : HeuteBoard;

    constructor() {
        this.#dayboard = new HeuteBoard();
    }

    public get dayboard(): HeuteBoard {
        return this.#dayboard;
    }
}

export const heuteApp = new HeuteDomain();