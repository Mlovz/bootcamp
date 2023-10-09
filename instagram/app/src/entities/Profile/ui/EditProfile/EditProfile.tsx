import React, { ChangeEvent, FC, useState } from "react";
import cls from "./EditProfile.module.scss";
import { Avatar, Button, Form, Input, Text, VStack } from "@/shared/ui";
import { User } from "@/entities/User";
import {
  ProfileFieldsNames,
  useEditProfileForm,
} from "../../model/schema/useEditProfileForm";
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch";
import { updateProfile } from "../../model/service/updateProfile";
import { useSelector } from "react-redux";
import { getProfileSuccess } from "../../model/selectors/getProfileSuccess";

interface EditProfileProps {
  user: User;
}

export const EditProfile: FC<EditProfileProps> = ({ user }) => {
  const {
    register,
    watch,
    errors,
    isValid,
    handleSubmit,
    isSubmitted,
    isSubmitting,
    ProfileFieldsNames,
  } = useEditProfileForm(user);

  const [avatar, setAvatar] = useState(null);
  const dispatch = useAppDispatch();

  const successMesssage = useSelector(getProfileSuccess);

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
    }
  };

  const onClearAvatar = () => {
    setAvatar(null);
  };

  const onSubmit = async (data: User) => {
    if (!isValid) return;

    await dispatch(updateProfile({ user: data, avatar }));
    setAvatar(null);
  };

  return (
    <VStack className={cls.edit} align="center" gap={32}>
      <VStack max>
        <Text as="h2" size={24} fw={600}>
          Изменить Профиль
        </Text>
        {successMesssage && (
          <Text as="span" size={14} color="blue">
            {successMesssage}
          </Text>
        )}
      </VStack>

      <VStack align="center">
        <label htmlFor="avatarFile" className={cls.avatar}>
          <Avatar
            src={avatar ? URL.createObjectURL(avatar) : user.avatar}
            size={150}
            variant="personal"
          />
          <input type="file" id="avatarFile" onChange={onChangeAvatar} />
        </label>

        {avatar && <Button onClick={onClearAvatar}>Убрать</Button>}
      </VStack>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={20} align="end">
          <Input
            {...register(ProfileFieldsNames.FULLNAME)}
            value={watch(ProfileFieldsNames.FULLNAME)}
            error={errors?.fullname?.message}
            placeholder="fullname"
          />
          <Input
            {...register(ProfileFieldsNames.ADDRESS)}
            value={watch(ProfileFieldsNames.ADDRESS)}
            error={errors?.address?.message}
            placeholder="address"
          />
          <Input
            {...register(ProfileFieldsNames.WEBSITE)}
            value={watch(ProfileFieldsNames.WEBSITE)}
            error={errors?.website?.message}
            placeholder="website"
          />
          <Input
            {...register(ProfileFieldsNames.MOBILE)}
            value={watch(ProfileFieldsNames.MOBILE)}
            error={errors?.mobile?.message}
            placeholder="mobile"
          />
          <Input
            {...register(ProfileFieldsNames.STORY)}
            value={watch(ProfileFieldsNames.STORY)}
            error={errors?.story?.message}
            placeholder="story"
          />
          <Button variant="solid" max type="submit" loading={isSubmitting}>
            Save
          </Button>
        </VStack>
      </Form>
    </VStack>
  );
};
