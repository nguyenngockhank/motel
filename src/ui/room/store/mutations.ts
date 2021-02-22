import { PaymentInfo } from "src/motel/payment/domain/PaymentInfo";
import { MutationTypes } from "./action-types";
import { RoomState } from "./state";

const { SET_RENTING_PAYMENT_INFO } = MutationTypes;

const mutations = {};

mutations[SET_RENTING_PAYMENT_INFO] = (state: RoomState, data: PaymentInfo) => {
  state.renting.paymentInfo = data;
};

export { mutations };
