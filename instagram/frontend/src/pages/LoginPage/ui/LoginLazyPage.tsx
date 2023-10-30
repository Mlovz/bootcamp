import { lazy } from "react";

export const LoginLazyPage = lazy(async () => await new Promise((res) => {
  // @ts-expect-error
  setTimeout(() => { res(import('./LoginPage')); }, 1000)
}))
