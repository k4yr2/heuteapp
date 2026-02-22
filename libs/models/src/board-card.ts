import { createDataWithId, DataProps, GridPoint, UniqueData } from "@heuteapp/common";

export interface BoardCardModel extends UniqueData {
    sectionId: string;
    content: string;
    position: GridPoint;
}

export default BoardCardModel;

//

export function boardCard(id: string, props: DataProps<BoardCardModel>): BoardCardModel {
    return createDataWithId<BoardCardModel>(id, props);
}