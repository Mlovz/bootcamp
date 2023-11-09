import { User } from "@/entities/User/model/types/user";

export interface ProfileState {
  posts: any[];
  users: User[];
  user: User;
  error: string;
  succes: string;
  loading: boolean;
  searchUsers: User[];
  searchLoading: boolean;
}

export enum FollowEnum {
  FOLLOWERS = "followers",
  FOLLOWING = "following",
}
