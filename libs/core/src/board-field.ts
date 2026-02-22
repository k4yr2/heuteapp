import { HeuteBoardGrid } from "./board-grid";
import { HeuteBoardLayout } from "./board-layout";

export class HeuteBoardField {
    readonly #layout: HeuteBoardLayout;
    readonly #grid: HeuteBoardGrid;

    constructor(layout: HeuteBoardLayout, cols: number, rows: number) {
        this.#layout = layout;
        this.#grid = new HeuteBoardGrid(this, cols, rows);
    }

    public get layout() {
        return this.#layout;
    }

    public get grid() {
        return this.#grid;
    }
}

export default HeuteBoardField;