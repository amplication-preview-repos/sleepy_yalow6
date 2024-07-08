import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeUpdateInput = {
  likedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
  tweet?: TweetWhereUniqueInput | null;
};
