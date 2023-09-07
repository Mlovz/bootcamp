import React, { FC, memo, InputHTMLAttributes } from "react";
import cls from "./input.module.scss";
import { classNames } from "../../utils/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = memo(
  ({ className, type = "text", disabled, onChange, ...rest }) => {
    return (
      <input
        {...rest}
        type={type}
        disabled={disabled}
        onChange={onChange}
        className={classNames(cls.input, {}, [className || ""])}
      />
    );
  }
);

export default Input;
