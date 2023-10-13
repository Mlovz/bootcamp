import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";

export type ButtonVariant = "default" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  max?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  max = false,
}) => {
  const variantClasses: Record<ButtonVariant, string> = {
    default: cls.default,
    outline: cls.outline,
  };

  const mods: Mods = {
    [cls.full]: max,
  };

  const classes = [variant && variantClasses[variant]];

  return (
    <button className={classNames(cls.btn, mods, classes)}>{children}</button>
  );
};
