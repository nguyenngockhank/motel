import container from "src/motel/shared/infra/inversify.config"
import { TYPES } from "src/motel/shared/domain/di-container"
import { 
    PaymentInfoCalculateInteractor,
} from "src/motel/payment/interactor/PaymentInfoCalculateInteractor"
import { Room } from "src/motel/motel/domain/Room"

export type RoomGetters = {
    calculatePaymentInfo: PaymentInfoCalculateInteractor;
}

export const getters = {
    getRoomInfo: (state, getters, rootState) => (roomId) : Room | null => {
        return rootState.home.rooms.find(room => {
            return room.id === roomId
        })
    },
    calculatePaymentInfo : () : PaymentInfoCalculateInteractor => {
        return container.get<PaymentInfoCalculateInteractor>(TYPES.PaymentInfoCalculateInteractor)
    },
}