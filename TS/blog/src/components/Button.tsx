import React, { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  className?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ to, className, onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
