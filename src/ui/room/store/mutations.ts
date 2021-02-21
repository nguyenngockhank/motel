import { PaymentInfo } from "src/motel/payment/domain/PaymentInfo";
import { MUTATION_TYPES } from "./action-types";
import { RoomState } from "./state";


const { SET_RENTING_PAYMENT_INFO } = MUTATION_TYPES

var mutations = {};

mutations[SET_RENTING_PAYMENT_INFO] = (state: RoomState, data: PaymentInfo) => {
    state.renting.paymentInfo = data
}

export { mutations }