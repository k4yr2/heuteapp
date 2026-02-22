import { GridPlacement } from "./grid-placement";
import { GridPoint } from "./grid-point";

export interface GridRect extends GridPoint, GridPlacement {
}

export default GridRect;