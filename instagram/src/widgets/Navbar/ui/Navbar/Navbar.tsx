import cls from "./Navbar.module.scss";
import { NavSearch, NavMenu } from "../";
import Logo from "@/shared/assets/Logo.png";
import { Button } from "@/shared/ui";

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img src={Logo} alt="" />

          <Button>asdasdsad</Button>

          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
