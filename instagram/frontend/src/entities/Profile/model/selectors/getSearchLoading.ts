import { StateSchema } from "@/app/provider";

export const getSearchLoading = (state: StateSchema) =>
  state.profile.searchLoading || false;
