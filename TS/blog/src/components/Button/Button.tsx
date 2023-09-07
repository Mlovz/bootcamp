import React, { FC, ReactNode } from "react";
import cls from "./Button.module.scss";
import { Link } from "react-router-dom";
import { classNames } from "../../utils/classNames";

export type ButtonVariant = "solid" | "outline";

interface ButtonProps {
  className?: string;
  to?: string;
  disabled?: boolean;
  variant: ButtonVariant;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  className,
  to,
  disabled,
  variant,
  onClick,
  children,
}) => {
  const variantClasses: Record<ButtonVariant, string> = {
    solid: cls[variant],
    outline: cls[variant],
  };

  return (
    <>
      {to ? (
        <Link
          to={to}
          className={classNames(cls.btn, {}, [variantClasses[variant]])}
        >
          {children}
        </Link>
      ) : (
        <button className={classNames(cls.btn, {}, [])} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
