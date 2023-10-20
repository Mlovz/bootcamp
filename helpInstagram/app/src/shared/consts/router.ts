export const getRouteMain = () => "/";
export const getRouteLogin = () => "/login";
export const getRouteRegister = () => "/register";
export const getRouteForgot = () => "/forgot";
export const getRouteProfile = (id: string) => `/profile/${id}`;

export enum AppRoutes {
  MAIN = "main",
  LOGIN = "login",
  FORGOT = "forgot",
  REGISTER = "register",
  PROFILE = "profile",
}
