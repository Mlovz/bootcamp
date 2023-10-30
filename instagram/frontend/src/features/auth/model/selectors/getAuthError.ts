import { StateSchema } from "@/app/provider";

export const getAuthError = (state: StateSchema) => state.auth.error || "";
