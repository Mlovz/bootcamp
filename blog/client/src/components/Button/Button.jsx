import React from "react";
import cls from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button = ({ to, max, type, variant, children }) => {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={`${cls.btn} ${max && cls.max} ${cls[variant]}`}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={`${cls.btn} ${max && cls.max}  ${cls[variant]}`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
