
import { Module, createNamespacedHelpers } from 'vuex'
import { HomeState, initialState } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { ACTION_TYPES } from "./action-types"
import { getters } from './getters'

export { ACTION_TYPES, HomeState }

export const homeStore: Module<any, HomeState> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
}



export function createHomeStoreHelper() {
  return createNamespacedHelpers('home');
}