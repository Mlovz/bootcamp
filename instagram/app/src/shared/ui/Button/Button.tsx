import { ButtonHTMLAttributes, FC, ReactNode, memo } from "react";
import cls from "./Button.module.scss";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import { Spinner, colorSpinner } from "../Spinner/Spinner";

type ButtonVariant = "default" | "gray" | "solid";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
  children?: ReactNode;
  max?: boolean;
  addonRight?: ReactNode;
  addonLeft?: ReactNode;
  loading?: boolean;
  color?: colorSpinner;
}

export const Button: FC<ButtonProps> = memo(
  ({
    className,
    variant = "default",
    max = false,
    children,
    addonRight,
    addonLeft,
    color = "white",
    loading,
    ...rest
  }) => {
    const variantClasses: Record<ButtonVariant, string> = {
      default: cls.default,
      gray: cls.gray,
      solid: cls.solid,
    };

    const classes = [variant && variantClasses[variant], className];

    const mods: Mods = {};

    return (
      <button
        className={classNames(cls.btn, { [cls.max]: max }, classes)}
        {...rest}
      >
        {addonLeft && addonLeft}
        {loading ? (
          <Spinner size="m" color={color} className={cls.loading} />
        ) : (
          children
        )}
        {addonRight && addonRight}
      </button>
    );
  }
);
