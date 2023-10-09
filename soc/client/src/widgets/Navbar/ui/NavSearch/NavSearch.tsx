import { Icon } from "@/shared/ui";
import cls from "./NavSearch.module.scss";
import { useState } from "react";

const NavSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <form className={cls.form} noValidate>
      <input type="text" />

      <span className={cls.placeholder}>
        <Icon type="Search" />
        Search
      </span>

      {search && <span className={cls.close}>&times;</span>}
    </form>
  );
};

export default NavSearch;
