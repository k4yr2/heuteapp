import { GridSize, UniqueData, Rect, Placement, DataProps, createDataWithId } from "@heuteapp/common";

export interface BoardSectionModel extends GridSize, UniqueData {
    position: Rect;
    placement?: Placement;
}

export function boardSection(id: string, props: DataProps<BoardSectionModel>): BoardSectionModel {
    return createDataWithId<BoardSectionModel>(id, props);
}