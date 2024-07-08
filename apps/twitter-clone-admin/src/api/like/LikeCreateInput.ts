import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeCreateInput = {
  likedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  tweet?: TweetWhereUniqueInput | null;
};
