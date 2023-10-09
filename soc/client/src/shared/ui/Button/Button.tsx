import React, { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import cls from "./Button.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type ButtonVariant = "default" | "gray" | "solid";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  max?: boolean;
  addonRight?: ReactNode;
  addonLeft?: ReactNode;
}

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    variant = "default",
    max = false,
    children,
    addonRight,
    addonLeft,
    ...rest
  }) => {
    const variantClasses: Record<ButtonVariant, string> = {
      default: cls.default,
      gray: cls.gray,
      solid: cls.solid,
    };

    const classes = [variant && variantClasses[variant], className];

    return (
      <button
        className={classNames(cls.btn, { [cls.max]: max }, classes)}
        {...rest}
      >
        {addonLeft && addonLeft}
        {children}
        {addonRight && addonRight}
      </button>
    );
  }
);
