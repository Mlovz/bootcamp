import { User } from "@/entities/User/model/types/user";
import { Avatar, Form, Input, Text, VStack } from "@/shared/ui";
import React, { ChangeEvent, FC, useState } from "react";
import { useEditProfileForm } from "../../model/schema/useEditProfileForm";
import { Button } from "antd";
import cls from "./EditProfile.module.scss";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { updateProfile } from "../../model/service/updateProfile";
import { useSelector } from "react-redux";
import { getProfileError } from "../../model/selectors/getProfileError";
import { getProfileSuccess } from "../../model/selectors/getProfileSuccess";

interface EditProfileProps {
  auth: User;
  onClose: () => void;
}

export const EditProfile: FC<EditProfileProps> = ({ auth, onClose }) => {
  const {
    register,
    watch,
    errors,
    isValid,
    handleSubmit,
    isSubmitting,
    EditProfileNames,
  } = useEditProfileForm(auth);

  const [avatar, setAvatar] = useState(null);

  const dispatch = useAppDispatch();
  const successMessage = useSelector(getProfileSuccess);
  const errorMessage = useSelector(getProfileError);

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    if (file) {
      setAvatar(file);
    }
  };

  const onRemoveAvatar = () => {
    setAvatar(null);
  };

  const onSubmit = async (data: User) => {
    if (!isValid) return;

    await dispatch(updateProfile({ user: data, avatar }));
    setAvatar(null);
    // onClose();
  };

  return (
    <VStack gap={40}>
      <VStack max className={cls.editProfile} align="center" gap={12}>
        <label htmlFor="avatarFile" className={cls.avatar}>
          <Avatar
            src={avatar ? URL.createObjectURL(avatar) : auth?.avatar}
            size={150}
          />
          <input type="file" id="avatarFile" onChange={onChangeAvatar} />
        </label>
        {avatar && <Button onClick={onRemoveAvatar}>Удалить</Button>}
      </VStack>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={18}>
          <Input
            placeholder={EditProfileNames.FULLNAME}
            {...register(EditProfileNames.FULLNAME)}
            value={watch(EditProfileNames.FULLNAME)}
            error={errors?.fullname?.message}
          />
          <Input
            placeholder={EditProfileNames.MOBILE}
            {...register(EditProfileNames.MOBILE)}
            value={watch(EditProfileNames.MOBILE)}
            error={errors?.mobile?.message}
          />
          <Input
            placeholder={EditProfileNames.ADDRES}
            {...register(EditProfileNames.ADDRES)}
            value={watch(EditProfileNames.ADDRES)}
            error={errors?.address?.message}
          />
          <Input
            placeholder={EditProfileNames.WEBSITE}
            {...register(EditProfileNames.WEBSITE)}
            value={watch(EditProfileNames.WEBSITE)}
            error={errors?.website?.message}
          />
          <Input
            placeholder={EditProfileNames.STORY}
            {...register(EditProfileNames.STORY)}
            value={watch(EditProfileNames.STORY)}
            error={errors?.story?.message}
          />

          {errorMessage && <Text color="error">{errorMessage}</Text>}
          {successMessage && <Text color="blue">{successMessage}</Text>}

          <Button
            htmlType="submit"
            loading={isSubmitting}
            disabled={!isValid}
            block
            type="primary"
          >
            Сохранить
          </Button>
        </VStack>
      </Form>
    </VStack>
  );
};
