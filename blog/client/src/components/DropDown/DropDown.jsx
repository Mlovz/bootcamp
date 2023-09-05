import React, { useState } from "react";
import cls from "./DropDown.module.scss";
import { Link } from "react-router-dom";

const DropDown = ({ options, children }) => {
  const [open, setOpen] = useState(false);

  const onOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const onBlur = () => {
    setOpen(false);
  };

  return (
    <div className={cls.dropDown} onClick={onOpen} tabIndex={0} onBlur={onBlur}>
      <button>{children}</button>
      <ul className={`${cls.list} ${open ? cls.active : ""}`}>
        {options?.length > 0 ? (
          options.map((option) => (
            <li>
              {option.path ? (
                <Link to={option.path}>{option.content}</Link>
              ) : (
                <span onClick={option.onClick}>{option.content}</span>
              )}
            </li>
          ))
        ) : (
          <span>ничего нет</span>
        )}
      </ul>
    </div>
  );
};

export default DropDown;
