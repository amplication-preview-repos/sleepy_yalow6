import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  postedAt?: Date | null;
  content?: string | null;
  author?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
