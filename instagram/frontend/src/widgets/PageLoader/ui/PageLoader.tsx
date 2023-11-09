import React from "react";
import cls from "./PageLoader.module.scss";
import { Spinner } from "@/shared/ui";
import { useSelector } from "react-redux";
import { getUserLoading } from "@/entities/User";

export const PageLoader = () => {
  const loading = useSelector(getUserLoading);

  if (loading) {
    return (
      <div className={cls.pageLoader}>
        <Spinner size="l" />
      </div>
    );
  }

  return null;
};
