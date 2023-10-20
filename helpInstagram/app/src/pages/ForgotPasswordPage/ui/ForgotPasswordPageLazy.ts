import { lazy } from "react";

export const ForgotPasswordPageLazy = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./ForgotPasswordPage")), 1500);
    })
);
