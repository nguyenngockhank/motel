import { ActionContext as VueXActContext } from "vuex";
import { RoomState } from "./state";

export type ActionContext = Omit<VueXActContext<RoomState, null>, "getters"> & {
    // getters: HomeGetters
}

export enum ACTION_TYPES {
    LOAD_ROOM_INFO = 'loadRoomInfo',
}

export enum MUTATION_TYPES { 
}
