import React from "react";
import cls from "./alert.module.scss";
import { Title } from "components";

const Toast = ({ message, status, onClose }) => {
  return (
    <div className={`${cls.toast} ${cls[status]}`}>
      <Title as="h2">{status === "error" ? "Error" : "Success"}</Title>

      <Title as="p">{message}</Title>

      <div className={cls.close} onClick={onClose}>
        &times;
      </div>
    </div>
  );
};

export default Toast;
