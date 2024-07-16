import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
  available?: BooleanNullableFilter;
  name?: StringNullableFilter;
};
