import { StateSchema } from "@/app/providers/StoreProvider";

export const getProfilePosts = (state: StateSchema) =>
  state.profile.posts || [];
