import { Bounds } from "./core";

export interface DayboardObject {
    id: string;
}

export interface DayboardGrid extends DayboardObject {
    width: number;
    height: number;
    position: Bounds;
}

export interface DayboardLayout extends DayboardObject {
    grids: DayboardGrid[];
}