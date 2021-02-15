import { ChecklistItem } from "src/motel/checklist/domain/Checklist";
import { InitMotelPayload, MUTATION_TYPES } from "./action-types";
import { HomeState } from './state'

const { SET_CHECKLIST_OPTIONS, SET_MOTEL_INFO } = MUTATION_TYPES

var mutations = {};

mutations[SET_CHECKLIST_OPTIONS] = (state: HomeState, data: Record<string, ChecklistItem[]>) => {
    state.defaultChecklists = data
}

mutations[SET_MOTEL_INFO] = (state: HomeState, data: InitMotelPayload) => {
    state.motel.name = data.motel.name
    state.motel.slogan = data.motel.slogan
    state.motel.numberOfRooms = data.motel.numberOfRooms
    state.isInitialized = true
} 

export { mutations }