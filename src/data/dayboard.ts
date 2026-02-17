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