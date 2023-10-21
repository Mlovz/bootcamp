import React, { useState } from "react";
import cls from "./counter.module.scss";

const Conter = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount((prev) => prev + 1);
  };

  const dec = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className={cls.counter}>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <h1>{count}</h1>
    </div>
  );
};

export default Conter;
