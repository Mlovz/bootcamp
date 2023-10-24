import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.scss";

type ButtonVariant = "default" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  addonLeft?: JSX.Element;
  addonRight?: JSX.Element;
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = "default",
  disabled,
  loading,
  children,
}) => {
  const variantClasses: Record<ButtonVariant, string> = {
    default: cls.default,
    outline: cls.outline,
  };

  return (
    <button className={`${cls.btn} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};
