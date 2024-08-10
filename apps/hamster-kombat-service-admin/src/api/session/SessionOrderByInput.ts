import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sessionStatus?: SortOrder;
  sessionName?: SortOrder;
  userId?: SortOrder;
};
