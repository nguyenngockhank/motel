
import { Module } from 'vuex'
import { LoginState, initialState } from './state'
import { mutations } from './mutations'
import { actions } from './actions'

export const loginStore: Module<any, LoginState> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
}