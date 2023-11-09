import { lazy } from "react";

export const ProfileLazyPage = lazy(
  async () =>
    await new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./ProfilePage")), 1000);
    })
);
