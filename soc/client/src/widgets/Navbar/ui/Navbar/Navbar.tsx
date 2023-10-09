import Logo from "@/shared/assets/Logo.png";
import cls from "./Navbar.module.scss";
import { NavMenu } from "../NavMenu/NavMenu";
import { HStack } from "@/shared/ui";
import NavSearch from "../NavSearch/NavSearch";

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className="container">
        <HStack className={cls.wrap} justify="between">
          <div className={cls.logo}>
            <img src={Logo} alt="" />
          </div>

          <NavSearch />

          <NavMenu />
        </HStack>
      </div>
    </div>
  );
};
