import { JsonValue } from "type-fest";
import { Session } from "../session/Session";
import { Payment } from "../payment/Payment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  sessions?: Array<Session>;
  payments?: Array<Payment>;
};
