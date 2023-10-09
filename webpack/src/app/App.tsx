import React from "react";
import { Navbar } from "../widgets/Navbar/ui/Navbar/Navbar";
import LoginPage from "../pages/LoginPage/ui/LoginPage";
import RegisterPage from "../pages/RegisterPage/ui/RegisterPage";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const App = () => {
  const auth = false;
  const message = "Поле обязательное.";

  const schema = yup.object().shape({
    email: yup.string().email("Не валидная почта").required(message),
    password: yup.string().required(message).min(6, "Min 6 characaters."),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onLogin = (data: any) => {
    if (!isValid) return;

    console.log(data);
  };

  return (
    <div>
      {auth && <Navbar />}

      <div className="container">
        <form onSubmit={handleSubmit(onLogin)}>
          <div>
            <input
              type="text"
              placeholder="email"
              {...register("email")}
              value={watch("email")}
            />
            <span>{errors?.email?.message}</span>
          </div>
          <div>
            <input
              type="password"
              placeholder="password"
              {...register("password")}
              value={watch("password")}
            />
            <span>{errors?.password?.message}</span>
          </div>
          <div>
            <button disabled={!isValid} type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
