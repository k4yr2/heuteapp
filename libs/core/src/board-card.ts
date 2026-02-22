import { HeuteBoard } from "./board";

export class HeuteBoardCard {
    #board: HeuteBoard;

    constructor(board: HeuteBoard) {
        this.#board = board;
    }

    public get board(): HeuteBoard {
        return this.#board;
    }
}

export default HeuteBoardCard;