import { MutationTypes } from "./action-types";
import { LoginState } from "./state";

export const mutations = {
  [MutationTypes.SET_IS_LOGIN]: (state: LoginState, isLogin = true) => {
    state.isLogin = isLogin;
  },
};
