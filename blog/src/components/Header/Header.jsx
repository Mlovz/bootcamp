import React from "react";
import cls from "./Header.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={cls.header}>
      <div className="container">
        <div className={cls.wrap}>
          <Link to="/" className={cls.logo}></Link>

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
