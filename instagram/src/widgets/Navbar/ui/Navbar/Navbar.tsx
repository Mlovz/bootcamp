import React from "react";
import cls from "./Navbar.module.scss";
import { NavSearch, NavMenu } from "../";

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <h1>Logo</h1>

          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
