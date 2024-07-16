import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  sessionId?: string | null;
  isActive?: boolean | null;
  startTime?: Date | null;
  endTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
