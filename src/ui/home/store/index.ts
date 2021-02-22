import { Module, createNamespacedHelpers } from "vuex";
import { HomeState, initialState } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { ActionTypes } from "./action-types";
import { getters } from "./getters";

export { ActionTypes as ACTION_TYPES, HomeState };

export const homeStore: Module<any, HomeState> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
};

export function createHomeStoreHelper() {
  return createNamespacedHelpers("home");
}
