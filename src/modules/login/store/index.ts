
import { Module, createNamespacedHelpers } from 'vuex'
import { LoginState, initialState } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { ACTION_TYPES } from "./action-types"
import { getters } from './getters'

export { ACTION_TYPES }

export const loginStore: Module<any, LoginState> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
}


export function createLoginStoreHelper() {
  return createNamespacedHelpers('login');
}