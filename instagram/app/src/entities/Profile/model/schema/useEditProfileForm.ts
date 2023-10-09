import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { User } from "@/entities/User";
import { useEffect } from "react";

export interface ProfileFormValues {
  fullname?: string;
  mobile?: string;
  address?: string;
  website?: string;
  story?: string;
}

export enum ProfileFieldsNames {
  FULLNAME = "fullname",
  MOBILE = "mobile",
  ADDRESS = "address",
  WEBSITE = "website",
  STORY = "story",
  //   MOBILE = "gender",
}

export const useEditProfileForm = (authData: User) => {
  const message = "Поле не может быть пустым.";

  const schema = yup.object().shape({
    fullname: yup.string().required(message),
    mobile: yup.string().required(message),
    address: yup.string().required(message),
    website: yup.string().required(message),
    story: yup.string().required(message),
  });

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitting, isSubmitted },
  } = useForm<ProfileFormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: "",
      mobile: "",
      address: "",
      website: "",
      story: "",
    },
  });

  useEffect(() => {
    if (authData) {
      reset(authData);
    }
  }, [reset, authData]);

  return {
    register,
    watch,
    errors,
    isValid,
    handleSubmit,
    ProfileFieldsNames,
    isSubmitting,
    isSubmitted,
  };
};
