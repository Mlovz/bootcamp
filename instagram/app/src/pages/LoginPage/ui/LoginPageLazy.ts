import { lazy } from "react";

export const LoginPageLazy = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./LoginPage")), 1500);
    })
);
