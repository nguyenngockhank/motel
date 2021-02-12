import { ChecklistItem } from "src/motel/checklist/domain/Checklist";
import { INCREASE_COUNT, SET_DEFAULT_CHECKLISTS } from "./action-types";
import { HomeState } from './state'

var mutations = {};
mutations[INCREASE_COUNT] = (state: HomeState, num = 1) => {
    state.testCount += num;
}

mutations[SET_DEFAULT_CHECKLISTS] = (state: HomeState, data: Record<string, ChecklistItem[]>) => {
    state.defaultChecklists = data
}

export { mutations } ;