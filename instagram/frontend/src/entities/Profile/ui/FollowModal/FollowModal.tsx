import { User } from "@/entities/User/model/types/user";
import { FollowBtn } from "@/features";
import { UserCard, VStack } from "@/shared/ui";
import React, { FC } from "react";

interface FollowModalProps {
  data: User[];
}

export const FollowModal: FC<FollowModalProps> = ({ data }) => {
  return (
    <VStack gap={12}>
      {data.length > 0 ? (
        data.map((user) => (
          <UserCard
            id={user._id}
            title={user.fullname}
            content={user.username}
            src={user.avatar}
          >
            <FollowBtn user={user} id={user._id} />
          </UserCard>
        ))
      ) : (
        <div>Empty</div>
      )}
    </VStack>
  );
};
