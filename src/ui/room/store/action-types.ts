import { ActionContext as VueXActContext } from "vuex";
import { RoomGetters } from "./getters";
import { RoomState } from "./state";

export type ActionContext = Omit<VueXActContext<RoomState, null>, "getters"> & {
    getters: RoomGetters
}

export enum ACTION_TYPES {
    LOAD_ROOM_INFO = 'loadRoomInfo',
    CALCULATE_PAYMENT_INFO = 'calculatePaymentInfo',
}

export enum MUTATION_TYPES {
    SET_RENTING_PAYMENT_INFO = 'setRentingPaymentInfo',
}
