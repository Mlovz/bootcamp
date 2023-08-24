import React from "react";
import cls from "./auth.module.scss";
import { Button, Input, Title, Card, Form } from "../../components";
import { TitleFw, TitleSize } from "../../components/Title/Title";

const Register = () => {
  return (
    <Card className={cls.auth}>
      <Title as="h1" size={TitleSize.size24} fw={TitleFw.fw700}>
        Регистрация
      </Title>

      <Form className={cls.form}>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="password" />
        <Input type="password" placeholder="Confirm password" />

        <Button max>Регистрация</Button>
      </Form>
    </Card>
  );
};

export default Register;
