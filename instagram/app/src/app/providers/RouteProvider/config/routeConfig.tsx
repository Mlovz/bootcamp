import { HomePage, LoginPage, ProfilePage, RegisterPage } from "@/pages";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage/ui/ForgotPasswordPage";
import {
  AppRoutes,
  getRouteForgot,
  getRouteLogin,
  getRouteMain,
  getRouteProfile,
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
  [AppRoutes.FORGOT]: {
    path: getRouteForgot(),
    element: <ForgotPasswordPage />,
  },
  [AppRoutes.PROFILE]: {
    path: "/profile/:id",
    element: <ProfilePage />,
  },
};
