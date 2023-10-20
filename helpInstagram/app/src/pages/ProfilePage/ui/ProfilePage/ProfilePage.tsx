import {
  ProfileInfo,
  ProfilePosts,
  getProfileIds,
  getProfileLoading,
  getProfileUser,
  getProfileUsers,
} from "@/entities/Profile";
import cls from "./ProfilePage.module.scss";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { HStack, Spinner, VStack } from "@/shared/ui";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch";
import { useEffect } from "react";

const ProfilePage = () => {
  const authData = useSelector(getAuthData);
  const profileIds = useSelector(getProfileIds);
  const users = useSelector(getProfileUsers);
  const profileLoading = useSelector(getProfileLoading);

  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (profileIds.every((item) => item !== id)) {
      dispatch(getProfileUser({ user: authData, id }));
    }
  }, [id, profileIds, dispatch, authData]);

  if (profileLoading) {
    return (
      <HStack justify="center" max>
        <Spinner size="x" />
      </HStack>
    );
  }

  return (
    <VStack className={cls.profile} gap={40}>
      {authData && (
        <>
          <ProfileInfo auth={authData} id={id} users={users} />
          <ProfilePosts auth={authData} id={id} users={users} />
        </>
      )}
    </VStack>
  );
};

export default ProfilePage;
