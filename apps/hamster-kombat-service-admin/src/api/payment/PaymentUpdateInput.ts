import { SessionWhereUniqueInput } from "../session/SessionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  status?: "Option1" | null;
  session?: SessionWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
