import { ActionContext, ACTION_TYPES, InitMotelPayload, MUTATION_TYPES } from "./action-types";


const { LOAD_CHECKLIST_OPTIONS, LOAD_MOTEL, INIT_MOTEL } = ACTION_TYPES
const { SET_CHECKLIST_OPTIONS, SET_MOTEL_INFO } = MUTATION_TYPES

var actions = {}

actions[LOAD_CHECKLIST_OPTIONS] = async ({ getters, commit } : ActionContext ) => {
    const data = await getters.getChecklistsDefaultInteractor.execute()
    commit(SET_CHECKLIST_OPTIONS, data)
}

actions[LOAD_MOTEL] = async ({ getters, commit } : ActionContext ) => {
    const data = await getters.loadMotelInteractor.execute()
    if (data) {
        commit(SET_MOTEL_INFO, { motel: data })
    }
}

actions[INIT_MOTEL] = async ({ getters, commit } : ActionContext, payload: InitMotelPayload ) => {
    await getters.initMotelInteractor.execute(payload.motel)
    commit(SET_MOTEL_INFO, payload)
}

export { actions };
