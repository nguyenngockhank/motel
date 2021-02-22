import { ActionContext as VueXActContext } from "vuex";
import { LoginGetters } from "./getters";
import { LoginState } from "./state";

export type ActionContext = Omit<VueXActContext<LoginState, null>, "getters"> & {
  getters: LoginGetters;
};

export enum ActionTypes {
  LOGIN = "logIn",
  LOAD_SESSION = "loadSession",
}

export type LoginPayload = {
  account: string;
  password: string;
};

export enum MutationTypes {
  SET_IS_LOGIN = "setIsLogin",
}
