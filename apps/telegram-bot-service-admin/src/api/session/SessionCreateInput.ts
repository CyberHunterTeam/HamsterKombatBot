import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  sessionId?: string | null;
  isActive?: boolean | null;
  startTime?: Date | null;
  endTime?: Date | null;
  user?: UserWhereUniqueInput | null;
};
