import { getAuthData } from "@/entities/User";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { FC, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { profileActions } from "../../model/slice/profileSlice";
import { Avatar, DropDown, HStack, Text, VStack } from "@/shared/ui";
import { getProfileUser } from "../../model/selectors/getProfileUser";
import { Button, Modal, Spin } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import cls from "./ProfileInfo.module.scss";
import { useProfile } from "../../model/consts/useProfile";
import { User } from "@/entities/User/model/types/user";
import { getProfileUserLoading } from "../../model/selectors/getProfileUserLoading";
import { EditProfile } from "../EditProfile/EditProfile";
import { FollowBtn } from "@/features";
import { FollowEnum } from "../../model/types/profile";
import { FollowModal } from "../FollowModal/FollowModal";

interface ProfileInfoProps {
  id: string;
  users: User[];
}

interface FollowModalType {
  isOpen: boolean;
  view: FollowEnum;
}

export const ProfileInfo: FC<ProfileInfoProps> = ({ id, users }) => {
  const dispatch = useAppDispatch();
  const authData = useSelector(getAuthData);
  const profileLoading = useSelector(getProfileUserLoading);
  const user = useSelector(getProfileUser);
  const dropDownDotsItems = useProfile(authData?._id === id);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isFollowModal, setIsFollowModal] = useState<FollowModalType>({
    isOpen: false,
    view: FollowEnum.FOLLOWERS,
  });

  const onOpen = () => {
    setIsOpen(true);
    dispatch(profileActions.setClearMessage());
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpenFollowersModal = useCallback(() => {
    setIsFollowModal({
      isOpen: true,
      view: FollowEnum.FOLLOWERS,
    });
  }, [isFollowModal]);

  const onOpenFollowingModal = useCallback(() => {
    setIsFollowModal({
      isOpen: true,
      view: FollowEnum.FOLLOWING,
    });
  }, [isFollowModal]);

  const onCloseFollowModal = useCallback(() => {
    setIsFollowModal((prev: FollowModalType) => {
      return { ...prev, isOpen: false };
    });
  }, []);

  useEffect(() => {
    if (authData?._id === id) {
      dispatch(profileActions.setProfileUser(authData));
    } else {
      const newUser = users.find((item) => item._id === id);
      if (newUser) dispatch(profileActions.setProfileUser(newUser));
    }
  }, [id, authData, users]);

  if (profileLoading) {
    return (
      <HStack justify="center">
        <Spin size="large" />
      </HStack>
    );
  }

  return (
    <HStack max>
      {user && (
        <HStack gap={40}>
          <Avatar size={150} src={user?.avatar} />

          <VStack gap={32}>
            <HStack align="center" gap={28}>
              <Text>@{user.username}</Text>

              {authData?._id === id ? (
                <Button onClick={onOpen} type="default">
                  Изменить
                </Button>
              ) : (
                <FollowBtn user={user} id={id} />
              )}

              <Modal
                title={
                  <Text size={14} color="default">
                    EditProfile
                  </Text>
                }
                open={isOpen}
                centered
                onCancel={onClose}
                footer={false}
              >
                <EditProfile onClose={onClose} auth={authData} />
              </Modal>

              <DropDown items={dropDownDotsItems}>
                <EllipsisOutlined style={{ fontSize: 25 }} />
              </DropDown>
            </HStack>

            <HStack gap={32}>
              <HStack gap={8} max={false}>
                <Text fw={700} color="default" size={16}>
                  1.258
                </Text>
                <Text size={16}>posts</Text>
              </HStack>
              <HStack
                gap={8}
                onClick={onOpenFollowersModal}
                className={cls.follow}
                max={false}
              >
                <Text fw={700} color="default" size={16}>
                  {user.followers.length}
                </Text>
                <Text size={16}>подписчики</Text>
              </HStack>
              <HStack
                gap={8}
                onClick={onOpenFollowingModal}
                className={cls.follow}
                max={false}
              >
                <Text fw={700} color="default" size={16}>
                  {user.following.length}
                </Text>
                <Text size={16}>подписки</Text>
              </HStack>
            </HStack>

            <Modal
              title={
                <Text size={14} color="default">
                  {isFollowModal.view === FollowEnum.FOLLOWERS
                    ? "Подписчики"
                    : "Подписки"}
                </Text>
              }
              open={isFollowModal.isOpen}
              centered
              onCancel={onCloseFollowModal}
              footer={false}
            >
              <FollowModal
                data={
                  isFollowModal.view === FollowEnum.FOLLOWERS
                    ? user.followers
                    : user.following
                }
              />
            </Modal>

            <VStack gap={8}>
              <Text fw={700} color="default" size={18}>
                {user.fullname}
              </Text>
              <Text fw={400} color="default" size={16}>
                {user.mobile}
              </Text>
              <Text fw={400} color="default" size={16}>
                {user.address}
              </Text>
              <Text fw={400} color="default" size={16}>
                <a href={user.website} target="_blank">
                  {user.website}
                </a>
              </Text>
              <Text fw={400} color="default" size={16}>
                {user.story}
              </Text>
            </VStack>
          </VStack>
        </HStack>
      )}
    </HStack>
  );
};
