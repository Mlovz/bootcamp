import { StateSchema } from "@/app/provider";

export const getAuthLoading = (state: StateSchema) =>
  state.auth.loading || false;
