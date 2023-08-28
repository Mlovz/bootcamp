import React, { useState } from "react";
import cls from "./DropDown.module.scss";
import { Link } from "react-router-dom";

const items = [
  {
    content: "Профиль",
    path: "/profile",
  },
  {
    content: "Сменить тему",
    onClick: () => {},
  },
];

const DropDown = ({ options, children }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };

  const onBlur = () => {
    setOpen(false);
  };

  return (
    <div className={cls.dropDown} onClick={onOpen} onBlur={onBlur} tabIndex={0}>
      <button>{children}</button>
      <ul>
        {options.length > 0 ? (
          items.map((option) => (
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
