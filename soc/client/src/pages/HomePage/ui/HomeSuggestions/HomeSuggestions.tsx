import React from "react";
import cls from "./HomeSuggestions.module.scss";
import { HStack, Text, VStack } from "@/shared/ui";
import { Link } from "react-router-dom";
import { FollowBtn, UserCard } from "@/features";

const HomeSuggestions = () => {
  return (
    <VStack max className={cls.suggestions} gap={8}>
      <HStack max justify="between">
        <Text as="h2">Suggestions For You</Text>
        <Link to="">
          <Text as="span" fw={700}>
            See All
          </Text>
        </Link>
      </HStack>

      <VStack max gap={12}>
        <UserCard
          size={32}
          title="shirleyromero"
          content="Followed by terylucas + 2 more"
        >
          <FollowBtn />
        </UserCard>
        <UserCard
          size={32}
          title="shirleyromero"
          content="Followed by terylucas + 2 more"
        >
          <FollowBtn />
        </UserCard>
        <UserCard
          size={32}
          title="shirleyromero"
          content="Followed by terylucas + 2 more"
        >
          <FollowBtn />
        </UserCard>
        <UserCard
          size={32}
          title="shirleyromero"
          content="Followed by terylucas + 2 more"
        >
          <FollowBtn />
        </UserCard>
      </VStack>
    </VStack>
  );
};

export default HomeSuggestions;
