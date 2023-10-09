import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export type RegisterFormValues = {
  email?: string;
  fullname?: string;
  username?: string;
  password?: string;
  cf_password?: string;
};

enum RegisterFieldsNames {
  EMAIL = "email",
  FULLNAME = "fullname",
  USERNAME = "username",
  PASSWORD = "password",
  CF_PASSWORD = "cf_password",
}

export const useRegisterFormSchema = () => {
  const message = "Поле не может быть пустым.";

  const schema = yup.object().shape({
    email: yup.string().required(message).email("Введите валидную почту."),
    fullname: yup
      .string()
      .required(message)
      .min(8, "Минимальное количество символов 8.")
      .max(18, "Минимальное количество символов 18."),
    username: yup
      .string()
      .required(message)
      .min(4, "Минимальное количество символов 4.")
      .max(10, "Минимальное количество символов 10."),
    password: yup
      .string()
      .required(message)
      .min(6, "Минимальное количество символов 6.")
      .max(20, "Минимальное количество символов 20."),
    cf_password: yup
      .string()
      .required(message)
      .min(6, "Минимальное количество символов 6.")
      .oneOf([yup.ref("password"), null], "Пароли не совпадают."),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<RegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      fullname: "",
      username: "",
      password: "",
      cf_password: "",
    },
  });

  return {
    register,
    watch,
    handleSubmit,
    isValid,
    errors,
    RegisterFieldsNames,
  };
};
