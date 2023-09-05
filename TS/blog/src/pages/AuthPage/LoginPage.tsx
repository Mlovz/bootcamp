import { useState, ChangeEvent, FormEvent } from "react";
import { login } from "../../redux/actions/authAction";
import cls from "./auth.module.scss";
import { IStateUserData } from "@/types/auth";
import { useAppDispatch, useAppSelector } from "../../redux/store";

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.auth);

  const [userData, setUserData] = useState<IStateUserData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
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
          <button type="submit">
            {loading ? "Са укхаз загрузк я хьун Йоакхап" : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
