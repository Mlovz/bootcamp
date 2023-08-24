import React from "react";
import cls from "./Title.module.scss";

export const TitleSize = {
  size12: 12,
  size14: 14,
  size16: 16,
  size18: 18,
  size24: 24,
};
export const TitleFw = {
  fw300: 300,
  fw400: 400,
  fw500: 500,
  fw700: 700,
};

const Title = ({ as = "p", size, fw, color, children, className }) => {
  const sizesClasses = {
    12: cls.size12,
    14: cls.size14,
    16: cls.size16,
    18: cls.size18,
    24: cls.size24,
  };

  const fwClasses = {
    300: cls.fw300,
    400: cls.fw400,
    500: cls.fw500,
    700: cls.fw700,
  };

  return (
    <>
      {as === "span" && (
        <span
          className={`${cls.title} ${className} ${sizesClasses[size]} ${fwClasses[fw]}`}
        >
          {children}
        </span>
      )}
      {as === "h1" && (
        <h1
          className={`${cls.title}  ${className} ${sizesClasses[size]} ${fwClasses[fw]}`}
        >
          {children}
        </h1>
      )}
      {as === "h2" && (
        <h2
          className={`${cls.title} ${cls[color]}  ${className} ${sizesClasses[size]} ${fwClasses[fw]}`}
        >
          {children}
        </h2>
      )}
      {as === "p" && (
        <p
          className={`${cls.title}  ${className} ${sizesClasses[size]} ${fwClasses[fw]}`}
        >
          {children}
        </p>
      )}
    </>
  );
};

export default Title;
