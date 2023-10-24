import cls from "./Navbar.module.scss";
import { NavSearch, NavMenu } from "../";
import Logo from "@/shared/assets/Logo.png";
import { Button, Text } from "@/shared/ui";

export const Navbar = () => {
  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img src={Logo} alt="" />

          <Text fw={300} as="span" size={24}>
            asdassdasdasdasdad
          </Text>

          {/* <Button variant="outline">asdasdsad</Button> */}

          <NavSearch />
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
