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

export { actions };
