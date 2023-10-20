import React, {FC} from 'react';
import {VStack} from "@/shared/ui";
import {FollowBtn, UserCard} from "@/features";


interface FollowersModalProps{
    data: any
}
const FollowersModal:FC<FollowersModalProps> = ({data}) => {
    return (
        <VStack>
            {
                data?.map((item:any) => (
                    <UserCard key={item._id} title={item.fullname} content={item.username}>
                        <FollowBtn id={item._id} user={item} />
                    </UserCard>
                ))
            }
        </VStack>
    );
};

export default FollowersModal;
