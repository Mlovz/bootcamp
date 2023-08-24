import React from "react";
import cls from "./Card.module.scss";

const Card = ({ className, children }) => {
  return <div className={`${cls.card} ${className || ""}`}>{children}</div>;
};

export default Card;
