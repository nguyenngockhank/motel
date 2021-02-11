import { initSession } from './session';
import { LoginState } from './state'

export const mutations = {
    setIsLogin: (state: LoginState, isLogin = true) => {
        state.isLogin = isLogin
        if (isLogin) {
            initSession()
        }
    }
};