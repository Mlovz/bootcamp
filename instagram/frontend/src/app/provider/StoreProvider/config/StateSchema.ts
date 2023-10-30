import { UserState } from "@/entities/User";
import { AuthState } from "@/features/auth";

export interface StateSchema {
  auth: AuthState;
  user: UserState;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: any;
  state: StateSchema;
}
