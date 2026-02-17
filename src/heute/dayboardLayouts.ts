import { DayboardLayout } from "@/src/data/dayboard";

export class HeuteDayboardLayouts {
    #cache = new Map<string, DayboardLayout>();

    public add(...layouts: DayboardLayout[]) {
        for (const layout of layouts) {
            if (this.#cache.has(layout.id)) {
                throw new Error(`Layout with id ${layout.id} already exists`);
            }

            this.#cache.set(layout.id, layout);
        }
    }

    public get(id: string): DayboardLayout | undefined {
        return this.#cache.get(id);
    }

    public delete(id: string): boolean {
        return this.#cache.delete(id);
    }

    public list(): DayboardLayout[] {
        return Array.from(this.#cache.values());
    }
}