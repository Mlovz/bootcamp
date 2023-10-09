import { ProfileSchema } from "@/entities/Profile";
import { UserSchema } from "@/entities/User";
import { AuthSchema } from "@/features/Auth";
import { AxiosInstance } from "axios";

export interface StateSchema {
  user: UserSchema;
  auth: AuthSchema;
  profile: ProfileSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
