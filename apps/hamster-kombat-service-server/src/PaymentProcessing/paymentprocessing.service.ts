import { Injectable } from "@nestjs/common";
import { CreatePaymentInput } from "../paymentProcessing/CreatePaymentInput";
import { PaymentOutput } from "../paymentProcessing/PaymentOutput";
import { VerifyPaymentInput } from "../paymentProcessing/VerifyPaymentInput";

@Injectable()
export class PaymentProcessingService {
  constructor() {}
  async CreatePayment(args: CreatePaymentInput): Promise<PaymentOutput> {
    throw new Error("Not implemented");
  }
  async ListPayments(args: PaymentOutput): Promise<PaymentOutput[]> {
    throw new Error("Not implemented");
  }
  async VerifyPayment(args: VerifyPaymentInput): Promise<PaymentOutput> {
    throw new Error("Not implemented");
  }
}
