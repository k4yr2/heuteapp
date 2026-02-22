import { HeuteBoardSection } from "./board-section";

export class HeuteBoardCard {
    #section: HeuteBoardSection;

    constructor(section: HeuteBoardSection) {
        this.#section = section;
    }

    public get section(): HeuteBoardSection {
        return this.#section;
    }
}

export default HeuteBoardCard;