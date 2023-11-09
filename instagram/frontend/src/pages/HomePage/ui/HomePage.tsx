import React from "react";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return <div>{t("Главная страница")}</div>;
};
