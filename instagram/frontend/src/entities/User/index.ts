export { userActions, userReducer } from "./model/slice/userSlice";
export type { UserState } from "./model/types/user";
export { getAuthData } from "./model/selectors/getAuthData";
export { getAuthToken } from "./model/selectors/getAuthToken";

export { getFetchAuthUser } from "./model/service/getFetchAuthUser";
