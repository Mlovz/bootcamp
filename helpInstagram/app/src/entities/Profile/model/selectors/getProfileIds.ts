import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfileIds = (state: StateSchema) => state.profile.ids || [];
