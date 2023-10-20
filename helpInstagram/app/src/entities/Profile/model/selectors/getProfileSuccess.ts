import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileSuccess = (state: StateSchema) =>
  state.profile.success || "";
