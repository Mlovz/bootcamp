export { userActions, userReducer } from "./model/slice/userSlice";
export type { UserSchema } from "./model/types/user";

export { getAuthData } from "./model/selectors/getAuthData";
export { refreshToken } from "./model/service/resfreshToken";
export { logout } from "./model/service/logout";

export type { User } from "./model/types/user";
