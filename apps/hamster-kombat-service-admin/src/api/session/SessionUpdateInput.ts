import { PaymentUpdateManyWithoutSessionsInput } from "./PaymentUpdateManyWithoutSessionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  sessionStatus?: "Option1" | null;
  sessionName?: string | null;
  payments?: PaymentUpdateManyWithoutSessionsInput;
  user?: UserWhereUniqueInput | null;
};
