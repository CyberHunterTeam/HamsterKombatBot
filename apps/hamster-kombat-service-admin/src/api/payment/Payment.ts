import { Session } from "../session/Session";
import { User } from "../user/User";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  status?: "Option1" | null;
  session?: Session | null;
  user?: User | null;
};
