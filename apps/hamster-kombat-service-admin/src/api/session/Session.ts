import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Session = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sessionStatus?: "Option1" | null;
  sessionName: string | null;
  payments?: Array<Payment>;
  user?: User | null;
};
