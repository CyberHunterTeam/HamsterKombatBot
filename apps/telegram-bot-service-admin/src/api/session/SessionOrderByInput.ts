import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sessionId?: SortOrder;
  isActive?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  userId?: SortOrder;
};
