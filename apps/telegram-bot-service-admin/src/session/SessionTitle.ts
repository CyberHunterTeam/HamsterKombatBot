import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "sessionId";

export const SessionTitle = (record: TSession): string => {
  return record.sessionId?.toString() || String(record.id);
};
