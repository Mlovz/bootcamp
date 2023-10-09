import { lazy } from "react";

export const ProfilePageLazy = lazy(
  () =>
    new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./ProfilePage")), 1500);
    })
);
