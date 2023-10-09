import React, { FC } from "react";
import cls from "./spinner.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type sizeSpinner = "m" | "l" | "x";
export type colorSpinner = "white" | "gray" | "blue";

interface SpinnerProps {
  size?: sizeSpinner;
  className?: string;
  color?: colorSpinner;
}

export const Spinner: FC<SpinnerProps> = ({
  size = "m",
  color = "blue",
  className = "",
}) => {
  const sizeClasses: Record<sizeSpinner, string> = {
    m: cls.sizeM,
    l: cls.sizeL,
    x: cls.sizeX,
  };

  const colorClasses: Record<colorSpinner, string> = {
    white: cls.white,
    gray: cls.gray,
    blue: cls.blue,
  };

  const classes = [
    size && sizeClasses[size],
    color && colorClasses[color],
    className,
  ];

  return (
    <div className={classNames(cls.ldsEllipsis, {}, classes)}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
