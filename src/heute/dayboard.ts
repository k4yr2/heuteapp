import { createGrid, createLayout } from "@/src/data/dayboard";
import { HeuteDayboardLayouts } from "./dayboardLayouts";

export class HeuteDayboard {
    #layouts : HeuteDayboardLayouts;

    constructor() {
        this.#layouts = new HeuteDayboardLayouts();

        this.#layouts.add(
            createLayout("default", {
                grids: [
                    createGrid("first", {
                        size: { cols: 12, rows: 6 },
                        bounds: { x1: 0, y1: 0, x2: 100, y2: 50 },
                    }),
                    createGrid("second", {
                        size: { cols: 12, rows: 6 },
                        bounds: { x1: 0, y1: 50, x2: 100, y2: 100 },
                    }),
                ],
            })
        );
    }

    public get layouts(): HeuteDayboardLayouts {
        return this.#layouts;
    }
}