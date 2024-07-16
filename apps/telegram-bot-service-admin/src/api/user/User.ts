import { JsonValue } from "type-fest";
import { Session } from "../session/Session";
import { Message } from "../message/Message";

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
  messages?: Array<Message>;
};
