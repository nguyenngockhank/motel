import { injectable } from "src/motel/shared/domain/di-container";
import { PaymentInfo } from "./PaymentInfo";

@injectable()
export class PaymentCalculator {
  fromDate(startDate: Date, pricePerMonth: number, netAmount: number): Omit<PaymentInfo, "roomId"> {
    const days2NextMonth = this.daysToNextMonthDate(startDate);
    const exactOneMonth = netAmount === pricePerMonth;

    return {
      pricePerMonth,
      netAmount,
      fromDate: startDate,
      daysToNextMonthDate: days2NextMonth,
      oneMonth: exactOneMonth,
      dueDate: this.computeDueDate(startDate, pricePerMonth, netAmount),
    };
  }

  private daysToNextMonthDate(startDateInput: string | Date): number {
    const startDate = new Date(startDateInput);
    const dueDate = new Date(startDate);
    dueDate.setMonth(dueDate.getMonth() + 1);
    return this.diffDays(dueDate, startDate);
  }

  private MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

  private diffDays(date1: Date, date2: Date): number {
    const diffTime = Math.abs(date1.getTime() - date2.getTime());
    return Math.ceil(diffTime / this.MILLISECONDS_IN_A_DAY);
  }

  private computeDueDate(startDate: Date, pricePerMonth: number, netAmount: number) {
    const dueDate = new Date(startDate);

    // calculate paid for full months
    const months = Math.floor(netAmount / pricePerMonth);
    dueDate.setMonth(dueDate.getMonth() + months);

    // calculate paid for last days
    const netAmountForLastDays = Math.round(netAmount % pricePerMonth);
    const pricePerDay = pricePerMonth / this.daysToNextMonthDate(dueDate);
    const lastDays = Math.round(netAmountForLastDays / pricePerDay);
    dueDate.setDate(dueDate.getDate() + lastDays);

    return dueDate;
  }
}
