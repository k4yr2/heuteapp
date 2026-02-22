import { UniqueData } from "@heuteapp/common";

export interface BoardCardModel extends UniqueData {
    sectionId: string;
    content: string;
}

export default BoardCardModel;