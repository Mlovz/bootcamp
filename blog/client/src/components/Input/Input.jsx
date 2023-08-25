import React from "react";
import cls from "./input.module.scss";

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  className = "",
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value || ""}
      onChange={onChange}
      className={`${cls.field} ${className}`}
    />
  );
};

export default Input;
