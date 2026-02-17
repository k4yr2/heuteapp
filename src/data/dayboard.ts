export interface DayboardObject {
    id: string;
}

export interface DayboardGrid extends DayboardObject {
    width: number;
    height: number;
}

export interface DayboardLayout extends DayboardObject {
    grids: DayboardGrid[];
}