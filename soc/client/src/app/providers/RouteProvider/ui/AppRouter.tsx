import React, { Suspense, memo, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";
import RequireAuth from "./RequireAuth";
import GradientLoader from "@/widgets/GradientLoader/ui/GradientLoader";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: any) => {
    const element = (
      <Suspense fallback={<GradientLoader />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route?.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
