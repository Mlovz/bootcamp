import React, { type ChangeEvent, useState } from "react";
import cls from "./NavSearch.module.scss";
import { Icon, Text } from "@/shared/ui";

export const NavSearch = () => {
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className={cls.search}>
      <input type="text" value={search} onChange={onChangeSearch} />
      {!search && (
        <div className={cls.text}>
          <Icon type="Search" />
          <Text as="span">Search</Text>
        </div>
      )}
    </div>
  );
};
