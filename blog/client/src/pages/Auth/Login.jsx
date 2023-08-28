import React, { useState } from "react";
import cls from "./auth.module.scss";
import { Card, Title, Form, Input, Button } from "../../components";
import { TitleFw, TitleSize } from "../../components/Title/Title";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const authData = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { username, password } = userData;

  const handleChange = (e) => {
    console.log(e.target.name);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log(123);

    try {
      dispatch({ type: "LOADING", payload: true });

      const res = await axios.post("http://localhost:5000/api/login", userData);
      console.log(res);

      if (res.data) {
        dispatch({
          type: "AUTH",
          payload: {
            user: res.data.user,
            token: res.data.access_token,
          },
        });
        dispatch({ type: "LOADING", payload: false });
      }
    } catch (err) {
      dispatch({ type: "LOADING", payload: false });
    }
  };

  return (
    <Card className={cls.auth}>
      <Title as="h1" size={TitleSize.size24} fw={TitleFw.fw700}>
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
