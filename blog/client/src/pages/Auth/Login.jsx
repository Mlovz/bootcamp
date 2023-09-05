import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/actions/authAction";
import { Button, Card, Form, Input, Title } from "../../components";
import { TitleFw, TitleSize } from "../../components/Title/Title";
import cls from "./auth.module.scss";
import { useNavigate } from "react-router-dom";

const Login = ({ name }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const authData = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { username, password } = userData;

  const handleChange = (e) => {
    console.log(e.target.name);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await dispatch(login(userData, navigate));
    if (res) {
      navigate("/");
    }
  };

  return (
    <Card className={cls.auth}>
      <Title color="red" as="h1" size={TitleSize.size24} fw={TitleFw.fw700}>
        Войти
      </Title>

      <Form className={cls.form} onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit" max>
          {authData.loading ? "Loading..." : "Войти"}
        </Button>
      </Form>
    </Card>
  );
};

export default Login;
