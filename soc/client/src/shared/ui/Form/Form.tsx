import React, { FC, ReactNode, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Form.module.scss";

interface FormProps {
  children?: ReactNode;
  className?: string;
  onSubmit: () => void;
}

export const Form: FC<FormProps> = memo(
  ({ className = "", children, onSubmit }) => {
    return (
      <form
        noValidate
        className={classNames(cls.form, {}, [className])}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    );
  }
);
