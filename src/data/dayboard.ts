import { Bounds, GridSize } from "./core";

export interface DayboardObject {
    id: string;
}

export interface DayboardGridData {
    size: GridSize;
    bounds: Bounds;
}

export interface DayboardLayoutData {
    grids: DayboardGrid[];
}

//

export interface DayboardGrid extends DayboardGridData, DayboardObject {
}

export interface DayboardLayout extends DayboardLayoutData, DayboardObject {
}

//

export function createObject<T extends DayboardObject>(data: Omit<T, "id">): T {
    return {
        id: crypto.randomUUID(),
        ...data,
    } as T;
}

export function createGrid(data: DayboardGridData): DayboardGrid {
    return createObject<DayboardGrid>(data);
}

export function createLayout(data: DayboardLayoutData): DayboardLayout {
    return createObject<DayboardLayout>(data);
}