import { useState, ChangeEvent } from "react";
import { login } from "../../redux/actions/authAction";
import cls from "./auth.module.scss";
import { IStateUserData } from "@/types/auth";
import { useAppDispatch } from "../../redux/store";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState<IStateUserData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = () => {
    dispatch(login(userData));
  };

  return (
    <div className={cls.auth}>
      <div className={cls.authBox}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
