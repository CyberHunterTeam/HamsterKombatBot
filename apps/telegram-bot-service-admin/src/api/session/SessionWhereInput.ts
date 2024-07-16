import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  id?: StringFilter;
  sessionId?: StringNullableFilter;
  isActive?: BooleanNullableFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
