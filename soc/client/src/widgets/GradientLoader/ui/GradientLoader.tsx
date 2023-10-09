import { classNames } from "@/shared/lib/classNames/classNames";
import React from "react";
import cls from "./GradientLoader.module.scss";

const GradientLoader = () => {
  return (
    <span
      className={classNames("", {}, [cls.gradientLoader, cls.loading])}
    ></span>
  );
};

export default GradientLoader;
