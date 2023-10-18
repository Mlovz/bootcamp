import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "../../model/service/loginByEmail";
import { useAppDispatch } from "@/shared/lib/useAppDispatch/useAppDispatch";

// email
// password

const LoginForm = () => {
  const message = "Поле не может быть пустым.";

  const schema = yup.object().shape({
    email: yup.string().email("Не валидная почта.").required(message),
    password: yup.string().required(message).min(6, "Min 6 characters."),
  });

  const { register, handleSubmit, watch, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const dispatch = useAppDispatch();

  const onLogin = (data: any) => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <input
        type="text"
        placeholder="sadasdsad"
        {...register("email")}
        value={watch("email")}
      />
      <input
        type="text"
        placeholder="sadasdsad"
        {...register("password")}
        value={watch("password")}
      />

      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
