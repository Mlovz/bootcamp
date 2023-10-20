import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileUsers = (state: StateSchema) =>
  state.profile.users || [];
