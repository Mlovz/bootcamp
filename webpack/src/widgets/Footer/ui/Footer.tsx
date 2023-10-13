import React from "react";
import cls from "./Footer.module.scss";
import { footerItems } from "../model/consts/footer";

export const Footer = () => {
  return (
    <div className="container">
      <div className={cls.footer}>
        {footerItems.map((item) => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  );
};
