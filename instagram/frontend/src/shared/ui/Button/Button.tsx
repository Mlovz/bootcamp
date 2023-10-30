import { type ButtonHTMLAttributes, type FC, type ReactNode } from "react";
import cls from "./Button.module.scss";
import { type Mods, classNames } from "@/shared/lib/classNames";

type ButtonVariant = "default" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  addonLeft?: JSX.Element
  addonRight?: JSX.Element
  variant?: ButtonVariant
  children: ReactNode
  max?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = "default",
    disabled,
    loading,
    addonLeft,
    addonRight,
    max = false,
    children
  } = props;

  const variantClasses: Record<ButtonVariant, string> = {
    default: cls.default,
    outline: cls.outline
  };

  const classes = [variant && variantClasses[variant], className];

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.max]: max
  };

  return (
      <button disabled={disabled} className={classNames(cls.btn, mods, classes)}>
          {addonLeft}
          {loading ? <div>Spinner...</div> : children}
          {addonRight}
      </button>
  );
};
