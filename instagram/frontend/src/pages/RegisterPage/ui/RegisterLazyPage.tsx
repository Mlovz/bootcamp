import { lazy } from "react";

export const RegisterLazyPage = lazy(async () => await new Promise((res) => {
  // @ts-expect-error
  setTimeout(() => { res(import('./RegisterPage')); }, 1000)
}))
