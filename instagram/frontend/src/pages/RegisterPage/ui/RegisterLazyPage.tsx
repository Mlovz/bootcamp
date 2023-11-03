import { lazy } from "react";

export const RegisterLazyPage = lazy(
  async () =>
    await new Promise((res) => {
      // @ts-ignore
      setTimeout(() => res(import("./RegisterPage")), 1000);
    })
);
