import Logo from "@/shared/assets/Logo.png";
import { NavMenu, NavSearch } from "../";
import cls from "./Navbar.module.scss";

import { ThemeContext } from "@/app/provider";
import { useContext } from "react";
import { Theme } from "@/shared/consts/theme";

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <div className={cls.navbar}>
          <div className="container">
              <div className={cls.wrap}>
                  <img className={theme === Theme.DARK && cls.dark} src={Logo} alt="" />

                  <NavSearch />
                  <NavMenu />
              </div>
          </div>
      </div>
  );
};
