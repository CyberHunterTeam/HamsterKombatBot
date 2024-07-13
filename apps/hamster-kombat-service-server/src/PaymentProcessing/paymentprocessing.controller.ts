import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentProcessingService } from "./paymentprocessing.service";
import { VerifyPaymentInput } from "../paymentProcessing/VerifyPaymentInput";
import { PaymentOutput } from "../paymentProcessing/PaymentOutput";

@swagger.ApiTags("paymentProcessings")
@common.Controller("paymentProcessings")
export class PaymentProcessingController {
  constructor(protected readonly service: PaymentProcessingService) {}

  @common.Post("/payments")
  @swagger.ApiOkResponse({
    type: PaymentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreatePayment(
    @common.Body()
    body: VerifyPaymentInput
  ): Promise<PaymentOutput> {
        return this.service.CreatePayment(body);
      }

  @common.Get("/payments")
  @swagger.ApiOkResponse({
    type: PaymentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListPayments(
    @common.Body()
    body: VerifyPaymentInput
  ): Promise<PaymentOutput[]> {
        return this.service.ListPayments(body);
      }

  @common.Get("/payments/verify")
  @swagger.ApiOkResponse({
    type: PaymentOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyPayment(
    @common.Body()
    body: VerifyPaymentInput
  ): Promise<PaymentOutput> {
        return this.service.VerifyPayment(body);
      }
}
