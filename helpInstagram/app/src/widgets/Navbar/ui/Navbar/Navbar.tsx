import Logo from "@/shared/assets/Logo.png";
import { getRouteMain } from "@/shared/consts/router";
import { AppLink, HStack } from "@/shared/ui";
import { NavMenu } from "../NavMenu/NavMenu";
import NavSearch from "../NavSearch/NavSearch";
import cls from "./Navbar.module.scss";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { useTheme } from "@/shared/lib/hooks/useTheme";
import { classNames } from "@/shared/lib";
import { Theme } from "@/shared/consts/theme";

export const Navbar = () => {
  const authData = useSelector(getAuthData);
  const { theme } = useTheme();

  return (
    <div className={cls.navbar}>
      <div className="container">
        <HStack className={cls.wrap} justify="between">
          <AppLink
            to={getRouteMain()}
            className={classNames(cls.logo, {
              [cls.theme]: theme === Theme.DARK,
            })}
          >
            <img src={Logo} alt="" />
          </AppLink>

          <NavSearch />

          <NavMenu user={authData} />
        </HStack>
      </div>
    </div>
  );
};
