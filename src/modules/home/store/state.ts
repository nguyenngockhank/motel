import { ChecklistItem } from "src/motel/checklist/domain/Checklist";
import { InitMotelInteractor } from "src/motel/motel/interactor/InitMotelInteractor";

export interface HomeState {
    interactors: {
        initMotel?: InitMotelInteractor
    },
    testCount: number;
    defaultChecklists: Record<string, ChecklistItem[]>;
    isInitialized: boolean;
    motel: {
        name: string;
        slogan: string;
        numberOfRooms: number;
    }
}

export const initialState: HomeState = {
    testCount: 0,
    defaultChecklists: {},
    isInitialized : false,
    motel: {
        name: '',
        slogan: '',
        numberOfRooms: 0,
    },
    interactors: { }
}