export class HeuteBoardGrid {
    #cols: number;
    #rows: number;

    constructor(cols: number, rows: number) {
        this.#cols = cols;
        this.#rows = rows;
    }

    public get cols() {
        return this.#cols;
    }

    public get rows() {
        return this.#rows;
    }
}

export default HeuteBoardGrid;