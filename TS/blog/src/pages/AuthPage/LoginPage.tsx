import { useState, ChangeEvent, FormEvent } from "react";
import { login } from "../../redux/actions/authAction";
import cls from "./auth.module.scss";
import { IStateUserData } from "../../types/auth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Input, VStack } from "../../components";

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
          <VStack gap={32}>
            <h2>Войти</h2>

            <VStack gap={20}>
              <Input
                name="username"
                placeholder="Username"
                value={userData.username}
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                value={userData.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </VStack>
            <button type="submit">Войти</button>
          </VStack>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
