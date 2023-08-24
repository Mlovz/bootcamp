import React, { useState } from "react";
import cls from "./ArticleCard.module.scss";
import { Title } from "components";
import Icon from "assets/Vector (2).svg";

const ArticleCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cls.articleCard}>
      <div className={cls.header}>
        <Title color="red" as="h2" size={24} fw={700}>
          Многие думают, что Lorem Ipsum
        </Title>

        <div className={cls.icon} onClick={onOpen}>
          <img src={Icon} alt="" />

          {isOpen && (
            <ul className={cls.list}>
              <li className={cls.item}>Скопировать ссылку</li>
              <li className={cls.item}>Удалить</li>
            </ul>
          )}
        </div>
      </div>

      <Title size={12} as="span" fw={400}>
        17 декабря 2022 г.
      </Title>
      <Title fw={500}>
        Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат
        Вирджиния, взял одно из самых странных слов в Lorem Ipsum
      </Title>
    </div>
  );
};

export default ArticleCard;
