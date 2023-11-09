import { StateSchema } from "@/app/provider";

export const getProfileError = (state: StateSchema) =>
  state.profile.error || "";
