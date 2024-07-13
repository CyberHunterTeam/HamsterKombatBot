import { Session as TSession } from "../api/session/Session";

export const SESSION_TITLE_FIELD = "sessionName";

export const SessionTitle = (record: TSession): string => {
  return record.sessionName?.toString() || String(record.id);
};
