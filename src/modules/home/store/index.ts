
import { Module } from 'vuex'
import { HomeState, initialState } from './state'
import { mutations } from './mutations'
import { actions, ACTION_TYPES } from './actions'
import { getters } from './getters'

export type HomeStore = typeof homeStore

export const homeStore: Module<any, HomeState> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters,
}


export { ACTION_TYPES }

import { createNamespacedHelpers } from 'vuex'
export function createHomeStoreHelper() {
  return createNamespacedHelpers('home');
}