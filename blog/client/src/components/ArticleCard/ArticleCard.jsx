import React, { useState } from "react";
import cls from "./ArticleCard.module.scss";
import { Title } from "components";
import Icon from "assets/Vector (2).svg";
import { Link } from "react-router-dom";
import DropDown from "components/DropDown/DropDown";

const ArticleCard = ({ title, content, createdAt, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      content: "Профиль",
    },
    {
      content: "Сменить тему",
      onClick: () => {
        console.log(123);
      },
    },
  ];

  return (
    <div className={cls.articleCard}>
      <div className={cls.header}>
        <Title color="red" as="h2" size={24} fw={700}>
          {title}
        </Title>

        <div className={cls.icon} onClick={onOpen}>
          <DropDown options={items}>
            <img src={Icon} alt="" />
          </DropDown>

          {/* {isOpen && (
            <ul className={cls.list}>
              <li className={cls.item}>Скопировать ссылку</li>
              <li className={cls.item}>Удалить</li>
            </ul>
          )} */}
        </div>
      </div>

      <Title size={12} as="span" fw={400}>
        {createdAt}
      </Title>
      <Title fw={500}>{content}</Title>
    </div>
  );
};

export default ArticleCard;
