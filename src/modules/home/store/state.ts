import { ChecklistItem } from "src/motel/checklist/domain/Checklist";

export interface HomeState {
    testCount: number;
    defaultChecklists: Record<string, ChecklistItem[]>,
}

export const initialState: HomeState = {
    testCount: 0,
    defaultChecklists: {},
}