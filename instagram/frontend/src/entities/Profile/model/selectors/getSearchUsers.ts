import { StateSchema } from "@/app/provider";

export const getSearchUsers = (state: StateSchema) =>
  state.profile.searchUsers || [];
