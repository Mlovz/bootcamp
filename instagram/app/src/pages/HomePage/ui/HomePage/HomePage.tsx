import React from "react";
import cls from "./HomePage.module.scss";
import { HStack, VStack } from "@/shared/ui";
import HomeStorySlider from "../HomeStorySlider/HomeStorySlider";
import HomePosts from "../HomePosts/HomePosts";
import { FollowBtn, UserCard } from "@/features";
import HomeSuggestions from "../HomeSuggestions/HomeSuggestions";

export const HomePage = () => {
  return (
    <HStack gap={32} align="start" className={cls.home}>
      <VStack className={cls.left}>
        <HomeStorySlider />
        <HomePosts />
      </VStack>
      <VStack className={cls.right}>
        <UserCard title="shirleyromero" content="Shirley romero">
          <FollowBtn />
        </UserCard>

        <HomeSuggestions />
      </VStack>
    </HStack>
  );
};
