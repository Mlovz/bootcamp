import { StateSchema } from "@/app/provider";

export const getProfileUser = (state: StateSchema) =>
  state.profile.user || null;
