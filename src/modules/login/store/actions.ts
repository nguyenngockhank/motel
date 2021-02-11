import { LOGIN } from "./action-types";

type LoginPayload = {
    account: string;
    password: string;
}

var actions = {
    [LOGIN]({ commit }, payload : LoginPayload ) {
        const { account, password } = payload;

        const isSuccess = account.toLowerCase() === 'tronhakhanh' 
                            && password.toLowerCase() === 'hiphopneverdie'

        commit('setIsLogin', isSuccess)
    }
}

// for(let index in constants) {
//     let action = constants[index];
//     actions[action] = function({ commit }, ...restArgs){
//         let params = [action, ...restArgs];  
//         commit(...params)
//     }
// }

/// can override action here :D

export { actions };
