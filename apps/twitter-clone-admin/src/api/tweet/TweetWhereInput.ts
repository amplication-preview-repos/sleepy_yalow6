import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type TweetWhereInput = {
  id?: StringFilter;
  postedAt?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  likes?: LikeListRelationFilter;
};
