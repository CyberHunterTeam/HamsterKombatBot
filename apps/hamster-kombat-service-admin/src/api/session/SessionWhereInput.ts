import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  id?: StringFilter;
  sessionStatus?: "Option1";
  sessionName?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  user?: UserWhereUniqueInput;
};
