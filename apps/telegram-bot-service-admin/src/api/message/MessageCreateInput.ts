import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
