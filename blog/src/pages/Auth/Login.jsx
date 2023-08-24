import React from "react";
import cls from "./auth.module.scss";
import { Card, Title, Form, Input, Button } from "../../components";
import { TitleFw, TitleSize } from "../../components/Title/Title";

const Login = () => {
  return (
    <Card className={cls.auth}>
      <Title as="h1" size={TitleSize.size24} fw={TitleFw.fw700}>
        Войти
      </Title>

      <Form className={cls.form}>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />

        <Button max>Войти</Button>
      </Form>
    </Card>
  );
};

export default Login;
