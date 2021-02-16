
import { Module, createNamespacedHelpers } from 'vuex'
import { RoomState, initialState } from './state'
import { actions } from './actions'
import { ACTION_TYPES } from "./action-types"
import { getters } from './getters'

export { ACTION_TYPES }

export const roomStore: Module<any, RoomState> = {
    namespaced: true,
    // state: initialState,
    // actions,
    // mutations,
    getters,
  }
  
  
  
export function createRoomStoreHelper() {
    return createNamespacedHelpers('room');
}