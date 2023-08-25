import React, { useState } from "react";
import cls from "./auth.module.scss";
import { Card, Title, Form, Input, Button } from "../../components";
import { TitleFw, TitleSize } from "../../components/Title/Title";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userData;

  const handleChange = (e) => {
    console.log(e.target.name);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Card className={cls.auth}>
      <Title as="h1" size={TitleSize.size24} fw={TitleFw.fw700}>
        Войти
      </Title>

      <Form className={cls.form}>
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

        <Button max>Войти</Button>
      </Form>
    </Card>
  );
};

export default Login;
