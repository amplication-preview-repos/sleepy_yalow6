import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  postedAt?: Date | null;
  content?: string | null;
  author?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
