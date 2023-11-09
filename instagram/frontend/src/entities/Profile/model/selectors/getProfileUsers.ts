import { StateSchema } from "@/app/provider";

export const getProfileUsers = (state: StateSchema) =>
  state.profile.users || [];
