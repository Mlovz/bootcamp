import React from "react";
import { useSelector } from "react-redux";
import cls from "./alert.module.scss";

const Loading = () => {
  return (
    <div className="loader">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
