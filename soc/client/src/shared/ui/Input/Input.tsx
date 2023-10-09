import React, {
  FC,
  InputHTMLAttributes,
  forwardRef,
  memo,
  useState,
} from "react";
import cls from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: any;
}

export const Input: FC<InputProps> = memo(
  forwardRef(({ className = "", type, value, error, ...rest }, ref: any) => {
    const [typePass, setTypePass] = useState<boolean>(false);

    const onShowPass = () => {
      setTypePass(!typePass);
    };

    return (
      <div
        className={classNames(cls.field, { [cls.fieldError]: error }, [
          className,
        ])}
      >
        <input
          type={type === "password" && typePass ? "text" : type}
          ref={ref}
          {...rest}
        />

        {type === "password" && value && (
          <Text
            className={cls.showPass}
            size={12}
            fw={600}
            onClick={onShowPass}
          >
            {typePass ? "Скрыть" : "Показать"}
          </Text>
        )}

        {error && (
          <Text size={12} fw={500} className={cls.error}>
            {error}
          </Text>
        )}
      </div>
    );
  })
);
