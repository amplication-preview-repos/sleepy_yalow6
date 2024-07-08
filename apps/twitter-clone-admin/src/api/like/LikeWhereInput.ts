import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  likedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  tweet?: TweetWhereUniqueInput;
};
