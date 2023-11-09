import { StateSchema } from "@/app/provider";

export const getProfileSuccess = (state: StateSchema) =>
  state.profile.succes || "";
