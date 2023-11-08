import { UserState } from "@/entities/User";
import { AuthState } from "@/features/auth";
import { AxiosInstance } from "axios";

export interface StateSchema {
  auth: AuthState;
  user: UserState;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
