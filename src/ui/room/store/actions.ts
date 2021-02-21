import { PaymentInfoCalculateRequest } from "src/motel/payment/interactor/PaymentInfoCalculateInteractor"
import { ActionContext, ACTION_TYPES, MUTATION_TYPES } from "./action-types"

const { CALCULATE_PAYMENT_INFO } = ACTION_TYPES
const { SET_RENTING_PAYMENT_INFO } = MUTATION_TYPES

var actions = {}

actions[CALCULATE_PAYMENT_INFO] = async ({ getters, commit } : ActionContext, request : PaymentInfoCalculateRequest ) => {
    const paymentInfo = await getters.calculatePaymentInfo.execute(request)
    commit(SET_RENTING_PAYMENT_INFO, paymentInfo)
}


export { PaymentInfoCalculateRequest, actions }