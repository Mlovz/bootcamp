import { HomePage, LoginPage, RegisterPage } from "@/pages";
import {
  AppRoutes,
  getRouteLogin,
  getRouteMain,
  getRouteRegister,
} from "@/shared/consts/router";
import { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <HomePage />,
    authOnly: true,
  },
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: getRouteRegister(),
    element: <RegisterPage />,
  },
};
