import { User } from "../user/User";

export type Session = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sessionId: string | null;
  isActive: boolean | null;
  startTime: Date | null;
  endTime: Date | null;
  user?: User | null;
};
