import container from "src/motel/shared/infra/inversify.config";
import { TYPES } from "src/motel/shared/domain/di-container";
import { PaymentInfoCalculateInteractor } from "src/motel/payment/interactor/PaymentInfoCalculateInteractor";
import { Room } from "src/motel/motel/domain/Room";

export type RoomGetters = {
  calculatePaymentInfo: PaymentInfoCalculateInteractor;
};

export const getters = {
  getRoomInfo: (_state, _getters, rootState) => (roomId: string): Room | null =>
    rootState.home.rooms.find(room => room.id === roomId),
  calculatePaymentInfo: (): PaymentInfoCalculateInteractor =>
    container.get<PaymentInfoCalculateInteractor>(TYPES.PaymentInfoCalculateInteractor),
};
