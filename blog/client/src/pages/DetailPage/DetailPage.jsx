import React from "react";
import cls from "./DetailPage.module.scss";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  console.log(params);

  return <div></div>;
};

export default DetailPage;
