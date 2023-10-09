import React, { FC, useState } from "react";
import cls from "./ProfilePosts.module.scss";
import { User } from "@/entities/User";
import { HStack, Icon, Text, VStack } from "@/shared/ui";
import { Posts } from "./Posts/Posts";
import { Reels } from "./Reels/Reels";
import { Tagged } from "./Tagged/Tagged";
import { tabType, tabs } from "../../model/consts/tabs";
import { classNames } from "@/shared/lib";

interface ProfilePosts {
  auth: User;
  id: string;
  users: User[];
}

export const ProfilePosts: FC<ProfilePosts> = ({ auth }) => {
  const [tab, setTab] = useState<tabType>("posts");

  const onTab = (newTab: tabType) => {
    setTab(newTab);
  };

  return (
    <VStack max>
      <HStack justify="around" max className={cls.tabs}>
        {tabs.map((item) => (
          <HStack
            onClick={() => onTab(item.tabType)}
            gap={8}
            className={classNames(cls.tab, {
              [cls.active]: tab === item.tabType,
            })}
          >
            <Icon type={item.iconType} />
            <Text as="span" size={16}>
              {item.text}
            </Text>
          </HStack>
        ))}
      </HStack>

      {tab === "posts" && <Posts />}
      {tab === "reels" && <Reels />}
      {tab === "tagged" && <Tagged />}
    </VStack>
  );
};
