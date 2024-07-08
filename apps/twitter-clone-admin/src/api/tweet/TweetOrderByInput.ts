import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  postedAt?: SortOrder;
  content?: SortOrder;
  author?: SortOrder;
};
