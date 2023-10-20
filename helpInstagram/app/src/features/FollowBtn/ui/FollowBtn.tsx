import React, { FC, useEffect, useState } from "react";
import cls from "./FollowBtn.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui";
import { ButtonProps } from "@/shared/ui/Button/Button";
import {getAuthData, User} from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch";
import { userFollow, userOnFollow } from "@/entities/Profile";
import {useSelector} from "react-redux";

interface FollowBtnProps extends ButtonProps {
  user?: User;
  auth?: User;
  id?: string;
}

export const FollowBtn: FC<FollowBtnProps> = ({ user,  id, ...rest }) => {
  const [follow, setFollow] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const auth = useSelector(getAuthData)

  const dispatch = useAppDispatch();

  const onFollow = async () => {
    if (load) return;
    setLoad(true);
    await dispatch(userFollow({ auth, user, id }));
    setLoad(false);
  };
  const unFollow = async () => {
    if (load) return;
    setLoad(true);
    await dispatch(userOnFollow({ auth, user, id }));
    setLoad(false);
  };

  useEffect(() => {
    if (auth?.following.find((item: any) => item._id === id)) {
      setFollow(true);
    }

    return () => setFollow(false);
  }, [auth?.following, id]);

  return (
    <>
      {follow ? (
        <Button
          className={classNames(cls.btn, {}, [cls.unFollow])}
          onClick={unFollow}
          disabled={load}
          {...rest}
        >
          отписаться
        </Button>
      ) : (
        <Button
          className={classNames(cls.btn, {}, [cls.follow])}
          onClick={onFollow}
          disabled={load}
          {...rest}
        >
          подписаться
        </Button>
      )}
    </>
  );
};
