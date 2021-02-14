import { ActionContext as VueXActContext } from "vuex";
import { LoginGetters } from "./getters";
import { LoginState } from "./state";

export type ActionContext = Omit<VueXActContext<LoginState, null>, "getters"> & {
    getters: LoginGetters
}

export enum ACTION_TYPES {
    LOGIN = 'logIn',
    LOAD_SESSION = 'loadSession',
}

export type LoginPayload = {
    account: string;
    password: string;
}

export enum MUTATION_TYPES {
    SET_IS_LOGIN = 'setIsLogin',
}