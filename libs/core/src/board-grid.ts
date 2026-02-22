import { HeuteBoardField } from "./board-field";

export class HeuteBoardGrid {
    readonly #field: HeuteBoardField;

    readonly #cols: number;
    readonly #rows: number;

    constructor(field: HeuteBoardField, cols: number, rows: number) {
        this.#field = field;
        
        this.#cols = cols;
        this.#rows = rows;
    }

    //

    public get field() {
        return this.#field;
    }

    //

    public get cols() {
        return this.#cols;
    }

    public get rows() {
        return this.#rows;
    }
}

export default HeuteBoardGrid;