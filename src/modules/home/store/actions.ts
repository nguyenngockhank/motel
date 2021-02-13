import * as constants from "./action-types"

const INIT_MOTEL = constants.INIT_MOTEL;

var actions = {}
for(let index in constants) {
    let action = constants[index];
    actions[action] = function({ commit }, ...restArgs){
        let params = [action, ...restArgs];  
        commit(...params)
    }
}

/// can override action here :D

export type InitMotelPayload = {
    motel : {
        name: string;
        slogan: string;
        numberOfRooms: number;
        priceOfRoom: number;
    };
    checklists: Record<string, string[]>;
}


actions[INIT_MOTEL] =  async ({ commit, getters }, payload: InitMotelPayload ) => {
    await getters.initMotelInteractor.execute(payload.motel)
    commit(INIT_MOTEL, payload)
}

export { actions };
