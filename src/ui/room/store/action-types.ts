import { ActionContext as VueXActContext } from "vuex";
import { RoomGetters } from "./getters";
import { RoomState } from "./state";

export type ActionContext = Omit<VueXActContext<RoomState, null>, "getters"> & {
  getters: RoomGetters;
};

export enum ActionTypes {
  LOAD_ROOM_INFO = "loadRoomInfo",
  CALCULATE_PAYMENT_INFO = "calculatePaymentInfo",
}

export enum MutationTypes {
  SET_RENTING_PAYMENT_INFO = "setRentingPaymentInfo",
}
