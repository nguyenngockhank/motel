import { MUTATION_TYPES } from './action-types';
import { LoginState } from './state'


export const mutations = {
    [MUTATION_TYPES.SET_IS_LOGIN]: (state: LoginState, isLogin = true) => {
        state.isLogin = isLogin
    }
};