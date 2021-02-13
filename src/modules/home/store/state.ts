import { ChecklistItem } from "src/motel/checklist/domain/Checklist";

export interface HomeState {
    defaultChecklists: Record<string, ChecklistItem[]>;
    isInitialized: boolean;
    motel: {
        name: string;
        slogan: string;
        numberOfRooms: number;
    }
}

export const initialState: HomeState = {
    defaultChecklists: {},
    isInitialized : false,
    motel: {
        name: '',
        slogan: '',
        numberOfRooms: 0,
    },
}