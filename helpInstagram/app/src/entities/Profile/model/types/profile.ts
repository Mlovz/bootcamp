import { User } from "@/entities/User";

export interface ProfileSchema {
  loading: boolean;
  users: User[];
  ids: string[];
  posts: any;
  success: string;
  error: string;
}
