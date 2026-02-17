export interface Point {
    x: number;
    y: number;
}

export interface Rect extends Point {
    width: number;
    height: number;
}

export interface Bounds extends Point {
    x2: number;
    y2: number;
}

//

export interface Edges {
    top: number;
    right: number;
    bottom: number;
    left: number;
}