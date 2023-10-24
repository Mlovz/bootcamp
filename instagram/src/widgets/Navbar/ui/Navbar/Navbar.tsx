import Logo from "@/shared/assets/Logo.png";
import { NavMenu, NavSearch } from "../";
import cls from "./Navbar.module.scss";

import { ThemeContext } from "@/app/provider";
import { useContext } from "react";

export const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img src={Logo} alt="" />

          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
