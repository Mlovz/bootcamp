import { StateSchema } from "@/app/providers/StoreProvider";

export const getAuthLoading = (state: StateSchema) =>
  state.auth.loading || false;
