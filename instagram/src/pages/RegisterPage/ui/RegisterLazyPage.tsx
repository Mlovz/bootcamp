import { lazy } from "react";


export const RegisterLazyPage = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./RegisterPage')), 1000)
}))