import { AppLink, Icon, Text } from "@/shared/ui";
import cls from "./NavSearch.module.scss";
import { useEffect, useState } from "react";
import { User } from "@/entities/User";
import { $api } from "@/shared/api";
import { getRouteProfile } from "@/shared/consts/router";
import { UserCard } from "@/features";

const NavSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    if (search) {
      const getSearchUsers = async () => {
        try {
          setIsLoad(true);

          const res = await $api.get(`/search?username=${search}`);

          if (res.data) {
            setIsLoad(false);
            setUsers(res.data.users);
          }
        } catch (err) {
          setIsLoad(false);
        }
      };

      getSearchUsers();
    } else {
      setUsers([]);
    }
  }, [search]);

  const onClear = () => {
    setSearch("");
    setUsers([]);
  };

  return (
    <form className={cls.form} noValidate>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      {!search && (
        <span className={cls.placeholder}>
          <Icon type="Search" />
          Search
        </span>
      )}

      {search && (
        <>
          <span className={cls.close} onClick={onClear}>
            &times;
          </span>
          <ul className={cls.list}>
            {users.length > 0
              ? users.map((user) => (
                  <li key={user._id} onClick={onClear}>
                    <AppLink to={getRouteProfile(user._id)}>
                      <UserCard
                        title={user.fullname}
                        content={user.username}
                        size={32}
                      />
                    </AppLink>
                  </li>
                ))
              : search && <Text>not found</Text>}
          </ul>{" "}
        </>
      )}
    </form>
  );
};

export default NavSearch;
