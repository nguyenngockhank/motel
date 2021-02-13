import { ChecklistItem } from "src/motel/checklist/domain/Checklist";
import { INIT_MOTEL, LOAD_CHECKLIST_OPTIONS } from "./action-types";
import { InitMotelPayload } from "./actions";
import { HomeState } from './state'

var mutations = {};

mutations[LOAD_CHECKLIST_OPTIONS] = (state: HomeState, data: Record<string, ChecklistItem[]>) => {
    state.defaultChecklists = data
}

mutations[INIT_MOTEL] = (state: HomeState, data: InitMotelPayload) => {
    state.motel.name = data.motel.name
    state.motel.slogan = data.motel.slogan
    state.motel.numberOfRooms = data.motel.numberOfRooms
    state.isInitialized = true
} 

export { mutations } ;