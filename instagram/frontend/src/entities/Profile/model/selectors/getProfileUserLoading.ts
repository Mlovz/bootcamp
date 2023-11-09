import { StateSchema } from "@/app/provider";

export const getProfileUserLoading = (state: StateSchema) =>
  state.profile.loading || false;
