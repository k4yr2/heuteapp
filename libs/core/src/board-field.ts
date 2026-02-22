import HeuteBoardLayout from "./board-layout";

export class HeuteBoardField {
    readonly #layout: HeuteBoardLayout;

    constructor(layout: HeuteBoardLayout) {
        this.#layout = layout;
    }

    public get layout() {
        return this.#layout;
    }
}

export default HeuteBoardField;