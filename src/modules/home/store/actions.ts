import { ActionContext as VueXActContext } from "vuex";
import { HomeGetters } from "./getters";
import { HomeState } from "./state";


export enum ACTION_TYPES {
    LOAD_CHECKLIST_OPTIONS = 'LOAD_CHECKLIST_OPTIONS',
    LOAD_MOTEL = 'LOAD_MOTEL',
    INIT_MOTEL = 'INIT_MOTEL',
}

const { LOAD_CHECKLIST_OPTIONS, LOAD_MOTEL, INIT_MOTEL } = ACTION_TYPES


type ActionContext = Omit<VueXActContext<HomeState, null>, "getters"> & {
    getters: HomeGetters
}


var actions = {}

actions[LOAD_CHECKLIST_OPTIONS] = async ({ getters, commit } : ActionContext ) => {
    const data = await getters.getChecklistsDefaultInteractor.execute()
    commit(LOAD_CHECKLIST_OPTIONS, data)
}

actions[LOAD_MOTEL] = async ({ getters, commit } : ActionContext ) => {
    const data = await getters.loadMotelInteractor.execute()
    if (data) {
        commit(INIT_MOTEL, { motel: data })
    }
}

actions[INIT_MOTEL] = async ({ getters, commit } : ActionContext, payload: InitMotelPayload ) => {
    await getters.initMotelInteractor.execute(payload.motel)
    commit(INIT_MOTEL, payload)
}


export type InitMotelPayload = {
    motel : {
        name: string;
        slogan: string;
        numberOfRooms: number;
        priceOfRoom: number;
    };
    checklists: Record<string, string[]>;
}


export { actions };
