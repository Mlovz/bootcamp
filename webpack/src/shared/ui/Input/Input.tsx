import React, {
  FC,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error: any;
}

const Input: FC<InputProps> = forwardRef(
  (
    { className, type = "text", error, ...rest },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <input type={type} ref={ref} {...rest} />

        {error && <span>{error}</span>}
      </div>
    );
  }
);

export default Input;
