import { RoomRepository } from "src/motel/motel/domain/RoomRepository";
import { inject, injectable, TYPES } from "src/motel/shared/domain/di-container";
import { PaymentCalculator } from "../domain/PaymentCalculator";
import { PaymentInfo } from "../domain/PaymentInfo";

export type PaymentInfoCalculateRequest = {
  roomId: string;
  netAmount: number;
  startDate: Date;
};

@injectable()
export class PaymentInfoCalculateInteractor {
  constructor(
    @inject(TYPES.PaymentCalculator)
    private calculator: PaymentCalculator,
    @inject(TYPES.RoomRepository)
    private roomRepo: RoomRepository,
  ) {}

  async execute(request: PaymentInfoCalculateRequest): Promise<PaymentInfo> {
    const roomInfo = await this.roomRepo.getById(request.roomId);

    const paymentInfo = this.calculator.fromDate(
      request.startDate,
      roomInfo.price,
      request.netAmount || roomInfo.price,
    );
    return {
      ...paymentInfo,
      roomId: request.roomId,
    };
  }
}
