import React, {
  type ChangeEvent,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import cls from "./NavSearch.module.scss";
import { HStack, Icon, Text, UserCard, VStack } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import {
  getSearchLoading,
  getSearchUsers,
  profileActions,
  searchUsers,
} from "@/entities/Profile";
import { useSelector } from "react-redux";
import { Spin } from "antd";
import { debounce } from "lodash-es";

export const NavSearch = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const searchLoading = useSelector(getSearchLoading);
  const users = useSelector(getSearchUsers);

  const onSearchUsers = useMemo(
    () =>
      debounce(async (query) => {
        dispatch(searchUsers({ search: query }));
      }, 500),
    []
  );

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setSearch(value);
    onSearchUsers(value);
  };

  const onClearSearch = useCallback(() => {
    setSearch("");
    dispatch(profileActions.setSearchUsers());
  }, []);

  return (
    <div className={cls.search}>
      <input type="text" value={search} onChange={onChangeSearch} />
      {!search ? (
        <div className={cls.text}>
          <Icon type="Search" />
          <Text as="span">Search</Text>
        </div>
      ) : (
        <span className={cls.close} onClick={onClearSearch}>
          &times;
        </span>
      )}

      {search && (
        <HStack className={cls.list} align="center" justify="center">
          {users.length > 0 && !searchLoading ? (
            <VStack>
              {users.map((user) => (
                <UserCard
                  key={user._id}
                  onClick={onClearSearch}
                  id={user._id}
                  title={user.fullname}
                  content={`@${user.username}`}
                />
              ))}
            </VStack>
          ) : search && !searchLoading ? (
            <Text>Ничего не найдено</Text>
          ) : (
            searchLoading && <Spin size="small" />
          )}
        </HStack>
      )}
    </div>
  );
};
