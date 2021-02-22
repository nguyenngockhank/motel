import { PaymentInfoCalculateRequest } from "src/motel/payment/interactor/PaymentInfoCalculateInteractor";
import { ActionContext, ActionTypes, MutationTypes } from "./action-types";

const { CALCULATE_PAYMENT_INFO } = ActionTypes;
const { SET_RENTING_PAYMENT_INFO } = MutationTypes;

const actions = {};

actions[CALCULATE_PAYMENT_INFO] = async ({ getters, commit }: ActionContext, request: PaymentInfoCalculateRequest) => {
  const paymentInfo = await getters.calculatePaymentInfo.execute(request);
  commit(SET_RENTING_PAYMENT_INFO, paymentInfo);
};

export { PaymentInfoCalculateRequest, actions };
