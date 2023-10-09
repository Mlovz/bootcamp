import React, { FC, ReactNode } from "react";
import { LinkProps, NavLink } from "react-router-dom";
import cls from "./AppLink.module.scss";

type AppLinkType = "solid" | "clear";

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
  variant?: AppLinkType;
}

const AppLink: FC<AppLinkProps> = ({ children, to, variant, ...rest }) => {
  const variantClasses: Record<AppLinkType, string> = {
    solid: cls.solid,
    clear: cls.clear,
  };

  return (
    <NavLink to={to} {...rest} className={variantClasses[variant]}>
      {children}
    </NavLink>
  );
};

export default AppLink;
