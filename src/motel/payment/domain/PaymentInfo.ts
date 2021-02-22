export interface PaymentInfo {
  roomId: string;
  pricePerMonth: number;
  netAmount: number;
  fromDate: Date;
  dueDate: Date;
  oneMonth: boolean;
  daysToNextMonthDate: number;
}
