import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

interface EditProfileValues {
  fullname: string;
  mobile: string;
  address: string;
  website: string;
  story: string;
}

export enum EditProfileNames {
  FULLNAME = "fullname",
  MOBILE = "mobile",
  ADDRES = "address",
  WEBSITE = "website",
  STORY = "story",
}

export const useEditProfileForm = (auth: any) => {
  const message = "Поле не может быть пустым";

  const schema = yup.object().shape({
    fullname: yup.string().required(message).min(3, "Минимум 3 символа"),
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
    formState: { isValid, errors, isSubmitting },
  } = useForm<Partial<EditProfileValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: "",
      website: "",
      address: "",
      mobile: "",
      story: "",
    },
  });

  useEffect(() => {
    if (auth) {
      reset(auth);
    }
  }, [reset, auth]);

  return {
    register,
    watch,
    handleSubmit,
    isValid,
    errors,
    EditProfileNames,
    isSubmitting,
  };
};
