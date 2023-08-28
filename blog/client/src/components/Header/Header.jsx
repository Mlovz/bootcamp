import React from "react";
import cls from "./Header.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  console.log(user);

  const editName = () => {
    dispatch({
      type: "B",
      payload: "Check B",
    });
  };

  return (
    <div className={cls.header}>
      <div className="container">
        <div className={cls.wrap}>
          <Link to="/" className={cls.logo}></Link>

          <h1>{user?.username}</h1>

          <button onClick={editName}>Edit Name</button>

          <div className={cls.btns}>
            <Button to="/login">Войти</Button>
            <Button to="/register" variant="outline">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
