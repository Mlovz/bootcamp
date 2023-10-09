import { LinkProps, NavLink } from "react-router-dom";
import { memo, ReactNode } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "@/shared/lib";

export type AppLinkVariant = "primary" | "red";

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, activeClassName = "", ...rest } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(cls.AppLink, { [activeClassName]: isActive }, [
          className || "",
        ])
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
});
