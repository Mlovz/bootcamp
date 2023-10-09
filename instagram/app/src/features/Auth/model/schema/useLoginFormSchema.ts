import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

enum LoginFieldsNames {
  EMAIL = "email",
  PASSWORD = "password",
}

export type LoginFormValues = {
  email?: string;
  password?: string;
};

export const useLoginFormSchema = () => {
  const message = "Поле не может быть пустым.";

  const schema = yup.object().shape({
    email: yup.string().required(message).email("Введите валидную почту."),
    password: yup
      .string()
      .required(message)
      .min(6, "Минимальное количество символов 6."),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return {
    register,
    watch,
    handleSubmit,
    isValid,
    errors,
    LoginFieldsNames,
  };
};
