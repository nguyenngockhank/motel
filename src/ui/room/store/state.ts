import { PaymentInfo } from "src/motel/payment/domain/PaymentInfo";

export interface RentingState {
    paymentInfo?: PaymentInfo
}

export interface RoomState {
    renting: RentingState
}

export const initialState: RoomState = {
    renting: {
        paymentInfo: undefined
    }
}