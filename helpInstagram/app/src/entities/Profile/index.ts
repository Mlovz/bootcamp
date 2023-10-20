export { ProfileInfo } from "./ui/ProfileInfo/ProfileInfo";
export { ProfilePosts } from "./ui/ProfilePosts/ProfilePosts";
export { EditProfile } from "./ui/EditProfile/EditProfile";

export { profileActions, profileReducer } from "./model/slice/profileSlice";
export type { ProfileSchema } from "./model/types/profile";
export { getProfileIds } from "./model/selectors/getProfileIds";
export { getProfileLoading } from "./model/selectors/getProfileLoading";
export { getProfilePosts } from "./model/selectors/getProfilePosts";
export { getProfileUsers } from "./model/selectors/getProfileUsers";
export { getProfileError } from "./model/selectors/getProfileError";
export { getProfileSuccess } from "./model/selectors/getProfileSuccess";

export { getProfileUser } from "./model/service/getProfileUser";
export { userFollow } from "./model/service/follow";
export { userOnFollow } from "./model/service/onFollow";
