import { PaymentCreateNestedManyWithoutSessionsInput } from "./PaymentCreateNestedManyWithoutSessionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  sessionStatus?: "Option1" | null;
  sessionName?: string | null;
  payments?: PaymentCreateNestedManyWithoutSessionsInput;
  user?: UserWhereUniqueInput | null;
};
