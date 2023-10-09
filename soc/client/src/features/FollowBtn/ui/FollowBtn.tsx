import React, { useState } from "react";
import cls from "./FollowBtn.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export const FollowBtn = () => {
  const [follow, setFollow] = useState<boolean>(false);

  const onFollow = () => {
    setFollow(true);
  };
  const unFollow = () => {
    setFollow(false);
  };

  return (
    <>
      {follow ? (
        <button
          className={classNames(cls.btn, {}, [cls.unFollow])}
          onClick={unFollow}
        >
          unfollow
        </button>
      ) : (
        <button
          className={classNames(cls.btn, {}, [cls.follow])}
          onClick={onFollow}
        >
          follow
        </button>
      )}
    </>
  );
};
