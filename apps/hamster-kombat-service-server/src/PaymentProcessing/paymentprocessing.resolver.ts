import * as graphql from "@nestjs/graphql";
import { CreatePaymentInput } from "../paymentProcessing/CreatePaymentInput";
import { PaymentOutput } from "../paymentProcessing/PaymentOutput";
import { VerifyPaymentInput } from "../paymentProcessing/VerifyPaymentInput";
import { PaymentProcessingService } from "./paymentprocessing.service";

export class PaymentProcessingResolver {
  constructor(protected readonly service: PaymentProcessingService) {}

  @graphql.Mutation(() => PaymentOutput)
  async CreatePayment(
    @graphql.Args()
    args: CreatePaymentInput
  ): Promise<PaymentOutput> {
    return this.service.CreatePayment(args);
  }

  @graphql.Query(() => [PaymentOutput])
  async ListPayments(
    @graphql.Args()
    args: PaymentOutput
  ): Promise<PaymentOutput[]> {
    return this.service.ListPayments(args);
  }

  @graphql.Query(() => PaymentOutput)
  async VerifyPayment(
    @graphql.Args()
    args: VerifyPaymentInput
  ): Promise<PaymentOutput> {
    return this.service.VerifyPayment(args);
  }
}
