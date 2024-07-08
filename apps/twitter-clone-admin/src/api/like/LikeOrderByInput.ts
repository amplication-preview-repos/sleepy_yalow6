import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  likedAt?: SortOrder;
  userId?: SortOrder;
  tweetId?: SortOrder;
};
