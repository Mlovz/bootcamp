import { useState, ChangeEvent, FormEvent } from "react";
import { login } from "../../redux/actions/authAction";
import cls from "./auth.module.scss";
import { IStateUserData } from "@/types/auth";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { Input } from "../../components";
import Flex from "../../components/Stack/Flex";

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
          <Flex gap={32} direction="column">
            <Flex gap={20} direction="column">
              <Input
                placeholder="Username"
                value={userData.username}
                onChange={handleChange}
              />
              <Input
                type="password"
                value={userData.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </Flex>
            <button>Войти</button>
          </Flex>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
