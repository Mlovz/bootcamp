import { lazy } from "react";


export const LoginLazyPage = lazy(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./LoginPage')), 1000)
}))