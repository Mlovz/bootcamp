import { StateSchema } from "@/app/provider";

export const getAuthData = (state: StateSchema) => state.user.user || null;
