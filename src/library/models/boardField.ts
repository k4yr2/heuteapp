import { UniqueData, Bounds, Placement, DataWithoutId, assignDataWithId } from "@/src/library/base";
import BoardGridModel from "./boardGrid";

export interface BoardFieldModel extends UniqueData {
    grid: BoardGridModel;
    bounds: Bounds;
    placement?: Placement;
}

export default BoardFieldModel;

export function boardField(id: string, data: DataWithoutId<BoardFieldModel>): BoardFieldModel {
    return assignDataWithId<BoardFieldModel>(id, data);
}